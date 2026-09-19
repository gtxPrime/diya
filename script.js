/* ==========================================================================
   DIYA NATHWANI - EDITORIAL PORTFOLIO ENGINE (script.js)
   Fast, Lightweight, Modern Interactivity
   ========================================================================== */

// All verified project links to Google Docs, Drives & Videos
const LINKS = {
  "Zayke Ki Mehek": "https://drive.google.com/file/d/1kuxhdorkbKWSZykKaR9ighgdrjMovJYv/view",
  "Walls That Raised Us": "https://docs.google.com/document/d/1lSHOJPShvMnURQ8giRIUlkvf_QCHCecH8t2dMP7KHo4/edit",
  "City In A Frame": "https://docs.google.com/document/d/11RS1gev0TcPj8QUzv5wmP6pkhakjkK2Apy_ZxtaGvPM/edit",
  "Find The Faces": "https://drive.google.com/file/d/1nYYxb5wsK63dwNZx8IzCCW3vhPfbouLb/view",
  "Nukkad se Netflix": "https://drive.google.com/file/d/1HbjMqGhRyRqtpZjIl-KCqDCuULmCXeoq/view",
  "Taste of Home, Miles Away": "https://drive.google.com/drive/folders/1hvJRASC4WufmYvBfD_Zd1a7drNRaGPly",
  "Creator Revenue Architecture": "https://drive.google.com/file/d/1OYOlkAsARJA590fXT4afSlOg6k5bp-zv/view",
  "A multi-strategy walkthrough": "https://drive.google.com/file/d/11s2SEht5gFAAFqX_EFWLFAqvRYBRi31c/view",
  "Gamified event marketing": "https://drive.google.com/drive/folders/17Us0ImXZ63FRQdl4l6-_UkQW9OLLvyCt",
  "Homepage + ads, QA’d": "https://drive.google.com/drive/folders/1TC3Yju4A5a6E_W7GnsHGCAzr2FS0slRv",
  "The 3-volume brand": "https://drive.google.com/file/d/1tgPvaOq6cosSPPkM7ymIGH91WAPsG0E_/view",
  "The 3-second clarity test": "https://drive.google.com/drive/folders/1C7PGEbhwUPI8CkNnG_MPmHg4lTuxCGab",
  "Reviewer to lifestyle brand": "https://drive.google.com/file/d/1fVKVwgcHdNASVZ8z4Z8QOcwA8ks2AeR9/view",
  "Founder-led B2B": "https://drive.google.com/file/d/1joujAJCB8uWUgGWn0qIZHaZgcZd5a1BU/view",
  "Shock-math in 5 seconds": "https://drive.google.com/file/d/1gVJy_bCQokIhFTxXZb5i6A-M63xJmSSa/view",
  "2025 Ka Manhoos Saal": "https://drive.google.com/drive/folders/1NAKV8fSitW4o8rDf-HeVZrFgK2uUpvQN",
  "58K views and counting": "https://youtu.be/ZVm2Nn70GhY",
  "The 1-person AI business": "https://drive.google.com/drive/folders/1WH6ik-HagXk1IOeJH8jCBXts4_M6mOpe",
  "Pattern hunting": "https://drive.google.com/file/d/1G7misreeeOMDYT9aLNQ_SabCzce6O-Bz/view",
  "Talking reels, A to Z": "https://drive.google.com/drive/folders/1g75HOOpLrG7s2Uq1_5RDSzxTz2pLwoS4",
  "Dermatologist approved": "https://youtu.be/Rx0zd38S_bg",
  "300K+ readers a month": "https://www.instagram.com/consumerhealthdigest/",
  "Red carpet, 27.2K+ reads": "https://www.redlighttherapydigest.com/sydney-sweeney-skincare-solawave-wand",
  "The Invisible Architect": "https://docs.google.com/document/d/18tOTkpvnfTnMxvhCx2zQCopA1iOHqk7pzyjsVcfcwp8/edit",
  "Ansuni": "https://drive.google.com/file/d/1M7KQtme0oxFoKCjNsCF7Co6umuK4IjFv/view",
  "Breakthrough": "https://youtu.be/9L3ntS7tvsY",
  "Receipts Folder": "https://drive.google.com/drive/folders/1UPUKhps7blzQB9cj4gCmQ4e7HYytGAtA",
  "Full Portfolio Drive": "https://drive.google.com/drive/folders/1ntvhZC00VXg9IUcfs-eDVRhMMK0892JY"
};

