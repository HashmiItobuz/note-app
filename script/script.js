console.log("Hello");

const notesPreview = document.getElementsByClassName("notes-preview")[0];

const inputTitle = document.getElementById("input-title");
const inputContent = document.getElementById("input-content");
const submit = document.getElementById("btn");

let noteArray = [];
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // let date = new Date().toLocaleDateString();
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate =`${day}-${month}-${year}`;

  const content = {
    title: inputTitle.value,
    content: inputContent.value,
    todaysDate: currentDate
  }

  noteArray.push(content);

  showNotes();
});

function showNotes() {
  notesPreview.innerHTML = "";

  for (let i = 0; i < noteArray.length; i++) {
    let divElement = document.createElement("div");
    let titleText = noteArray[i].title;
    let contentText = noteArray[i].content;
    let dateText =noteArray[i].todaysDate;
    divElement.innerHTML = `<h3>${dateText}</h3><h1>${titleText.toUpperCase()}</h1><hr><p>${contentText}</p>`;
    notesPreview.appendChild(divElement);
    divElement.classList.add("box");
    inputTitle.value = "";
    inputContent.value = "";
  }
}






















