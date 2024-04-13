const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`)

inputName.addEventListener(`input`, event =>{
const trimmedValue = event.target.value.trim();
  outputName.textContent = trimmedValue || `Anonymos`;
})



