var listData = document.querySelector("#list-data");
var userimg = document.querySelector(".user-img");
var userName = document.querySelector(".user-name");
var weeks = document.querySelector("#weeks");
var month = document.querySelector("#month");
var dateui = document.querySelector("#date-1");
var subm = document.querySelector("#submit")
var title = document.querySelector("#title");
var inputdate = document.querySelector("#date");
var inptime = document.querySelector("#time");
var details = document.querySelector("#details");
var list = document.querySelector("#list");
var user = [
    {
        username: "shivam",
        userImg: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        password: "12313",
    }
]

var card = [
    {
        headline: "to do list",
        bg: "#ecf2ff",
        url: "./img/icon.png",
        text: "You want to add something? Click me!"
    },
    {
        headline: "daily planner",
        bg: "#fffceb",
        url: "./img/icon2].png",
        text: "You want to add something? Click me!"
    },
    {
        headline: "motivation",
        bg: "#feebec",
        url: "./img/icon3.png",
        text: "You want to add something? Click me!"
    },
    {
        headline: "pomodoro timer",
        bg: "#ebfff4",
        url: "./img/icon.png",
        text: "You want to add something? Click me!"
    },
]
let data = '';
card.forEach((e, idx) => {
    data += `
    <div class="card" id="${idx}">
            <div class="top bg-[${e.bg}]"></div>
            <div class="image-1">
              <img src="${e.url}" alt="">
            </div>
            <div class="content w-[90%] flex flex-col gap-1" style="margin: 35px auto;">

              <p class="capitalize font-bold tracking-tighter">${e.headline}</p>
              <p class="capitalize font-bold text-sm tracking-tighter text-black/30">add task 21s ago</p>
              <p class="text-sm text-black/30">${e.text}</p>
              <div class="userinfo flex items-center gap-1">
                <div class="w-8 h-8 bg-black rounded-full overflow-hidden">
                  <img
                    src="${user[0].userImg}"

                    alt="" class="w-full h-full object-cover">
                </div>
                <p class="font-bold text-black/50 capitalize text-[10px]">hy, ${user[0].username}</p>
              </div>
            </div>
          </div>
    `
})


userimg.src = user[0].userImg;
userName.textContent = user[0].username


listData.innerHTML = data

let date = new Date()
function datefind() {
    const weekName = date.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = date.toLocaleDateString("en-US", { month: "long" });
    var td = date.getDate();
    var newtd = td < 9 ? String(td).padStart(2, '0') : td;
    dateui.textContent = newtd
    month.textContent = monthName
    weeks.textContent = weekName
}




datefind()


function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour < 12) {
      greeting = "Good Morning ☀️";
    } else if (hour < 17) {
      greeting = "Good Afternoon 🌞";
    } else if (hour < 20) {
      greeting = "Good Evening 🌇";
    } else {
      greeting = "Good Night 🌙";
    }

    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = "";
    
        if (hour < 12) {
          greeting = "Good Morning ," ;
        } else if (hour < 17) {
          greeting = "Good Afternoon ," ;
        } else if (hour < 20) {
          greeting = "Good Evening ," ;
        } else {
          greeting = "Good Night ," ;
        }
        document.getElementById("greeting").innerText = greeting + user[0].username;
      }
    
      // Call once at start
      updateGreeting();
    
      // Then update every minute (60000 ms)
      setInterval(updateGreeting, 60000);
  }

  // Call once at start
  updateGreeting();

  // Then update every minute (60000 ms)
  setInterval(updateGreeting, 60000);


function pp(){
   var lis =   localStorage.getItem("todolist");
   var dt =  JSON.parse(lis)
   let data =''
   dt.forEach((e)=>{
    data += `
    <div class="tasks mb-2">
   <h1 class="title font-bold uppercase text-sm">${e.title}</h1>
   <p class="text-[13px] inline">${e.deatils}</p>
   <button class="inline-block"><i class="fa-solid fa-trash text-red-500/50"></i></button>
   <p class="text-black/50 capitalize text-sm">${e.date} ${e.time}</p>
 </div>
 `
   })
list.innerHTML = data
}
pp()

let toDo = [

]

  subm.addEventListener("click" , ()=>{
 
let sk = {
    title:title.value,
    time:inptime.value,
    date:inputdate.value,
    deatils:details.value
}
 toDo.push(sk)
localStorage.setItem("todolist" , JSON.stringify(toDo))
pp()
  })