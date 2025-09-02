let menu = document.querySelector(".menu");
let menuList = document.querySelector(".menu-list");
let closeMenu = document.querySelector(".close-menu");
let product = document.querySelectorAll(".product");
let shopCar=document.querySelector('.shop');
let modalCar=document.querySelector('.cart');
let spanCounter = document.querySelector('.counter');
let productosArr = [];
let counter=0;

menu.addEventListener("click", () => {
  menuList.classList.add("show-menu");
});

closeMenu.addEventListener("click", () => {
  menuList.classList.remove("show-menu");
});


const renderCart = () => {
   modalCar.querySelectorAll(".cart-item").forEach(item => item.remove());

   productosArr.forEach((prod, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="cart-item__image">
        <img src="${prod.img}" alt="${prod.title}" />
      </div>
      <p class="cart-item__title">${prod.title}</p>
      <p class="cart-item__price">${prod.price}</p>
      <button class="cart-item__remove-btn" data-index="${index}">
        <img src="./img/borrar.png" alt="Eliminar producto" />
      </button>
    `;

    modalCar.appendChild(div);

    div.querySelector(".cart-item__remove-btn").addEventListener("click", (e) => {
      const idx = e.currentTarget.dataset.index;
      productosArr.splice(idx, 1); 
       spanCounter.textContent=productosArr.length
      renderCart(); 
    });
  });
}


product.forEach((item) => {
  const buttons = item.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let img = item.querySelector("img").getAttribute("src");
      let title = item.querySelector(".product__title").textContent;
      let price = item.querySelector(".product__price").textContent;

      let objProduct = { img, title, price };
     
      productosArr = [...productosArr, objProduct];
      spanCounter.textContent=productosArr.length
      renderCart(); 
    });
  });
});



shopCar.addEventListener('click', () => {
  modalCar.classList.toggle("show-card");
})