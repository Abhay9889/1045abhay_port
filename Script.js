// Create shooting stars
for (let i = 0; i < 5; i++) {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.top = Math.random() * 50 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(star);
}

// Enhanced floating particles
for (let i = 0; i < 30; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.width = (Math.random() * 6 + 2) + 'px';
  particle.style.height = particle.style.width;
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 20 + 's';
  particle.style.animationDuration = (15 + Math.random() * 10) + 's';
  document.body.appendChild(particle);
}

// Fun ASY Circle Interactions
const avatarCircle = document.getElementById('avatarCircle');
const animations = ['bounce', 'spin', 'shake', 'rainbow', 'explode', 'pulse-grow', 'flip', 'jello'];
const emojis = ['🎉', '✨', '🚀', '💫', '⭐', '🌟', '💥', '🎊', '🎈', '🔥', '☕', '🍃', '⚡', '💎', '🎯'];
const sounds = ['Woohoo!', 'Amazing!', 'Boom!', 'Awesome!', 'Cool!', 'Yeah!', 'Spring Boot!', 'Java Rocks!', 'Epic!', 'Nice!'];
let clickCount = 0;

function createEmojiExplosion(x, y) {
  for (let i = 0; i < 12; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-burst';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
    
    const angle = (i / 12) * Math.PI * 2;
    const distance = 100 + Math.random() * 50;
    emoji.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
    emoji.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
    
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
  }
}

function createConfetti(x, y) {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.animationDelay = Math.random() * 0.3 + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function showFloatingText(text, x, y) {
  const floatingText = document.createElement('div');
  floatingText.textContent = text;
  floatingText.style.position = 'fixed';
  floatingText.style.left = x + 'px';
  floatingText.style.top = y + 'px';
  floatingText.style.fontSize = '2rem';
  floatingText.style.fontWeight = 'bold';
  floatingText.style.color = 'var(--springboot)';
  floatingText.style.pointerEvents = 'none';
  floatingText.style.zIndex = '1000';
  floatingText.style.animation = 'floatUp 2s ease-out forwards';
  document.body.appendChild(floatingText);
  setTimeout(() => floatingText.remove(), 2000);
}

avatarCircle?.addEventListener('click', function(e) {
  clickCount++;
  const rect = this.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  animations.forEach(anim => this.classList.remove(anim));

  const randomAnim = animations[Math.floor(Math.random() * animations.length)];
  this.classList.add(randomAnim);

  if (clickCount % 5 === 0) {
    createConfetti(x, y);
  } else {
    createEmojiExplosion(x, y);
  }

  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  showFloatingText(randomSound, x, y - 50);

  const originalText = this.textContent;
  const funTexts = ['😎', '🤪', '🚀', '⚡', '🔥', '💎', '🎯', '☕', '🍃', '🎮', '🎨', '🌈'];
  this.textContent = funTexts[Math.floor(Math.random() * funTexts.length)];
  
  setTimeout(() => {
    this.textContent = originalText;
    this.classList.remove(randomAnim);
  }, 800);
});

// Enhanced Code Block Interactions
const codeBlock = document.getElementById('codeBlock');
let codeClickCount = 0;

codeBlock?.addEventListener('click', function() {
  codeClickCount++;

  if (codeClickCount % 3 === 0) {
    this.classList.add('matrix');
    setTimeout(() => this.classList.remove('matrix'), 500);
  } else {
    this.classList.add('code-highlight');
    setTimeout(() => this.classList.remove('code-highlight'), 500);
  }
});

// Typing effect
const roles = [
  "Full Stack Java Developer",
  "Spring Boot Expert",
  "Backend Developer (Spring Framework)",
  "Machine Learning Engineer",
  "Data Structures & Algorithms Specialist"
];

let roleIdx = 0;
let charIdx = 0;
const typingText = document.getElementById("typingText");

function type() {
  if (!typingText) return;
  const current = roles[roleIdx];
  if (charIdx <= current.length) {
    typingText.textContent = current.slice(0, charIdx);
    charIdx++;
  } else {
    setTimeout(() => erase(), 1500);
    return;
  }
  setTimeout(type, 80);
}

function erase() {
  const current = roles[roleIdx];
  if (charIdx >= 0) {
    typingText.textContent = current.slice(0, charIdx);
    charIdx--;
    setTimeout(erase, 40);
  } else {
    roleIdx = (roleIdx + 1) % roles.length;
    setTimeout(type, 300);
  }
}
type();

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "light") {
  document.body.classList.add("light");
}
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

