let shopProduct = document.getElementById("oneclothes-section");

let products = [
  {
    id: 1,
    name: "Sweter Luke czarny",
    imgMain: "/image/bestseller/golf.jpg",
    imgsmall: [
      "/image/bestseller/golf.jpg",
      "/image/bestseller/pikowanakurtka.jpg",
      "/image/bestseller/skorzanakurtka.jpg",
      "/image/bestseller/golf.jpg",
    ],
    price: 70,
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur 
    illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
    source: "/oneclothes/onesweter/onesweterLuke/onesweterLuke.html",
  },
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateOneClothes = () => {
  return (shopProduct.innerHTML = products.map((product) => {
    let { id, name, imgMain, imgsmall, price, sizes, description } = product;

    return `
    <div class="single-pro-image" id=product-id-${id}>
    <img src="${imgMain}" width="100%" id="MainImg">  
    <div class="small-img-group">
        <div class="small-img-col">
            <img src="${imgsmall[0]}" width="100%" class="small-img">  
        </div>
        <div class="small-img-col">
            <img src="${imgsmall[1]}" width="100%" class="small-img">  
        </div>
        <div class="small-img-col">
            <img src="${imgsmall[2]}" width="100%" class="small-img">  
        </div>
        <div class="small-img-col">
            <img src="${imgsmall[3]}" width="100%" class="small-img">  
        </div> 
    </div>
</div> 

<div class="single-pro-details" id=product-id-${id}>
    <h3 class="title-clothes">${name}</h3>
    <h2 class="price-clothes">${price}.00 zł</h2>
    <select class="size-clothes" id="size-clothes">
        <option>${sizes[0]}</option>
        <option>${sizes[1]}</option>
        <option>${sizes[2]}</option>
        <option>${sizes[3]}</option>
        <option>${sizes[4]}</option>
    </select>
    <div>
    <input type="number" value="1" class="quantity-clothes-input" min="0" max="50" >
    <button class="add-basket-button" onclick="addProduct(${id})">Dodaj do koszyka</button>
    <h4 class="description-product-h4">Opis produktu</h4>
    <span class="description-product-span">${description}</span>
    </div>
</div>
     `;
  }));
};

generateOneClothes();

let addProduct = (id) => {
  let quantityValue = document.querySelector(".quantity-clothes-input").value; //pobranie ilości z inputa
  let sizeValue = document.getElementById("size-clothes").value; //pobranie wartości rozmiaru

  let selectedItem = id; //selectedItem = 1(bo takie jest id obecnego danego produktu)
  let selectedSizes = sizeValue;
  let search = basket.find(
    (product) => product.id === selectedItem && product.size === selectedSizes //odnosze się do koszyka więc musze brać zmienne z obiektu z koszyka
  ); //czy znaleziony obiekt product.id jest równy nowo dodanemu selected.id

  if (search === undefined) {
    basket.push({
      id: selectedItem, //problem z czytaniem id(musi być tak bo inaczej nie widzi id)(jak dam samo id to działa ale tworzy nowy obiekt bo nie potrafi szukać)
      item: Number(quantityValue),
      size: selectedSizes,
    });
  } else {
    search.item += Number(quantityValue); //działa dodawanie elementów o tym samym id
  }
  localStorage.setItem("data", JSON.stringify(basket)); //dodawanie do localStorage czyli zapisanie dodanego produktu
  console.log(basket);
  refreshBaset(selectedItem);
};
let refreshBaset = (id, sizes) => {
  let sizeValue = document.getElementById("size-clothes").value;
  let search = basket.find(
    (product) => product.id === id && product.size === sizeValue
  ); //wyświetla się prawidłowa ilość która zostanie dodana do koszyka(zabezpieczenie przed tworzeniem nowego obiektu)
  calculation();
};

let calculation = () => {
  let cartAmountBasket = document.getElementById("cartamount");
  cartAmountBasket.innerHTML = basket
    .map((product) => product.item)
    .reduce((x, y) => x + y, 0); //tworzymy nową tablicę o znanej długości na podstawie koszyka gdzie za pomocą metody "reduce" dodajemy poprzedni element do następnego zaczynając od początkowej wartosci 0
};
calculation();