// Curated 58 Works Dataset
const WORKS = [
  // Campaigns & Strategies
  { id: 1, cat: "campaigns", title: "Zayke Ki Mehek", client: "House of Biryan", tag: "GTM + Guerrilla", text: "Full go-to-market plan: market-culture fit, positioning, supply chain, a 60-90 day contribution margin & retention model, paired with a scent-led guerrilla campaign.", img: "assets/S3PWVBDW.jpg" },
  { id: 2, cat: "campaigns", title: "Walls That Raised Us", client: "Kukreja Builders, Nagpur", tag: "Launch + Storytelling", text: "Launch copy for Kukreja Paris City ('Redefining Royalty - brick by brick!') and a legacy campaign about the homes families grow up in. Selling belonging, not square feet.", img: "assets/JAEIEW3F.jpg" },
  { id: 3, cat: "campaigns", title: "City In A Frame", client: "Kohinoor Viva City, Pune", tag: "Experiential", text: "A future-visualisation photo booth putting buyers inside the view before the building exists. When you see it, you see yourself in it.", img: "assets/Z2XTUUWY.jpg" },
  { id: 4, cat: "campaigns", title: "Find The Faces", client: "Stars N Celebs", tag: "Creator Acquisition", text: "Campus creator hunt with college leaderboards and micro-influencer referral loops. Students became the recruiters.", img: "assets/Y56QNJNB.jpg" },
  { id: 5, cat: "campaigns", title: "Nukkad se Netflix", client: "Yashita Singh, Actress", tag: "Creative Concept", text: "A 14-page 'How to Enter Bollywood' concept: a documented struggle told as a street-play series, ending in a caravan premiere.", img: "assets/VEGWG6XZ.jpg" },
  { id: 6, cat: "campaigns", title: "Taste of Home, Miles Away", client: "Pristilo, Dubai", tag: "Social + UGC", text: "A 30-Day Dubai Fitness Challenge, a UGC concept for expat families and website stories. Linked to a ~42% sales lift.", img: "assets/HPZHSKX4.jpg" },
  { id: 7, cat: "campaigns", title: "Creator Revenue Architecture", client: "Own Framework", tag: "Diya Original", text: "A 7-stage system turning creators into brands that earn, starting from positioning. Built from watching too many talented people stay broke.", img: "assets/J4CIWBPV.jpg" },
  { id: 8, cat: "campaigns", title: "A multi-strategy walkthrough", client: "Web Content Strategy Deck", tag: "Strategy Deck", text: "Trend hijacking (Vanessa Hudgens and red light therapy), emotional pain scripts, repurposing, and Google trust signals.", img: "assets/WHMA2ALD.jpg" },
  { id: 9, cat: "campaigns", title: "Gamified event marketing", client: "CenturySoft", tag: "PR + Moment Marketing", text: "Gamified challenges, PR pushes, and moment-marketing campaigns that made a content company talk like a consumer brand.", img: "assets/IVDS5N3Y.jpg" },
  { id: 10, cat: "campaigns", title: "Homepage + ads, QA’d", client: "Goodman Creative", tag: "Web + Google Ads", text: "Homepage copy, Google Ads, and QA, walked through on screen recordings with Daniel Goodman.", img: "assets/A7LATOSQ.jpg" },
  { id: 11, cat: "campaigns", title: "Seek Ease", client: "Black Swan Co.", tag: "Mental Wellness App", text: "Content strategy for a mental wellness app idea. Runner-up at Spirit @ Parivartan '23, IIT Delhi.", img: "assets/FX3M2B7P.jpg" },
  { id: 12, cat: "campaigns", title: "Helter, but strategic", client: "Heltr Skeltr", tag: "Content Strategy", text: "Full content strategy pitched as an assignment. Proof that I do homework before anyone asks.", img: "assets/KCAWNZKI.jpg" },

  // Social & Reels
  { id: 13, cat: "social", title: "The 3-volume brand", client: "Varun Agarwal", tag: "Personal Brand System", text: "Perception audit, growth engine, and execution layer for the entrepreneur & author with 147K followers, 1M+ readers, and 4M+ Ink Talk views.", img: "assets/G66JJWFL.jpg" },
  { id: 14, cat: "social", title: "The 3-second clarity test", client: "Ayush Wadhwa / @101xFounders", tag: "Instagram Case Study", text: "Content study of why @101xFounders grew, built on my CTP framework (Clarity, Trust, Predictability) and borrowed authority of top founders.", img: "assets/BWFIZXH2.jpg" },
  { id: 15, cat: "social", title: "2025 Ka Manhoos Saal", client: "Melooha (Shark Tank India)", tag: "Paid Ads, Hinglish", text: "Hinglish reel and Meta ad scripts for an AI astrology app, built on emotional pain hooks. Linked to a ~38% conversion lift.", img: "assets/CLBWN37G.svg" },
  { id: 16, cat: "social", title: "58K views and counting", client: "Yash Garg (229K subs)", tag: "YouTube Scripts", text: "Wrote 'Joining Manipal in 2026? BEWARE!!' for Yash Garg: 58K+ views, #1 on his channel recent uploads, and top YouTube search result.", img: "assets/LWSRVUMP.jpg" },
  { id: 17, cat: "social", title: "The 1-person AI business", client: "Ansh Mehra / Cutting Edge", tag: "YouTube Script", text: "'Top 1-Person AI Businesses Sam Altman Bets Will Make You A Millionaire': research, structure, hook, and full video script.", img: "assets/URZPG72K.png" },
  { id: 18, cat: "social", title: "Talking reels, A to Z", client: "Vidhi Chotai", tag: "Reels Ideation & Script", text: "Ideation to execution for a creator: talking-reel scripts on the Barnum effect, brand color psychology, and word-of-mouth marketing.", img: "assets/TQLYGLA5.jpg" },
  { id: 19, cat: "social", title: "Shock-math in 5 seconds", client: "BigBrainCo (Ranveer Allahbadia)", tag: "Hook Script Analysis", text: "Why a hook failed, how to fix the first five seconds, and rewrite ideas that earn the next 55 seconds of retention.", img: "assets/MLLI7JCB.jpg" },

  // Articles & B2B SaaS
  { id: 20, cat: "articles", title: "300K+ readers a month", client: "Consumer Health Digest", tag: "Editorial + SEO", text: "Editorial and SEO for a flagship US health publication, leading a 12-writer team across India and the United States.", img: "assets/FZH72YH3.png" },
  { id: 21, cat: "articles", title: "B2B, but make it clear", client: "Pepper: Atlan, Portkey, Harness", tag: "B2B Tech Content", text: "Technical content, case studies, and positioning copy for AI and data infrastructure leaders through Pepper content agency.", img: "assets/EXBP3WGQ.jpg" },
  { id: 22, cat: "articles", title: "70+ pieces, one engine", client: "AMZ Ninja (Affinco)", tag: "E-Commerce SEO", text: "Amazon FBA guides, tool reviews, comparisons, pricing pages, and ROAS calculators. Behind 18% CTR and 22% sign-up growth.", img: "assets/57ZXC33Y.jpg" },
  { id: 23, cat: "articles", title: "Listicles, reviews, face-offs", client: "Affinco Network", tag: "B2B SaaS Articles", text: "Product reviews (Spocket, Perpetua, PiPiADS), comparisons (Helium 10 vs Quartile, Jungle Scout vs SmartScout), and keyword guides.", img: "assets/EBPWRWNU.jpg" },

  // Pop-Culture Copies
  { id: 24, cat: "pop", title: "It's not extra. It's brand personality.", client: "Pop-Culture Copy 01", tag: "Viral Copy", text: "Stop making boring content, sweetie. Distinct voice beats noise every single time.", img: "assets/QBL4NWX4.jpg" },
  { id: 25, cat: "pop", title: "Ek reel ki keemat tum kya jaano, client babu!", client: "Pop-Culture Copy 02", tag: "Bollywood x Marketing", text: "One high-performing reel can build a 6-figure pipeline if the funnel behind it is tight.", img: "assets/KZWLUR4V.jpg" },
  { id: 26, cat: "pop", title: "Arre O Sambha, kitne conversions the?", client: "Pop-Culture Copy 05", tag: "Performance Truth", text: "Reach se pet nahi bharta. Eyeballs without conversion is just vanity.", img: "assets/IMPFPCEZ.jpg" },

  // Podcasts
  { id: 27, cat: "podcast", title: "Jay Morzaria Episode", client: "Hosted by Diya", tag: "Podcast EP. 01", text: "Hosted Head of Creative at Voxxy Media, Ex-Creative Head at Rephrase.ai (Adobe) and architect of Fevicol's Ronaldo moment.", img: "assets/ROGAN5DQ.jpg" },
  { id: 28, cat: "podcast", title: "Naveen Yadav Episode", client: "Hosted by Diya", tag: "Podcast EP. 02", text: "Hosted verified cinema creator with 103K+ followers on Instagram and Prime Video collaborations.", img: "assets/3PFYJVTI.jpg" },
  { id: 29, cat: "podcast", title: "IITM BS Diaries", client: "Guest Appearance", tag: "Featured Guest", text: "Guest on creator economy, one-person businesses, event hosting to content strategist, and running Paradox fest.", img: "assets/UWIVCGZJ.jpg" }

];

