"use strict";

const btn = document.getElementById("btn");
const inputs = Array.from(document.querySelectorAll(".input__value"));
let tableList = document.getElementById("table-list");
let workers = [];

class Person {
  constructor(name, age, children, skills = []) {
    this.name = name;
    this.age = age;
    this.children = children;
    this._skills = skills;
  }
  get skills() {
    return this._skills;
  }
  set skills(skill) {
    this.skills.push(skill);
  }
}

class Worker extends Person {
  constructor(name, age, children, organization) {
    super(name, age, children);
    this.organization = organization;
  }
  position(position) {
    this.position = position;
  }
  date(date) {
    this.date = date;
  }
}

const render = function (workers) {
  tableList.innerHTML = "";
  workers.forEach((item, index) => {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = item.name;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item.age;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item.children;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item._skills;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item.organization;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item.position;
    tr.append(td);
    td = document.createElement("td");
    td.textContent = item.date;
    tr.append(td);
    td = document.createElement("td");
    td.innerHTML = `<td><img class="table__del" src="./img/trash.png" /></td>`;
    td.querySelector(".table__del").addEventListener("click", (event) => {
      workers.splice(index, 1);
      render(workers);
    })
    tr.classList.add("table__item");
    tr.append(td);
    tableList.append(tr);
  });
  localStorage.setItem("lesson17", JSON.stringify(workers));
};

const addWorker = function (worker) {
  workers.push(worker);
  render(workers);
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputs[0].value) {
    const worker = new Worker(inputs[0].value, inputs[1].value, inputs[2].checked, inputs[4].value);
    worker.skills = inputs[3].value;
    worker.position = inputs[5].value;
    worker.date = inputs[6].value;
    console.log(worker);
    addWorker(worker);
    inputs[0].value = "";
  }
});

if (localStorage.getItem("lesson17")) {
  workers = JSON.parse(localStorage.getItem("lesson17"));
  render(workers);
}

// const worker1 = new Worker("Alex", 33, true, "Завод");
// worker1.skills = "Слесарь";
// worker1.position = worker1.skills[0];
// worker1.date = "2023-11-01";
// console.log("worker1: ", worker1);
