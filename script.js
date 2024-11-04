const titleMessages = [
  "im stuck in the title of some lousy website",
  "i lost my mind i lost all my money",
  "thanks for having js enabled",
  "unforgivable nightwalker",
  "i love eating cement",
  "check out femtanyl",
  "Keep it to myself.",
  "lorem ipsum",
  "1191212135",
  "hi",
];

function randomizeTitle() {
  document.title =
    titleMessages[Math.floor(Math.random() * titleMessages.length)];
}

function switchTheme() {
  var elements = document.querySelectorAll("*");
  elements = Array.from(elements);
  elements.forEach(function (value, key, parent) {
    value.classList.toggle("dark-mode");
  });
}

function superSecret() {
  alert("not yet bud");
}
