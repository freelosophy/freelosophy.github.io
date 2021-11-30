function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let randomInt = getRandomInt(1, 100);
let f1 = document.getElementById('founder1');
let f2 = document.getElementById('founder2');

if (randomInt % 2 == 0) {
  f1.textContent = "Giulio Pietroiusti";
  f1.setAttribute("href", "https://pietroiusti.github.io/");
  f2.textContent = "Filippo Contesi";
  f2.setAttribute("href", "https://contesi.wordpress.com/");
}
