/* ==========================================================================
   DIYA NATHWANI PORTFOLIO - CORE ENGINE (app.js)
   Lenis Smooth Scroll, GSAP Micro-Animations, and Complete Interactivity
   ========================================================================== */

import { drawers, services, journey, clientGroups, faqs, linkFor, PORTFOLIO_ROOT, ASSET_MAP } from './portfolio-data.js';

let lenis = null;

/* --------------------------------------------------------------------------
   1. LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER SYNC
   -------------------------------------------------------------------------- */
function initLenisAndGSAP() {
  // Initialize Lenis if available
  if (typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    // Make lenis globally available
    window.lenis = lenis;

    // Sync GSAP ScrollTrigger with Lenis
    if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
      window.gsap.registerPlugin(window.ScrollTrigger);
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }
}

// Helper to smooth scroll to an element or selector
function scrollToTarget(target, offset = -85) {
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}

/* --------------------------------------------------------------------------
   2. NAVBAR NAVIGATION & ACTIVE SECTION HIGHLIGHT
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navButtons = document.querySelectorAll('.nk-nav button');
  const sections = [
    { name: 'About', id: '#about' },
    { name: 'Results', id: '#results' },
    { name: 'Work', id: '#work' },
    { name: 'Journey', id: '#journey' },
    { name: 'Featured', id: '#featured' },
    { name: 'Media', id: '#media' }
  ];

  // Map each button to its section
  navButtons.forEach(btn => {
    const text = btn.textContent.trim().toLowerCase();
    const match = sections.find(s => s.name.toLowerCase() === text);
    if (match) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToTarget(match.id, -85);
      });
    }
  });

  // "Let's talk" buttons
  const talkButtons = document.querySelectorAll('.nk-bar .nk-btn, .nk-hero .nk-btn, a[href="#contact"]');
  talkButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const contactSec = document.querySelector('#contact');
      if (contactSec) {
        e.preventDefault();
        scrollToTarget('#contact', -85);
      }
    });
  });

  // "Read the lore" button in about section
  const loreBtn = document.querySelector('#about .nk-btn');
  if (loreBtn) {
    loreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTarget('#journey', -85);
    });
  }

  // Active section indicator on scroll using IntersectionObserver / ScrollTrigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        const match = sections.find(s => s.id === id);
        if (match) {
          navButtons.forEach(btn => {
            if (btn.textContent.trim().toLowerCase() === match.name.toLowerCase()) {
              btn.classList.add('is-active');
            } else {
              btn.classList.remove('is-active');
            }
          });
        }
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => {
    const el = document.querySelector(s.id);
    if (el) observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   3. REAL-TIME LIVE IST CLOCK
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.querySelector('.nk-clock');
  if (!clockEl) return;

  function updateClock() {
    // Current Indian Standard Time (UTC + 5:30)
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    
    let hours = ist.getHours();
    const minutes = String(ist.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12

    const timeStr = `${hours}:${minutes} ${ampm}`;
    clockEl.innerHTML = `${timeStr}<small>IST, probably overthinking a headline</small>`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   4. EDITORIAL PRELOADER & CHOREOGRAPHED HERO ENTRANCE
   -------------------------------------------------------------------------- */
function initLoaderAndHeroAnimation() {
  const loader = document.querySelector("#pageLoader");
  const percentEl = document.querySelector("#loaderPercent");
  const fillEl = document.querySelector("#loaderFill");
  const statusEl = document.querySelector("#loaderStatus");

  const statuses = [
    { p: 0, text: "Overthinking a headline..." },
    { p: 25, text: "Brewing strong hooks..." },
    { p: 55, text: "Calibrating data x drama..." },
    { p: 85, text: "Setting up the stage..." },
    { p: 100, text: "Ready to launch!" }
  ];

  let progress = 0;
  const duration = 1200; // 1.2s loader duration
  const startTime = performance.now();

  function updateLoader(now) {
    const elapsed = now - startTime;
    progress = Math.min(100, Math.round((elapsed / duration) * 100));

    if (percentEl) percentEl.textContent = `${progress}%`;
    if (fillEl) fillEl.style.width = `${progress}%`;

    const matchStatus = statuses.filter(s => progress >= s.p).pop();
    if (matchStatus && statusEl) statusEl.textContent = matchStatus.text;

    if (progress < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      setTimeout(() => {
        dismissLoaderAndPlayHero();
      }, 160);
    }
  }

  requestAnimationFrame(updateLoader);

  function dismissLoaderAndPlayHero() {
    // 1. Remove hero-preload class so GSAP has full dynamic control
    const heroSection = document.querySelector(".nk-hero");
    if (heroSection) heroSection.classList.remove("hero-preload");

    // 2. Play the hero entrance simultaneously as the loader lifts
    playHeroEntrance();

    if (window.gsap && loader) {
      window.gsap.to(loader, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          loader.style.display = "none";
          if (typeof window.ScrollTrigger !== "undefined") {
            window.ScrollTrigger.refresh();
          }
        }
      });
    } else {
      if (loader) loader.style.display = "none";
      if (typeof window.ScrollTrigger !== "undefined") {
        window.ScrollTrigger.refresh();
      }
    }
  }

  function playHeroEntrance() {
    if (!window.gsap) return;

    const isDesktop = window.innerWidth >= 768;
    const heroTL = window.gsap.timeline();

    // 1. Center photo zooms & springs into place
    heroTL.fromTo(".nk-hero-photo",
      { scale: 0.72, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" }
    );

    // 2. Diya letters emerge one-by-one from BEHIND the picture!
    heroTL.fromTo(".hn-big .hn-l",
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.11, duration: 0.65, ease: "back.out(1.8)" },
      "-=0.35"
    );

    // 3. "CONTENT" slides from image to LEFT, "STRATEGIST" slides from image to RIGHT
    if (isDesktop) {
      heroTL.fromTo(".nk-hero-word.is-left",
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.55"
      );
      heroTL.fromTo(".nk-hero-word.is-right",
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "<"
      );
    } else {
      heroTL.fromTo(".nk-hero-word.is-left",
        { y: -35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
      heroTL.fromTo(".nk-hero-word.is-right",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "<"
      );
    }

    // 4. Tag row & orbs pop out
    heroTL.fromTo(".hn-tagrow",
      { scale: 0.4, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)" },
      "-=0.35"
    );
    heroTL.fromTo(".nk-hero-photo .orb",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.12, duration: 0.45, ease: "back.out(2)" },
      "-=0.3"
    );

    // 5. Hero sub card glides up
    heroTL.fromTo(".nk-hero-sub",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.25"
    );
  }
}

/* --------------------------------------------------------------------------
   5. HERO CONTINUOUS MICRO-ANIMATIONS (3D TAG FLIP, LETTER HOVER, PARALLAX)
   -------------------------------------------------------------------------- */
