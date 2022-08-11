/*------------ set time and date---------------- */

function showTime() {
  const date = new Date();
  //console.log(date);
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreeting();
}
showTime();

function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };

  let currentDate = date.toLocaleDateString("en-Br", options);
  let activeLanguage = document.querySelector(".active-language");
  if (activeLanguage.dataset.language === "ru") {
    currentDate = date.toLocaleDateString("ru-Ru", options);
  } else if (activeLanguage.dataset.language === "it") {
    currentDate = date.toLocaleDateString("it-It", options);
  }

  DATE.textContent = currentDate;
}

/*---------------- set greeting--------------------- */

function showGreeting() {
  const date = new Date();
  const hours = date.getHours();
  const timeOfDay = setGreetings();

  let activeLanguage = document.querySelector(".active-language");
  let greetingText = `Good${timeOfDay},`;
  if (activeLanguage.dataset.language === "ru") {
    greetingText = `Добр${timeOfDay},`;
  } else if (activeLanguage.dataset.language === "it") {
    greetingText = `Buon${timeOfDay},`;
  }

  GREETING.textContent = greetingText;
  const userName = nameInput.value;
}

function setGreetings() {
  const date = new Date();
  const hours = date.getHours();
  let activeLanguage = document.querySelector(".active-language");
  if (hours >= 0 || hours < 6) {
    switch (activeLanguage.dataset.language) {
      case "ru":
        return `ой ночи`;
        break;
      case "it":
        return `a notte`;
        break;
      default:
        return ` night`;
    }
  } else if (hours >= 6 && hours < 12) {
    switch (activeLanguage.dataset.language) {
      case "ru":
        return `ое утро`;
        break;
      case "it":
        return `a mattina`;
        break;
      default:
        return ` morning`;
    }
  } else if (hours >= 12 && hours <= 17) {
    switch (activeLanguage.dataset.language) {
      case "ru":
        return `ый день`;
        break;
      case "it":
        return ` giorno`;
        break;
      default:
        return ` afternoon`;
    }
  } else if (hours >= 18 && hours <= 23) {
    switch (activeLanguage.dataset.language) {
      case "ru":
        return `ый вечер`;
        break;
      case "it":
        return `a sera`;
        break;
      default:
        return ` evening`;
    }
  }
}

/*--------------- set local storage ---------------- */

function setLocalStorage() {
  localStorage.setItem("nameInput", nameInput.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("nameInput")) {
    nameInput.value = localStorage.getItem("nameInput");
  }
}
window.addEventListener("load", getLocalStorage);

/*--------------- set background ------------------ */

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 23 || hours < 5) {
    return `night`;
  } else if (hours >= 5 && hours <= 11) {
    return `morning`;
  } else if (hours > 11 && hours <= 17) {
    return `afternoon`;
  } else if (hours > 17 && hours < 23) {
    return ` evening`;
  }
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber;

function setBackground() {
  let timeOfDay = getTimeOfDay();
  randomNumber = getRandomNum(1, 20);
  if (randomNumber < 10) {
    randomNumber = `0${randomNumber}`;
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNumber}.jpg`;
  img.onload = () => {
    BODY.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNumber}.jpg')`;
  };
}

/*-------------------- set slider ---------------------- */

slideNext.addEventListener("click", getSlideNext);

function getSlideNext() {
  randomNumber += 1;
  if (randomNumber === 20) {
    randomNumber = 1;
  }
  setBackground();
}

slidePrev.addEventListener("click", getSlidePrev);

function getSlidePrev() {
  randomNumber -= 1;
  if (randomNumber === 1) {
    randomNumber = 20;
  }
  setBackground();
}

/*------------------- set weather ------------------ */

//let weather = `https://api.openweathermap.org/data/2.5/weather?q=Florence&lang=en&appid=5c08670149a0b1a4dc7a372a3d5e5333&units=metric`;
//console.log(weather);

let isWeather = false;

