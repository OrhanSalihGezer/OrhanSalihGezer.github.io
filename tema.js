const toggleBtn = document.getElementById("themeToggle");

// ===== SAYFA AÇILINCA =====
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
} else if (savedTheme === "light") {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
} else {
    // Daha önce seçim yoksa → saate göre ayarla
    applyAutoTheme();
}

// ===== BUTON TIKLAMA =====
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.add("rotate");

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

    setTimeout(() => {
        toggleBtn.classList.remove("rotate");
    }, 600);
});
let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    // En az 80px kaydırma şart
    if (Math.abs(diff) > 80) {
        toggleBtn.classList.add("rotate");

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            toggleBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }

        setTimeout(() => {
            toggleBtn.classList.remove("rotate");
        }, 600);
    }
});
