
//

// ⛔ защита страниц
if (window.location.pathname.includes("home")) {
  if (localStorage.getItem("access") !== "yes") {
    window.location.href = "index.html";
  }
}

// ⏳ Письма по дате
document.querySelectorAll(".letter[data-date]").forEach(el => {
  const openDate = new Date(el.dataset.date);
  const now = new Date();

  if (now >= openDate) {
    el.querySelector(".content").style.display = "block";
    el.querySelector("span").style.display = "none";
  }
});

// 🔄 Событийные письма
document.querySelectorAll(".event-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.parentElement;
    letter.querySelector(".content").style.display = "block";
    letter.querySelector("span").style.display = "none";
    btn.style.display = "none";
  });
});

// 🔊 Кнопка музыки
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = "⏸ Пауза";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Музыка";
  }
  isPlaying = !isPlaying;
});


// Закрытие по крестику
document.querySelectorAll('.close').forEach(span => {
  span.addEventListener('click', () => {
    span.parentElement.parentElement.style.display = 'none';
  });
});

// Закрытие при клике на фон
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if(e.target === modal) modal.style.display = 'none';
  });
});
const letters = document.querySelectorAll('.letter-btn');

const today = new Date().toISOString().split('T')[0];

document.querySelectorAll('.letter-btn[data-date]').forEach(btn => {
  const openDate = btn.dataset.date;

  if (today < openDate) {
    btn.disabled = true;
    btn.classList.add('locked');
    btn.title = `Можно открыть ${openDate}`;
  } else {
    btn.disabled = false;
    btn.classList.remove('locked');
  }
});
// ===== МУЗЫКА =====
const musicBtn = document.querySelector(".music-btn");
const audio = document.getElementById("click-sound");

musicBtn.addEventListener("click", () => {
  if(audio.paused){
    audio.play();
    musicBtn.textContent = "🔊"; // иконка включено
  } else {
    audio.pause();
    musicBtn.textContent = "🔇"; // иконка выключено
  }
});

// ===== МОДАЛКИ =====
const buttons = document.querySelectorAll(".letter-btn");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    document.getElementById(target).style.display = "block";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if(e.target === modal) modal.style.display = "none";
  });
});


