const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const nameInput = document.querySelector(".name");
const BODY = document.querySelector("body");
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const cityInput = document.querySelector(".city");
const QUOTE = document.querySelector(".quote");
const AUTHOR = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
const playBtn = document.querySelector(".play");
const playList = document.querySelector(".play-list");
const playNextBtn = document.querySelector(".play-next");
const playPrevBtn = document.querySelector(".play-prev");
const quotes = {
  en: [
    {
      text: "Don't worry if something doesn't work. If everything worked, you'd be fired.",
      author: "Mosher’s Law of Software Engineering",
    },
    {
      text: "In theory, theory and practice are inseparable. In practice, this is not the case.",
      author: "Yoggi Berra",
    },
    {
      text: "Sometimes it's better to stay home to sleep on Monday than to spend the whole week debugging code written on Monday.",
      author: "Christopher Thompson",
    },
    {
      text: "Measuring a programmer's productivity by counting lines of code is the same as evaluating the construction of an airplane by its weight.",
      author: "Bill Gates",
    },
    {
      text: "Debugging code is twice as difficult as writing it. So if you write code as smart as you can, then by definition you are not smart enough to debug it.",
      author: "Brian W. Kernighan",
    },
    {
      text: "Programs should be written for the people who will read them, and the machines that will execute these programs are secondary.",
      author: "Harold Abelson",
    },
    {
      text: "If you give a person a program, you will keep him busy for one day. If you teach a person to program, you will keep him busy for life.",
      author: "Waseem Latif",
    },
    {
      text: "Any fool can write code that the machine will understand. Good programmers write code that a person can understand.",
      author: "Martin Fowler",
    },
    {
      text: "Is it working? Don't touch.",
      author: "Любой программист",
    },
    {
      text: "A broken program usually does less harm than a bad one.",
      author: "Dave Thomas",
    },
    {
      text: "To write clean code, we first write dirty code and then refactor it.",
      author: "Robert Martin",
    },
    {
      text: "For every complex problem, there is a solution that is quick, simple, and wrong.",
      author: "H. L. Mencken",
    },
    {
      text: "The difficulty of working with a programmer is that you can't figure out what he's doing until it's too late.",
      author: "Seymour Cray",
    },
  ],
  ru: [
    {
      text: " Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.",
      author: "Закон Мошера в программной инженерии",
    },
    {
      text: "В теории, теория и практика неразделимы. На практике это не так.",
      author: "Йоги Берра",
    },
    {
      text: "Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода.",
      author: "Кристофер Томпсон",
    },
    {
      text: "Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу.",
      author: "Билл Гейтс",
    },
    {
      text: "Отладка кода вдвое сложнее, чем его написание. Так что если вы пишете код настолько умно, насколько можете, то вы по определению недостаточно сообразительны, чтобы его отлаживать.",
      author: "Брайан Керниган",
    },
    {
      text: "Программы должны писаться для людей, которые будут их читать, а машины, которые будут эти программы исполнять — второстепенны.",
      author: "Гарольд Абельсон",
    },
    {
      text: "Если вы дадите человеку программу, то займете его на один день. Если вы научите человека программировать, то займете его на всю жизнь.",
      author: "Васим Латиф",
    },
    {
      text: "Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.",
      author: "Мартин Фаулер",
    },
    {
      text: "Работает? Не трогай.",
      author: "Любой программист",
    },
    {
      text: "Неработающая программа обычно приносит меньше вреда, чем работающая плохо.",
      author: "Дэйв Томас",
    },
    {
      text: "Чтобы написать чистый код, мы сначала пишем грязный код, а затем рефакторим его.",
      author: "Роберт Мартин",
    },
    {
      text: "Для каждой сложной задачи существует решение, которое является быстрым, простым и неправильным.",
      author: "Генри Луис Менкен",
    },
    {
      text: "Трудность работы с программистом заключается в том, что вы не можете понять, что он делает, до тех пор, пока не стало слишком поздно.",
      author: "Сеймур Крэй",
    },
  ],
  it: [
    {
      text: "Non preoccuparti se qualcosa non funziona. Se tutto funzionasse, saresti licenziato.",
      author: "Legge di Mosher dell'ingegneria del software",
    },
    {
      text: "In teoria, teoria e pratica sono inseparabili. In pratica, questo non è il caso.",
      author: "Yoggi Berra",
    },
    {
      text: "A volte è meglio rimanere a casa lunedì piuttosto che passare l'intera settimana a fare funzionare il codice scritto lunedì.",
      author: "Christopher Thompson",
    },
    {
      text: "Misurare la produttività di un programmatore contando le righe di codice è proprio come valutare la costruzione di un aereo in base al suo peso.",
      author: "Bill Gates",
    },
    {
      text: "Il debugging del codice è due volte più difficile della scrittura. Quindi, se stai scrivendo il codice nel modo più intelligente possibile, per definizione non sei abbastanza esperto da eseguire il debugging.",
      author: "Brian W. Kernighan",
    },
    {
      text: "I programmi devono essere scritti per le persone che li leggeranno e le macchine che eseguiranno questi programmi sono secondarie.",
      author: "Harold Abelson",
    },
    {
      text: "Se dai a una persona un programma, la tieni occupato per un giorno. Se insegni a una persona a programmare, la tieni occupato per tutta la vita.",
      author: "Waseem Latif",
    },
    {
      text: "Qualsiasi sciocco sarà in grado di scrivere codice che la macchina capirà. I bravi programmatori scrivono codice che una persona può capire.",
      author: "Martin Fowler",
    },
    {
      text: "Funziona? Non toccare nulla.",
      author: "Любой программист",
    },
    {
      text: "Un programma che non funziona di solito fa meno male di uno che funziona male.",
      author: "Dave Thomas",
    },
    {
      text: "Per scrivere codice pulito, scriviamo prima il codice sporco e poi lo refactoring.",
      author: "Robert Martin",
    },
    {
      text: "Per ogni problema complesso, esiste una soluzione rapida, semplice e sbagliata.",
      author: "H. L. Mencken",
    },
    {
      text: "La difficoltà di lavorare con un programmatore è che non riesci a capire cosa sta facendo fino a quando non è troppo tardi.",
      author: "Seymour Cray",
    },
  ],
};

const trackList = [
  {
    title: "Aqua Caelestis",
    src: "assets/sounds/Aqua Caelestis.mp3",
    duration: "00:58",
  },
  {
    title: "River Flows In You",
    src: "assets/sounds/River Flows In You.mp3",
    duration: "03:50",
  },
  {
    title: "Summer Wind",
    src: "assets/sounds/Summer Wind.mp3",
    duration: "05:05",
  },
  {
    title: "Ennio Morricone",
    src: "assets/sounds/Ennio Morricone.mp3",
    duration: "05:03",
  },
];
