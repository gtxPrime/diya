/* ==========================================================================
   DIYA NATHWANI PORTFOLIO - CORE ENGINE (app.js)
   Lenis Smooth Scroll, GSAP Micro-Animations, and Complete Interactivity
   ========================================================================== */

import { drawers, services, journey, clientGroups, faqs, linkFor, ASSET_MAP } from './portfolio-data.js';

// Wait for DOM & libraries to load
document.addEventListener("DOMContentLoaded", () => {
  initLenisAndGSAP();
  initNavbar();
  initLiveClock();
  initLoaderAndHeroAnimation();
  initHeroAnimations();
  initQuickStatsCountup();
  initServicesAccordion();
  initWorkTabs();
  initJourneyTabs();
  initFaqAccordion();
  initTestimonialsSlider();
  initFavsCarousel();
  initLetterDetails();
  initScrollReveals();
  initMicroHoverEffects();
});

/* --------------------------------------------------------------------------
   1. LENIS SMOOTH SCROLL & GSAP SCROLLTRIGGER SYNC
   -------------------------------------------------------------------------- */
let lenis = null;

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
    if (window.gsap && loader) {
      window.gsap.to(loader, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          loader.style.display = "none";
          playHeroEntrance();
        }
      });
    } else {
      if (loader) loader.style.display = "none";
      playHeroEntrance();
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
   6. SERVICES ACCORDION (Interactive Expand/Collapse for all 6 items)
   -------------------------------------------------------------------------- */
function initServicesAccordion() {
  const servicesWrap = document.querySelector('.nk-services .nk-acc');
  if (!servicesWrap) return;

  // Build the complete accordion items from portfolio-data.js
  servicesWrap.innerHTML = services.map(([title, desc], idx) => {
    const isOpen = idx === 0;
    return `
      <div class="nk-acc-item ${isOpen ? 'is-open' : ''}" data-idx="${idx}">
        <button aria-expanded="${isOpen}" type="button">
          <span>${idx + 1}. ${escapeHtml(title)}</span>
          <i aria-hidden="true">${isOpen ? '−' : '+'}</i>
        </button>
        <p style="${isOpen ? 'max-height: 500px; opacity: 1; margin: 0 0 18px;' : 'max-height: 0; opacity: 0; margin: 0; overflow: hidden;'}">${escapeHtml(desc)}</p>
      </div>
    `;
  }).join('');

  // Attach interactive toggle handler
  servicesWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const item = btn.closest('.nk-acc-item');
    if (!item) return;

    const isOpen = item.classList.contains('is-open');
    const p = item.querySelector('p');
    const icon = item.querySelector('i');

    if (isOpen) {
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (icon) icon.textContent = '+';
      if (window.gsap) {
        window.gsap.to(p, { maxHeight: 0, opacity: 0, marginBottom: 0, duration: 0.35, ease: "power2.inOut" });
      } else {
        p.style.maxHeight = '0px';
        p.style.opacity = '0';
      }
    } else {
      // Close other items for single-open accordion feel
      servicesWrap.querySelectorAll('.nk-acc-item.is-open').forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('button').setAttribute('aria-expanded', 'false');
        const otherIcon = other.querySelector('i');
        if (otherIcon) otherIcon.textContent = '+';
        const otherP = other.querySelector('p');
        if (window.gsap) {
          window.gsap.to(otherP, { maxHeight: 0, opacity: 0, marginBottom: 0, duration: 0.35, ease: "power2.inOut" });
        } else {
          otherP.style.maxHeight = '0px';
          otherP.style.opacity = '0';
        }
      });

      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      if (icon) icon.textContent = '−';
      if (window.gsap) {
        window.gsap.to(p, { maxHeight: 500, opacity: 1, marginBottom: 18, duration: 0.45, ease: "power2.out" });
      } else {
        p.style.maxHeight = '500px';
        p.style.opacity = '1';
        p.style.marginBottom = '18px';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   7. WORK CATEGORY TABS & DYNAMIC RENDERING (All 7 categories)
   -------------------------------------------------------------------------- */
function initWorkTabs() {
  const tabsWrap = document.querySelector('.nk-work .nk-tabs');
  const piecesWrap = document.querySelector('.nk-work .nk-pieces');
  const blurbEl = document.querySelector('.nk-drawer-blurb');
  if (!tabsWrap || !piecesWrap) return;

  let currentKey = drawers[0].key;
  let isWorkExpanded = false;

  // Render drawer tabs dynamically to ensure proper sync
  tabsWrap.innerHTML = drawers.map((d, i) => `
    <button role="tab" aria-selected="${i === 0}" class="${i === 0 ? 'is-on' : ''}" data-key="${d.key}">
      ${escapeHtml(d.label)} (${d.pieces.length})
    </button>
  `).join('');

  // Prepare expand/collapse button container directly below the pieces grid
  let expandWrap = document.querySelector('.nk-work .nk-work-expand-wrap');
  if (!expandWrap) {
    expandWrap = document.createElement('div');
    expandWrap.className = 'nk-work-expand-wrap';
    piecesWrap.after(expandWrap);
  }

  function getConciseLimit(key) {
    return key === 'pop' ? 3 : 4;
  }

  // Function to render pieces for a category
  function renderDrawer(key, animateAll = true) {
    const drawer = drawers.find(d => d.key === key) || drawers[0];
    if (blurbEl) {
      blurbEl.textContent = drawer.blurb;
    }

    const limit = getConciseLimit(key);
    const hasMore = drawer.pieces.length > limit;
    const piecesToRender = (!isWorkExpanded && hasMore) 
      ? drawer.pieces.slice(0, limit) 
      : drawer.pieces;

    piecesWrap.innerHTML = piecesToRender.map((p, i) => {
      const issueNo = String(i + 1).padStart(2, '0');
      const href = linkFor(p.title);
      const imgSrc = resolveImage(p.img || p.title);
      const isLead = key !== 'pop' && i === 0;

      return `
        <article class="nk-piece ${isLead ? 'is-lead' : ''}">
          <div class="cv cv-photo">
            <img src="${imgSrc}" alt="${escapeHtml(p.title)} campaign cover" loading="lazy">
            <span class="cv-issue">No. ${issueNo}</span>
          </div>
          <div class="nk-piece-body">
            <p class="nk-piece-tag">${escapeHtml(p.tag || 'Strategy')}</p>
            <h3>${escapeHtml(p.title)}</h3>
            <p class="nk-piece-client">${escapeHtml(p.client || '')}</p>
            <p>${escapeHtml(p.text || '')}</p>
            <a class="nk-piece-link" href="${href}" target="_blank" rel="noopener noreferrer">See the work ↗</a>
          </div>
        </article>
      `;
    }).join('');

    // Render Expand / Collapse button if there are more pieces
    if (hasMore) {
      if (!isWorkExpanded) {
        expandWrap.innerHTML = `
          <button type="button" class="nk-work-expand-btn" id="workExpandToggle">
            <span>Explore all ${drawer.pieces.length} projects</span>
            <span class="nk-work-expand-icon" aria-hidden="true">↓</span>
          </button>
          <span class="nk-work-expand-badge">Showing ${limit} of ${drawer.pieces.length} projects in this drawer</span>
        `;
      } else {
        expandWrap.innerHTML = `
          <button type="button" class="nk-work-expand-btn is-collapsed-btn" id="workExpandToggle">
            <span>Show concise preview</span>
            <span class="nk-work-expand-icon" aria-hidden="true">↑</span>
          </button>
          <span class="nk-work-expand-badge">Showing all ${drawer.pieces.length} projects</span>
        `;
      }

      const expandBtn = expandWrap.querySelector('#workExpandToggle');
      if (expandBtn) {
        expandBtn.onclick = (e) => {
          e.preventDefault();
          isWorkExpanded = !isWorkExpanded;

          if (!isWorkExpanded) {
            // Collapsing: render concise and scroll back up to tabs smoothly
            renderDrawer(currentKey, false);
            scrollToTarget(tabsWrap, -85);
          } else {
            // Expanding: render all items and stagger animate
            renderDrawer(currentKey, true);
          }

          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
          if (lenis) lenis.resize();
        };
      }
    } else {
      expandWrap.innerHTML = '';
    }

    // Animate newly rendered cards with GSAP stagger
    if (window.gsap && animateAll) {
      window.gsap.fromTo(piecesWrap.querySelectorAll('.nk-piece'), 
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: "power2.out" }
      );
    }

    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    if (lenis) lenis.resize();
  }

  // Initial render of first category (concise by default)
  renderDrawer(currentKey, false);

  // Tab click listener: resets isWorkExpanded to false for concise default
  tabsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const key = btn.dataset.key;
    if (!key || key === currentKey) return;

    tabsWrap.querySelectorAll('button').forEach(b => {
      b.classList.remove('is-on');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-on');
    btn.setAttribute('aria-selected', 'true');

    currentKey = key;
    isWorkExpanded = false; // Always concise by default on tab switch
    renderDrawer(currentKey, true);
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
  if (!faqWrap) return;

  faqWrap.innerHTML = faqs.map(([q, a], idx) => {
    const isOpen = idx === 0;
    return `
      <div class="nk-acc-item ${isOpen ? 'is-open' : ''}">
        <button aria-expanded="${isOpen}" type="button">
          <span>${idx + 1}. ${escapeHtml(q)}</span>
          <i aria-hidden="true">${isOpen ? '−' : '+'}</i>
        </button>
        <p style="${isOpen ? 'max-height: 500px; opacity: 1; margin: 0 0 18px;' : 'max-height: 0; opacity: 0; margin: 0; overflow: hidden;'}">${escapeHtml(a)}</p>
      </div>
    `;
  }).join('');

  faqWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const item = btn.closest('.nk-acc-item');
    if (!item) return;

    const isOpen = item.classList.contains('is-open');
    const p = item.querySelector('p');
    const icon = item.querySelector('i');

    if (isOpen) {
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (icon) icon.textContent = '+';
      if (window.gsap) {
        window.gsap.to(p, { maxHeight: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      } else {
        p.style.maxHeight = '0px';
        p.style.opacity = '0';
      }
    } else {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      if (icon) icon.textContent = '−';
      if (window.gsap) {
        window.gsap.to(p, { maxHeight: 500, opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        p.style.maxHeight = '500px';
        p.style.opacity = '1';
      }
    }
  });
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
   IRL FAVS HORIZONTAL CAROUSEL SWIPE & DRAG (#rooms)
   -------------------------------------------------------------------------- */
function initFavsCarousel() {
  const row = document.querySelector('.st-row');
  if (!row) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener('mousedown', (e) => {
    isDown = true;
    row.classList.add('active');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });
  row.addEventListener('mouseleave', () => {
    isDown = false;
    row.classList.remove('active');
  });
  row.addEventListener('mouseup', () => {
    isDown = false;
    row.classList.remove('active');
  });
  row.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 1.5;
    row.scrollLeft = scrollLeft - walk;
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
  const clapBoard = document.querySelector('.mc-clap');
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
  if (clapBoard) {
    window.gsap.to(clapBoard, {
      rotate: -9,
      duration: 2.8,
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
