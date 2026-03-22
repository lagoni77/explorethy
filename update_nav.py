import os
import re

base_dir = '/Users/brianholmlagoni/Library/CloudStorage/Dropbox/Claude Code/explorethy'
html_files = []

for root, dirs, files in os.walk(base_dir):
    if '/de' in root: continue
    for file in files:
        if file.endswith('.html') and file != 'index.html':
            html_files.append(os.path.join(root, file))

nav_replacement = '''<nav style="background:#1c3a45; position:sticky; top:0; z-index:100; box-shadow:0 2px 20px rgba(0,0,0,0.35);">
  <div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; display:flex; align-items:center; justify-content:space-between; height:64px;">

    <!-- Logo -->
    <a href="/index.html" style="display:flex; align-items:center; gap:0.6rem; text-decoration:none; flex-shrink:0;" aria-label="explorethy – gå til forsiden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.09 53.36" style="width:32px;height:32px;flex-shrink:0;" aria-hidden="true">
        <path fill="#b5873a" d="M48,0c.51.06,1,.14,1.55.18s1.1,0,1.65,0a1.25,1.25,0,0,1,.94.8,5.32,5.32,0,0,0,.25.77c.08.22.22.41.31.62.17.44.32.88.5,1.31s.5,1.1.75,1.64.6,1.3.92,1.93c.14.28.35.52.5.78a6,6,0,0,1,.25.58c.3.66.57,1.33.89,2,.14.28.43.5.52.79a1.84,1.84,0,0,1,0,.93,2,2,0,0,1-.64.84.3.3,0,0,0-.1.21c0,.4-.27.6-.51.81a1.59,1.59,0,0,1-.74.48c-.17,0-.29.29-.45.43-.52.47-1.07.91-1.57,1.4-.66.66-.77.51-1.5,0a12.23,12.23,0,0,1-1-.94l-1.74.77c-.59.27-1.19.52-1.77.83a6.2,6.2,0,0,0-.88.67c-.55.44-1.08.9-1.65,1.32a.74.74,0,0,1-.57,0,2.57,2.57,0,0,1-.6-.39c-.29-.21-.58-.42-.85-.65s-.46-.45-.7-.65a.5.5,0,0,0-.32-.15,8.26,8.26,0,0,0-1.22,0,.54.54,0,0,0-.35.24c0,.07.07.23.13.33.22.4.48.77.66,1.18s-.05.65-.51.89-.74.56-1.15.76a3.8,3.8,0,0,0-.74.49l-1.78,1.42a5,5,0,0,1-.62.4,1.39,1.39,0,0,1-.8.23c-1.61-.08-3.22-.14-4.83-.2a.77.77,0,0,0-.89.67c-.07.3-.14.6-.23.89a4.11,4.11,0,0,1-.21.42c-.21.54-.4,1.08-.62,1.61s-.38.79-.55,1.2c-.1.23-.15.48-.24.72s-.15.38-.24.57c-.18.39-.39.76-.56,1.16s-.16.57-.26.86-.2.47-.3.7a.89.89,0,0,0-.09.26,4.23,4.23,0,0,1-.46,1.29c-.12.24-.22.5-.33.75s-.29.72-.48,1a1.3,1.3,0,0,1-.45.42c-.48.29-1,.54-1.46.82l-.91.52-1.8,1.13A20.45,20.45,0,0,1,18.3,39.3c-.4.19-.34.46-.38.76a2,2,0,0,0,.52,1.57A1.79,1.79,0,0,1,19,43.1a9.41,9.41,0,0,1-.25.91c-.12.44-.25.89-.37,1.34l-.27,1c0,.12-.08.3,0,.35s.24.06.36.05c.34,0,.67-.09,1-.12s.45.17.57.43c.22.49.47,1,.73,1.43.14.27.37.23.59.12a1.29,1.29,0,0,1,1.91.32,6.8,6.8,0,0,1,.8.81.85.85,0,0,1,0,.68,2.43,2.43,0,0,1-1,.9,20.66,20.66,0,0,0-1.92,1.28c-.28.22-.6.4-.87.62s-.68.07-1-.08c-.64-.37-1.25-.79-1.86-1.22-.38-.26-.71-.58-1.07-.86a.69.69,0,0,0-.31-.12c-.21,0-.44,0-.65,0a.85.85,0,0,0-.93.62c-.18.43-.39.85-.61,1.27a.32.32,0,0,1-.22.15A2.82,2.82,0,0,1,13,53c-.59,0-1.17,0-1.75,0-.8,0-1.11-.47-1.38-1-.16-.35-.36-.68-.54-1l-.65-1.31c-.26-.51-.54-1-.79-1.55-.1-.2-.17-.43-.26-.64a5.05,5.05,0,0,0-.24-.53c-.32-.61-.66-1.2-1-1.82s-.56-1.26-.87-1.89a1.7,1.7,0,0,0-.87-.86c-.14,0-.31-.08-.35.15-.07.41-.15.81-.22,1.21-.11.59-.23,1.19-.35,1.78-.07.37-.17.74-.22,1.11-.1.64-.18,1.28-.27,1.92,0,.26-.2.36-.44.39-.49.07-.82-.24-1.19-.48L.8,47.82C.49,47.61.11,47.44,0,47a3.09,3.09,0,0,1,0-.91c.05-.42.15-.84.19-1.26.09-.88.14-1.77.23-2.65.12-1.14.24-2.27.4-3.39a3.94,3.94,0,0,1,.34-1c.23-.57.45-1.14.7-1.7s.5-1,.75-1.53.41-.93.63-1.39.42-.78.62-1.17.29-.71.45-1c.3-.64.61-1.27.91-1.9L5.81,28c.4-.86.81-1.72,1.21-2.59.15-.32.26-.68.44-1,.36-.6.74-1.19,1.15-1.76s.87-1.15,1.33-1.7.74-.8,1.09-1.22c.65-.77,1.32-1.53,1.9-2.35a15.37,15.37,0,0,0,.93-1.75c.12-.24.26-.46.38-.7s.34-.75.54-1.1c.35-.61.72-1.2,1.08-1.8a3.17,3.17,0,0,1,.25-.56.9.9,0,0,1,.53-.32,3,3,0,0,0,1.1-.35.65.65,0,0,1,.21-.06A1.74,1.74,0,0,0,19.19,10c.45-.7.94-1.38,1.43-2S21.56,6.75,22,6.12s1-1.55,1.55-2.3a7.19,7.19,0,0,1,.84-.91l0,.08a3.73,3.73,0,0,0,.46.09,7,7,0,0,1,1.22.06,7.43,7.43,0,0,1,2.68.73,8.49,8.49,0,0,0,1.19.5c.4.17.79.37,1.19.55a3.59,3.59,0,0,0,.43.14,23.44,23.44,0,0,0,2.32.51,3.55,3.55,0,0,0,1.2-.26c.36-.09.71-.22,1.07-.34s.69-.25,1-.37a.64.64,0,0,1,.2,0,4.28,4.28,0,0,0,1.41-.38A7.49,7.49,0,0,1,39.65,4c.41-.13.81-.28,1.22-.42a5.08,5.08,0,0,0,.69-.23,14,14,0,0,0,1.28-.66c.53-.32,1-.68,1.56-1,.34-.23.66-.49,1-.7s.65-.33,1-.51S46.8.14,47,0Z"/>
      </svg>
      <span style="font-size:1.35rem; font-weight:900; letter-spacing:-0.02em; color:#fff; line-height:1;">
        explore<span style="color:#b5873a;">thy</span>
      </span>
    </a>

    <!-- Desktop nav -->
    <div style="display:flex; gap:1.75rem; align-items:center;" class="hidden-mobile md-only" id="desktop-nav">
      <a href="/natur/" class="nav-link">Natur</a>
      <a href="/aktivitet/" class="nav-link">Aktivitet</a>
      <a href="/oplevelser/" class="nav-link">Oplevelser</a>
      <a href="/spisesteder/" class="nav-link">Spisesteder</a>
      <a href="/overnatning/" class="nav-link">Overnatning</a>
      <a href="/steder/" class="nav-link">Steder</a>
      <a href="/examples/" class="nav-link">Velvære</a>
      <a href="/index.html#praktisk" class="nav-link">Praktisk</a>
      <a href="/de/nationalpark-thy.html" class="nav-link" style="color:#b5873a; margin-left:1rem;">DE</a>
    </div>

    <!-- Hamburger (mobile) -->
    <button class="hamburger mob-only hidden-desktop" id="hamburger-btn" aria-label="Åbn menu" onclick="document.getElementById('mobile-menu').classList.toggle('open')" style="display:none;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  <div id="mobile-menu" style="background:#162e38; border-top:1px solid rgba(255,255,255,0.1); padding:1rem 1.5rem 1.5rem; display:none;">
    <div style="display:flex; flex-direction:column; gap:0.75rem;">
      <a href="/natur/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Natur</a>
      <a href="/aktivitet/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Aktivitet</a>
      <a href="/oplevelser/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Oplevelser</a>
      <a href="/spisesteder/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Spisesteder</a>
      <a href="/overnatning/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Overnatning</a>
      <a href="/steder/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Steder</a>
      <a href="/examples/" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Velvære</a>
      <a href="/index.html#praktisk" class="nav-link" onclick="document.getElementById('mobile-menu').style.display='none'">Praktisk</a>
      <a href="/de/nationalpark-thy.html" class="nav-link" style="color:#b5873a;" onclick="document.getElementById('mobile-menu').style.display='none'">DE</a>
    </div>
  </div>
</nav>'''

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Find <nav ... </nav> block
    # Since nav could contain nested tags, regex could be tricky. But our nav is neatly formatted in the html files usually without nested navs.
    pattern = re.compile(r'<nav[^>]*>.*?</nav>', re.DOTALL | re.IGNORECASE)
    matched = pattern.findall(html)
    
    # We want to replace ONLY the main main header nav, which is the first one in the document.
    if len(matched) > 0:
        main_nav = matched[0]
        # Only replace if it contains the word explorethy to make sure it's the header.
        if 'explore' in main_nav:
            new_html = html.replace(main_nav, nav_replacement, 1)
            
            # The script above uses a slightly different logic for toggleMenu. In most files it uses document.getElementById('mobile-menu').classList.toggle('open'). Let's just output it!
            # Wait, in the CSS for subpages:
            # #mobile-menu { display: none; }
            # #mobile-menu.open { display: block; }
            # Also need to make sure the hamburger button appears on mobile.
            # In index.html, it used: id="hamburger-btn" and a global JS toggleMenu() function.
            # Some subpages use inline JS: onclick="document.getElementById('mobile-menu').classList.toggle('open')"
            # Let's adjust the regex logic to use classList toggle for simplicity, no relying on external functions.
            
            # We'll fix up the class names so it definitely works on both sets of stylesheets:
            fixed_nav = nav_replacement.replace('style="display:none;"', '') # Let CSS control hamburger display
            fixed_nav = fixed_nav.replace("document.getElementById('mobile-menu').style.display='none'", "document.getElementById('mobile-menu').classList.remove('open')")
            
            # Let's inject a small script just in case they don't have toggleMenu and their CSS is different?
            # Actually, using classList.toggle('open') and inline CSS for the menu `display:none;` might conflict with CSS.
            # Let's just rely on the existing `.open` CSS rule which is present in subpages:
            # #mobile-menu { display: none; } #mobile-menu.open { display: block; }
            fixed_nav = fixed_nav.replace('display:none;', '') # remove inline display none from mobile menu to let CSS handle it
            
            # Re-replace
            new_html = html.replace(main_nav, fixed_nav, 1)
            
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_html)

print("Updated navigation on all DA subpages.")
