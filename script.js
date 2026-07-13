/* ============================================================
   BIRTHDAY SURPRISE — JavaScript
   Mehjabin Alam Jeba · Single-page sequential screens
   ============================================================ */

/* ---------- CONFIG ---------- */
const BIRTHDAY_CONFIG = {
  day: 14,
  month: 7,
  year: 2001,
  birthDate: new Date(2001, 6, 14, 0, 0, 0), // 14 July 2001
};

// All photos in the jebuu folder
const PHOTOS = [
  { src: 'jebululu__2016-06-03T211427.000Z.jpg', title: 'A Beautiful Memory 💫', caption: 'So pretty, so glorious — always.' },
  { src: 'jebululu__2023-11-30T103952.000Z.jpg', title: 'Smiles & Sunshine ☀️', caption: 'Your glow is unmatched.' },
  { src: 'jebululu__2024-06-21T124805.000Z_2.jpg', title: 'Golden Moments ✨', caption: 'Every moment with you is special.' },
  { src: 'jebululu__2025-04-28T122427.000Z_2.jpg', title: 'Pretty & Proud 🌸', caption: 'You shine in every photo.' },
  { src: 'jebululu__2025-04-28T122427.000Z_3.jpg', title: 'Best Times 🎀', caption: 'Friendship at its finest.' },
  { src: 'jebululu__2025-06-11T154824.000Z_5.jpg', title: 'Glorious You 👑', caption: 'Absolutely stunning.' },
  { src: 'jebululu__2025-11-21T151400.000Z_1.jpg', title: 'Last Birthday 🎂', caption: 'Celebrating you, always.' },
  { src: 'jebululu__2025-11-21T151400.000Z_3.jpg', title: 'Birthday Glow 🎉', caption: 'Another year of being amazing.' },
  { src: 'jebululu__2026-06-09T180954.000Z.jpg', title: 'Recent Memory 📸', caption: 'Still as pretty as ever.' },
  { src: '488224061_3887175308216671_3888593028649257436_n.jpg', title: 'Sweet Moments 💜', caption: 'Captured forever.' },
  { src: '515504384_4035375186730015_5701522074386766929_n.jpg', title: 'Beautiful Soul 🤍', caption: 'Inside and out.' },
  { src: '554819618_4061827130751487_3500121555152980382_n.jpg', title: 'Lovely Jeba 🌺', caption: 'Pure joy in a picture.' },
  { src: '622290439_4177774889156710_9212457289438910390_n.jpg', title: 'Forever Friend 💖', caption: 'Grateful for you.' },
  { src: 'IMG_7969.jpg', title: 'Special Day 🎈', caption: 'Making memories together.' },
  { src: 'hennabloombykeya__2026-03-19T220229.000Z.webp', title: 'Elegant & Graceful ✨', caption: 'So glorious, so you.' },
];

