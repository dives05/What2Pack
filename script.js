const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const campingGear = ["Sleeping Bag", "Sleeping Pad", "Pillow", "Tent", "Flashlight", "Water Bottle",  "Camp Chair", "Cooking Utensils", "Bug Spray", "First-Aid Kit", "Hiking Boots", "Extra Clothes", "Rain Gear", "Day-Pack", "Fire Starter", "Trash Bags", "Extra Tarp", "Rope", "Portable Charger"];
const hotWeatherGear = ["Hat", "Sun Screen", "Sun Glasses", "Water Bottle"];
const coldWeatherGear = ["Hat", "Coat", "Hand Warmers", "Gloves", "Wool Socks"];
const beachGear = ["Swim Suit", "Towel", "Umbrella", "Chair", "Sun Screen", "Cooler", "Sandals"];
const campingFunGear = ["Throwable (Frisbee, Football etc...)", "Smores Ingredients", "Yard Game (Spikeball, Cornhole, etc...)", "Playing Cards", "Bicycle", "Hammock"];

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

function group(list) {
    for (let i = 0; i < list.length; i++) {
        createTask(list[i]);
    }
}

function clearList() {
    listContainer.innerHTML = "";
    saveData();
}

function createTask(item) {
    let x = document.getElementsByTagName('li');
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.includes(item)) {
            inputBox.value = '';
            return;
        }
    }
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