async function getWeather() {
  let cityName = cityInput.value;
  let activeLanguage = document.querySelector(".active-language");
  let language = activeLanguage.dataset.language;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${language}&appid=5c08670149a0b1a4dc7a372a3d5e5333&units=metric`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;

  if (language === "ru") {
    wind.textContent = `Скорость ветра: ${data.wind.speed} м/с`;
    humidity.textContent = `Влажность воздуха: ${data.main.humidity}%`;
  } else if (language === "it") {
    wind.textContent = `Vento: ${data.wind.speed} m/s`;
    humidity.textContent = `Umidità: ${data.main.humidity}%`;
  }
  isWeather = true;
}

cityInput.addEventListener("change", getWeather);

/*-------------------- set quotes -------------------- */

let randomQuote;

function getQuotes() {
  randomQuote = getRandomNum(0, quotes.en.length - 1);

  let activeLanguage = document.querySelector(".active-language");
  switch (activeLanguage.dataset.language) {
    case "ru":
      QUOTE.textContent = quotes.ru[randomQuote].text;
      AUTHOR.textContent = quotes.ru[randomQuote].author;
      break;
    case "it":
      QUOTE.textContent = quotes.it[randomQuote].text;
      AUTHOR.textContent = quotes.it[randomQuote].author;
      break;
    default:
      QUOTE.textContent = quotes.en[randomQuote].text;
      AUTHOR.textContent = quotes.en[randomQuote].author;
  }
}

getQuotes();

changeQuote.addEventListener("click", getQuotes);

/*------------------ set player -------------------- */

for (let i = 0; i < trackList.length; i++) {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = trackList[i].title;
  playList.append(li);
}

(function () {
  let isPlay = false;
  let playNum = 0;
  let durationRangeValue;
  let audioCurrentTime;
  const playItem = document.querySelectorAll(".play-item");
  playItem[playNum].classList.add("active");

  const audio = new Audio();
  function playAudio() {
    if (!isPlay) {
      audio.src = trackList[playNum].src;
      //audio.currentTime = 0;
      audio.play();
      isPlay = true;
      playBtn.classList.add("pause");
      //durationRangeValue = audio.currentTime;
      //playerDuration.textContent = toHHMMSS(audio.duration);
      console.log("on");
      //audio.currentTime = audioCurrentTime;
      console.log(audio.currentTime);
      console.log("audioCurrentTime:" + audioCurrentTime);
    } else {
      audio.pause();
      isPlay = false;
      playBtn.classList.remove("pause");
      console.log("off");
      console.log(audio.currentTime);
      audioCurrentTime = audio.currentTime;
      console.log(audioCurrentTime);
      durationRangeValue = durationRange.value;

      //playerDuration.textContent = toHHMMSS(audio.duration);
      //durationRange.setAttribute("value", audio.currentTime);
      //console.log(durationRange.value);
    }
  }
  playBtn.addEventListener("click", playAudio);

  audio.addEventListener("ended", function () {
    playNext();
  });

  function playNext() {
    playNum += 1;

    if (playNum >= trackList.length) {
      playNum = 0;
    }
    playItem.forEach((item) => item.classList.remove("active"));
    playItem[playNum].classList.add("active");
    if (isPlay === true) {
      audio.src = trackList[playNum].src;
      //audio.currentTime = 0;
      //console.log(currentTime);
      audio.play();
    }
    playerCurrentTime.textContent = "00:00:00";
  }

  playNextBtn.addEventListener("click", playNext);

  function playPrev() {
    playNum -= 1;
    if (playNum < 0) {
      playNum = trackList.length - 1;
    }
    playItem.forEach((item) => item.classList.remove("active"));
    playItem[playNum].classList.add("active");
    if (isPlay === true) {
      audio.src = trackList[playNum].src;
      //audio.currentTime = 0;
      audio.play();
    }
    playerCurrentTime.textContent = "00:00:00";
  }

  playPrevBtn.addEventListener("click", playPrev);

  /*------------------- choose player track ------------------------------ */

  for (let i = 0; i < playItem.length; i++) {
    playItem[i].addEventListener("click", function choosePlayItem() {
      playItem.forEach((item) => item.classList.remove("active"));
      playItem[i].classList.add("active");
      playNum = i;
      if (isPlay === true) {
        audio.src = trackList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playerCurrentTime.textContent = "00:00:00";
      }
    });
  }

  /*-------------------- set track current time ---------------------- */

  let toHHMMSS = function (totalsecs) {
    let sec_num = parseInt(totalsecs, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - hours * 3600) / 60);
    let seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;
    return time;
  };

  function onloadedmetadata() {
    durationRange.setAttribute("max", Math.floor(audio.duration));
    playerDuration.textContent = toHHMMSS(audio.duration);
    //playerCurrentTime.textContent = "00:00:00";
    //audio.currentTime = 0;
  }
  if (audio.duration) {
    onloadedmetadata();
  } else {
    audio.addEventListener("loadedmetadata", onloadedmetadata);
  }
  audio.addEventListener("timeupdate", function () {
    durationRange.setAttribute("value", audio.currentTime);
    console.log(durationRange.value);
    //audio.currentTime = durationRange.value;
    playerCurrentTime.textContent = toHHMMSS(audio.currentTime);
  });

  /*--------------------- set audio duration --------------------*/

  durationRange.addEventListener(
    "click",
    function (e) {
      audio.currentTime =
        Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth);
    },
    false
  );

  volumeRange.addEventListener(
    "input",
    function () {
      audio.volume = parseInt(this.value) / 10;
      step = 0.01;
      min = 0;
      max = 1;
      value = 1;
      if (audio.volume === 0) {
        volumeRange.classList.add("mute");
      }
      if (audio.volume !== 0 && volumeRange.classList.contains("mute")) {
        volumeRange.classList.remove("mute");
      }
    },
    false
  );
})(this);
