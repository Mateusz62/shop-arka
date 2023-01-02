let shop = document.getElementById("allcollection-div"); //pobranie całego diva "allcollection-div z htmla"

let products = [
  {
    name: "Golfy",
    imgMain: "/image/golfy/golfzswetrem/golf.png",
    source: "/clothes/sweaters/sweaters.html",
  },

  {
    name: "Swetry",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Koszule",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Koszule zawijane",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Swetry okrągłe",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Sweter Luke czarny",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Sweter Luke czarny",
    imgMain: "/image/bestseller/golf.jpg",
  },

  {
    name: "Sweter Luke czarny",
    imgMain: "/image/bestseller/golf.jpg",
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
