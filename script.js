//use some kind of filereader for this?
const titleMessages = [
  "im stuck in the title of some lousy website",
  "Rhinestones beneath Shattered Glass",
  "That's that and this is this",
  "thanks for having js enabled",
  "unforgivable nightwalker",
  "215211441251919221594",
  "i love eating cement",
  "check out femtanyl",
  "Keep to myself.",
  "lorem ipsum",
  "hi",
  "",
];

//randomizes the title of the website
function randomizeTitle() {
  document.title =
    titleMessages[Math.floor(Math.random() * titleMessages.length)];
}

//toggle between light and dark mode
function toggleTheme() {
  var elements = document.querySelectorAll("*");
  elements = Array.from(elements);
  elements.forEach(function (value, key, parent) {
    value.classList.toggle("dark-mode");
  });
}

function superSecret() {
  alert("not yet bud");
}
