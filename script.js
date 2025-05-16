const toggle = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon");
const html = document.documentElement;

const playTime = document.querySelector("#play-time");
const timeDisplay = document.querySelector("#timeDisplay");
const reset = document.querySelector("#reset");
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    toggle.checked = true;
    icon.innerHTML = '<i class="fa-regular fa-sun"></i>';
}

toggle.addEventListener("change", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    icon.innerHTML = isDark ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

let s = 0;
let m = 0;
let h = 0;

function timer() {
    s++;
    if (s === 60) {
        s = 0;
        m++;
    }

    if (m === 60) {
        m = 0;
        h++;
    }

    // Format values with leading zero
    let sec = String(s).padStart(2, '0');
    let min = String(m).padStart(2, '0');
    let hr = String(h).padStart(2, '0');

    timeDisplay.innerHTML = `${hr}:${min}:${sec}`;
}


let timerplay = false;
let intervalId; // 🔁 global variable to hold interval ID

playTime.addEventListener("click", (e) => {
    if (timerplay) {
        clearInterval(intervalId); // stop timer
        timerplay = false;
        playTime.innerHTML = `<i class="fa-solid fa-play"></i>`

    } else {
        intervalId = setInterval(timer, 1000); // start timer
        timerplay = true;
        playTime.innerHTML = `<i class="fa-solid fa-pause"></i>`

    }
});


reset.addEventListener("click", () => {
    clearInterval(intervalId); // stop timer
    s = 0;
    h = 0;
    m = 0;
    timeDisplay.innerHTML = `${h}0:${m}0:${s}0`;
    playTime.innerHTML = `<i class="fa-solid fa-play"></i>`

    console.log("jii")
})

const cardsbox = document.querySelector("#cards-box");
let arr = [
    {
        img: "https://static.vecteezy.com/system/resources/thumbnails/018/245/125/small/3d-illustration-writing-to-do-list-png.png",
        title: "to-do-list",
        content: "0"
    },
    {
        img: "https://png.pngtree.com/png-clipart/20230224/ourmid/pngtree-sticky-notes-pins-png-image_6616372.png",

        title: "personal notes",
        content: "0"
    },
    {
        img: "https://png.pngtree.com/png-clipart/20250130/original/pngtree-calendar-3d-icon-isolated-on-a-transparent-background-symbolizing-schedules-and-png-image_20358144.png",
        title: "upcoming event",
        content: "0"
    },
    {
        img: "https://static.vecteezy.com/system/resources/previews/051/320/399/non_2x/cartoon-metal-weights-barbell-icon-for-fitness-gym-free-png.png",
        title: "workout record",
        content: "0"
    },
    {
        img: "https://icon-library.com/images/art-icon-png/art-icon-png-2.jpg",
        title: "art style",
        content: "0"
    },
    {
        img: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-study-material-marketplace-enhanced-with-3d-icon-isolated-on-a-transparent-png-image_20373771.png",
        title: "study resources",
        content: "0"
    }
]

function uiDisplay() {
    let data = ''

    arr.forEach((e, id) => {
        data += `
        <div class="card bg-black/3  rounded-xl flex justify-between items-center px-3" id="${id}">
<div class="">
  <p class="text-5xl">${e.content}</p>
  <p class="text-black/50 capitalize font-bold">${e.title}</p>
</div>
<img src="${e.img}" alt="" class="w-[80px] h-[80px] object-fit">
</div>
        `
    })
    cardsbox.innerHTML = data
}
uiDisplay()

