let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    id: 1,
    name: "Swetry",
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
    source: "/clothes/sweaters/sweaters.html",
  },

  {
    id: 2,
    name: "Golfy",
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
  },

  {
    id: 3,
    name: "Koszule",
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
  },

  {
    id: 4,
    name: "Koszule zawijane",
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
  },

  {
    id: 5,
    name: "Swetry okrągłe",
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
  },

  {
    id: 6,
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
  },

  {
    id: 7,
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
  },

  {
    id: 8,
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
  },
];

let generateShop = () => {
  return (shop.innerHTML = products
    .map((product) => {
      let { id, name, imgMain, source } = product; //destruktyzacja(wyciąganie nazw z obiektu)

      return `
    <div class="item-div" id="product-id-${id}">
        <a href="${source}"><img src="${imgMain}" width="350" alt=""></a>
            <div class="details-div">
                <h3>${name}</h3>
            </div>
    </div>
    `;
    })
    .join(""));
};
generateShop();
