const STORAGE_KEY = "local"; 

const addButton = document.querySelector("button");
const value = document.querySelector('#value');
const followSpan = document.querySelector('#add')

const counterValue = {
    value: 100500,
    followSpan: "FOLLOW",
    add() {
        this.value += 1;
    },
    change() {        
        this.followSpan = "FOLLOWING";   
    }
};


(() => {
    
    addButton.addEventListener("click", () => {
      const expanded = addButton.getAttribute("aria-expanded") === true || false;
    if(!expanded) {
        addButton.classList.add("is-active");
        addButton.setAttribute("aria-expanded", !expanded);
    };
    
    counterValue.add();
    counterValue.change()
    value.textContent = counterValue.value;
    followSpan.textContent = counterValue.followSpan
    localStorage.setItem("STORAGE_KEY", JSON.stringify(counterValue.value));
    const savedValue = localStorage.getItem("STORAGE_KEY");
    const parsedValue = JSON.parse(savedValue);
    console.log(parsedValue) 
    });
    
  })();

