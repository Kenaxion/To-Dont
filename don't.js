const bootstrap = require("bootstrap");

const taskList = document.getElementById("dailyDontsList");


let tasks = [
   {
   "date": Date.now,
   "task": "test",
   "done": false,
   },
   {
      "date": Date.now,
      "task": "test2",
      "done": false,
   },
]


tasks.forEach(element => {
   const li = document.createElement("li");
   li.textContent = element.task;
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.checked = element.done;

   checkbox.addEventListener("click", listenCheckbox)

   li.appendChild(checkbox);
   taskList.appendChild(li);
});

function listenCheckbox(e) {
   console.log(e);
}

//animate header



//   {
//     "name": "Alabama",
//     "abv": "AL",
//     "capital": "Montgomery",
//     "num_reps": "7",
//     "population": "4,903,185",
//     "ratified": "Dec 14, 1819"
//   } 

// const server = http.createServer(function (req, res){
//     "http://localhost:3000";
//     res.statusCode = 200;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const queryString = url.parse(req.url, true).query;
// })