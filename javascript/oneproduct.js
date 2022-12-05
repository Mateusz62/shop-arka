let shopProduct = document.getElementById("oneclothes-section");

let products = [
  {
    id: 1,
    name: "Sweter Luke czarny",
    imgMain: "./image/bestseller/golf.jpg",
    imgsmall: [
      "./image/bestseller/golf.jpg",
      "./image/bestseller/pikowanakurtka.jpg",
      "./image/bestseller/skorzanakurtka.jpg",
      "./image/bestseller/golf.jpg",
    ],
    price: 70 + ".00" + " zł",
    type: "Swetry",
    sizes: ["Wybierz rozmiar", "M", "L", "XL", "XXL"],
    description: `Sweter wykonanty z najlepszych materiałów. Skład: 100% bawełna. Przeróżna kolorystyka. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure corrupti dolore rem, temporibus atque quis pariatur 
    illo provident tempore nesciunt tenetur praesentium ab vel cupiditate at aliquid, fuga numquam`,
  },
];

let basket = [];

let generateOneClothes = () => {
  return (shopProduct.innerHTML = products.map((product) => {
    let { id, name, imgMain, imgsmall, price, sizes, description } = product;

    return `
    <div class="single-pro-image">
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

<div class="single-pro-details">
    <h3 class="title-clothes">${name}</h3>
    <h2 class="price-clothes">${price}</h2>
    <select class="size-clothes" id="size-clothes">
        <option>${sizes[0]}</option>
        <option>${sizes[1]}</option>
        <option>${sizes[2]}</option>
        <option>${sizes[3]}</option>
        <option>${sizes[4]}</option>
    </select>
    <input type="number" value="1" class="quantity-clothes-input" id="quantity-clothes-input" min="0" max="50">
    <button class="add-basket-button" onclick="addProduct(${id})">Dodaj do koszyka</button>
    <h4 class="description-product-h4">Opis produktu</h4>
    <span class="description-product-span">${description}</span>
</div>
     `;
  }));
};

generateOneClothes();

let addProduct = (id) => {
  let quantityValue = document.getElementById("quantity-clothes-input").value; //pobranie ilości z inputa
  let sizeValue = document.getElementById("size-clothes").value; //pobranie wartości rozmiaru

  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id,
      item: quantityValue,
      size: sizeValue,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
};

let refreshBaset = () => {};