// Scroll progress
const scrollProgress = document.getElementById("scrollProgress");
const scrollToTop = document.getElementById("scrollToTop");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  scrollProgress.style.width = scrolled + "%";

  if (scrollTop > 300) {
    scrollToTop.style.display = 'flex';
  } else {
    scrollToTop.style.display = 'none';
  }

  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

scrollToTop?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile nav
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
  });
});

// Filter projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || filter === category) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  })
);

// Counters
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function runCounters() {
  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 100));
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = current;
    }, 20);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        runCounters();
      }
    });
  },
  { threshold: 0.3 }
);

const countersSection = document.querySelector(".counters");
if (countersSection) observer.observe(countersSection);

// Copy code
const copyBtn = document.getElementById("copyCode");
const copyMsg = document.getElementById("copyMsg");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(codeBlock.textContent.trim());
    copyMsg.style.opacity = 1;
    setTimeout(() => (copyMsg.style.opacity = 0), 1500);
  } catch (err) {
    alert("Copy not supported in this browser.");
  }
});

// Sort visualizer
const barsContainer = document.getElementById("barsContainer");
const sortBtn = document.getElementById("sortBtn");

function createBars() {
  if (!barsContainer) return;
  barsContainer.innerHTML = "";
  const n = 20;
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    const value = Math.random() * 90 + 10;
    bar.style.height = value + "%";
    barsContainer.appendChild(bar);
  }
}

async function bubbleSortVisual() {
  const bars = barsContainer.querySelectorAll("div");
  const arr = Array.from(bars).map((bar) =>
    parseFloat(bar.style.height)
  );
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      bars[j].style.background = "#f97316";
      bars[j + 1].style.background = "#f97316";
      await new Promise((res) => setTimeout(res, 100));
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        bars[j].style.height = arr[j] + "%";
        bars[j + 1].style.height = arr[j + 1] + "%";
        swapped = true;
      }
      bars[j].style.background =
        "linear-gradient(to top, var(--accent), var(--springboot))";
      bars[j + 1].style.background =
        "linear-gradient(to top, var(--accent), var(--springboot))";
    }
    if (!swapped) break;
  }
}

sortBtn?.addEventListener("click", async () => {
  sortBtn.disabled = true;
  sortBtn.querySelector('span').textContent = '⏳ Sorting...';
  createBars();
  await new Promise((res) => setTimeout(res, 300));
  await bubbleSortVisual();
  sortBtn.disabled = false;
  sortBtn.querySelector('span').textContent = '▶️ Visualize Sort';
});

createBars();

// ============ TIC TAC TOE GAME ============
let ticTacBoard = ['', '', '', '', '', '', '', '', ''];
let ticTacCurrentPlayer = 'X';
let ticTacGameActive = true;

const ticTacCells = document.querySelectorAll('.game-cell');
const ticTacStatus = document.getElementById('ticTacStatus');
const ticTacResetBtn = document.getElementById('ticTacReset');

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

function handleTicTacClick(e) {
  const cell = e.target;
  const index = parseInt(cell.dataset.cell);

  if (ticTacBoard[index] !== '' || !ticTacGameActive) return;

  ticTacBoard[index] = ticTacCurrentPlayer;
  cell.textContent = ticTacCurrentPlayer;
  cell.classList.add(ticTacCurrentPlayer.toLowerCase());

  checkTicTacResult();
}

