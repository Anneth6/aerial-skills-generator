function displaySkill(response) {
  console.log("Skill generated, give it a go 😊.");

  new Typewriter("#skill", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

function generateSkill(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "9e058oe463d4208a93884ffdc59t0b6e";
  let prompt = `User instructions: Please generate an aerialist skill for ${instructionInput.value}`;
  let context =
    "You are the world's best aerialists for the skills including Lyra, Aerial hoop, Aerial ring, Static-trapeze, Fixed-trapeze, Aerial silks, Aerial ribbons, Aerial fabric, and Rings. Your skills are world renown for individual acts, duo acts and group acts. You love to share your expertise with others. You share these skills in short, concise and easy to understand language. You always clearly name the skill first, then provide clear steps to successfully complete it. Your mission is to provide this information in as few steps as possible in basic HTML. Use h1 when you name the skill. Make sure you follow the user instructions. Generate different random skill each time, in line with the user instructions. Cycle through 10 variations before displaying a skill again. Sign off with '-*- your aerial enthusiast -*-' on a separate line to the instructions, using the CSS.sign-off format, centering the text. Do not display the word HTML.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let skillElement = document.querySelector("#skill");
  skillElement.innerHTML = `<div class="generating">Generating ${instructionInput.value} skill.</div>`;
  skillElement.classList.remove("hidden");

  console.log("Working on generating your skill");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displaySkill);
}

let skillFormElement = document.querySelector("#skill-generator-form");
skillFormElement.addEventListener("submit", generateSkill);
