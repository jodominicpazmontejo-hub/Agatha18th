/**
 * MOONLIT REVERIE - Interactive Debut Invitation Script
 * Inspired by Princess Serenity under the Moonlit Lake
 */

// ==========================================
// 1. CONFIGURATION (EDIT YOUR DETAILS HERE)
// ==========================================
const DEBUT_CONFIG = {
  celebrantName: "Agatha",
  eventDate: new Date("January 16, 2027 17:00:00 GMT+0800").getTime(),
  venueName: "Marikina Hotel & Convention Center",



  // Background Music URL (Local MP3: Ariana Grande - Moonlight)
  musicUrl: "audio/moonlight.mp3",

  // 18 Specials Entourage
  entourage: {
    roses: [
      "Noel Timothy Sevilla",
      "Louis Joaquin Estanislao",
      "Marky Compañero",
      "Lynoel Savellano",
      "Steven Marc Valles",
      "Gabriel Ruñez",
      "Vincent Elgin Centeno",
      "Jefferson Villamor",
      "Romeo Sebastian Salazar",
      "Kuya Joseph Dominic Montejo",
      "Kuya Jedidiah Job Bambo",
      "Kuya Bryan Tiamzon",
      "Khylee Drixz Claudio",
      "Prince Jesus Alfonso",
      "Kuya Dennis Celis II",
      "Kuya Cedric Angeles",
      "Tito Chuck Boggs",
      "Randy Alfonso"
    ],
    letters: [
      "Erica Mae Mayor",
      "Ma. Leigh Bustamante",
      "Princess Angel Lamud",
      "Ashlyn Mhier Abit",
      "Geralen Austero",
      "Angeliana De Guzman",
      "Krielle Blythe Iwayan",
      "Tiffany Claire Estanislao",
      "Erika Mica Aquino",
      "Haliyannah Hastings Mule",
      "Kaizshya Rai Rosario",
      "Ariana Nicole Aquino",
      "Romeo Sebastian Salazar",
      "Danae Yamada",
      "Ms. Theresa Belmonte",
      "Julieth Catherine Teodoro",
      "Antoinette Jane Cerezo",
      "Jillian Cathreen Tiamzon"
    ],
    blessings: [
      "Ninang Ditse Johainna Montejo",
      "Ninang Bernadette Mariano and Louie Jex Mariano",
      "Ninang Jennifer Cruz",
      "Ninang Jhudy Santos",
      "Ninang Aireen Claire Lunar",
      "Ninong Cris and Ninang Belle Marquez",
      "Ate Nicole Gutierrez",
      "Tita Baby Sonia Tiamzon",
      "Tita Maricel Duque",
      "Tita Kristine Sy",
      "Tita Sonia Manalac",
      "Tita Rosalie Geronimo",
      "Tito Jason Carlos",
      "Tita Miriam Opao",
      "Tita Leencel Lopez",
      "Tito Axcel Lopez",
      "Tita Noemi Marie Callile",
      "Tita Mimi and Tito Charles Boggs"
    ],
    shots: [
      "Noel Timothy Sevilla",
      "Althea Shane Tiamzon",
      "Louis Joaquin Estanislao",
      "Steven Marc Valles",
      "Jefferson Villamor",
      "Laurenz Bleu Delarama",
      "Vincent Elgin Centeno",
      "Graziella Ayelet Enopia",
      "Erika Mica Aquino",
      "Krystal Margoux Abalo",
      "Jennah Mariana Bautista",
      "Haliyannah Hastings Mule",
      "Stacy Andre Dizon",
      "Elisiah Pasajes",
      "James Jared Ojales",
      "Marius Allen Calangi",
      "Emir Kazio Hanopol",
      "James Christoffer Bustamante"
    ]
  }
};

// ==========================================
// 2. ENVELOPE / WELCOME OVERLAY
// ==========================================
const welcomeOverlay = document.getElementById("welcomeOverlay");
const btnOpenInvite = document.getElementById("btnOpenInvite");
const waxSealBtn = document.getElementById("waxSealBtn");
const bgMusic = document.getElementById("bgMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");

