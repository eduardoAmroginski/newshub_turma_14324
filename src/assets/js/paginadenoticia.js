/* paginadenoticia.js
   Versão integrada: tags → categorias, fontes externas, social expert links, login mocado.
*/
(function () {
    'use strict';
  
    /* ---------- Helpers ---------- */
    function slugify(text) {
      return text ? text.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '') : '';
    }
  
    function showToast(message, timeout = 2200) {
      let toast = document.createElement('div');
      toast.className = 'simple-toast';
      toast.style.cssText = 'position:fixed;right:20px;bottom:30px;background:#111;color:#fff;padding:10px 14px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.14);z-index:9999;font-size:13px;';
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
      }, timeout - 300);
      setTimeout(() => {
        if (toast.parentNode) document.body.removeChild(toast);
      }, timeout);
    }
  
    /* ---------- Elements ---------- */
    const categoryEl = document.querySelector('.category-tag');
    const backLink = document.querySelector('.back-link');
    const breadcrumb = document.querySelector('.breadcrumb');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const shareButtons = document.querySelectorAll('.share-btn');
    const tagEls = document.querySelectorAll('.related-tags .tag, .expert-specialties .tag');
    const loadMoreCommentsBtn = document.getElementById('load-more-comments');
    const commentsList = document.querySelector('.comments-list');
    const commentForm = document.querySelector('.comment-form');
    const commentBox = document.getElementById('commentBox') || document.querySelector('.comment-box');
    const loginWarning = document.getElementById('login-warning');
    const loginWarningBtn = document.getElementById('login-warning-btn');
  
    // Login mocked
    let userLogged = false;
  
    /* ---------- 1) Back link para categoria ---------- */
    if (categoryEl && backLink) {
      const categoryText = categoryEl.textContent.trim();
      const categorySlug = slugify(categoryText) || 'categoria';
      const categoryUrl = `./categoria-${categorySlug}.html`;
      backLink.setAttribute('href', categoryUrl);
      backLink.setAttribute('title', `Voltar para ${categoryText}`);
    }
  
    /* ---------- 2) Breadcrumb: "Início" → /index.html ---------- */
    if (breadcrumb) {
      const homeLink = breadcrumb.querySelector('a');
      if (homeLink) {
        homeLink.setAttribute('href', '/index.html');
        homeLink.setAttribute('title', 'Ir para a página inicial');
      }
    }
  
    /* ---------- 3) TAGS: mapping para categorias ---------- */
    const tagToCategory = {
      "ia": "/categoria/ia.html",
      "tecnologia": "/categoria/tecnologia.html",
      "startups": "/categoria/startups.html",
      "inovacao": "/categoria/inovacao.html"
    };
  
    tagEls.forEach(tag => {
      const txt = (tag.dataset.tag && tag.dataset.tag.trim()) || tag.textContent.trim();
      const slug = slugify(txt);
  
      const a = document.createElement('a');
      a.className = tag.className;
      a.textContent = tag.textContent.trim();
      a.setAttribute('aria-label', `Ir para categoria ${a.textContent}`);
      a.setAttribute('title', `Ir para categoria ${a.textContent}`);
      a.setAttribute('href', tagToCategory[slug] ? tagToCategory[slug] : `./search.html?tag=${encodeURIComponent(slug)}`);
      a.setAttribute('tabindex', '0');
  
      tag.parentNode.replaceChild(a, tag);
    });
  
    /* ---------- 4) SHARE ---------- */
    function getPageUrl() { return window.location.href; }
    function getPageTitle() {
      const titleEl = document.querySelector('.post-title');
      return titleEl ? titleEl.textContent.trim() : document.title;
    }
  
    shareButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const network = btn.dataset.network;
        const url = encodeURIComponent(getPageUrl());
        const title = encodeURIComponent(getPageTitle());
        let shareUrl = null;
  
        if (network === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        else if (network === 'twitter' || network === 'x' || network === 'x-twitter' || network === 'twitter-x')
          shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        else if (network === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        else if (network === 'copy') {
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(getPageUrl()).then(() => showToast('Link copiado para área de transferência'))
              .catch(() => showToast('Não foi possível copiar. Copie manualmente.'));
          } else {
            const ta = document.createElement('textarea');
            ta.value = getPageUrl();
            ta.style.position = 'fixed'; ta.style.left = '-9999px';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); showToast('Link copiado para área de transferência'); }
            catch (err) { showToast('Não foi possível copiar. Copie manualmente.'); }
            document.body.removeChild(ta);
          }
          return;
        }
  
        if (shareUrl) {
          const w = 680, h = 500;
          const left = (screen.width / 2) - (w / 2);
          const top = (screen.height / 2) - (h / 2);
          window.open(shareUrl, 'shareWindow', `toolbar=0,status=0,width=${w},height=${h},top=${top},left=${left}`);
        }
      });
  
      // keyboard support
      btn.setAttribute('role', 'button');
      btn.setAttribute('tabindex', '0');
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
      });
    });
  
    /* ---------- 5) Leia Mais ---------- */
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextUrl = loadMoreBtn.dataset.nextUrl;
        if (nextUrl) { window.location.href = nextUrl; return; }
        if (categoryEl) {
          const slug = slugify(categoryEl.textContent || 'categoria');
          window.location.href = `./categoria-${slug}.html`;
        } else window.location.href = '/index.html';
      });
    }
  
    /* ---------- 6) Carregar mais comentários (simulado) ---------- */
    if (loadMoreCommentsBtn && commentsList) {
      loadMoreCommentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const more = [
          { name: 'Ana Paula', time: '• há 2 dias', text: 'Excelente conteúdo, valeu!' },
          { name: 'Pedro Silva', time: '• há 3 dias', text: 'Ótima análise — gostei dos detalhes técnicos.' },
          { name: 'Camila Rocha', time: '• há 4 dias', text: 'Quero ver mais matérias sobre câmeras avançadas.' }
        ];
        more.forEach(c => {
          const item = document.createElement('div');
          item.className = 'comment-item';
          item.innerHTML = `
            <img src="https://i.pravatar.cc/48" class="comment-avatar" alt="${c.name}">
            <div class="comment-body">
              <div class="comment-header">
                <span class="comment-name">${c.name}</span>
                <span class="comment-time">${c.time}</span>
              </div>
              <p class="comment-text">${c.text}</p>
              <div class="comment-actions">
                <button>Responder</button>
                <button>Curtir</button>
              </div>
            </div>
          `;
          commentsList.appendChild(item);
        });
        loadMoreCommentsBtn.style.display = 'none';
      });
    }
  
    /* ---------- 7) Formulário de comentários (exige login) ---------- */
    if (commentForm && commentBox) {
      commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = (commentBox.value || '').trim();
        if (!content) { showToast('Escreva algo antes de publicar.'); return; }
        if (!userLogged) {
          if (loginWarning) { loginWarning.classList.remove('hidden'); loginWarning.style.display = 'block'; }
          else showToast('Você precisa fazer login para comentar.');
          return;
        }
  
        const username = document.getElementById('userNameLabel') ? document.getElementById('userNameLabel').textContent : 'Você';
        const item = document.createElement('div');
        item.className = 'comment-item';
        item.innerHTML = `
          <img src="https://i.pravatar.cc/48?img=50" class="comment-avatar" alt="${username}">
          <div class="comment-body">
            <div class="comment-header">
              <span class="comment-name">${escapeHtml(username)}</span>
              <span class="comment-time">• agora</span>
            </div>
            <p class="comment-text">${escapeHtml(content)}</p>
            <div class="comment-actions">
              <button>Responder</button>
              <button>Curtir</button>
            </div>
          </div>
        `;
        if (commentsList) commentsList.insertBefore(item, commentsList.firstChild);
        commentBox.value = '';
        showToast('Comentário publicado');
        // TODO: integrar com API aqui, se houver
      });
    }
  
    function escapeHtml(unsafe) {
      return (unsafe || '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
    }
  
    /* ---------- 8) Botão aviso de login ---------- */
    if (loginWarningBtn) {
      loginWarningBtn.addEventListener('click', () => {
        // abre modal também
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
          loginModal.style.display = 'flex';
          loginModal.setAttribute('aria-hidden', 'false');
        } else {
          window.location.href = '/login.html';
        }
      });
    }
  
    /* ---------- 9) Fecha aviso se clicar fora ---------- */
    document.addEventListener('click', (ev) => {
      if (!loginWarning) return;
      if (!loginWarning.classList.contains('hidden')) {
        const isClickInside = loginWarning.contains(ev.target);
        if (!isClickInside) {
          loginWarning.classList.add('hidden');
          loginWarning.style.display = 'none';
        }
      }
    });
  
    /* ---------- 10) Verify sources (abre as urls configuradas) ---------- */
    const fonteLinks = {
      "youtube": "https://www.youtube.com/results?search_query=smartphones",
      "google-news": "https://news.google.com/search?q=smartphones",
      "twitter": "https://x.com/search?q=smartphones",
      "reddit": "https://www.reddit.com/search/?q=smartphones"
    };
  
    document.querySelectorAll(".source-card").forEach(card => {
      card.addEventListener("click", (ev) => {
        ev.preventDefault();
        const fonte = card.dataset.fonte;
        if (fonte && fonteLinks[fonte]) window.open(fonteLinks[fonte], "_blank");
        else console.warn('Fonte não mapeada:', fonte);
      });
  
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
    });
  
    /* ========================
       LOGIN MOCADO PARA COMENTAR
       ======================== */
    const loginBtn = document.getElementById("loginToComment");
    const loginModal = document.getElementById("loginModal");
    const closeLoginModal = document.getElementById("closeLoginModal");
    const loginConfirm = document.getElementById("loginConfirm");
    const loginEmail = document.getElementById("loginEmail");
    const userNameLabel = document.getElementById("userNameLabel");
  
    // abrir modal
    if (loginBtn && loginModal) {
      loginBtn.addEventListener("click", () => {
        loginModal.style.display = "flex";
        loginModal.setAttribute('aria-hidden', 'false');
        loginEmail.focus();
      });
    }
  
    // fechar modal clicando no X
    if (closeLoginModal && loginModal) {
      closeLoginModal.addEventListener("click", () => {
        loginModal.style.display = "none";
        loginModal.setAttribute('aria-hidden', 'true');
      });
    }
  
    // fechar modal clicando fora do conteúdo
    if (loginModal) {
      loginModal.addEventListener('click', (ev) => {
        if (ev.target === loginModal) {
          loginModal.style.display = 'none';
          loginModal.setAttribute('aria-hidden', 'true');
        }
      });
    }
  
    // confirmar login (mock)
    if (loginConfirm && loginEmail) {
      loginConfirm.addEventListener('click', () => {
        if (loginEmail.value.trim() === '') {
          alert('Digite um e-mail válido para continuar.');
          loginEmail.focus();
          return;
        }
  
        userLogged = true;
  
        // esconde aviso
        if (loginWarning) { loginWarning.classList.add('hidden'); loginWarning.style.display = 'none'; }
  
        // esconde botão de login
        if (loginBtn) loginBtn.style.display = 'none';
  
        // exibe nome mockado
        if (userNameLabel) userNameLabel.textContent = 'Usuário Teste';
  
        // habilita textarea
        if (commentBox) {
          commentBox.disabled = false;
          commentBox.focus();
        }
  
        // fecha modal
        if (loginModal) {
          loginModal.style.display = 'none';
          loginModal.setAttribute('aria-hidden', 'true');
        }
  
        // limpa input
        loginEmail.value = '';
        showToast('Login efetuado (mock)');
      });
    }
  
    // permitir Enter para confirmar login no modal
    if (loginEmail) {
      loginEmail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (loginConfirm) loginConfirm.click();
        }
      });
    }
  
    /* Accessibility: make sure expert social icons are keyboard accessible */
    document.querySelectorAll('.expert-social a').forEach(a => {
      a.setAttribute('tabindex', '0');
      a.setAttribute('role', 'link');
    });
  
  })();
  
