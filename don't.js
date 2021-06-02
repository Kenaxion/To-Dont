const taskList = document.getElementById("dailyDontsList");


let task = {
   "date": Date.now,
   "task": "test",
   "done": false,
}

let tasks = [{}]

const li = document.createElement("li")
li.textContent = task.task;
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.checked = task.done;
li.appendChild(checkbox);
taskList.appendChild(li);

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