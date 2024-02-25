const textInput = document.querySelector("input");
const nameOutput = document.querySelector("#name-output");

function handleInput(event) {
  const name = event.currentTarget.value.trim();

  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = `${name}`;
  }
}

textInput.addEventListener("input", handleInput);
