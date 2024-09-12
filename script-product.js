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



for (let i = 1; i < 49; i++) {
      const dataProduct = [i];
      dataProduct.map(async (param) => {
            const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products/' + param + '.json')

            if (response.ok) {
                  console.log("Berhasil.");
                  const json = await response.json();
                  const productShop = document.querySelector(".d7");
                  const listProduct = document.createElement('div');
                  listProduct.className = 'list-product-2';

                  const pict = document.createElement("img");
                  pict.className = "gambar-2";
                  pict.src = json.image_link;
                  pict.title = json.id + '-' + json.product_type;
                  listProduct.appendChild(pict);

                  const titleProduct = document.createElement('h4');
                  titleProduct.className = 'nama-product-2';
                  titleProduct.textContent = json.name;
                  listProduct.appendChild(titleProduct);

                  const priceProduct = document.createElement('p');
                  priceProduct.className = 'harga-product-2';
                  priceProduct.textContent = '$' + json.price;

                  const buttonShopping = document.createElement('button');
                  buttonShopping.className = 'tombol-keranjang-2';
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

for (let i = 395; i < 413; i++) {
      const dataProduct = [i];
      dataProduct.map(async (param) => {
            const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products/' + param + '.json')

            if (response.ok) {
                  console.log("Berhasil.");
                  const json = await response.json();
                  const productShop = document.querySelector(".d9");
                  const listProduct = document.createElement('div');
                  listProduct.className = 'list-product-3';

                  const pict = document.createElement("img");
                  pict.className = "gambar-3";
                  pict.src = json.image_link;
                  pict.title = json.id + '-' + json.product_type;
                  listProduct.appendChild(pict);

                  const titleProduct = document.createElement('h4');
                  titleProduct.className = 'nama-product-3';
                  titleProduct.textContent = json.name;
                  listProduct.appendChild(titleProduct);

                  const priceProduct = document.createElement('p');
                  priceProduct.className = 'harga-product-3';
                  priceProduct.textContent = '$' + json.price;

                  const buttonShopping = document.createElement('button');
                  buttonShopping.className = 'tombol-keranjang-3';
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

for (let i = 467; i < 497; i++) {
      if (i === 482) {
            i++;
      }
      const dataProduct = [i];
      dataProduct.map((param) => {
            fetch('https://makeup-api.herokuapp.com/api/v1/products/' + param + '.json')
                  .then((response) => {
                        if (response.ok) {
                              console.log("Berhasil.");
                              return response.json();
                        }
                        throw new Error('Ada masalah di backend.');
                  })
                  .then((json) => {

                        const productShop = document.querySelector(".d11");
                        const listProduct = document.createElement('div');
                        listProduct.className = 'list-product-4';

                        const pict = document.createElement("img");
                        pict.className = "gambar-4";
                        pict.src = json.image_link;
                        pict.title = json.id + '-' + json.product_type;
                        listProduct.appendChild(pict);

                        const titleProduct = document.createElement('h4');
                        titleProduct.className = 'nama-product-4';
                        titleProduct.textContent = json.name;
                        listProduct.appendChild(titleProduct);

                        const priceProduct = document.createElement('p');
                        priceProduct.className = 'harga-product-4';
                        priceProduct.textContent = '$' + json.price;

                        const buttonShopping = document.createElement('button');
                        buttonShopping.className = 'tombol-keranjang-4';
                        const iconShopping = document.createElement('i');
                        iconShopping.className = 'fa fa-shopping-cart';
                        buttonShopping.appendChild(iconShopping);
                        priceProduct.appendChild(buttonShopping);
                        listProduct.appendChild(priceProduct)

                        productShop.appendChild(listProduct);
                  })
                  .catch((error) => {
                        console.log(error)
                  });
      }
      )
}

const cari = document.querySelector('.fa-search')
cari = addEventListener('submit', () => {
      alert('Maap website munGlow belum bisa melakukan pencarian:)')
})