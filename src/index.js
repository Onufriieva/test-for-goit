
const STORAGE_KEY = "local";
 

const addButton = document.querySelector("button");
const value = document.querySelector('#value');

const counterValue = {
    value: 100500,
    add() {
        this.value += 1;
    },
};





// addButton.addEventListener(`click`, (event) => {
  
//     addButton.classList.toggle(".is-active");
//     counterValue.add();
//     value.textContent = counterValue.value;
  
//     localStorage.setItem("STORAGE_KEY", JSON.stringify(counterValue.value));
//     const savedValue = localStorage.getItem("STORAGE_KEY");
//     const parsedValue = JSON.parse(savedValue);
//     console.log(parsedValue)
// });


// addButton.addEventListener(`click`, (event) => {
  
//     addButton.classList.toggle("is-active");
// });


(() => {
    
    addButton.addEventListener("click", () => {
      const expanded = addButton.getAttribute("aria-expanded") === "true" || false;
      addButton.classList.add("is-active");
      addButton.setAttribute("aria-expanded", !expanded);
     });
  })();