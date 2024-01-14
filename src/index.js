function displayOutput(response) {
  new Typewriter("#output-display", {
    strings: response.data.answer,
    autoStart: true,
    //delay: ,
    cursor: "",
  });
  // response.data.answer
}

function generateOutput(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "af8a02404a8co87d6b9be4abdat1baf3";
  let prompt = `Generate a funny limerick about ${userInput.value}`;
  let context = `You are a funny comedian who loves to make up funny limericks on the spot, your mission is to generate short and funny limericks in basic HTML and separate each line with a <br /> . Make sure to theme the limerick around the user input.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayOutput);
}

let outputGeneratorElement = document.querySelector("#output-generator-form");
outputGeneratorElement.addEventListener("submit", generateOutput);