// Gift items users can select — with image paths for hover glow preview
const GIFT_ITEMS = {
  cakes: [
    { id: 'choc-cake', emoji: '🎂', name: 'Chocolate Cake', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #5d4037, #3e2723)' },
    { id: 'red-velvet', emoji: '🍰', name: 'Red Velvet', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #c62828, #880e4f)' },
    { id: 'black-forest', emoji: '🎂', name: 'Black Forest', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #1a1a1a, #4a148c)' },
    { id: 'strawberry', emoji: '🍓', name: 'Strawberry Cake', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #ef5350, #f48fb1)' },
    { id: 'cupcake-set', emoji: '🧁', name: 'Cupcake Set', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #ff7043, #ffd700)' },
    { id: 'cheesecake', emoji: '🍮', name: 'Cheesecake', img: 'assets/gifts/choc-cake.svg', gradient: 'linear-gradient(135deg, #ffe082, #ffcc80)' },
  ],
  food: [
    { id: 'pizza', emoji: '🍕', name: 'Pizza', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ff7043, #e65100)' },
    { id: 'burger', emoji: '🍔', name: 'Burger', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ff8f00, #bf360c)' },
    { id: 'biryani', emoji: '🍛', name: 'Biryani', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ff6f00, #4e342e)' },
    { id: 'icecream', emoji: '🍦', name: 'Ice Cream', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #f48fb1, #fce4ec)' },
    { id: 'chocolate', emoji: '🍫', name: 'Chocolates', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #5d4037, #3e2723)' },
    { id: 'donut', emoji: '🍩', name: 'Donuts', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ff80ab, #c2185b)' },
    { id: 'coffee', emoji: '☕', name: 'Coffee Date', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #6d4c41, #3e2723)' },
    { id: 'sushi', emoji: '🍣', name: 'Sushi', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ef5350, #ffffff)' },
    { id: 'pasta', emoji: '🍝', name: 'Pasta', img: 'assets/gifts/pizza.svg', gradient: 'linear-gradient(135deg, #ffd700, #ff8f00)' },
  ],
  girls: [
    { id: 'flowers', emoji: '💐', name: 'Flowers', img: 'assets/gifts/flowers.svg', gradient: 'linear-gradient(135deg, #f48fb1, #ec407a)' },
    { id: 'perfume', emoji: '🌸', name: 'Perfume', img: 'assets/gifts/flowers.svg', gradient: 'linear-gradient(135deg, #ce93d8, #ab47bc)' },
    { id: 'makeup', emoji: '💄', name: 'Makeup Set', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #ef5350, #880e4f)' },
    { id: 'jewelry', emoji: '💍', name: 'Jewelry', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #ffd700, #ff8f00)' },
    { id: 'teddy', emoji: '🧸', name: 'Teddy Bear', img: 'assets/gifts/flowers.svg', gradient: 'linear-gradient(135deg, #d7ccc8, #a1887f)' },
    { id: 'handbag', emoji: '👜', name: 'Handbag', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #c62828, #1a1a1a)' },
    { id: 'dress', emoji: '👗', name: 'Pretty Dress', img: 'assets/gifts/flowers.svg', gradient: 'linear-gradient(135deg, #f48fb1, #7b1fa2)' },
    { id: 'hairclips', emoji: '🎀', name: 'Hair Clips', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #ef5350, #ffd700)' },
    { id: 'skincare', emoji: '🧴', name: 'Skincare Set', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #b2dfdb, #80cbc4)' },
    { id: 'heels', emoji: '👠', name: 'Heels', img: 'assets/gifts/makeup.svg', gradient: 'linear-gradient(135deg, #c62828, #ffd700)' },
  ],
  extras: [
    { id: 'movie-night', emoji: '🎬', name: 'Movie Night', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #1a1a1a, #c62828)' },
    { id: 'spa-day', emoji: '💆', name: 'Spa Day', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #b2dfdb, #ce93d8)' },
    { id: 'photo-shoot', emoji: '📸', name: 'Photo Shoot', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #ffd700, #f48fb1)' },
    { id: 'surprise-trip', emoji: '✈️', name: 'Surprise Trip', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #42a5f5, #7e57c2)' },
    { id: 'letter', emoji: '💌', name: 'Love Letter', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #fce4ec, #ef5350)' },
    { id: 'playlist', emoji: '🎵', name: 'Custom Playlist', img: 'assets/gifts/magic-sparkle.svg', gradient: 'linear-gradient(135deg, #ab47bc, #ef5350)' },
  ],
};

// Balloon wishes (8 balloons)
const BALLOON_WISHES = [
  'You shine brighter than the stars! ✨',
  'So pretty, so glorious — that\'s YOU! 💜',
  'May all your dreams come true this year 🌟',
  'You\'re the most amazing friend ever 🤍',
  'Stay fabulous, stay glorious, stay Jeba! 👑',
  'Wishing you endless happiness & love 🎀',
  'The world is lucky to have you in it 🌍',
  'Happy Birthday, beautiful Mehjabin! 🎂',
];

const BALLOON_COLORS = ['#ef5350', '#f48fb1', '#ce93d8', '#ffd700', '#ff7043', '#ec407a', '#ab47bc', '#e53935'];

/* ---------- STATE ---------- */
let currentScreen = 0;
const totalScreens = 5;
let surpriseMsgIndex = 0;
let galleryIndex = 0;
let galleryInterval = null;
let confettiActive = false;
let selectedGifts = new Set();
let musicPlaying = false;
let ageInterval = null;
let activeGiftTab = 'cakes';
let magicIntroAnimFrame = null;
let endingAnimFrame = null;
let endingPlayed = false;

const screens = document.querySelectorAll('.screen');
const progressDots = document.querySelectorAll('.progress-dot');
const envelope = document.getElementById('envelope');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const birthdayLetter = document.getElementById('birthdayLetter');
const openSurpriseBtn = document.getElementById('openSurpriseBtn');
const toPasswordBtn = document.getElementById('toPasswordBtn');
const toMemoriesBtn = document.getElementById('toMemoriesBtn');
const passwordForm = document.getElementById('passwordForm');
const passwordError = document.getElementById('passwordError');
const unlockOverlay = document.getElementById('unlockOverlay');
const musicToggle = document.getElementById('musicToggle');
const volumeSlider = document.getElementById('volumeSlider');
const bgMusic = document.getElementById('bgMusic');
const sparkleCanvas = document.getElementById('sparkleCanvas');
const confettiCanvas = document.getElementById('confettiCanvas');
const floatingHeartsContainer = document.getElementById('floatingHearts');
const balloonContainer = document.getElementById('balloonContainer');
const balloonWishPopup = document.getElementById('balloonWishPopup');
const balloonWishText = document.getElementById('balloonWishText');

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initAnimatedBg();
  initSparkles();
  initFloatingHearts();
  initBalloons();
  initEnvelope();
  initWishCards();
  initGallery();
  initGiftPopup();
  initPasswordGame();
  initNavigation();
  initMusic();
  initTimeline();
  initAgeCounter();
  initCandles();
  updateGiftFinalMessage();
  initEnding();

  // Autoplay music — tries on load + first click/touch
  tryAutoPlayMusic();
  ['click', 'touchstart', 'keydown'].forEach((evt) => {
    document.body.addEventListener(evt, tryAutoPlayMusic, { once: true });
  });
});

/* ---------- SCREEN NAVIGATION ---------- */
function goToScreen(index) {
  if (index < 0 || index >= totalScreens || index === currentScreen) return;

  screens[currentScreen].classList.remove('active');
  screens[currentScreen].classList.add('exit-left');

  screens[index].classList.add('active', 'enter-right');
  setTimeout(() => {
    screens[currentScreen].classList.remove('exit-left');
    screens[index].classList.remove('enter-right');
  }, 600);

  currentScreen = index;
  updateProgressDots();
  onScreenEnter(index);
}

function updateProgressDots() {
  progressDots.forEach((dot, i) => {
    dot.classList.remove('active', 'completed');
    if (i === currentScreen) dot.classList.add('active');
    else if (i < currentScreen) dot.classList.add('completed');
  });
}

function onScreenEnter(index) {
  if (index === 3) {
    startConfetti();
    startAgeCounter();
  } else {
    stopConfetti();
  }
  if (index === 4) {
    triggerClosingAnimation();
    updateGiftFinalMessage();
  }
}

function initNavigation() {
  progressDots.forEach((dot, i) => {
    dot.addEventListener('click', () => { if (i <= currentScreen) goToScreen(i); });
  });
  openSurpriseBtn.addEventListener('click', () => goToScreen(1));
  toPasswordBtn.addEventListener('click', () => goToScreen(2));
  toMemoriesBtn.addEventListener('click', () => goToScreen(4));
}

/* ---------- ENVELOPE ---------- */
function initEnvelope() {
  function openEnvelope() {
    envelope.classList.add('open');
    setTimeout(() => {
      envelopeWrapper.classList.add('hidden');
      birthdayLetter.classList.remove('hidden');
    }, 900);
  }
  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
  });
}

/* ---------- WISH CARDS ---------- */
function initWishCards() {
  document.querySelectorAll('.wish-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      // Gift card opens magic popup instead of normal flip
      if (card.dataset.card === '4') {
        if (e.target.closest('.gift-reopen-btn')) {
          e.stopPropagation();
          openGiftWithMagic();
          return;
        }
        if (!card.classList.contains('flipped')) {
          card.classList.add('flipped');
          setTimeout(() => openGiftWithMagic(), 400);
        } else {
          openGiftWithMagic();
        }
        return;
      }

      card.classList.toggle('flipped');
      if (card.dataset.card === '3' && card.classList.contains('flipped')) startGalleryAutoSlide();
      else if (card.dataset.card === '3') stopGalleryAutoSlide();
    });
  });

  const hiddenMsgs = document.querySelectorAll('.hidden-msg');
  document.getElementById('nextSurpriseMsg').addEventListener('click', (e) => {
    e.stopPropagation();
    hiddenMsgs[surpriseMsgIndex].classList.remove('show');
    surpriseMsgIndex = (surpriseMsgIndex + 1) % hiddenMsgs.length;
    hiddenMsgs[surpriseMsgIndex].classList.add('show');
  });
}

/* ---------- GIFT POPUP + MAGIC INTRO ---------- */
function initGiftPopup() {
  const overlay = document.getElementById('giftPopupOverlay');
  const closeBtn = document.getElementById('giftPopupClose');
  const doneBtn = document.getElementById('giftPopupDone');

  closeBtn.addEventListener('click', closeGiftPopup);
  doneBtn.addEventListener('click', closeGiftPopup);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeGiftPopup();
  });

  document.querySelectorAll('.gift-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      activeGiftTab = tab.dataset.tab;
      document.querySelectorAll('.gift-tab').forEach((t) => t.classList.toggle('active', t === tab));
      renderGiftOptions(activeGiftTab);
      hideGiftPreview();
    });
  });

  renderGiftOptions('cakes');
}

function openGiftWithMagic() {
  const intro = document.getElementById('giftMagicIntro');
  intro.classList.remove('hidden', 'fade-out');
  intro.classList.add('show');
  startMagicIntroParticles();

  setTimeout(() => {
    intro.classList.add('fade-out');
    stopMagicIntroParticles();
    setTimeout(() => {
      intro.classList.remove('show', 'fade-out');
      intro.classList.add('hidden');
      openGiftPopup();
    }, 500);
  }, 2200);
}

function openGiftPopup() {
  const overlay = document.getElementById('giftPopupOverlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('show'));
  renderGiftOptions(activeGiftTab);
  updateGiftCount();
  document.body.style.overflow = 'hidden';
}

function closeGiftPopup() {
  const overlay = document.getElementById('giftPopupOverlay');
  overlay.classList.remove('show');
  hideGiftPreview();
  setTimeout(() => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }, 500);
  updateGiftFinalMessage();
}

function renderGiftOptions(category) {
  const container = document.getElementById('giftHorizontalScroll');
  const items = GIFT_ITEMS[category] || [];
  container.innerHTML = '';

  items.forEach((item) => {
    const option = document.createElement('div');
    option.className = 'gift-option' + (selectedGifts.has(item.id) ? ' selected' : '');
    option.dataset.id = item.id;

    option.innerHTML = `
      <div class="gift-option-card" style="--gift-gradient: ${item.gradient}">
        <img class="gift-option-img" src="${item.img}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="gift-option-emoji" style="display:none">${item.emoji}</span>
        <span class="gift-option-name">${item.emoji} ${item.name}</span>
      </div>`;

    option.addEventListener('mouseenter', () => showGiftPreview(item));
    option.addEventListener('mouseleave', () => hideGiftPreview());
    option.addEventListener('click', () => toggleGiftSelection(option, item));

    container.appendChild(option);
  });
}

function showGiftPreview(item) {
  const preview = document.getElementById('giftHoverPreview');
  const img = document.getElementById('giftPreviewImg');
  const name = document.getElementById('giftPreviewName');

  img.src = item.img;
  img.alt = item.name;
  img.onerror = () => { img.style.display = 'none'; };
  img.style.display = '';
  name.textContent = `${item.emoji} ${item.name}`;
  preview.classList.add('visible');
  preview.setAttribute('aria-hidden', 'false');
}

function hideGiftPreview() {
  const preview = document.getElementById('giftHoverPreview');
  preview.classList.remove('visible');
  preview.setAttribute('aria-hidden', 'true');
}

function toggleGiftSelection(option, item) {
  option.classList.toggle('selected');
  if (option.classList.contains('selected')) selectedGifts.add(item.id);
  else selectedGifts.delete(item.id);
  updateGiftCount();
  updateGiftFinalMessage();
}

function updateGiftCount() {
  const n = selectedGifts.size;
  const text = n === 0 ? 'Hover & tap to select your gifts!' : `${n} gift${n > 1 ? 's' : ''} selected 💝`;
  const popupCount = document.getElementById('giftPopupCount');
  if (popupCount) popupCount.textContent = text;
}

function startMagicIntroParticles() {
  const canvas = document.getElementById('magicIntroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 100 }, () => ({
    x: canvas.width / 2 + (Math.random() - 0.5) * 100,
    y: canvas.height / 2 + (Math.random() - 0.5) * 100,
    vx: (Math.random() - 0.5) * 8,
    vy: (Math.random() - 0.5) * 8,
    size: Math.random() * 4 + 1,
    color: ['#ffd700', '#f48fb1', '#ce93d8', '#ef5350', '#ffffff'][Math.floor(Math.random() * 5)],
    life: 1,
    decay: Math.random() * 0.015 + 0.008,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach((p) => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.life -= p.decay;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.fill();

      // sparkle cross
      ctx.globalAlpha = p.life * 0.5;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x - p.size * 3, p.y);
      ctx.lineTo(p.x + p.size * 3, p.y);
      ctx.moveTo(p.x, p.y - p.size * 3);
      ctx.lineTo(p.x, p.y + p.size * 3);
      ctx.stroke();
    });

    ctx.globalAlpha = 1;
    if (alive) magicIntroAnimFrame = requestAnimationFrame(animate);
  }
  animate();
}

function stopMagicIntroParticles() {
  if (magicIntroAnimFrame) cancelAnimationFrame(magicIntroAnimFrame);
  const canvas = document.getElementById('magicIntroCanvas');
  if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function updateGiftFinalMessage() {
  const listEl = document.getElementById('giftFromList');
  if (!listEl) return;

  const allItems = [
    ...GIFT_ITEMS.cakes,
    ...GIFT_ITEMS.food,
    ...GIFT_ITEMS.girls,
    ...GIFT_ITEMS.extras,
  ];
  const picked = allItems.filter((item) => selectedGifts.has(item.id));

  if (picked.length === 0) {
    listEl.textContent = 'Pick your gifts on the Birthday Gift card — everything is from me! 💝';
    return;
  }

  listEl.innerHTML = picked.map((item) => `<span class="gift-tag">${item.emoji} ${item.name}</span>`).join(' ');
}

/* ---------- GALLERY ---------- */
function initGallery() {
  const slider = document.getElementById('gallerySlider');
  const dotsContainer = document.getElementById('galleryDots');

  PHOTOS.forEach((photo, i) => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.title;
    img.className = 'gallery-img' + (i === 0 ? ' active' : '');
    img.onerror = function () { this.src = 'assets/images/placeholder.svg'; };
    slider.appendChild(img);

    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Photo ${i + 1}`);
    dot.addEventListener('click', (e) => { e.stopPropagation(); showGallerySlide(i); });
    dotsContainer.appendChild(dot);
  });
}

function showGallerySlide(index) {
  document.querySelectorAll('.gallery-img').forEach((img, i) => img.classList.toggle('active', i === index));
  document.querySelectorAll('.gallery-dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
  galleryIndex = index;
}

function startGalleryAutoSlide() {
  stopGalleryAutoSlide();
  galleryInterval = setInterval(() => {
    galleryIndex = (galleryIndex + 1) % PHOTOS.length;
    showGallerySlide(galleryIndex);
  }, 3000);
}

function stopGalleryAutoSlide() {
  if (galleryInterval) { clearInterval(galleryInterval); galleryInterval = null; }
}

/* ---------- TIMELINE (all photos, bigger) ---------- */
function initTimeline() {
  const timeline = document.getElementById('memoryTimeline');
  PHOTOS.forEach((photo) => {
    const article = document.createElement('article');
    article.className = 'timeline-item';
    article.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card glass-card">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'">
        <h4>${photo.title}</h4>
        <p>${photo.caption}</p>
      </div>`;
    timeline.appendChild(article);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.timeline-item').forEach((item) => observer.observe(item));
}

/* ---------- PASSWORD (14 July) ---------- */
const ERROR_MESSAGES = [
  "Access denied! That's not the right date 🙈",
  "Hmm... try again! 14th of a special month 🔑",
  "Wrong! Think July 🎂",
  "Nope! Your birthday is the key 💻",
  "Error 404: Birthday not found 😅",
];
let errorIndex = 0;

function initPasswordGame() {
  passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const day = parseInt(document.getElementById('birthDay').value, 10);
    const month = parseInt(document.getElementById('birthMonth').value, 10);

    if (day === BIRTHDAY_CONFIG.day && month === BIRTHDAY_CONFIG.month) {
      passwordError.textContent = '';
      showUnlockAnimation();
    } else {
      passwordError.textContent = ERROR_MESSAGES[errorIndex++ % ERROR_MESSAGES.length];
    }
  });
}

function showUnlockAnimation() {
  unlockOverlay.classList.add('show');
  setTimeout(() => {
    unlockOverlay.classList.remove('show');
    goToScreen(3);
  }, 2500);
}

/* ---------- AGE COUNTER (14 July 2001) ---------- */
function initAgeCounter() {
  updateAgeDisplay();
}

function startAgeCounter() {
  if (ageInterval) return;
  updateAgeDisplay();
  ageInterval = setInterval(updateAgeDisplay, 1000);
}

function updateAgeDisplay() {
  const birth = BIRTHDAY_CONFIG.birthDate;
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }

  const diff = now - birth;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('ageYears', years);
  set('ageMonths', months);
  set('ageDays', days);
  set('ageHours', hours);
  set('ageMinutes', minutes);
  set('ageSeconds', seconds);
}

/* ---------- CANDLES (age-based: show mod 10 + extra for tens) ---------- */
function initCandles() {
  const list = document.getElementById('candleList');
  if (!list) return;
  const now = new Date();
  let age = now.getFullYear() - 2001;
  if (now.getMonth() < 6 || (now.getMonth() === 6 && now.getDate() < 14)) age--;
  const count = Math.min(Math.max(age, 1), 25);

  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.className = 'candle';
    li.innerHTML = '<div class="flame"></div>';
    list.appendChild(li);
  }
}

/* ---------- CONFETTI ---------- */
let confettiParticles = [];
let confettiAnimFrame = null;

function startConfetti() {
  if (confettiActive) return;
  confettiActive = true;
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const colors = ['#c62828', '#ffd700', '#f48fb1', '#ce93d8', '#ffffff', '#ef5350'];

  confettiParticles = Array.from({ length: 150 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -confettiCanvas.height,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * 360,
    spin: Math.random() * 6 - 3,
  }));

  function animate() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach((p) => {
      p.y += p.speed;
      p.x += Math.sin(p.angle * Math.PI / 180) * 1.5;
      p.angle += p.spin;
      if (p.y > confettiCanvas.height) { p.y = -20; p.x = Math.random() * confettiCanvas.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (confettiActive) confettiAnimFrame = requestAnimationFrame(animate);
  }
  animate();
}

function stopConfetti() {
  confettiActive = false;
  if (confettiAnimFrame) cancelAnimationFrame(confettiAnimFrame);
}

/* ---------- FLOATING BALLOONS (8, click to pop wish) ---------- */
function initBalloons() {
  BALLOON_WISHES.forEach((wish, i) => {
    const balloon = document.createElement('button');
    balloon.className = 'balloon';
    balloon.type = 'button';
    balloon.setAttribute('aria-label', 'Pop balloon for a wish');
    balloon.dataset.wish = wish;
    balloon.style.setProperty('--balloon-color', BALLOON_COLORS[i]);
    balloon.style.left = `${8 + i * 11}%`;
    balloon.style.animationDuration = `${6 + i * 0.8}s`;
    balloon.style.animationDelay = `${i * 0.5}s`;

    balloon.innerHTML = `
      <span class="balloon-body"></span>
      <span class="balloon-string"></span>`;

    balloon.addEventListener('click', () => popBalloon(balloon, wish));
    balloonContainer.appendChild(balloon);
  });
}

function popBalloon(balloon, wish) {
  if (balloon.classList.contains('popped')) return;
  balloon.classList.add('popped');

  // Pop particles
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('span');
    particle.className = 'pop-particle';
    particle.style.left = balloon.style.left;
    particle.style.top = balloon.offsetTop + 'px';
    particle.style.setProperty('--px', `${(Math.random() - 0.5) * 80}px`);
    particle.style.setProperty('--py', `${(Math.random() - 0.5) * 80}px`);
    particle.style.background = balloon.style.getPropertyValue('--balloon-color');
    balloonContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 600);
  }

  // Show wish popup
  balloonWishText.textContent = wish;
  balloonWishPopup.classList.remove('hidden');
  balloonWishPopup.classList.add('show');
  setTimeout(() => {
    balloonWishPopup.classList.remove('show');
    setTimeout(() => balloonWishPopup.classList.add('hidden'), 400);
  }, 3000);

  // Respawn balloon after delay
  setTimeout(() => {
    balloon.classList.remove('popped');
  }, 8000);
}

/* ---------- CLOSING ANIMATION ---------- */
function triggerClosingAnimation() {
  const container = document.getElementById('closingHearts');
  const hearts = ['🤍', '✨', '🎂', '🎀', '💜', '❤️', '🖤', '👑'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'closing-heart-burst';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      const angle = (Math.PI * 2 * i) / 20;
      const dist = 80 + Math.random() * 100;
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      heart.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }, i * 80);
  }
}

/* ---------- FINAL ENDING (One Last Time) ---------- */
function initEnding() {
  const btn = document.getElementById('endingBtn');
  const replayBtn = document.getElementById('endingReplayBtn');
  if (btn) btn.addEventListener('click', playFinalEnding);
  if (replayBtn) replayBtn.addEventListener('click', replayEnding);
}

function playFinalEnding() {
  if (endingPlayed) return;
  endingPlayed = true;

  const overlay = document.getElementById('endingOverlay');
  const replayBtn = document.getElementById('endingReplayBtn');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Curtains open to reveal ending text
  requestAnimationFrame(() => {
    overlay.classList.add('show', 'curtains-open');
    startEndingParticles();
    startConfetti();
  });

  // Curtains close gently after "The End"
  setTimeout(() => {
    overlay.classList.remove('curtains-open');
    overlay.classList.add('curtains-close');
  }, 7000);

  // Show replay button
  setTimeout(() => {
    replayBtn.classList.remove('hidden');
  }, 6500);
}

function replayEnding() {
  const overlay = document.getElementById('endingOverlay');
  const replayBtn = document.getElementById('endingReplayBtn');
  const lines = overlay.querySelectorAll('.ending-line, .ending-sparkle-divider, .ending-the-end');

  overlay.classList.remove('curtains-close', 'curtains-open', 'show');
  lines.forEach((el) => {
    el.style.animation = 'none';
    el.style.opacity = '0';
  });
  replayBtn.classList.add('hidden');
  stopEndingParticles();
  endingPlayed = false;
  document.body.style.overflow = '';

  setTimeout(() => {
    lines.forEach((el) => { el.style.animation = ''; el.style.opacity = ''; });
    playFinalEnding();
  }, 600);
}

function startEndingParticles() {
  const canvas = document.getElementById('endingCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2.5 + 0.5,
    speed: Math.random() * 0.4 + 0.1,
    drift: (Math.random() - 0.5) * 0.3,
    color: ['#ffd700', '#f48fb1', '#ce93d8', '#ffffff'][Math.floor(Math.random() * 4)],
    alpha: Math.random() * 0.6 + 0.2,
    pulse: Math.random() * 0.02 + 0.005,
    pulseDir: 1,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += p.drift;
      p.alpha += p.pulse * p.pulseDir;
      if (p.alpha > 0.8 || p.alpha < 0.1) p.pulseDir *= -1;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    endingAnimFrame = requestAnimationFrame(animate);
  }
  animate();
}

function stopEndingParticles() {
  if (endingAnimFrame) cancelAnimationFrame(endingAnimFrame);
  const canvas = document.getElementById('endingCanvas');
  if (canvas) canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

/* ---------- ANIMATED BG (gif-like, always on) ---------- */
function initAnimatedBg() {
  const canvas = document.getElementById('bgAnimCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6,
    color: ['#ef5350', '#f48fb1', '#ce93d8', '#ffd700', '#ffffff'][Math.floor(Math.random() * 5)],
    alpha: Math.random() * 0.5 + 0.2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- SPARKLES ---------- */
function initSparkles() {
  const ctx = sparkleCanvas.getContext('2d');
  sparkleCanvas.width = window.innerWidth;
  sparkleCanvas.height = window.innerHeight;
  const sparkles = Array.from({ length: 80 }, () => ({
    x: Math.random() * sparkleCanvas.width,
    y: Math.random() * sparkleCanvas.height,
    size: Math.random() * 2.5 + 0.5,
    opacity: Math.random(),
    speed: Math.random() * 0.02 + 0.005,
  }));

  function draw() {
    ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    sparkles.forEach((s) => {
      s.opacity += s.speed;
      if (s.opacity > 1 || s.opacity < 0) s.speed *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${Math.abs(s.opacity)})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    sparkleCanvas.width = window.innerWidth;
    sparkleCanvas.height = window.innerHeight;
  });
}

/* ---------- FLOATING HEARTS ---------- */
function initFloatingHearts() {
  const chars = ['💜', '🤍', '✨', '💖', '🎀', '❤️', '🖤'];
  setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = chars[Math.floor(Math.random() * chars.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    floatingHeartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }, 1500);
}

/* ---------- MUSIC (always playing) ---------- */
function initMusic() {
  bgMusic.volume = volumeSlider.value / 100;
  musicToggle.addEventListener('click', toggleMusic);
  volumeSlider.addEventListener('input', () => { bgMusic.volume = volumeSlider.value / 100; });
}

function tryAutoPlayMusic() {
  if (musicPlaying) return;
  bgMusic.play().then(() => {
    musicPlaying = true;
    musicToggle.classList.add('playing');
    document.querySelector('.music-label').textContent = 'Playing';
  }).catch(() => {
    document.querySelector('.music-label').textContent = 'Tap to play';
  });
}

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.classList.remove('playing');
    document.querySelector('.music-label').textContent = 'Paused';
  } else {
    bgMusic.play();
    musicPlaying = true;
    musicToggle.classList.add('playing');
    document.querySelector('.music-label').textContent = 'Playing';
  }
}

window.addEventListener('resize', () => {
  if (confettiCanvas) {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
});
