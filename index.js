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
  { name: "Muhammad Rafasya Alfarizqi", handle: "", ig: "" },
  { name: "Zilmi Gaiza Ribki", handle: "", ig: "" },
  { name: "Khalid Rachman Asyakir", handle: "", ig: "" },
  { name: "Lalu Qoriul Hafiz", handle: "", ig: "" },
  { name: "Muhammad Danial Khoirul Ahzam", handle: "", ig: "" },
  {
    name: "Thoriq Andistyo Sya Bani",
    handle: "@titoarzz",
    ig: "https://www.instagram.com/titoarzz/",
  },
  { name: "Laudy Irnawan", handle: "", ig: "" },
  { name: "Sholiha Tsaltsa Putri", handle: "", ig: "" },
  {
    name: "Alisa Qistina Silva",
    handle: "@alisa_qist",
    ig: "https://www.instagram.com/alisa_qist/",
  },
  { name: "Siti Rahma Salsabila", handle: "", ig: "" },
  {
    name: "Aulia Arianti Ramdani",
    handle: "@ya.4y4",
    ig: "https://www.instagram.com/ya.4y4/",
  },
  { name: "Mazaya Raziqyah Afdal", handle: "", ig: "" },
  {
    name: "Harumi Ramadhani",
    handle: "_harumirmdhni",
    ig: "https://www.instagram.com/_harumirmdhni/",
  },
  {
    name: "Yasmin Attiroh",
    handle: "@me_mey.24",
    ig: "https://www.instagram.com/me_mey.24/",
  },
  { name: "Hasna Huwaida Arifa Putri", handle: "", ig: "" },
];
const track = document.getElementById("marqueeTrack");
const repeats = 2;
let html = "";
for (let r = 0; r < repeats; r++) {
  members.forEach((m) => {
    html += `
    <span class="pill">
      <span class="pill-name">${m.name}</span><br>
      ${
        m.ig
          ? `<a href="${m.ig}" target="_blank" class="pill-handle">${m.handle}</a>`
          : `<span class="pill-handle">${m.handle}</span>`
      }
    </span>
  `;
  });
}
track.innerHTML = html;

(function () {
  const video = document.getElementById("pentasVideo");
  const playBtn = document.getElementById("playPause");
  const skipBack = document.getElementById("skipBack");
  const skipForward = document.getElementById("skipForward");
  const fsBtn = document.getElementById("fullscreenBtn");

  playBtn.addEventListener("click", async () => {
    try {
      if (video.paused) {
        await video.play();
        playBtn.textContent = "⏸";
      } else {
        video.pause();
        playBtn.textContent = "▶";
      }
    } catch (err) {
      console.error(err);
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
