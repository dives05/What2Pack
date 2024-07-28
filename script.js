const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const campingGear = ["Sleeping Bag", "Tent", "Flashlight", "Water Bottle"];
const hotWeatherGear = ["Hat", "Sun Screen", "Sun Glasses"];
const coldWeatherGear = ["Hat", "Coat", "Hand Warmers", "Gloves", "Wool Socks"];

function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something!");
    }
    else {
        createTask(inputBox.value);
    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function camping() {
    for (let i = 0; i < campingGear.length; i++) {
        createTask(campingGear[i]);
    }
}

function hotWeather() {
    for (let i = 0; i < hotWeatherGear.length; i++) {
        createTask(hotWeatherGear[i]);
    }
}

function coldWeather() {
    for (let i = 0; i < coldWeatherGear.length; i++) {
        createTask(coldWeatherGear[i]);
    }
}

function createTask(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = '';
    saveData();
}

showTask();