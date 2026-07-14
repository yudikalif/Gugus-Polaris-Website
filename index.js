<<<<<<< HEAD
// Populate ambient starfield
(function () {
  const field = document.getElementById("starfield");
  const count = 70;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    const size = (Math.random() * 1.8 + 1).toFixed(1);
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(1) + "s";
    s.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
    field.appendChild(s);
  }
})();

// Build seamless infinite marquee (duplicate list exactly once -> translateX(-50%))
const members = [
  { name: "Firman Wahyudi", handle: "@yukade" },
  { name: "M. Qais Humaidy", handle: "@qaaizzz_" },
  { name: "Naano Milky", handle: "@naanomilkyy" },
  { name: "April Lynn Widuri", handle: "@aprllynwdr" },
  { name: "Rina Yauma", handle: "@rn_yauma" },
  { name: "Bintang Polaris", handle: "@bintangpolaris" },
];

const track = document.getElementById("marqueeTrack");
const repeats = 4;
let html = "";
for (let r = 0; r < repeats; r++) {
  members.forEach((m) => {
    html += `<span class="pill"><span class="pill-name">${m.name}</span><br><span class="pill-handle">${m.handle}</span></span>`;
  });
}
track.innerHTML = html + html;
=======
(function () {
  const field = document.getElementById("starfield");
  const count = 70;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    const size = (Math.random() * 1.8 + 1).toFixed(1);
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(1) + "s";
    s.style.animationDelay = (Math.random() * 5).toFixed(1) + "s";
    field.appendChild(s);
  }
})();

const members = [
  {
    name: "Firman Wahyudi",
    handle: "@yukade",
    ig: "https://www.instagram.com/yukade_/",
  },
  { name: "Muhammad Rafasya Alfarizqi", handle: "@example", ig: "" },
  { name: "Zilmi Gaiza Ribki", handle: "@example", ig: "" },
  { name: "Khalid Rachman Asyakir", handle: "@example", ig: "" },
  { name: "Lalu Qoriul Hafiz", handle: "@example", ig: "" },
  { name: "Muhammad Danial Khoirul Ahzam", handle: "@example", ig: "" },
  { name: "Thoriq Andistyo Sya Bani", handle: "@example", ig: "" },
  { name: "Laudy Irnawan", handle: "@example", ig: "" },
  { name: "Sholiha Tsaltsa Putri", handle: "@example", ig: "" },
  { name: "Alisa Qistina Silva", handle: "@example", ig: "" },
  { name: "Siti Rahma Salsabila", handle: "@example", ig: "" },
  {
    name: "Aulia Arianti Ramdani",
    handle: "@ya.4y4",
    ig: "https://www.instagram.com/ya.4y4/",
  },
  { name: "Mazaya Raziqyah Afdal", handle: "@example", ig: "" },
  { name: "Harumi Ramadhani", handle: "@example", ig: "" },
  { name: "Yasmin Attiroh", handle: "@example", ig: "" },
  { name: "Hasna Huwaida Arifa Putri", handle: "@example", ig: "" },
];
const track = document.getElementById("marqueeTrack");
const repeats = 1;
let html = "";
for (let r = 0; r < repeats; r++) {
  members.forEach((m) => {
    html += `<span class="pill">
  <span class="pill-name">${m.name}</span><br>
  <a href="${m.ig}" target="_blank">
    <span class="pill-handle">${m.handle}</span>
  </a>
</span>`;
  });
}
track.innerHTML = html + html;

(function () {
  const video = document.getElementById("pentasVideo");
  const playBtn = document.getElementById("playPause");
  const skipBack = document.getElementById("skipBack");
  const skipForward = document.getElementById("skipForward");
  const fsBtn = document.getElementById("fullscreenBtn");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "⏸";
    } else {
      video.pause();
      playBtn.textContent = "▶";
    }
  });

  skipBack.addEventListener("click", () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
  });

  skipForward.addEventListener("click", () => {
    video.currentTime = Math.min(
      video.duration || Infinity,
      video.currentTime + 10,
    );
  });

  fsBtn.addEventListener("click", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } // Safari
  });

  video.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
})();
>>>>>>> 6fb3fbf (Add website files)
