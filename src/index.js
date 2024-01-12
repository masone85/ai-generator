function generateOutput(event) {
  event.preventDefault();

  new Typewriter("#output-display", {
    strings: "Hello Nanny",
    autoStart: true,
    cursor: "",
  });
}

let outputGeneratorElement = document.querySelector("#output-generator-form");
outputGeneratorElement.addEventListener("submit", generateOutput);
