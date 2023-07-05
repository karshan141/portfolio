const driverBaseNo = [8, 40, 2163, 5167, 5364, 13390, 12523];
const conductorBaseNo = [4, 5, 65, 216, 219, 220, 407, 589, 1089];

const driverBaseNoContainer = document.querySelector("[data-driverBaseNumber]");
const counductorBaseNoContainer = document.querySelector(
  "[data-conductorBaseNumber]"
);

let inputDriverBase = document.querySelector("[data-inputDriverBase]");
let inputCounductorBase = document.querySelector("[data-inputCounductorBase]");

// For fetch value of driver base no  in model

for (let i = 0; i < driverBaseNo.length; i++) {
  let option = document.createElement("option");
  option.value = driverBaseNo[i];
  inputDriverBase.appendChild(option);
}

// For fetch value of Conductor base no  in model

for (let i = 0; i < conductorBaseNo.length; i++) {
  let option = document.createElement("option");
  option.value = conductorBaseNo[i];
  inputCounductorBase.appendChild(option);
}

// Funcnction to update pending driver
function getDriverBaseNoInContainer() {
  driverBaseNoContainer.innerHTML = "";
  for (let i = 0; i < driverBaseNo.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = driverBaseNo[i];
    driverBaseNoContainer.appendChild(li);
  }
}

getDriverBaseNoInContainer();

// Funcnction to update pending conductor
function getCondBaseNoInContainer() {
  counductorBaseNoContainer.innerHTML = " ";
  for (let i = 0; i < conductorBaseNo.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = conductorBaseNo[i];
    counductorBaseNoContainer.appendChild(li);
  }
}

getCondBaseNoInContainer();

const addCrewButton = document.querySelectorAll(".addUpdateCrew");
const addUpdateModel = document.querySelector(".add-edit-model");

for (let i = 0; i < addCrewButton.length; i++) {
  let clickedCDS = addCrewButton[i].classList[0];

  addCrewButton[i].addEventListener("click", function () {
    addUpdateModel.classList.add("active");
    openModel(clickedCDS);
  });
}

// function
function openModel(clickedCDS) {
  let driverBaseNo = document.getElementById(clickedCDS + "-driver").value;
  let condrBaseNo = document.getElementById(clickedCDS + "-cond").value;
  let cdsNumber = clickedCDS[clickedCDS.length - 1];

  document.getElementById("driverBase").value = driverBaseNo;
  document.getElementById("counductorBase").value = condrBaseNo;
  document.getElementById("cdsNumber").value = cdsNumber;
}

let addUpdateButton = document.getElementById("addUpdateCrew");

//Add Update model button event listner
addUpdateButton.addEventListener("click", addUpdateCrew);

//Add Update model button event listner callback function
function addUpdateCrew() {
  let driverBase = document.getElementById("driverBase").value;
  let condBase = document.getElementById("counductorBase").value;
  let cdsNumber = document.getElementById("cdsNumber").value;

  document.getElementById(`cds-${cdsNumber}-driver`).value = driverBase;
  document.getElementById(`cds-${cdsNumber}-cond`).value = condBase;

  remMoveFromArray(driverBase, driverBaseNo);

  remMoveFromArray(condBase, conductorBaseNo);

  document.getElementById("driverBase").value = "";
  document.getElementById("counductorBase").value = "";
  document.getElementById("cdsNumber").value = "";

  addUpdateModel.classList.remove("active");
}

// Remove crew From Pending crew list
function remMoveFromArray(Base, crewBaseNo) {
  for (let i = 0; i < crewBaseNo.length; i++) {
    if (crewBaseNo[i] == Base) {
      crewBaseNo.splice(i, 1);
    }
  }

  // call function to update ui after remove
  getDriverBaseNoInContainer();
  getCondBaseNoInContainer();
}

