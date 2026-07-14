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
