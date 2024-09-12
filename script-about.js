const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
}
searchBtn.onclick = () => {
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
}

const about = {
      nama: "munGlow",
      desc: "Go neutral or bold with our highly pigmented eyeshadows. Find your signature color or create a pro look with an expertly curated eyeshadow palette. Discover eyeshadow for brown eyes, blue eyes, and green eyes in matte and shimmery finishes. Our soft powders and velvety creams blend smoothly, making it easy to create any look."
}

const box = document.querySelector('.d13');

const texto = document.createElement('h1');
texto.textContent = about.nama;

const texti = document.createElement('p');
texti.textContent = about.desc;
box.appendChild(texto);
box.appendChild(texti);

const cari = document.querySelector('.fa-search')
cari = addEventListener('submit', () => {
      alert('Maap website munGlow belum bisa melakukan pencarian:)')
})