let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    name: "Golfy",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    source: "/clothes/sweaters/sweaters.html",
  },

  {
    id: 2,
    name: "Golfy",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    name: "Koszule",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    name: "Koszule zawijane",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    name: "Swetry okrągłe",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    name: "Sweter Luke czarny",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
    imgMain: "/image/golfy/golfzswetrem/golf.png",
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
