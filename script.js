const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const campingGear = [
    "Tent (with stakes and guylines)",
    "Sleeping bag (appropriate for the season)",
    "Sleeping pad or air mattress",
    "Camping pillow",
    "Headlamp or flashlight (with extra batteries)",
    "Camping stove or portable grill",
    "Cooking utensils (pot, pan, spatula, etc.)",
    "Lighter or waterproof matches",
    "Food and snacks",
    "Cooler and ice packs",
    "Reusable water bottle or hydration system",
    "Water filter or purification tablets",
    "Camping chairs or portable seating",
    "Clothing (weather-appropriate, including layers)",
    "Rain gear (rain jacket, poncho)",
    "First aid kit",
    "Personal hygiene items (toothbrush, toothpaste, hand sanitizer)",
    "Insect repellent",
    "Sunscreen and lip balm with SPF",
    "Map and compass or GPS device",
    "Multi-tool or knife",
    "Trash bags and recycling bags",
    "Campfire gear (firestarter, kindling, if allowed)",
    "Toiletries (biodegradable soap, trowel for digging a cat hole)",
    "Camera or binoculars (for wildlife viewing)",
    "Sunglasses and hat",
    "Campground reservation confirmation or permit"
];
const hotWeatherGear = ["Hat", "Sun Screen", "Sun Glasses", "Water Bottle"];
const coldWeatherGear = ["Hat", "Coat", "Hand Warmers", "Gloves", "Wool Socks"];
const beachGear = [
    "Beach towel or blanket",
    "Swimsuit",
    "Sunscreen (SPF 30 or higher)",
    "Beach hat or cap",
    "Sunglasses",
    "Beach umbrella or sunshade",
    "Beach chairs",
    "Cooler with ice packs",
    "Snacks and drinks",
    "Reusable water bottle",
    "Beach bag",
    "Beach shoes or sandals",
    "Change of clothes",
    "Beach toys (frisbee, beach ball, etc.)",
    "Books or magazines",
    "Portable speaker (optional)",
    "Wet wipes or hand sanitizer",
    "Trash bags (to clean up after yourself)",
    "Ziplock bags (for wet or sandy items)",
    "Personal identification and keys",
    "Camera or phone for photos",
    "Beach-safe sunscreen lip balm",
    "Beach mat or portable lounge chair"
];
const campingFunGear = ["Throwable (Frisbee, Football etc...)", "Smores Ingredients", "Yard Game (Spikeball, Cornhole, etc...)", "Playing Cards", "Bicycle", "Hammock"];
const college = [
    "Bedding (sheets, pillows, blanket, mattress protector)",
    "Towels (bath and hand towels)",
    "Clothing (seasonal clothing, underwear, socks)",
    "Laundry supplies (detergent, dryer sheets, laundry basket)",
    "Toiletries (toothbrush, toothpaste, shampoo, soap, etc.)",
    "School supplies (notebooks, pens, pencils, highlighters)",
    "Laptop and charger",
    "Phone and charger",
    "Personal identification (ID, driver's license)",
    "First aid kit (band-aids, pain relievers, etc.)",
    "Kitchen supplies (reusable water bottle, microwave-safe dishes, utensils)",
    "Non-perishable snacks (granola bars, chips, etc.)",
    "Cleaning supplies (disinfectant wipes, broom, dustpan)",
    "Comfort items (photos, decorations, favorite books)",
    "Power strips and extension cords",
    "Alarm clock or bedside lamp",
    "Backpack or tote bag",
    "Reusable shopping bags",
    "Umbrella and rain gear",
    "Bike or other transportation (if applicable)",
    "Basic tools (screwdriver, tape, etc.)"
];


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