// Testimonials Data with Authentic Avatars
const TESTIMONIALS = [
  {
    quote: "Diya showcased an unparalleled talent for converting highly technical content related to the water industry into an engaging body of work accessible to a wider, non-technical audience.",
    name: "Arohan Paul",
    role: "Data Scientist (GenAI, LLMs), Johnson Electric • NIT Rourkela",
    avatar: "assets/EJ3Z63ZL.jpg"
  },
  {
    quote: "As the leader of the content team, Diya demonstrated outstanding content management and strategic skills in handling events of significant scale.",
    name: "Aman Kankriya",
    role: "Assistant Manager, Hindustan Zinc • IIT Madras",
    avatar: "assets/BDFPTKB4.png"
  },
  {
    quote: "Diya is a gifted writer with a keen eye for detail and an impressive ability to craft compelling and engaging copy. Any team would be lucky to have her on board.",
    name: "Dev Khatri",
    role: "Brand & Graphics Designer, 30+ brands • IIT Madras '25",
    avatar: "assets/25RXL2TE.jpg"
  },
  {
    quote: "During our time working together, she consistently demonstrated creativity and a deep understanding of target audiences, effectively driving engagement and visibility.",
    name: "Aditya Jaiswal",
    role: "PhD Scholar, IIT Kanpur • Student Chair, ASCE India Symposium",
    avatar: "assets/GEXBO34H.jpg"
  },
  {
    quote: "While the project idea was initially mine, I must credit Diya for being the driving force behind its success. Her dedication and out-of-the-box thinking made our project stand out.",
    name: "Sharad Nathwani",
    role: "MBA, NIT Trichy '26 • DoMS Analytica Mentor",
    avatar: "assets/QT2KPLKW.jpg"
  },
  {
    quote: "She approaches every project with determination, creativity, and a strong commitment to meeting deadlines. Her ability to craft engaging, high-quality content sets her apart.",
    name: "Sagar Bhatt",
    role: "Client • Corporate Branding & Communications",
    avatar: "assets/CUQIYKNE.jpg"
  },
  {
    quote: "Formidable work ethic, excellent leader and team member.",
    name: "Ashwin Hebbar",
    role: "Product Engineer, AI (LLMs, GenAI, data science)",
    avatar: "assets/U2GNNM2M.jpg"
  },
  {
    quote: "Diya is an exceptional Content Strategist with a unique blend of creativity and analytical skills. Her ability to craft data-driven content strategies that align with business goals is remarkable.",
    name: "Piyush Badme",
    role: "Digital marketing expert, websites & organic growth for founders",
    avatar: "assets/HJR4GLLJ.jpg"
  }
];