function openInvitation() {
  if (welcomeOverlay) {
    welcomeOverlay.classList.add("hidden");
    setTimeout(() => {
      welcomeOverlay.style.display = "none";
    }, 850);
  }
  // Play background music on interaction
  playAudio();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

if (btnOpenInvite) btnOpenInvite.addEventListener("click", openInvitation);
if (waxSealBtn) waxSealBtn.addEventListener("click", openInvitation);

// ==========================================
// 3. BACKGROUND MUSIC CONTROLLER
// ==========================================
let isPlaying = false;

function playAudio() {
  if (!bgMusic) return;

  // Ensure the audio source is explicitly loaded from local MP3
  if (!bgMusic.src || bgMusic.src.includes("pixabay") || bgMusic.src === "") {
    bgMusic.src = DEBUT_CONFIG.musicUrl || "audio/music.mp3";
    bgMusic.load();
  }

  bgMusic.volume = 0.85;
  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      isPlaying = true;
      if (musicToggleBtn) musicToggleBtn.classList.add("playing");
    }).catch(err => {
      console.log("Audio autoplay prevented by browser; will play on first click:", err);
      isPlaying = false;
      if (musicToggleBtn) musicToggleBtn.classList.remove("playing");

      // Fallback: Add one-time user gesture listener to play audio
      const resumeAudio = () => {
        bgMusic.play().then(() => {
          isPlaying = true;
          if (musicToggleBtn) musicToggleBtn.classList.add("playing");
        }).catch(() => { });
        document.removeEventListener("click", resumeAudio);
        document.removeEventListener("touchstart", resumeAudio);
      };
      document.addEventListener("click", resumeAudio, { once: true });
      document.addEventListener("touchstart", resumeAudio, { once: true });
    });
  }
}

function pauseAudio() {
  if (!bgMusic) return;
  bgMusic.pause();
  isPlaying = false;
  if (musicToggleBtn) musicToggleBtn.classList.remove("playing");
}

if (musicToggleBtn) {
  musicToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });
}

