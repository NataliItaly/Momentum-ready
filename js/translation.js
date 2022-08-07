const translationObj = {
  en: {
    city: "enter your city",
    username: "enter your name",
  },
  ru: {
    city: "введите ваш город",
    username: "введите ваше имя",
  },
  it: {
    city: "inserisci la tua città",
    username: "inserisci il tuo nome",
  },
};
const translationBtn = document.querySelectorAll(".translation-btn");
const translationWrapper = document.querySelector(".translation-btn-wrapper");
const translationText = document.querySelectorAll("[data-translation]");

translationWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("translation-btn")) {
    translationBtn.forEach((item) => item.classList.remove("active-language"));
    event.target.classList.add("active-language");

    let language = event.target.getAttribute("data-language");

    QUOTE.textContent = quotes[language][randomQuote].text;
    AUTHOR.textContent = quotes[language][randomQuote].author;

    if (isWeather) {
      getWeather();
    }

    translationText.forEach((item) => {
      let dataText =
        item.getAttribute(
          "data-translation"
        ); /*получаем значение атрибута data у всех элементов для переводa */
      if (item.placeholder) {
        item.placeholder = translationObj[language][item.dataset.translation];
      }
      item.textContent = translationObj[language][dataText];
    });
  }
});