function initHeroAnimations() {
  const tagEl = document.querySelector('.hn-tagrow .hn-w');

  // 3D Tag flip
  if (tagEl && window.gsap) {
    const tags = [
      "DATA x DRAMA",
      "ICONIC HOOKS",
      "CERTIFIED YAPPER",
      "ALGORITHM OBSESSED"
    ];
    let currentIdx = 0;

    setInterval(() => {
      currentIdx = (currentIdx + 1) % tags.length;
      const nextText = tags[currentIdx];

      window.gsap.to(tagEl, {
        rotateX: 90,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          tagEl.textContent = nextText;
          window.gsap.fromTo(tagEl, 
            { rotateX: -90, opacity: 0 },
            { rotateX: -2, opacity: 1, duration: 0.4, ease: "back.out(1.8)" }
          );
        }
      });
    }, 2800);
  }

  // Interactive hover on "D I Y A ." letters
  const letters = document.querySelectorAll('.hn-big .hn-l');
  letters.forEach(l => {
    l.addEventListener('mouseenter', () => {
      letters.forEach(item => item.classList.remove('is-on'));
      l.classList.add('is-on');
      if (window.gsap) {
        window.gsap.fromTo(l, { scale: 1 }, { scale: 1.25, duration: 0.3, ease: "back.out(2)" });
      }
    });
    l.addEventListener('mouseleave', () => {
      if (window.gsap) {
        window.gsap.to(l, { scale: l.classList.contains('is-on') ? 1.22 : 1, duration: 0.3 });
      }
    });
  });

  // Micro floating motion on Diya's hero photo & orbs
  const heroPhoto = document.querySelector('.nk-hero-photo img');
  const orbs = document.querySelectorAll('.nk-hero-photo .orb');
  if (heroPhoto && window.gsap) {
    window.gsap.to(heroPhoto, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // GSAP 7. Image Parallax Drift on Scroll
    if (window.ScrollTrigger) {
      window.gsap.to(heroPhoto, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".nk-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    orbs.forEach((orb, i) => {
      window.gsap.to(orb, {
        y: i === 0 ? 6 : -6,
        rotate: i === 0 ? -4 : 4,
        duration: 2.4 + i * 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. QUICK STATS & RESULTS COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initQuickStatsCountup() {
  const countups = document.querySelectorAll('.countup');
  if (!countups.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const rawText = el.textContent.trim();
        // Parse number from text (e.g. "3.5+", "20+", "553.8", "~38")
        const hasTilde = rawText.startsWith('~');
        const hasPlus = rawText.endsWith('+');
        const hasK = rawText.includes('K');
        const cleanNum = parseFloat(rawText.replace(/[^0-9.]/g, ''));

        if (!isNaN(cleanNum)) {
          const isDecimal = rawText.includes('.');
          const decimals = isDecimal ? (rawText.split('.')[1].replace(/[^0-9]/g, '').length || 1) : 0;
          
          let obj = { val: 0 };
          if (window.gsap) {
            window.gsap.to(obj, {
              val: cleanNum,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                let formatted = obj.val.toFixed(decimals);
                if (hasTilde) formatted = '~' + formatted;
                if (hasK) formatted = formatted + 'K';
                if (hasPlus) formatted = formatted + '+';
                el.textContent = formatted;
              }
            });
          }
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  countups.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. SERVICES ACCORDION & GENERAL ACCORDION ENGINE
   -------------------------------------------------------------------------- */
function setupSmoothAccordion(container, itemsData) {
  if (!container) return;

  container.innerHTML = itemsData.map(([title, desc], idx) => {
    const isOpen = idx === 0;
    return `
      <div class="nk-acc-item ${isOpen ? 'is-open' : ''}" data-idx="${idx}">
        <button aria-expanded="${isOpen}" type="button">
          <span>${idx + 1}. ${escapeHtml(title)}</span>
          <i aria-hidden="true" style="display:inline-block; transform: rotate(${isOpen ? 45 : 0}deg);">+</i>
        </button>
        <p style="${isOpen ? 'height: auto; opacity: 1; margin-bottom: 18px; display: block;' : 'height: 0; opacity: 0; margin-bottom: 0; display: none; overflow: hidden;'}">${escapeHtml(desc)}</p>
      </div>
    `;
  }).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const item = btn.closest('.nk-acc-item');
    if (!item) return;

    const isOpen = item.classList.contains('is-open');

    if (isOpen) {
      closeItem(item);
    } else {
      // Single-open accordion: smoothly close all other open items
      container.querySelectorAll('.nk-acc-item.is-open').forEach(other => {
        if (other !== item) {
          closeItem(other);
        }
      });
      openItem(item);
    }
  });

  function openItem(item) {
    const btn = item.querySelector('button');
    const p = item.querySelector('p');
    const icon = item.querySelector('i');

    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');

    if (window.gsap && p) {
      window.gsap.killTweensOf(p);
      if (icon) window.gsap.killTweensOf(icon);

      p.style.display = 'block';
      p.style.overflow = 'hidden';
      p.style.height = 'auto';
      const targetHeight = p.offsetHeight;

      window.gsap.fromTo(p,
        {
          height: 0,
          opacity: 0,
          y: -10,
          marginBottom: 0
        },
        {
          height: targetHeight,
          opacity: 1,
          y: 0,
          marginBottom: 18,
          duration: 0.42,
          ease: "power3.out",
          onComplete: () => {
            p.style.height = 'auto';
            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          }
        }
      );

      if (icon) {
        window.gsap.to(icon, {
          rotate: 45,
          duration: 0.35,
          ease: "back.out(2)"
        });
      }
    } else if (p) {
      p.style.display = 'block';
      p.style.height = 'auto';
      p.style.opacity = '1';
      p.style.marginBottom = '18px';
      if (icon) icon.style.transform = 'rotate(45deg)';
    }
  }

  function closeItem(item) {
    const btn = item.querySelector('button');
    const p = item.querySelector('p');
    const icon = item.querySelector('i');

    item.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');

    if (window.gsap && p) {
      window.gsap.killTweensOf(p);
      if (icon) window.gsap.killTweensOf(icon);

      const startHeight = p.offsetHeight;
      p.style.overflow = 'hidden';

      window.gsap.fromTo(p,
        {
          height: startHeight,
          opacity: 1,
          y: 0,
          marginBottom: 18
        },
        {
          height: 0,
          opacity: 0,
          y: -8,
          marginBottom: 0,
          duration: 0.32,
          ease: "power3.inOut",
          onComplete: () => {
            p.style.display = 'none';
            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          }
        }
      );

      if (icon) {
        window.gsap.to(icon, {
          rotate: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    } else if (p) {
      p.style.display = 'none';
      p.style.height = '0';
      p.style.opacity = '0';
      p.style.marginBottom = '0';
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }
}

function initServicesAccordion() {
  const servicesWrap = document.querySelector('.nk-services .nk-acc');
  setupSmoothAccordion(servicesWrap, services);
}

/* --------------------------------------------------------------------------
   7. WORK CATEGORY TABS & DYNAMIC RENDERING (All 7 categories)
   -------------------------------------------------------------------------- */
const WORK_IMGS = {
  "love-podcasts": "./ARS6DUIL.jpg",
  biryan: "./S3PWVBDW.jpg",
  walls: "./JAEIEW3F.jpg",
  city: "./Z2XTUUWY.jpg",
  faces: "./Y56QNJNB.jpg",
  nukkad: "./VEGWG6XZ.jpg"
};

const POP_IMAGES = [
  "./Y4EG6CCM.jpg",
  "./VJJXVYLX.jpg",
  "./VYOVZX4T.jpg",
  "./UUOPAPKS.jpg",
  "./7T6SRKYN.jpg",
  "./FZT6XOQE.jpg"
];

const WORK_THUMBS = {
  "A multi-strategy walkthrough": "./WHMA2ALD.jpg",
  "Creator Revenue Architecture": "./J4CIWBPV.jpg",
  "Mila toh Haathi, Gayi toh Pooch": "./7RT5ZH34.jpg",
  "The founder podcast": "./IWFNTYEV.jpg",
  "Podcast Strategy by Diya": "./JSRGIRDM.jpg",
  "Breaking news, handled": "./AZRQA3A4.jpg",
  "When fiction becomes fact": "./WOGFRNLE.jpg",
  "A novel about a robot": "./QK4PGT5D.jpg",
  "Gamified event marketing": "./IVDS5N3Y.jpg",
  "Homepage + ads, QA’d": "./A7LATOSQ.jpg",
  "Talking reels, A to Z": "./RGGIDX4W.jpg",
  "Scripts with a pulse": "./XPANUF67.jpg",
  "Tools, reviewed": "./5VQMVEAO.jpg",
  "Seller’s paradise": "./TSWX5BQ5.jpg",
  "Level up your data game": "./P6MJW5M6.jpg",
  "A rebrand, page by page": "./CCCH6TSV.jpg",
  "The 3-volume brand": "./EDQJNRDF.jpg",
  "Luck shouldn’t decide fame": "./G66JJWFL.jpg",
  "Seek Ease": "./FX3M2B7P.jpg",
  "AskIVA": "./JQSMRGUG.jpg",
  "Glow, wireframed": "./YZ6FCLPJ.jpg",
  "Shock-math in 5 seconds": "./5R6WT77H.jpg",
  "Founder-led B2B": "./7GG7Q2WA.jpg",
  "Taste of Home, Miles Away": "./HPZHSKX4.jpg",
  "Helter, but strategic": "./KCAWNZKI.jpg",
  "70+ pieces, one engine": "./5GRKOBKJ.jpg",
  "Listicles, reviews, face-offs": "./5GRKOBKJ.jpg",
  "Dermatologist approved": "./D4BAXOHL.jpg",
  "Kahani, in Hindi": "./6RDO7DI7.jpg",
  "Reviewer to lifestyle brand": "./7DOEAXHJ.jpg",
  "58K views and counting": "./ZWUBLP4Y.jpg",
  "2025 Ka Manhoos Saal": "./CLBWN37G.svg",
  "The 1-person AI business": "./URZPG72K.png",
  "Pattern hunting": "./URZPG72K.png",
  "300K+ readers a month": "./FZH72YH3.png",
  "B2B, but make it clear": "./5JSIJCE2.png",
  "Best Facial Moisturizers": "./CMPG4IQJ.svg",
  "Backlinks with manners": "./VNUTS6RC.svg",
  "Affordable luxury": "./OKJRRSRM.svg"
};

const DARK_THUMBS = new Set(["./CLBWN37G.svg", "./URZPG72K.png", "./OKJRRSRM.svg", "./KCAWNZKI.jpg"]);
const WORK_TONES = ["ink", "lime", "cream", "coral", "lilac", "yellow"];
const WORK_MOTIFS = ["num", "ring", "stripe", "quote", "grid", "arrow"];

function renderWorkCover(piece, no, drawerKey) {
  if (piece.img && WORK_IMGS[piece.img]) {
    return `
      <div class="cv cv-photo">
        <img src="${WORK_IMGS[piece.img]}" alt="${escapeHtml(piece.title)} campaign cover" loading="lazy">
        <span class="cv-issue">No. ${String(no).padStart(2, '0')}</span>
      </div>
    `;
  }
  const tone = WORK_TONES[(no * 7 + drawerKey.length) % WORK_TONES.length];
  const motif = WORK_MOTIFS[(no * 5 + drawerKey.length * 3) % WORK_MOTIFS.length];
  const th = WORK_THUMBS[piece.title];
  const isDark = th && DARK_THUMBS.has(th);

  let motifText = '';
  if (motif === 'num') motifText = String(no).padStart(2, '0');
  else if (motif === 'quote') motifText = '“';
  else if (motif === 'arrow') motifText = '↗';

  const clientShort = piece.client ? piece.client.split(/[,(:\/]/)[0].trim() : '';

  return `
    <div class="cv cv-${tone} cv-m-${motif}${th ? ' cv-hasdoc' : ''}" aria-hidden="true">
      <div class="cv-top">
        <span class="cv-mast">DN.</span>
        <span class="cv-issue">No. ${String(no).padStart(2, '0')}</span>
      </div>
      ${th ? `<img class="cv-doc ${isDark ? 'is-dk' : ''}" src="${th}" alt="">` : ''}
      <div class="cv-motif">${motifText}</div>
      <h4 class="cv-title">${escapeHtml(piece.title)}</h4>
      <div class="cv-bottom">
        <span>${escapeHtml(piece.tag || '')}</span>
        <span>${escapeHtml(clientShort)}</span>
      </div>
    </div>
  `;
}

function initWorkTabs() {
  const tabsWrap = document.querySelector('.nk-work .nk-tabs');
  const piecesWrap = document.querySelector('.nk-work .nk-pieces');
  const blurbEl = document.querySelector('.nk-drawer-blurb');
  if (!tabsWrap || !piecesWrap) return;

  // Clean up any extraneous expand wrapper left from prior revisions
  const priorExpandWrap = document.querySelector('.nk-work .nk-work-expand-wrap');
  if (priorExpandWrap) priorExpandWrap.remove();

  // Compute issue number offsets across all 7 drawers (total 58 pieces)
  const offsets = {};
  let counter = 0;
  drawers.forEach((d) => {
    offsets[d.key] = counter;
    counter += d.pieces.length;
  });

  let currentKey = drawers[0].key;
  let isTransitioning = false;

  // Render drawer category chips dynamically
  tabsWrap.innerHTML = drawers.map((d, i) => `
    <button role="tab" aria-selected="${i === 0}" class="${i === 0 ? 'is-on' : ''}" data-key="${d.key}">
      ${escapeHtml(d.label)} (${d.pieces.length})
    </button>
  `).join('');

  // Function to build HTML string and container class for a category
  function buildContent(key) {
    const drawer = drawers.find(d => d.key === key) || drawers[0];

    if (key === 'pop') {
      return {
        isPop: true,
        html: drawer.pieces.map((p, i) => `
          <a class="pop-tile r${i % 3}" href="${linkFor('Pop-culture copies')}" target="_blank" rel="noopener noreferrer">
            <img src="${POP_IMAGES[i]}" alt="Pop-culture copy: ${escapeHtml(p.title)}" loading="lazy">
            <span class="pop-cap">
              <b>${escapeHtml(p.tag)}</b>
              ${escapeHtml(p.title)}
            </span>
          </a>
        `).join('')
      };
    }

    return {
      isPop: false,
      html: drawer.pieces.map((p, i) => {
        const issueNo = offsets[key] + i + 1;
        const isLead = i === 0;
        const coverHtml = renderWorkCover(p, issueNo, key);
        const href = linkFor(p.title);
        const linkText = (href === PORTFOLIO_ROOT) ? 'Browse the portfolio' : 'See the work';

        return `
          <article class="nk-piece ${isLead ? 'is-lead' : ''}">
            ${coverHtml}
            <div class="nk-piece-body">
              <p class="nk-piece-tag">${escapeHtml(p.tag || '')}</p>
              <h3>${escapeHtml(p.title)}</h3>
              <p class="nk-piece-client">${escapeHtml(p.client || '')}</p>
              <p>${escapeHtml(p.text || '')}</p>
              <a class="nk-piece-link" href="${href}" target="_blank" rel="noopener noreferrer">${linkText} ↗</a>
            </div>
          </article>
        `;
      }).join('')
    };
  }

  // Smooth tab switch animation (no jump)
  function switchTab(key) {
    if (isTransitioning || key === currentKey) return;
    isTransitioning = true;

    // Update active tab buttons immediately with tactile bounce
    tabsWrap.querySelectorAll('button').forEach(btn => {
      const isSelected = btn.dataset.key === key;
      btn.classList.toggle('is-on', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected && window.gsap) {
        window.gsap.fromTo(btn, { scale: 0.94 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
      }
    });

    const nextDrawer = drawers.find(d => d.key === key) || drawers[0];
    const oldCards = Array.from(piecesWrap.children);

    if (window.gsap && oldCards.length > 0) {
      // 1. Smoothly animate out current cards & blurb
      const tl = window.gsap.timeline({
        onComplete: () => {
          // 2. Swap DOM content during the invisible transition point
          currentKey = key;
          const built = buildContent(key);
          piecesWrap.className = built.isPop ? 'pop-wall' : 'nk-pieces';
          piecesWrap.innerHTML = built.html;
          if (blurbEl) blurbEl.textContent = nextDrawer.blurb;

          // 3. Stagger animate in newly rendered cards
          const newCards = Array.from(piecesWrap.children);
          window.gsap.fromTo(newCards,
            { opacity: 0, y: 26, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.44,
              stagger: 0.04,
              ease: "back.out(1.2)",
              onComplete: () => {
                isTransitioning = false;
                if (window.ScrollTrigger) window.ScrollTrigger.refresh();
                if (lenis) lenis.resize();
              }
            }
          );

          if (blurbEl) {
            window.gsap.fromTo(blurbEl,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
          }
        }
      });

      tl.to(oldCards, {
        opacity: 0,
        y: -14,
        scale: 0.98,
        duration: 0.2,
        stagger: 0.015,
        ease: "power2.in"
      }, 0);

      if (blurbEl) {
        tl.to(blurbEl, {
          opacity: 0,
          y: -6,
          duration: 0.16,
          ease: "power2.in"
        }, 0);
      }
    } else {
      // Fallback if GSAP is unavailable
      currentKey = key;
      const built = buildContent(key);
      piecesWrap.className = built.isPop ? 'pop-wall' : 'nk-pieces';
      piecesWrap.innerHTML = built.html;
      if (blurbEl) blurbEl.textContent = nextDrawer.blurb;
      isTransitioning = false;
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      if (lenis) lenis.resize();
    }
  }

  // Initial render of first category
  const initialBuilt = buildContent(currentKey);
  piecesWrap.className = initialBuilt.isPop ? 'pop-wall' : 'nk-pieces';
  piecesWrap.innerHTML = initialBuilt.html;
  if (blurbEl) blurbEl.textContent = drawers[0].blurb;

  // Tab click event delegation
  tabsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const key = btn.dataset.key;
    if (key) switchTab(key);
  });
}

// Helper to resolve project images to local assets
function resolveImage(key) {
  const defaultImages = [
    './S3PWVBDW.jpg', './JAEIEW3F.jpg', './Z2XTUUWY.jpg', './Y56QNJNB.jpg',
    './VEGWG6XZ.jpg', './HPZHSKX4.jpg', './G66JJWFL.jpg', './J4CIWBPV.jpg',
    './WHMA2ALD.jpg', './IVDS5N3Y.jpg', './A7LATOSQ.jpg', './FX3M2B7P.jpg',
    './KCAWNZKI.jpg', './BWFIZXH2.jpg', './LWSRVUMP.jpg', './FZH72YH3.png'
  ];
  if (ASSET_MAP && ASSET_MAP[key]) {
    return './' + ASSET_MAP[key];
  }
  if (ASSET_MAP && ASSET_MAP[key + '_default']) {
    return './' + ASSET_MAP[key + '_default'];
  }
  // Fallback to cycling default high-res local images
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i)) % defaultImages.length;
  return defaultImages[hash];
}

/* --------------------------------------------------------------------------
   7b. TOOLS & FRAMEWORKS INTERACTIVE BENTO CONSOLE
   -------------------------------------------------------------------------- */
const CORE_TOOLS_DATA = [
  { name: "ChatGPT", role: "LLM & Ideation" },
  { name: "Claude", role: "Reasoning & Longform" },
  { name: "SEMrush", role: "SEO & Competitor Intel" },
  { name: "Ahrefs", role: "Backlink Research" },
  { name: "GA4", role: "Web Analytics" },
  { name: "Search Console", role: "Organic Performance" },
  { name: "Google Ads", role: "Search PPC" },
  { name: "Meta Business Suite", role: "Paid Social" },
  { name: "WordPress", role: "CMS & Architecture" },
  { name: "Canva", role: "Rapid Design" },
  { name: "Notion", role: "Knowledge Engine" },
  { name: "HubSpot", role: "Inbound & CRM" }
];

const TOOLBOX_GROUPS_DATA = [
  {
    category: "AI Engines & Research",
    tools: ["Gemini", "Perplexity", "NotebookLM", "Jasper", "Copy.ai", "Writesonic", "Notion AI", "Midjourney", "Ideogram"]
  },
  {
    category: "SEO, Data & Search Intelligence",
    tools: ["Grammarly", "Originality.ai", "Copyleaks", "Ubersuggest", "SurferSEO", "Yoast", "Google Trends", "Keyword Planner", "Tag Manager", "Meta Ads Library"]
  },
  {
    category: "Publishing, Newsletters & Web",
    tools: ["Elementor", "Beehiiv", "Substack", "Medium", "Wix", "Figma"]
  },
  {
    category: "Creative Production & Ops",
    tools: ["CapCut", "Premiere Pro", "Illustrator", "Slack", "Trello", "Airtable", "ClickUp", "Google Workspace", "Excel"]
  }
];

const STRATEGIC_FRAMEWORKS_DATA = [
  { name: "Copy", items: ["AIDA", "PAS", "FAB", "PASTOR", "hooks", "direct response", "UX writing"] },
  { name: "SEO", items: ["E‑E‑A‑T", "intent mapping", "topic clusters", "entity SEO", "AEO", "GEO"] },
  { name: "Funnels", items: ["TOFU‑MOFU‑BOFU", "Hero‑Hub-Help", "pillars", "territories"] },
  { name: "Business", items: ["STP", "4Ps/7Ps", "PESTLE", "Porter", "Blue Ocean", "GTM", "CAC & contribution margin"] },
  { name: "Psychology", items: ["Barnum effect", "FOMO", "social proof", "reciprocity", "insight mining"] },
  { name: "Culture", items: ["Moment marketing", "trend hijacking", "memes", "UGC", "guerrilla", "experiential"] }
];

function initToolsSection() {
  const tabsWrap = document.querySelector('.nk-tools-tabs');
  const contentEl = document.querySelector('#toolsContent');
  if (!tabsWrap || !contentEl) return;

  let currentView = 'bento';
  let isTransitioning = false;

  function renderToolsView(view) {
    if (view === 'core') {
      return `
        <div class="tb-focused-wrap">
          <div class="tb-focused-head">
            <span class="tb-tag">THE NON-NEGOTIABLES</span>
            <h3>Core Technology Stack (12)</h3>
            <p>The daily driver tools powering client campaigns, research, analytics, and content production.</p>
          </div>
          <div class="tb-core-cards-grid">
            ${CORE_TOOLS_DATA.map((t, i) => `
              <div class="tb-core-item ${i % 2 === 0 ? 'is-yellow' : 'is-purple'}">
                <span class="tb-core-num">${String(i + 1).padStart(2, '0')}</span>
                <span class="tb-core-role">${escapeHtml(t.role)}</span>
                <h4>${escapeHtml(t.name)}</h4>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (view === 'toolbox') {
      return `
        <div class="tb-focused-wrap">
          <div class="tb-focused-head">
            <span class="tb-tag">SPECIALIZED ARSENAL</span>
            <h3>Extended Toolbox Ecosystem (34 Tools)</h3>
            <p>Categorized into specialized operational workflows for AI generation, technical SEO, publishing &amp; asset production.</p>
          </div>
          <div class="tb-cat-grid">
            ${TOOLBOX_GROUPS_DATA.map(g => `
              <div class="tb-cat-box">
                <div class="tb-cat-header">
                  <h4>${escapeHtml(g.category)}</h4>
                  <span class="tb-cat-badge">${g.tools.length} Tools</span>
                </div>
                <div class="tb-cat-cloud">
                  ${g.tools.map(tool => `<span>${escapeHtml(tool)}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (view === 'frameworks') {
      return `
        <div class="tb-focused-wrap">
          <div class="tb-focused-head">
            <span class="tb-tag">METHODOLOGY &amp; THINKING</span>
            <h3>Strategic Frameworks (6 Models)</h3>
            <p>The mental models, persuasion formulas, and marketing architectures applied across every deliverable.</p>
          </div>
          <div class="tb-fw-expanded-grid">
            ${STRATEGIC_FRAMEWORKS_DATA.map((f, i) => `
              <div class="tb-fw-card">
                <div class="tb-fw-top">
                  <span class="tb-fw-num">0${i + 1}</span>
                  <h4>${escapeHtml(f.name)}</h4>
                </div>
                <div class="tb-fw-pills">
                  ${f.items.map(item => `<span>${escapeHtml(item)}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="tb-lang-strip is-expanded">
            <span class="tb-lang-label">Languages Known &amp; Written:</span>
            <div class="tb-lang-pills">
              <span>English</span><span>Hindi</span><span>Marathi</span><span>Gujarati</span>
            </div>
          </div>
        </div>
      `;
    }

    // Default: Bento Grid (Overview)
    return `
      <div class="tb-bento">
        <!-- Left Column: 46 Tools (Core Stack + Extended Toolbox) -->
        <div class="tb-card tb-tools-col">
          <div class="tb-card-header">
            <div class="tb-title-wrap">
              <span class="tb-tag">STACK CONSOLE</span>
              <h3>Tools &amp; Tech Stack</h3>
            </div>
            <span class="tb-count-badge">46 Tools</span>
          </div>

          <!-- Core Stack Sub-panel -->
          <div class="tb-subpanel">
            <div class="tb-sub-head">
              <span class="tb-sub-label">CORE STACK</span>
              <span class="tb-sub-note">The non-negotiables (12)</span>
            </div>
            <div class="core-stack">
              <span>ChatGPT</span><span>Claude</span><span>SEMrush</span><span>Ahrefs</span><span>GA4</span><span>Search Console</span><span>Google Ads</span><span>Meta Business Suite</span><span>WordPress</span><span>Canva</span><span>Notion</span><span>HubSpot</span>
            </div>
          </div>

          <!-- Extended Toolbox Sub-panel -->
          <div class="tb-subpanel tb-toolbox-sub">
            <div class="tb-sub-head">
              <span class="tb-sub-label">EXTENDED TOOLBOX</span>
              <span class="tb-sub-note">34 AI, Content, CMS &amp; Ops tools</span>
            </div>
            <div class="nk-tools-cloud">
              <span>Gemini</span><span>Perplexity</span><span>NotebookLM</span><span>Jasper</span><span>Copy.ai</span><span>Writesonic</span><span>Notion AI</span><span>Midjourney</span><span>Ideogram</span><span>Grammarly</span><span>Originality.ai</span><span>Copyleaks</span><span>Ubersuggest</span><span>SurferSEO</span><span>Yoast</span><span>Google Trends</span><span>Keyword Planner</span><span>Tag Manager</span><span>Meta Ads Library</span><span>Elementor</span><span>Beehiiv</span><span>Substack</span><span>Medium</span><span>Wix</span><span>Figma</span><span>CapCut</span><span>Premiere Pro</span><span>Illustrator</span><span>Slack</span><span>Trello</span><span>Airtable</span><span>ClickUp</span><span>Google Workspace</span><span>Excel</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Strategic Frameworks & Languages -->
        <div class="tb-card tb-frameworks-col">
          <div class="tb-card-header">
            <div class="tb-title-wrap">
              <span class="tb-tag">METHODOLOGY</span>
              <h3>Strategic Frameworks</h3>
            </div>
            <span class="tb-count-badge">6 Models</span>
          </div>

          <div class="nk-frameworks">
            <div class="fw-item"><strong class="fw-badge">Copy</strong><span class="fw-text">AIDA, PAS, FAB, PASTOR, hooks, direct response, UX writing</span></div>
            <div class="fw-item"><strong class="fw-badge">SEO</strong><span class="fw-text">E‑E‑A‑T, intent mapping, topic clusters, entity SEO, AEO, GEO</span></div>
            <div class="fw-item"><strong class="fw-badge">Funnels</strong><span class="fw-text">TOFU‑MOFU‑BOFU, Hero‑Hub-Help, pillars, territories</span></div>
            <div class="fw-item"><strong class="fw-badge">Business</strong><span class="fw-text">STP, 4Ps/7Ps, PESTLE, Porter, Blue Ocean, GTM, CAC and contribution margin</span></div>
            <div class="fw-item"><strong class="fw-badge">Psychology</strong><span class="fw-text">Barnum effect, FOMO, social proof, reciprocity, insight mining</span></div>
            <div class="fw-item"><strong class="fw-badge">Culture</strong><span class="fw-text">Moment marketing, trend hijacking, memes, UGC, guerrilla, experiential</span></div>
          </div>

          <!-- Languages Footer Strip -->
          <div class="tb-lang-strip">
            <span class="tb-lang-label">Languages</span>
            <div class="tb-lang-pills">
              <span>English</span><span>Hindi</span><span>Marathi</span><span>Gujarati</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function switchView(view) {
    if (isTransitioning || view === currentView) return;
    isTransitioning = true;

    // Update active tab buttons
    tabsWrap.querySelectorAll('.nk-ttab').forEach(btn => {
      const isSelected = btn.dataset.view === view;
      btn.classList.toggle('is-on', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected && window.gsap) {
        window.gsap.fromTo(btn, { scale: 0.94 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
      }
    });

    if (window.gsap && contentEl.children.length > 0) {
      window.gsap.to(contentEl.children, {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          currentView = view;
          contentEl.innerHTML = renderToolsView(view);

          window.gsap.fromTo(contentEl.children,
            { opacity: 0, y: 18, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.38,
              ease: "back.out(1.2)",
              onComplete: () => {
                isTransitioning = false;
                if (window.ScrollTrigger) window.ScrollTrigger.refresh();
                if (lenis) lenis.resize();
              }
            }
          );
        }
      });
    } else {
      currentView = view;
      contentEl.innerHTML = renderToolsView(view);
      isTransitioning = false;
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      if (lenis) lenis.resize();
    }
  }

  tabsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.nk-ttab');
    if (!btn) return;
    const view = btn.dataset.view;
    if (view) switchView(view);
  });
}

/* --------------------------------------------------------------------------
   8. JOURNEY TABS (Corporate, Clients, Education, Milestones)
   -------------------------------------------------------------------------- */
function initJourneyTabs() {
  const tabsWrap = document.querySelector('.nk-journey .nk-tabs');
  const timelineEl = document.querySelector('.nk-timeline');
  if (!tabsWrap || !timelineEl) return;

  function renderChapter(chapter) {
    if (chapter === 'clients') {
      timelineEl.innerHTML = clientGroups.map(cg => `
        <li>
          <span class="nk-year">Clients</span>
          <div>
            <p class="nk-tl-role">${escapeHtml(cg.k)}</p>
            <ul class="tl-pts">
              ${cg.items.map(item => `<li><strong>${escapeHtml(item)}</strong></li>`).join('')}
            </ul>
          </div>
        </li>
      `).join('');
    } else {
      const items = journey[chapter] || journey.corporate;
      timelineEl.innerHTML = items.map(item => {
        // Convert markdown bold **word** to <strong>word</strong>
        const formattedDesc = escapeHtml(item.d).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        const points = formattedDesc.split('\n').filter(Boolean);
        return `
          <li>
            <span class="nk-year">${escapeHtml(item.y)}</span>
            <div>
              <p class="nk-tl-role">${escapeHtml(item.r)}</p>
              <p class="nk-tl-org">${escapeHtml(item.o)}</p>
              <ul class="tl-pts">
                ${points.map(pt => `<li>${pt}</li>`).join('')}
              </ul>
            </div>
          </li>
        `;
      }).join('');
    }

    if (window.gsap) {
      window.gsap.fromTo(timelineEl.children,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }

  tabsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim().toLowerCase();

    tabsWrap.querySelectorAll('button').forEach(b => {
      b.classList.remove('is-on');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-on');
    btn.setAttribute('aria-selected', 'true');

    renderChapter(text);
  });
}

/* --------------------------------------------------------------------------
   9. FAQ ACCORDION (Interactive Expand/Collapse for all 6 FAQs)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqWrap = document.querySelector('.nk-faq .nk-acc');
  setupSmoothAccordion(faqWrap, faqs);
}

/* --------------------------------------------------------------------------
   10. TESTIMONIALS SLIDER & ARROWS (Autoplay + Touch / Mouse Drag)
   -------------------------------------------------------------------------- */
function initTestimonialsSlider() {
  const marquee = document.querySelector('.tm-marquee');
  const prevBtn = document.querySelector('.tm-arrows button:first-child');
  const nextBtn = document.querySelector('.tm-arrows button:last-child');
  if (!marquee) return;

  const scrollAmount = 450;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      marquee.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      marquee.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Auto-play slider every 4.5 seconds (pausing on hover / interaction)
  let autoTimer = null;
  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      if (marquee.scrollLeft + marquee.clientWidth >= marquee.scrollWidth - 10) {
        marquee.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        marquee.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4500);
  }
  function stopAutoPlay() {
    if (autoTimer) clearInterval(autoTimer);
  }

  startAutoPlay();
  marquee.addEventListener('mouseenter', stopAutoPlay);
  marquee.addEventListener('mouseleave', startAutoPlay);
  marquee.addEventListener('touchstart', stopAutoPlay, { passive: true });
  marquee.addEventListener('touchend', startAutoPlay);

  // Mouse drag support
  let isDown = false;
  let startX;
  let scrollLeft;

  marquee.addEventListener('mousedown', (e) => {
    isDown = true;
    marquee.classList.add('active');
    startX = e.pageX - marquee.offsetLeft;
    scrollLeft = marquee.scrollLeft;
    stopAutoPlay();
  });
  marquee.addEventListener('mouseleave', () => {
    isDown = false;
    marquee.classList.remove('active');
    startAutoPlay();
  });
  marquee.addEventListener('mouseup', () => {
    isDown = false;
    marquee.classList.remove('active');
    startAutoPlay();
  });
  marquee.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marquee.offsetLeft;
    const walk = (x - startX) * 1.5;
    marquee.scrollLeft = scrollLeft - walk;
  });
}

/* --------------------------------------------------------------------------
   IRL FAVS PINNED GSAP HORIZONTAL SCROLL WITH FADING SHADOW EDGES (#rooms)
   -------------------------------------------------------------------------- */
function initFavsHorizontalScroll() {
  const section = document.querySelector('#rooms.st');
  const viewport = document.querySelector('.st-viewport');
  const row = document.querySelector('.st-row');
  const progressFill = document.querySelector('.st-scroll-fill');

  if (!section || !viewport || !row || !window.gsap || !window.ScrollTrigger) return;

  // Calculate total horizontal scroll distance needed
  const getScrollDistance = () => {
    return Math.max(0, row.scrollWidth - viewport.clientWidth + 120);
  };

  // Horizontal scrubbed translation powered by ScrollTrigger
  window.gsap.to(row, {
    x: () => -getScrollDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      pinSpacing: true,
      start: "top top",
      end: () => `+=${Math.max(1500, getScrollDistance() * 1.25)}`,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (progressFill) {
          progressFill.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
        }
      }
    }
  });

  // Micro tilt & lift on card mouse interaction
  const cards = row.querySelectorAll('.st-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      window.gsap.to(card, {
        y: -10,
        rotate: 0,
        scale: 1.03,
        boxShadow: "10px 14px 0 var(--purple, #7c3aed), 10px 14px 0 2.5px var(--ink, #141414)",
        duration: 0.25,
        ease: "power2.out"
      });
    });
    card.addEventListener('mouseleave', () => {
      const origRotate = card.classList.contains('r1') ? 1.5 : (card.classList.contains('r2') ? -0.75 : -1.5);
      window.gsap.to(card, {
        y: 0,
        rotate: origRotate,
        scale: 1,
        boxShadow: "6px 6px 0 var(--purple, #7c3aed), 6px 6px 0 2.5px var(--ink, #141414)",
        duration: 0.35,
        ease: "power2.out"
      });
    });
  });
}

/* --------------------------------------------------------------------------
   11. LETTER DETAILS ACCORDION
   -------------------------------------------------------------------------- */
function initLetterDetails() {
  const details = document.querySelector('.lt-scroll');
  if (!details) return;

  details.addEventListener('toggle', () => {
    if (details.open && window.gsap) {
      const paper = details.querySelector('.lt-paper');
      if (paper) {
        window.gsap.fromTo(paper, 
          { opacity: 0, scaleY: 0.85, transformOrigin: "top center" },
          { opacity: 1, scaleY: 1, duration: 0.6, ease: "power3.out" }
        );
      }
    }
  });
}

/* --------------------------------------------------------------------------
   12. GSAP SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return;

  // Subtle stamp animation on section serif headings
  document.querySelectorAll('h2.nk-serif').forEach(heading => {
    window.gsap.from(heading, {
      scale: 0.96,
      y: 12,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 92%",
        toggleActions: "play none none none"
      }
    });
  });

  // Stagger entrance on QuickStats cards
  const qsGrid = document.querySelector('.qs-grid');
  if (qsGrid) {
    window.gsap.fromTo(qsGrid.children,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: qsGrid,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }

  // Stagger entrance on Playground cards
  const pgGrid = document.querySelector('.pg-grid');
  if (pgGrid) {
    window.gsap.fromTo(pgGrid.children,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: pgGrid,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }

  // Stagger entrance on Results Proofs
  const proofsWrap = document.querySelector('.rs-proofs');
  if (proofsWrap) {
    window.gsap.fromTo(proofsWrap.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: proofsWrap,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }

  // Floating tilt on about & services photos
  const aboutPhoto = document.querySelector('.nk-about-photo img');
  if (aboutPhoto) {
    window.gsap.to(aboutPhoto, {
      rotate: 4.5,
      y: -6,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  const servicesPhoto = document.querySelector('.nk-services-photo img');
  if (servicesPhoto) {
    window.gsap.to(servicesPhoto, {
      rotate: -3.5,
      y: -6,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}

/* --------------------------------------------------------------------------
   13. TACTILE MICRO-HOVER EFFECTS
   -------------------------------------------------------------------------- */
function initMicroHoverEffects() {
  // Magnet hover on buttons
  const buttons = document.querySelectorAll('.nk-btn, .nk-nav button, .tm-arrows button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (window.gsap) {
        window.gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "back.out(2)" });
      }
    });
    btn.addEventListener('mouseleave', () => {
      if (window.gsap) {
        window.gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   14. CLAPPERBOARD SCROLL ENTRANCE & INTERACTIVE MOUSE HOVER TILT
   -------------------------------------------------------------------------- */
function initClapperAnimation() {
  const clapBoard = document.querySelector('.mc-clap');
  const clapTop = document.querySelector('.mc-top');
  if (!clapBoard || !window.gsap) return;

  const baseRotate = 5; // Resting natural rotation in degrees

  // 1. Entrance animation on scroll up into view
  const triggerElement = clapBoard.closest('.nk-about-photo') || clapBoard;

  if (window.ScrollTrigger) {
    window.gsap.fromTo(
      clapBoard,
      {
        y: 85,
        opacity: 0,
        scale: 0.84,
        rotate: -14
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: baseRotate,
        duration: 1.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    if (clapTop) {
      window.gsap.fromTo(
        clapTop,
        { rotate: -24 },
        {
          rotate: -6,
          duration: 0.5,
          delay: 0.35,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }

  // 2. Interactive mousemove tilt & follow
  const onMouseMove = (e) => {
    const rect = clapBoard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized offset from center: -1 to 1
    const normX = Math.max(-1.5, Math.min(1.5, (e.clientX - centerX) / (rect.width / 2)));
    const normY = Math.max(-1.5, Math.min(1.5, (e.clientY - centerY) / (rect.height / 2)));

    // Subtle magnetic drift (up to ~18px) and responsive angular tilt
    const targetX = normX * 18;
    const targetY = normY * 16;
    const targetRotate = baseRotate + normX * 8;

    window.gsap.to(clapBoard, {
      x: targetX,
      y: targetY,
      rotate: targetRotate,
      scale: 1.05,
      duration: 0.28,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  const onMouseLeave = () => {
    window.gsap.to(clapBoard, {
      x: 0,
      y: 0,
      rotate: baseRotate,
      scale: 1,
      duration: 0.75,
      ease: "elastic.out(1.1, 0.4)",
      overwrite: "auto"
    });
  };

  clapBoard.addEventListener('mouseenter', onMouseMove);
  clapBoard.addEventListener('mousemove', onMouseMove);
  clapBoard.addEventListener('mouseleave', onMouseLeave);

  // 3. Tactile click "snap clap" interaction
  clapBoard.addEventListener('click', () => {
    if (clapTop) {
      window.gsap.timeline()
        .to(clapTop, { rotate: -26, duration: 0.1, ease: "power2.out" })
        .to(clapTop, { rotate: -6, duration: 0.25, ease: "bounce.out" });
    }
  });
}

/* --------------------------------------------------------------------------
   15. PROCESS WHITE CARDS CUTE TILT ON HOVER
   -------------------------------------------------------------------------- */
function initProcessCardsTilt() {
  const prTrack = document.querySelector('.pr-track');
  const cards = document.querySelectorAll('.pr-step');
  if (!cards.length || !window.gsap) return;

  // 1. Staggered cute entrance on scroll
  if (prTrack && window.ScrollTrigger) {
    window.gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
        rotateZ: (i) => (i % 2 === 0 ? -4 : 4)
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateZ: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: prTrack,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }

  // 2. Cute tilt and mouse follow on hover
  cards.forEach((card, idx) => {
    // Alternating playful personality tilt: card 0: -2.2deg, card 1: +2.2deg, card 2: -2.2deg, card 3: +2.2deg
    const baseTilt = idx % 2 === 0 ? -2.2 : 2.2;
    const nextArrow = card.nextElementSibling && card.nextElementSibling.classList.contains('pr-arrow')
      ? card.nextElementSibling
      : null;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1)
      const normX = Math.max(-1.2, Math.min(1.2, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1.2, Math.min(1.2, (e.clientY - centerY) / (rect.height / 2)));

      // Cute dynamic 3D + 2D tilt
      const targetX = normX * 8;
      const targetY = -8 + normY * 5; // Float upwards with subtle vertical follow
      const targetRotateZ = baseTilt + normX * 4;
      const targetRotateX = -normY * 8;
      const targetRotateY = normX * 10;

      window.gsap.to(card, {
        x: targetX,
        y: targetY,
        rotateZ: targetRotateZ,
        rotateX: targetRotateX,
        rotateY: targetRotateY,
        scale: 1.05,
        duration: 0.24,
        ease: "power2.out",
        overwrite: "auto"
      });

      if (nextArrow) {
        window.gsap.to(nextArrow, {
          x: 5,
          scale: 1.15,
          duration: 0.24,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    const onMouseLeave = () => {
      window.gsap.to(card, {
        x: 0,
        y: 0,
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.65,
        ease: "elastic.out(1.2, 0.4)",
        overwrite: "auto"
      });

      if (nextArrow) {
        window.gsap.to(nextArrow, {
          x: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    card.addEventListener('mouseenter', onMouseMove);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    // Cute squish bounce on click
    card.addEventListener('click', () => {
      window.gsap.timeline()
        .to(card, { scale: 0.94, duration: 0.1, ease: "power2.in" })
        .to(card, { scale: 1.05, duration: 0.25, ease: "back.out(2)" });
    });
  });
}

// Utility: Escape HTML to prevent injection
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* --------------------------------------------------------------------------
   16. PODCAST SECTION - PINNED CARD STACK GSAP ANIMATION
   -------------------------------------------------------------------------- */
function initPodcastStackCards() {
  const section = document.querySelector('#media.nk-pods');
  const headerWrap = document.querySelector('.pd-header-wrap');
  const cards = document.querySelectorAll('.pd-stack-card');
  const curEpLabel = document.querySelector('.pd-cur-ep');
  const counterLabel = document.querySelector('.pd-counter-label');

  if (!section || !headerWrap || cards.length < 3 || !window.gsap || !window.ScrollTrigger) return;

  const card0 = cards[0]; // EP. 01 Jay Morzaria
  const card1 = cards[1]; // EP. 02 Naveen Yadav
  const card2 = cards[2]; // EP. 03 Sankalp Arora

  // Register ScrollTrigger plugin
  window.gsap.registerPlugin(window.ScrollTrigger);

  // Initial State:
  // Heading is pinned dead-center in the middle of the screen via CSS
  window.gsap.set(headerWrap, {
    opacity: 1,
    scale: 1,
    willChange: "transform, opacity"
  });

  // All 3 cards start below the viewport, waiting to swipe up
  window.gsap.set(card0, {
    zIndex: 10,
    y: "115vh",
    opacity: 0,
    scale: 0.94,
    rotate: -1,
    boxShadow: "0 14px 28px rgba(0,0,0,0.18), 6px 6px 0 var(--ink, #141414)",
    willChange: "transform, opacity"
  });
  window.gsap.set(card1, {
    zIndex: 20,
    y: "135vh",
    opacity: 0,
    scale: 0.94,
    rotate: 2.2,
    boxShadow: "0 18px 36px rgba(0,0,0,0.22), 7px 7px 0 var(--ink, #141414)",
    willChange: "transform, opacity"
  });
  window.gsap.set(card2, {
    zIndex: 30,
    y: "155vh",
    opacity: 0,
    scale: 0.94,
    rotate: -0.75,
    boxShadow: "0 22px 42px rgba(0,0,0,0.28), 8px 8px 0 var(--ink, #141414)",
    willChange: "transform, opacity"
  });

  // Pinned GSAP ScrollTrigger timeline with smooth scrub
  const tl = window.gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=2600",
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        if (p < 0.28) {
          if (curEpLabel) curEpLabel.textContent = "01";
          if (counterLabel) counterLabel.innerHTML = 'Episode <span class="pd-cur-ep">01</span> of 03 · Jay Morzaria';
        } else if (p < 0.65) {
          if (curEpLabel) curEpLabel.textContent = "02";
          if (counterLabel) counterLabel.innerHTML = 'Episode <span class="pd-cur-ep">02</span> of 03 · Naveen Yadav';
        } else {
          if (curEpLabel) curEpLabel.textContent = "03";
          if (counterLabel) counterLabel.innerHTML = 'Episode <span class="pd-cur-ep">03</span> of 03 · Sankalp Arora';
        }
      }
    }
  });

  // Step 1: Screen stays PINNED with heading in center!
  // Card 0 (EP. 01) swipes up from bottom into the center directly OVER the heading!
  tl.to(card0, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: -1,
    duration: 1.0,
    ease: "power2.out"
  }, "card0In")
  .to(headerWrap, {
    opacity: 0.1,
    scale: 0.95,
    duration: 0.7,
    ease: "power2.out"
  }, "card0In")

  // Reading pause for Card 0
  .to({}, { duration: 0.5 })

  // Step 2: More scroll -> Card 1 (EP. 02) swipes up and STACKS directly over Card 0 in center
  .to(card1, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 2.2,
    duration: 1.0,
    ease: "power2.out"
  }, "card1In")
  .to(card0, {
    scale: 0.95,
    y: -16,
    rotate: -3,
    filter: "brightness(0.92)",
    boxShadow: "4px 4px 0 var(--ink, #141414)",
    duration: 1.0,
    ease: "power2.out"
  }, "card1In")

  // Reading pause for Card 1
  .to({}, { duration: 0.5 })

  // Step 3: More scroll -> Card 2 (EP. 03) swipes up and STACKS directly over Card 1 in center
  .to(card2, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: -0.75,
    duration: 1.0,
    ease: "power2.out"
  }, "card2In")
  .to(card1, {
    scale: 0.95,
    y: -16,
    rotate: 1.5,
    filter: "brightness(0.92)",
    boxShadow: "5px 5px 0 var(--ink, #141414)",
    duration: 1.0,
    ease: "power2.out"
  }, "card2In")
  .to(card0, {
    scale: 0.90,
    y: -30,
    rotate: -5,
    filter: "brightness(0.85)",
    boxShadow: "3px 3px 0 var(--ink, #141414)",
    duration: 1.0,
    ease: "power2.out"
  }, "card2In")

  // Final hold of full stack before unpinning and normal scroll to next section
  .to({}, { duration: 0.6 });
}

/* --------------------------------------------------------------------------
   APPLICATION BOOTSTRAP
   -------------------------------------------------------------------------- */
function initApp() {
  initLenisAndGSAP();
  initNavbar();
  initLiveClock();
  initLoaderAndHeroAnimation();
  initHeroAnimations();
  initQuickStatsCountup();
  initServicesAccordion();
  initWorkTabs();
  initToolsSection();
  initJourneyTabs();
  initFaqAccordion();
  initTestimonialsSlider();
  initPodcastStackCards();
  initFavsHorizontalScroll();
  initLetterDetails();
  initScrollReveals();
  initClapperAnimation();
  initProcessCardsTilt();
  initMicroHoverEffects();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

window.addEventListener("load", () => {
  if (typeof window.ScrollTrigger !== "undefined") {
    window.ScrollTrigger.refresh();
  }
});