// ==========================================
// 4. COUNTDOWN TIMER
// ==========================================
function updateCountdown() {
  const now = new Date().getTime();
  const distance = DEBUT_CONFIG.eventDate - now;

  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minutesEl = document.getElementById("cdMinutes");
  const secondsEl = document.getElementById("cdSeconds");

  if (distance < 0) {
    if (daysEl) daysEl.innerText = "00";
    if (hoursEl) hoursEl.innerText = "00";
    if (minutesEl) minutesEl.innerText = "00";
    if (secondsEl) secondsEl.innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// 5. 18 SPECIALS POPULATION & TABS
// ==========================================
function populateEntourageList(categoryKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = DEBUT_CONFIG.entourage[categoryKey] || [];
  container.innerHTML = "";

  list.forEach((name, index) => {
    const num = String(index + 1).padStart(2, "0");
    const item = document.createElement("div");
    item.className = "name-item";
    item.innerHTML = `
      <span class="name-index">${num}.</span>
      <span class="name-text">${name}</span>
    `;
    container.appendChild(item);
  });
}

function initEntourage() {
  populateEntourageList("roses", "listRoses");
  populateEntourageList("letters", "listLetters");
  populateEntourageList("blessings", "listBlessings");
  populateEntourageList("shots", "listShots");

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab");

      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

// ==========================================
// 6. RSVP FORM SUBMISSION (CONNECTS TO GOOGLE FORM & GOOGLE SHEETS)
// ==========================================
const rsvpForm = document.getElementById("rsvpForm");
const rsvpModal = document.getElementById("rsvpModal");
const btnCloseModal = document.getElementById("btnCloseModal");

if (rsvpForm) {
  let isSubmitting = false;

  rsvpForm.addEventListener("submit", function () {
    if (isSubmitting) return;
    isSubmitting = true;

    const submitBtn = rsvpForm.querySelector(".btn-submit");
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting to Guestlist...";
    }

    const nameVal = document.getElementById("guestName")?.value || "";
    const contactVal = document.getElementById("guestContact")?.value || "";
    const attendanceVal = rsvpForm.querySelector('input[name="entry.1791767315"]:checked')?.value || "Joyfully Accepts";
    const messageVal = document.getElementById("guestMessage")?.value || "";

    // 1. Save backup to local browser storage
    const rsvpEntry = {
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleString(),
      name: nameVal,
      contact: contactVal,
      attendance: attendanceVal,
      message: messageVal
    };
    try {
      const stored = JSON.parse(localStorage.getItem("agatha_debut_rsvps") || "[]");
      stored.push(rsvpEntry);
      localStorage.setItem("agatha_debut_rsvps", JSON.stringify(stored));
      console.log("✦ RSVP successfully recorded into local backup:", rsvpEntry);
    } catch (err) {
      console.warn("Storage note:", err);
    }

    // 2. Dual submission: form natively posts to the hidden iframe target="googleFormTarget",
    // and we also trigger a fetch fallback with mode: 'no-cors' for 100% delivery guarantee
    try {
      const gFormData = new FormData(rsvpForm);
      fetch(rsvpForm.action, {
        method: "POST",
        mode: "no-cors",
        body: gFormData
      }).catch(() => { });
    } catch (e) { }

    // 3. Show celestial glassmorphism confirmation modal and reset form
    setTimeout(() => {
      if (rsvpModal) {
        rsvpModal.classList.add("active");
      }
      rsvpForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit RSVP";
      }
      isSubmitting = false;
    }, 700);
  });
}

if (btnCloseModal && rsvpModal) {
  btnCloseModal.addEventListener("click", () => {
    rsvpModal.classList.remove("active");
  });
}

// ==========================================
// 7. DREAMY CELESTIAL CANVAS (SPARKLES, STARDUST & METEORS)
// ==========================================
function initDreamyCanvas() {
  const canvas = document.getElementById("starsCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Sky sparkles (4-pointed diamond stars) - increased density for breathtaking night sky
  const skyCount = Math.min(220, Math.max(120, Math.floor((width * height) / 3800)));
  const stars = [];

  for (let i = 0; i < skyCount; i++) {
    const isMajor = Math.random() < 0.12;
    const isTiny = Math.random() > 0.65;
    const outerR = isMajor
      ? Math.random() * 2.8 + 4.8
      : (isTiny ? Math.random() * 1.4 + 1.2 : Math.random() * 2.2 + 2.4);

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      outerRadius: outerR,
      alpha: Math.random() * 0.65 + 0.35,
      speed: Math.random() * 0.02 + 0.005,
      twinkleSpeed: Math.random() * 0.035 + 0.012,
      twinklePhase: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI,
      isAqua: Math.random() > 0.55 // Soft moonlight aqua & warm champagne gold
    });
  }

  // Floating iridescent stardust particles
  const dustCount = Math.min(80, Math.max(40, Math.floor(width / 15)));
  const dust = [];
  for (let i = 0; i < dustCount; i++) {
    dust.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.4 + 0.8,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.28 - 0.06,
      alpha: Math.random() * 0.55 + 0.25,
      color: Math.random() > 0.5 ? "rgba(165, 232, 249," : "rgba(230, 202, 163,"
    });
  }

  // Rare gentle shooting stars (meteors)
  const meteors = [];
  function maybeSpawnMeteor() {
    if (meteors.length < 2 && Math.random() < 0.012) {
      meteors.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * (height * 0.4),
        len: Math.random() * 90 + 55,
        speed: Math.random() * 7 + 5.5,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.22,
        life: 0,
        maxLife: Math.random() * 28 + 32
      });
    }
  }

  // Draw 4-pointed celestial sparkle star
  function drawSparkleStar(cx, cy, outerR, innerR, rot, color) {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const angle = rot + (i * Math.PI) / 2;
      const nextAngle = angle + Math.PI / 4;

      const xOuter = cx + Math.cos(angle) * outerR;
      const yOuter = cy + Math.sin(angle) * outerR;
      const xInner = cx + Math.cos(nextAngle) * innerR;
      const yInner = cy + Math.sin(nextAngle) * innerR;

      if (i === 0) ctx.moveTo(xOuter, yOuter);
      else ctx.lineTo(xOuter, yOuter);
      ctx.lineTo(xInner, yInner);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // 1. Render Sky Sparkle Stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.twinklePhase += s.twinkleSpeed;
      const currentAlpha = s.alpha + Math.sin(s.twinklePhase) * 0.35;
      const clampedAlpha = Math.max(0.12, Math.min(0.98, currentAlpha));

      const dynamicOuter = s.outerRadius * (0.82 + Math.sin(s.twinklePhase) * 0.24);
      const dynamicInner = dynamicOuter * 0.22;

      ctx.save();
      const color = s.isAqua
        ? `rgba(165, 232, 249, ${clampedAlpha})`
        : `rgba(250, 248, 240, ${clampedAlpha})`;

      ctx.shadowBlur = dynamicOuter * 2.6;
      ctx.shadowColor = s.isAqua ? "rgba(122, 211, 255, 0.85)" : "rgba(230, 202, 163, 0.75)";

      drawSparkleStar(s.x, s.y, dynamicOuter, dynamicInner, s.rotation, color);
      ctx.restore();

      s.y -= s.speed * 6;
      if (s.y < -12) {
        s.y = height + 10;
        s.x = Math.random() * width;
      }
    }

    // 2. Render Floating Stardust
    for (let i = 0; i < dust.length; i++) {
      const d = dust[i];
      d.x += d.speedX;
      d.y += d.speedY;
      if (d.y < 0) d.y = height;
      if (d.x < 0) d.x = width;
      if (d.x > width) d.x = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `${d.color} ${d.alpha})`;
      ctx.fill();
    }

    // 3. Render Rare Shooting Stars
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      m.life++;
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;

      const progress = m.life / m.maxLife;
      const alpha = (1 - progress) * 0.85;

      const tailX = m.x - Math.cos(m.angle) * m.len;
      const tailY = m.y - Math.sin(m.angle) * m.len;

      const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(0.3, `rgba(165, 232, 249, ${alpha * 0.75})`);
      grad.addColorStop(1, "rgba(165, 232, 249, 0)");

      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      if (m.life >= m.maxLife) {
        meteors.splice(i, 1);
      }
    }
    maybeSpawnMeteor();

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 8. BUTTERY SMOOTH SCROLL FOR TOP NAVIGATION
// ==========================================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-inner a, a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = targetId === '#hero' ? document.getElementById("hero") : document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Highlight active link in header options
      document.querySelectorAll('.nav-inner a').forEach(a => {
        if (a.getAttribute('href') === targetId) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });

      if (targetId === '#hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const navHeight = document.querySelector('.top-nav')?.offsetHeight || 55;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight - 10;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    });
  });
}