// FAQs Data
const FAQS = [
  {
    q: "1. What kind of role are you looking for?",
    a: "Full-time content strategy, brand or editorial leadership roles in Mumbai or remote. I also take on select high-impact consulting projects with founders and brands."
  },
  {
    q: "2. Are you a writer or a strategist?",
    a: "Both, in that order of hours. I decide what should be said, why, and to whom—then I write it, brief it, or build the system and editorial team that ships it."
  },
  {
    q: "3. Which industries do you know deeply?",
    a: "Health, beauty and wellness (US publications), B2B SaaS and AI infrastructure, e-commerce, D2C food & hospitality, real estate, astrology, edtech, finance, and the creator economy."
  },
  {
    q: "4. Do you write in Hindi and Hinglish?",
    a: "Yes. Hinglish ad scripts and reel formats are among my best-performing work (e.g. Melooha Shark Tank campaign). I speak and write English, Hindi, Marathi, and Gujarati."
  },
  {
    q: "5. How do you use AI in your work?",
    a: "A lot, and carefully. I have trained LLMs (Soul AI Project Mercury), taught AI in Marketing to corporate teams, and use AI daily for research, outlines, and QA. The taste and judgment always stay human."
  },
  {
    q: "6. How do we start?",
    a: "Send me an email at diyanathwani.media@gmail.com with what you are working on. I usually reply with thoughtful questions before I reply with ideas."
  }
];

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderWorks("all", false);
  initWorksFilters();
  initWorksExpander();
  initTestimonials();
  initFaqAccordion();
  initModals();
  initCopyEmail();
});

