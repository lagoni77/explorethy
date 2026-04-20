/**
 * Newsletter signup handler — stores emails in InsForge PostgreSQL.
 * Replace INSFORGE_BACKEND_URL and INSFORGE_ANON_KEY after running `init` via MCP.
 * Usage: add id="thy-newsletter-form" to a <form> with an <input type="email"> inside.
 */
(function () {
  const INSFORGE_BACKEND_URL = 'https://35tuj4gh.eu-central.insforge.app';
  const INSFORGE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODAzNTl9.7zSUqmgWQmafZJ6Z8LKAy3vkDeAdldOurGyNdfYA1wI';

  const pageLang = document.documentElement.lang || 'da';

  const i18n = {
    da: { success: 'Tak! Du er tilmeldt.', error: 'Noget gik galt. Prøv igen.', invalid: 'Ugyldig e-mailadresse.' },
    de: { success: 'Danke! Du bist angemeldet.', error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.', invalid: 'Ungültige E-Mail-Adresse.' },
    en: { success: 'Thanks! You\'re subscribed.', error: 'Something went wrong. Please try again.', invalid: 'Invalid email address.' },
  };

  const t = i18n[pageLang] || i18n.en;

  document.addEventListener('submit', async function (e) {
    const form = e.target.closest('#thy-newsletter-form');
    if (!form) return;
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    const feedback = form.querySelector('[data-feedback]');

    if (!emailInput) return;
    const email = emailInput.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (feedback) { feedback.textContent = t.invalid; feedback.style.color = '#b05a1a'; }
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (feedback) { feedback.textContent = ''; }

    try {
      const res = await fetch(`${INSFORGE_BACKEND_URL}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${INSFORGE_ANON_KEY}`,
          'apikey': INSFORGE_ANON_KEY,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          email,
          language: pageLang,
          source_page: window.location.pathname,
        }),
      });

      if (!res.ok && res.status !== 409) throw new Error(`HTTP ${res.status}`);

      emailInput.value = '';
      if (feedback) { feedback.textContent = t.success; feedback.style.color = '#1c3a45'; }
    } catch {
      if (feedback) { feedback.textContent = t.error; feedback.style.color = '#b05a1a'; }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
