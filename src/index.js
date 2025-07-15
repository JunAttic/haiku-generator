function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "Text of the haiku",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#haiku-generator");
haikuFormElement.addEventListener("submit", generateHaiku);
