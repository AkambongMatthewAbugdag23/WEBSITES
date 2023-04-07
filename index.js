
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}  

// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
    //create a variable that contains both the count and the dash seperator
    let countStr = count + " - "
    //Render the variable in the saveEl using InnerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


function calculateSum() {
    // Get the text content of the saveEl element
    const saveText = saveEl.textContent.trim();
    
    // Split the text by the separator " - "
    const saveArray = saveText.split(" - ");
    
    // Convert the array of strings to an array of numbers
    const saveNumbers = saveArray.map(str => {
        const num = Number(str);
        return isNaN(num) ? 0 : num;
    });
    
    // Calculate the sum of the numbers using reduce()
    const sum = saveNumbers.reduce((acc, curr) => acc + curr,0);
    return sum;
  }

  let totalEl = document.getElementById("total-el")
  function updateTotal() {
    const sum = calculateSum();
    totalEl.textContent = "Number of Passengers: " + sum;
  }

  

// grab the welcome-el paragraph and store it ina variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
//create the variables
let name = "Matthew"
let greeting = "Hi, "
//Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name 

















