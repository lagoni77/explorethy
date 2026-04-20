/**
 * Thy Travel Assistant — bilingual (da/de/en) AI chat widget
 * Requires InsForge SDK and a deployed `chat-with-thy` edge function.
 * Replace INSFORGE_BACKEND_URL and INSFORGE_ANON_KEY after running `init` via MCP.
 */
(function () {
  const INSFORGE_BACKEND_URL = 'https://35tuj4gh.eu-central.insforge.app';
  const INSFORGE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODAzNTl9.7zSUqmgWQmafZJ6Z8LKAy3vkDeAdldOurGyNdfYA1wI';
  const FUNCTION_URL = `${INSFORGE_BACKEND_URL}/functions/v1/chat-with-thy`;

  const pageLang = document.documentElement.lang || 'da';

  const i18n = {
    da: {
      title: 'Spørg om Thy',
      placeholder: 'Stil et spørgsmål om Thy…',
      send: 'Send',
      greeting: 'Hej! Jeg er din guide til Thy. Hvad vil du vide?',
      error: 'Noget gik galt. Prøv igen.',
    },
    de: {
      title: 'Thy entdecken',
      placeholder: 'Stell eine Frage über Thy…',
      send: 'Senden',
      greeting: 'Hallo! Ich bin dein Thy-Reiseführer. Was möchtest du wissen?',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    },
    en: {
      title: 'Ask about Thy',
      placeholder: 'Ask anything about Thy…',
      send: 'Send',
      greeting: 'Hi! I\'m your guide to Thy, Denmark. What would you like to know?',
      error: 'Something went wrong. Please try again.',
    },
  };

  const t = i18n[pageLang] || i18n.en;

  let sessionId = sessionStorage.getItem('thy_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('thy_session_id', sessionId);
  }

  // ── Styles ────────────────────────────────────────────────────────────────
  const css = `
    #thy-chat-bubble {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 52px; height: 52px; border-radius: 9999px;
      background: #b5873a;
      box-shadow: 0 4px 20px rgba(181,135,58,0.45), 0 2px 8px rgba(0,0,0,0.18);
      border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), box-shadow 0.2s;
    }
    #thy-chat-bubble:hover { transform: scale(1.1); box-shadow: 0 8px 28px rgba(181,135,58,0.55); }
    #thy-chat-bubble:active { transform: scale(0.96); }
    #thy-chat-bubble:focus-visible { outline: 2px solid #b5873a; outline-offset: 4px; }
    #thy-chat-bubble svg { width: 24px; height: 24px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

    #thy-chat-panel {
      position: fixed; bottom: 88px; right: 24px; z-index: 9998;
      width: 340px; max-width: calc(100vw - 48px);
      background: #f2f1f0;
      border-radius: 16px;
      box-shadow: 0 8px 40px rgba(28,58,69,0.22), 0 2px 12px rgba(0,0,0,0.1);
      display: flex; flex-direction: column; overflow: hidden;
      opacity: 0; transform: translateY(12px) scale(0.97);
      transition: opacity 0.22s ease, transform 0.22s cubic-bezier(.34,1.56,.64,1);
      pointer-events: none;
    }
    #thy-chat-panel.open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

    #thy-chat-header {
      background: #1c3a45; padding: 14px 16px;
      display: flex; align-items: center; justify-content: space-between;
    }
    #thy-chat-header span {
      font-family: 'Cormorant Garamond', 'Georgia', serif;
      font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: -0.01em;
    }
    #thy-chat-header span em { color: #b5873a; font-style: normal; }
    #thy-chat-close {
      background: none; border: none; cursor: pointer; padding: 4px;
      color: rgba(255,255,255,0.6); line-height: 1;
      transition: color 0.15s;
    }
    #thy-chat-close:hover { color: #fff; }
    #thy-chat-close svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; }

    #thy-chat-messages {
      flex: 1; overflow-y: auto; padding: 14px 14px 8px;
      display: flex; flex-direction: column; gap: 10px;
      max-height: 320px; min-height: 120px;
    }
    .thy-msg {
      max-width: 86%; font-family: 'Lato', sans-serif; font-size: 0.875rem; line-height: 1.55;
      padding: 9px 13px; border-radius: 12px;
    }
    .thy-msg.user {
      align-self: flex-end; background: #1c3a45; color: #fff;
      border-bottom-right-radius: 3px;
    }
    .thy-msg.assistant {
      align-self: flex-start; background: #fff; color: #1c3a45;
      border-bottom-left-radius: 3px;
      box-shadow: 0 1px 4px rgba(28,58,69,0.1);
    }
    .thy-msg.error { background: #fff0e0; color: #8b4e1a; }
    .thy-typing { display: flex; gap: 4px; align-items: center; padding: 12px 14px; }
    .thy-typing span {
      width: 7px; height: 7px; border-radius: 9999px; background: #b5873a; opacity: 0.5;
      animation: thy-bounce 1.1s ease-in-out infinite;
    }
    .thy-typing span:nth-child(2) { animation-delay: 0.18s; }
    .thy-typing span:nth-child(3) { animation-delay: 0.36s; }
    @keyframes thy-bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-5px); opacity: 1; }
    }

    #thy-chat-input-row {
      display: flex; gap: 8px; padding: 10px 12px 12px;
      border-top: 1px solid rgba(28,58,69,0.1);
      background: #f2f1f0;
    }
    #thy-chat-input {
      flex: 1; font-family: 'Lato', sans-serif; font-size: 0.875rem;
      border: 1.5px solid rgba(28,58,69,0.2); border-radius: 8px;
      padding: 8px 11px; background: #fff; color: #1c3a45;
      outline: none; resize: none; line-height: 1.4;
      transition: border-color 0.15s;
    }
    #thy-chat-input:focus { border-color: #b5873a; }
    #thy-chat-input::placeholder { color: rgba(28,58,69,0.38); }
    #thy-chat-send {
      background: #b5873a; border: none; border-radius: 8px;
      width: 38px; height: 38px; cursor: pointer; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, transform 0.15s;
      align-self: flex-end;
    }
    #thy-chat-send:hover { background: #a07530; transform: translateY(-1px); }
    #thy-chat-send:active { transform: translateY(0); }
    #thy-chat-send:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
    #thy-chat-send svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── DOM ───────────────────────────────────────────────────────────────────
  const bubble = document.createElement('button');
  bubble.id = 'thy-chat-bubble';
  bubble.setAttribute('aria-label', t.title);
  bubble.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

  const panel = document.createElement('div');
  panel.id = 'thy-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', t.title);
  panel.innerHTML = `
    <div id="thy-chat-header">
      <span>explore<em>thy</em> — ${t.title}</span>
      <button id="thy-chat-close" aria-label="Luk">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div id="thy-chat-messages" aria-live="polite"></div>
    <div id="thy-chat-input-row">
      <textarea id="thy-chat-input" rows="1" placeholder="${t.placeholder}" maxlength="500"></textarea>
      <button id="thy-chat-send" aria-label="${t.send}">
        <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  `;

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  const messages = panel.querySelector('#thy-chat-messages');
  const input = panel.querySelector('#thy-chat-input');
  const sendBtn = panel.querySelector('#thy-chat-send');

  // ── Helpers ───────────────────────────────────────────────────────────────
  function addMessage(role, text) {
    const el = document.createElement('div');
    el.className = `thy-msg ${role}`;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'thy-msg assistant thy-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  let open = false;
  let greeted = false;

  function togglePanel() {
    open = !open;
    panel.classList.toggle('open', open);
    if (open) {
      if (!greeted) {
        addMessage('assistant', t.greeting);
        greeted = true;
      }
      input.focus();
    }
  }

  bubble.addEventListener('click', togglePanel);
  panel.querySelector('#thy-chat-close').addEventListener('click', togglePanel);

  // ── Send message ──────────────────────────────────────────────────────────
  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    addMessage('user', text);

    const typing = showTyping();

    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${INSFORGE_ANON_KEY}`,
        },
        body: JSON.stringify({ message: text, session_id: sessionId, language: pageLang }),
      });

      typing.remove();

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      addMessage('assistant', data.reply || data.message || JSON.stringify(data));
    } catch {
      typing.remove();
      addMessage('error', t.error);
    } finally {
      sendBtn.disabled = false;
      input.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-grow textarea
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });
})();