function checkTicTacResult() {
  let roundWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (ticTacBoard[a] && ticTacBoard[a] === ticTacBoard[b] && ticTacBoard[a] === ticTacBoard[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    ticTacStatus.textContent = `Player ${ticTacCurrentPlayer} Wins! 🎉`;
    ticTacGameActive = false;
    createConfetti(window.innerWidth / 2, window.innerHeight / 2);
    return;
  }

  if (!ticTacBoard.includes('')) {
    ticTacStatus.textContent = "It's a Draw! 🤝";
    ticTacGameActive = false;
    return;
  }

  ticTacCurrentPlayer = ticTacCurrentPlayer === 'X' ? 'O' : 'X';
  ticTacStatus.textContent = `Player ${ticTacCurrentPlayer}'s Turn`;
}

function resetTicTac() {
  ticTacBoard = ['', '', '', '', '', '', '', '', ''];
  ticTacCurrentPlayer = 'X';
  ticTacGameActive = true;
  ticTacStatus.textContent = "Player X's Turn";
  ticTacCells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}

ticTacCells.forEach(cell => cell.addEventListener('click', handleTicTacClick));
ticTacResetBtn?.addEventListener('click', resetTicTac);

// ============ MEMORY CARD GAME ============
const memoryEmojis = ['☕', '🍃', '🚀', '⚡', '💎', '🎯', '🔥', '🌟'];
let memoryCards = [...memoryEmojis, ...memoryEmojis];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;

const memoryBoard = document.getElementById('memoryBoard');
const memoryMovesEl = document.getElementById('memoryMoves');
const memoryResetBtn = document.getElementById('memoryReset');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createMemoryBoard() {
  memoryCards = shuffleArray([...memoryEmojis, ...memoryEmojis]);
  memoryBoard.innerHTML = '';
  memoryFlipped = [];
  memoryMatched = [];
  memoryMoves = 0;
  memoryMovesEl.textContent = '0';

  memoryCards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    
    const front = document.createElement('div');
    front.className = 'card-front';
    front.textContent = emoji;
    
    const back = document.createElement('div');
    back.className = 'card-back';
    back.textContent = '?';
    
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', flipMemoryCard);
    memoryBoard.appendChild(card);
  });
}

function flipMemoryCard(e) {
  const card = e.currentTarget;
  const index = parseInt(card.dataset.index);

  if (memoryFlipped.length === 2 || memoryFlipped.includes(index) || memoryMatched.includes(index)) {
    return;
  }

  card.classList.add('flipped');
  memoryFlipped.push(index);

  if (memoryFlipped.length === 2) {
    memoryMoves++;
    memoryMovesEl.textContent = memoryMoves;
    checkMemoryMatch();
  }
}

function checkMemoryMatch() {
  const [first, second] = memoryFlipped;
  const cards = document.querySelectorAll('.memory-card');

  if (memoryCards[first] === memoryCards[second]) {
    memoryMatched.push(first, second);
    cards[first].classList.add('matched');
    cards[second].classList.add('matched');
    memoryFlipped = [];

    if (memoryMatched.length === memoryCards.length) {
      setTimeout(() => {
        alert(`🎉 Congratulations! You won in ${memoryMoves} moves!`);
        createConfetti(window.innerWidth / 2, window.innerHeight / 2);
      }, 500);
    }
  } else {
    setTimeout(() => {
      cards[first].classList.remove('flipped');
      cards[second].classList.remove('flipped');
      memoryFlipped = [];
    }, 1000);
  }
}

memoryResetBtn?.addEventListener('click', createMemoryBoard);
createMemoryBoard();

// ============ NUMBER GUESSING GAME ============
let guessTarget = Math.floor(Math.random() * 100) + 1;
let guessAttempts = 0;

const guessInput = document.getElementById('guessInput');
const guessFeedback = document.getElementById('guessFeedback');
const guessAttemptsEl = document.getElementById('guessAttempts');
const guessBtn = document.getElementById('guessBtn');
const guessResetBtn = document.getElementById('guessReset');

function makeGuess() {
  const guess = parseInt(guessInput.value);
  
  if (!guess || guess < 1 || guess > 100) {
    guessFeedback.textContent = 'Please enter a number between 1 and 100!';
    guessFeedback.style.color = 'var(--danger)';
    return;
  }

  guessAttempts++;
  guessAttemptsEl.textContent = guessAttempts;

  if (guess === guessTarget) {
    guessFeedback.textContent = `🎉 Correct! You guessed it in ${guessAttempts} attempts!`;
    guessFeedback.style.color = 'var(--springboot)';
    guessInput.disabled = true;
    guessBtn.disabled = true;
    createConfetti(window.innerWidth / 2, window.innerHeight / 2);
  } else if (guess < guessTarget) {
    guessFeedback.textContent = '📈 Too low! Try a higher number.';
    guessFeedback.style.color = 'var(--accent)';
  } else {
    guessFeedback.textContent = '📉 Too high! Try a lower number.';
    guessFeedback.style.color = 'var(--accent)';
  }

  guessInput.value = '';
  guessInput.focus();
}

