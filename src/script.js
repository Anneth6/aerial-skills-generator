function generateSkill(event) {
  event.preventDefault();

  new Typewriter("#skill", {
    strings: "Aerial skills for legends",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let skillFormElement = document.querySelector("#skill-generator-form");
skillFormElement.addEventListener("submit", generateSkill);
