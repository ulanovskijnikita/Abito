const searchBtn = document.querySelector(".search-btn"),
searchInput = document.querySelector(".search-box input"),
cardWrapper = document.querySelector(".content-main__list"),
cardArray = [
    {
      id: 0,
      title: "Первый товар",
      price: "170 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
    {
      id: 1,
      title: "Второй товар",
      price: "171 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
    {
      id: 2,
      title: "Третий товар",
      price: "172 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
    {
      id: 3,
      title: "Четвертый товар",
      price: "173 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
    {
      id: 4,
      title: "Пятый товар",
      price: "174 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
    {
      id: 5,
      title: "Шестой товар",
      price: "175 ₽",
      address: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      img: "./image/card-img.png",
    },
  ],
render = (cardList) => {
    cardWrapper.innerHTML = '';
    cardWrapper.style.justifyContent = 'flex-start';
    cardWrapper.style.gap = '30px';

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML(
            "beforeend",
            `
                <a href="/product.html" class="content-main__list-item">
                    <div class="content-main__list-item--img">
                        <img src="${item.img}" alt="card-img">
                    </div>
                    <h5 class="content-main__list-item--title">
                        ${item.title}
                    </h5>
                    <strong class="content-main__list-item--price">
                        ${item.price}
                    </strong>
                    <div class="content-main__list-item--desc-box">
                        <span class="content-main__list-item--desc">
                            ${item.address}
                        </span>
                        <span class="content-main__list-item--desc">
                            ${item.date}
                        </span>
                    </div>
                </a>
            `
        );
    });
}
, filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value);
    });
};

render(cardArray);

searchBtn.addEventListener("click", () => {
    render(filteredArray(cardArray, searchInput.value));
});