// 1. Navbar Scroll Effect & Mobile Drawer
function initNavbar() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const links = document.querySelectorAll(".nav-link, .mobile-nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const closeMenu = () => {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        toggle.classList.add("open");
        menu.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  }

  if (overlay) overlay.addEventListener("click", closeMenu);

  links.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

// 2. Render Works Grid (6 by default, expandable to all)
let currentFilter = "all";
let isExpanded = false;

function renderWorks(category = "all", expanded = false) {
  const container = document.getElementById("worksGrid");
  if (!container) return;

  let filtered = category === "all" ? WORKS : WORKS.filter(w => w.cat === category);
  let displayed = expanded ? filtered : filtered.slice(0, 6);

  container.innerHTML = displayed.map(item => {
    const link = LINKS[item.title] || LINKS["Full Portfolio Drive"];
    return `
      <article class="work-card">
        <div class="work-card-media">
          <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='assets/EXFXM46A.jpg'">
        </div>
        <div class="work-card-content">
          <div>
            <span class="work-tag">${item.tag}</span>
            <h3 class="work-title">${item.title}</h3>
            <p class="work-client">${item.client}</p>
            <p class="work-desc">${item.text}</p>
          </div>
          <div class="work-action">
            <span>Explore Piece</span>
            <a href="${link}" target="_blank" rel="noopener noreferrer" class="case-link-btn" title="View Document">
              Open Doc ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const expandBtn = document.getElementById("expandWorksBtn");
  if (expandBtn) {
    if (filtered.length <= 6) {
      expandBtn.style.display = "none";
    } else {
      expandBtn.style.display = "inline-flex";
      expandBtn.innerHTML = expanded 
        ? `<span>Collapse View</span> <i>↑</i>` 
        : `<span>View All ${filtered.length} Works</span> <i>↓</i>`;
    }
  }
}

function initWorksFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderWorks(currentFilter, isExpanded);
    });
  });
}

function initWorksExpander() {
  const expandBtn = document.getElementById("expandWorksBtn");
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      renderWorks(currentFilter, isExpanded);
    });
  }
}

// 3. Testimonials Carousel
function initTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("prevTestBtn");
  const nextBtn = document.getElementById("nextTestBtn");
  const dotsContainer = document.getElementById("carouselDots");
  if (!track) return;

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="test-stars">★★★★★</div>
        <blockquote class="test-quote">"${t.quote}"</blockquote>
      </div>
      <div class="test-author-wrap">
        ${t.avatar ? `<img src="${t.avatar}" alt="${t.name}" class="test-avatar" loading="lazy" onerror="this.style.display='none'">` : ''}
        <div class="test-author-info">
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
    </div>
  `).join("");


  let currentIndex = 0;
  const getCardsPerView = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const updateCarousel = () => {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const cardWidth = track.children[0]?.offsetWidth || 300;
    const gap = 24;
    const shift = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${shift}px)`;

    // Update dots
    const totalDots = maxIndex + 1;
    if (dotsContainer) {
      dotsContainer.innerHTML = Array.from({ length: totalDots }).map((_, i) => `
        <span class="carousel-dot ${i === currentIndex ? 'active' : ''}" data-index="${i}"></span>
      `).join("");

      dotsContainer.querySelectorAll(".carousel-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          currentIndex = parseInt(dot.getAttribute("data-index"), 10);
          updateCarousel();
        });
      });
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      updateCarousel();
    });
  }

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
}

// 4. FAQ Accordion
function initFaqAccordion() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;

  container.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item ${i === 0 ? 'active' : ''}">
      <button class="faq-header" aria-expanded="${i === 0}">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-body">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-header").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isActive = item.classList.contains("active");

      // Close all other items
      container.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".faq-header").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// 5. Lore Letter Modal
function initModals() {
  const openLoreBtn = document.getElementById("openLoreBtn");
  const modal = document.getElementById("loreModal");
  const closeBtn = document.getElementById("closeLoreBtn");

  const openModal = () => {
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  if (openLoreBtn) openLoreBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// 6. Copy Email with Toast Notification
function initCopyEmail() {
  const copyBtns = document.querySelectorAll(".copy-email-trigger");
  const toast = document.getElementById("copyToast");
  const email = "diyanathwani.media@gmail.com";

  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        if (toast) {
          toast.classList.add("show");
          setTimeout(() => toast.classList.remove("show"), 2800);
        }
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}
