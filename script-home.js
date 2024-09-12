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

for (let i = 1; i < 7; i++) {
      const dataProduct = [i];
      dataProduct.map(async (param) => {
            const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products/' + param + '.json')
            
            if (response.ok) {
                  console.log("Berhasil.");
                  const json = await response.json();
                  const productShop = document.querySelector(".d2");
                  const listProduct = document.createElement('div');
                  listProduct.className = 'list-product';
      
                  const pict = document.createElement("img");
                  pict.className = "gambar";
                  pict.src = json.image_link;
                  pict.title = json.id + '-' + json.product_type;
                  listProduct.appendChild(pict);
      
                  const titleProduct = document.createElement('h4');
                  titleProduct.className = 'nama-product';
                  titleProduct.textContent = json.name;
                  listProduct.appendChild(titleProduct);
      
                  const priceProduct = document.createElement('p');
                  priceProduct.className = 'harga-product';
                  priceProduct.textContent = '$' + json.price;
      
                  const buttonShopping = document.createElement('button');
                  buttonShopping.className = 'tombol-keranjang';
                  const iconShopping = document.createElement('i');
                  iconShopping.className = 'fa fa-shopping-cart';
                  buttonShopping.appendChild(iconShopping);
                  priceProduct.appendChild(buttonShopping);
                  listProduct.appendChild(priceProduct)
      
                  productShop.appendChild(listProduct);
            } else {
                  console.log("Ada masalah di backend.");
            }     
      })
}


const cari = document.querySelector('.fa-search')
cari = addEventListener('submit', () => {
      alert('Maap website munGlow belum bisa melakukan pencarian:)')
})