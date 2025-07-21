function displayHaiku(response) {
  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");

  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instruction-input");
  let apiKey = "b0o49ce9af4193689e78b7100091727t";
  let prompt = `Generate a Japanese Haiku about ${instructionsInput.value}`;
  let context =
    "you are an Haiku expert,your goal is to generate 2 lines haiku, separate each line with a <br /> ,make sure to follow user instruction.The last word of the haiku MUST be inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.innerHTML = `<div class="generating">⏳ Generating an Haiku ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-generator");
haikuFormElement.addEventListener("submit", generateHaiku);
