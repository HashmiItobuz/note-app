const addBtn = document.getElementById("addIcon");
const mainPage = document.querySelectorAll(".main-container");
const backBtn = document.getElementById("backIcon");

addBtn.addEventListener("click", function () {
  mainPage[0].classList.remove("hide");
});

backBtn.addEventListener("click", function () {
  mainPage[0].classList.add("hide");
});

const notesPreview = document.getElementsByClassName("notes-preview")[0];
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("description");
const submit = document.getElementById("createBtn");

const noteArray = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if(inputTitle.value === "") {
    alert("Please Fill In All Required Fields");
    return false;
  }else if(inputContent.value === "")
  {
    alert("Please Fill In All Required Fields");
    return false;
  }
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  const content = {
    title: inputTitle.value,
    description: inputContent.value,
    todaysDate: currentDate,
  };

  noteArray.push(content);
  console.log(noteArray);
  showNotes();

  function showNotes() {
    notesPreview.innerHTML = "";

    for (let i = 0; i < noteArray.length; i++) {
      let divElement = document.createElement("div");
      let titleText = noteArray[i].title;
      let descriptionText = noteArray[i].description;
      let dateText = noteArray[i].todaysDate;
      divElement.innerHTML = `<h5>${dateText}</h5><h4>${titleText.trim()}</h4><p>${descriptionText.trim()}</p>`;
      notesPreview.appendChild(divElement);
      divElement.classList.add("box");
      inputTitle.value = "";
      inputContent.value = "";
    }
  }
  mainPage[0].classList.add("hide");
});
