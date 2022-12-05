let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    id: 1,
    name: "Sweter Luke czarny",
    img: "/image/bestseller/golf.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
    source: "/oneclothes/onesweter/onesweterLuke/onesweterLuke.html",
  },

  {
    id: 2,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/pikowanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 3,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/skorzanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 4,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/pikowanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 5,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/skorzanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 6,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/pikowanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 7,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/skorzanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },

  {
    id: 8,
    name: "Sweter okrągły dekolt Jack",
    img: "/image/bestseller/pikowanakurtka.jpg",
    price: 70 + " zł",
    type: "Swetry",
    sizes: ["M", "L", "XL", "XXL"],
  },
];

let generateShop = () => {
  return (shop.innerHTML = products
    .map((product) => {
      let { id, name, img, price, source } = product; //destruktyzacja(wyciąganie nazw z obiektu)

      return `
    <div class="item-div" id="product-id-${id}">
        <a href="${source}"><img src="${img}" width="250" alt=""></a>
            <div class="details-div">
                <h3>${name}</h3>
                    <div class="price-div">
                    <h2 class="price-h2">${price}</h2>
                    </div>
            </div>
    </div>
    `;
    })
    .join(""));
};
generateShop();