function resetGuessGame() {
  guessTarget = Math.floor(Math.random() * 100) + 1;
  guessAttempts = 0;
  guessAttemptsEl.textContent = '0';
  guessFeedback.textContent = 'Make your first guess!';
  guessFeedback.style.color = 'var(--muted)';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.focus();
}

guessBtn?.addEventListener('click', makeGuess);
guessInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') makeGuess();
});
guessResetBtn?.addEventListener('click', resetGuessGame);

// ============ SIMON SAYS GAME ============
let simonSequence = [];
let simonPlayerSequence = [];
let simonLevel = 1;
let simonGameActive = false;

const simonColors = ['red', 'blue', 'green', 'yellow'];
const simonButtons = {
  red: document.getElementById('simonRed'),
  blue: document.getElementById('simonBlue'),
  green: document.getElementById('simonGreen'),
  yellow: document.getElementById('simonYellow')
};
const simonLevelEl = document.getElementById('simonLevel');
const simonStartBtn = document.getElementById('simonStart');

function flashSimonButton(color) {
  const button = simonButtons[color];
  button.style.opacity = '1';
  button.style.transform = 'scale(1.1)';
  
  setTimeout(() => {
    button.style.opacity = '0.7';
    button.style.transform = 'scale(1)';
  }, 400);
}

async function playSimonSequence() {
  simonGameActive = false;
  
  for (let color of simonSequence) {
    await new Promise(resolve => setTimeout(resolve, 600));
    flashSimonButton(color);
    await new Promise(resolve => setTimeout(resolve, 400));
  }
  
  simonGameActive = true;
}

function nextSimonLevel() {
  simonPlayerSequence = [];
  const randomColor = simonColors[Math.floor(Math.random() * simonColors.length)];
  simonSequence.push(randomColor);
  simonLevelEl.textContent = simonLevel;
  playSimonSequence();
}

function handleSimonClick(color) {
  if (!simonGameActive) return;
  
  flashSimonButton(color);
  simonPlayerSequence.push(color);
  
  const currentIndex = simonPlayerSequence.length - 1;
  
  if (simonPlayerSequence[currentIndex] !== simonSequence[currentIndex]) {
    alert(`Game Over! You reached level ${simonLevel}. Try again!`);
    resetSimonGame();
    return;
  }
  
  if (simonPlayerSequence.length === simonSequence.length) {
    simonLevel++;
    setTimeout(nextSimonLevel, 1000);
  }
}

function resetSimonGame() {
  simonSequence = [];
  simonPlayerSequence = [];
  simonLevel = 1;
  simonGameActive = false;
  simonLevelEl.textContent = '1';
  simonStartBtn.querySelector('span').textContent = '▶️ Start Game';
}

function startSimonGame() {
  resetSimonGame();
  simonStartBtn.querySelector('span').textContent = '🎮 Playing...';
  setTimeout(nextSimonLevel, 500);
}

simonStartBtn?.addEventListener('click', startSimonGame);

Object.keys(simonButtons).forEach(color => {
  simonButtons[color]?.addEventListener('click', () => handleSimonClick(color));
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm?.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.querySelector('span').textContent;
  
  submitBtn.disabled = true;
  submitBtn.querySelector('span').textContent = '⏳ Sending...';

  emailjs.sendForm('service_aabh9889', 'template_9w48p7u', this)
    .then(() => {
      formMsg.className = 'form-msg success';
      formMsg.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
      contactForm.reset();
      submitBtn.querySelector('span').textContent = '✅ Sent!';
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = originalText;
        formMsg.className = 'form-msg';
        formMsg.textContent = '';
      }, 5000);
    }, (error) => {
      formMsg.className = 'form-msg error';
      formMsg.textContent = '❌ Failed to send. Please email me directly at: ay9526194@gmail.com';
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = originalText;
    });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
