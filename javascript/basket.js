const basketsection = document.getElementById("basket-product");
let label = document.getElementById("label");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartAmountBasket = document.getElementById("cartamount");
  cartAmountBasket.innerHTML = basket
    .map((product) => product.item)
    .reduce((x, y) => x + y, 0); //tworzymy nową tablicę o znanej długości na podstawie koszyka gdzie za pomocą
  //metody "reduce" dodajemy poprzedni element do następnego zaczynając od początkowej wartosci 0
};
calculation();

let generateItemsBasket = () => {
  if (basket.length !== 0) {
    return (basketsection.innerHTML = basket
      .map((product) => {
        let { id, item, size } = product;
        let search = products.find((product) => product.id === id) || [];

        return `
      <div class="cart-item">
        <img width="100" src=${search.imgMain} alt=""/>
        <div class="details">
            <div class="title-price-product">
                <h4 class="title-price">
                    <p>${search.name}</p>
                    <p>${size}</p>
                    <p class="cart-item-price">${`${
                      search.price * item
                    }.00 zł`}</p>
                </h4>
                <i class="fa-solid fa-trash delete" id="delete" onclick="removeItem(${id}, '${size}')"></i>
            </div>

            <div class="quantity-clothes"> 
                <p id=${id} class="quantity">Ilość: ${item}</p>
            </div>
        </div>
      </div>
      `;
      })
      .join(""));
  } else {
    //basketsection.innerHTML = ``; //działa bez tego tylko musi być odświeżenie strony
    label.innerHTML = `
      <div class="empty-basket-div">
        <form class="description-empty-basket">
         <h2>Twój koszyk jest pusty</h2>
          <p class="description-empty-h5">Dodaj przedmiot do koszyka aby zakupić produkt</p>
          <button class="btn-home">Powrót do strony głównej</button>
        </form>
      </div> 
    `;
  }
};
generateItemsBasket();

let removeItem = (id, size) => {
  let selectedItem = id; //id pobiera prawidłowo
  let selectedSize = size;
  basket = basket.filter(
    (product) => product.id == selectedItem && product.size !== selectedSize // jeśli dany produkt id jest równy produktowi id w localstorage i dany rozmiar jest różny od danego rozmiaru w localstorage to usuń produkt
  );
  generateItemsBasket();
  localStorage.setItem("data", JSON.stringify(basket));
};