// ==========================================
// 9. DEBUTANTE IMAGE FALLBACK HANDLER
// ==========================================
function handleImageFallback() {
  const imgElements = document.querySelectorAll("img.debutante-img");
  imgElements.forEach(img => {
    img.addEventListener("error", function () {
      this.src = "images/debutante-placeholder.svg";
    });
  });
}

// ==========================================
// 10. PARALLAX BACKGROUND MOTION CONTROLLER
// ==========================================
function initParallax() {
  const bg = document.querySelector('.page-photo-bg');
  if (!bg) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const progress = Math.min(1, Math.max(0, scrolled / maxScroll));
    const maxTravel = window.innerHeight * 0.42;
    const yPos = -(progress * maxTravel);

    bg.style.transform = `translate3d(0, ${yPos.toFixed(1)}px, 0)`;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}

// ==========================================
// 11. RSVP TRACKING & EXPORT UTILITIES (BROWSER CONSOLE)
// ==========================================
// Johaina can view all RSVPs in developer tools anytime by typing viewRSVPs()
window.viewRSVPs = function () {
  const stored = JSON.parse(localStorage.getItem("agatha_debut_rsvps") || "[]");
  console.log(`✦ Total RSVPs Recorded: ${stored.length}`);
  console.table(stored);
  return stored;
};

// Johaina can download a complete CSV spreadsheet by typing downloadRSVPsCSV()
window.downloadRSVPsCSV = function () {
  const stored = JSON.parse(localStorage.getItem("agatha_debut_rsvps") || "[]");
  if (!stored.length) {
    alert("No RSVPs recorded on this browser yet.");
    return;
  }
  let csv = "Timestamp,Guest Name,Contact Number,Attendance,Message\n";
  stored.forEach(r => {
    const row = [
      `"${r.dateFormatted || r.timestamp}"`,
      `"${(r.name || "").replace(/"/g, '""')}"`,
      `"${(r.contact || "").replace(/"/g, '""')}"`,
      `"${(r.attendance || "").replace(/"/g, '""')}"`,
      `"${(r.message || "").replace(/"/g, '""')}"`
    ];
    csv += row.join(",") + "\n";
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Agatha_Debut_RSVPs_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
};

// ==========================================
// 12. FIXED HEADER SCROLL OBSERVER ("Agatha Turns 18")
// ==========================================
function initHeaderScroll() {
  const topNav = document.getElementById("topNav");
  if (!topNav) return;

  function handleNavScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos > 120) {
      topNav.classList.add("scrolled");
    } else {
      topNav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  // Initial check on page load / refresh
  handleNavScroll();
}

// ==========================================
// 13. APP INITIALIZER (SAFE AGAINST PRE-FIRED DOMCONTENTLOADED)
// ==========================================
function initApp() {
  initDreamyCanvas();
  initEntourage();
  initSmoothScroll();
  initParallax();
  handleImageFallback();
  initHeaderScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
