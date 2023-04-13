console.log("Hello");

const notesPreview = document.getElementsByClassName("notes-preview")[0];

const inputTitle = document.getElementById("input-title");
const inputContent = document.getElementById("input-content");
const submit = document.getElementById("btn");

let noteArray = [];
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(noteArray);

  noteArray.push({
    title: inputTitle.value,
    content: inputContent.value
  });

  showNotes();
});

function showNotes() {
  notesPreview.innerHTML = "";

  for (let i = 0; i < noteArray.length; i++) {
    let divElement = document.createElement("div");
    let titleText = noteArray[i].title;
    let contentText = noteArray[i].content;
    divElement.innerHTML = `<h1>${titleText.toUpperCase()}</h1><hr><p>${contentText}</p>`;
    notesPreview.appendChild(divElement);
    divElement.classList.add("box");
    inputTitle.value = "";
    inputContent.value = "";
  }
}






















//     for (let i = 1; i <= a; i++) {
//         if (i % 2 != 0) {
//             console.log(i);

//             let divElement = document.createElement("div");
//             // let childSpanElement = document.createElement("span");
//             let text = document.createTextNode(noteArray.push(inp.value));
//             // childSpanElement.innerText = i;
//             // divElement.append(childSpanElement);
//             divElement.append(text);

//             divElement.classList.add('box');
//             // divElement.classList.add(`box${i}`)

//             document.body.appendChild(divElement);

//         }
//     }
// });

// btn.addEventListener('submit', function(e){
//     e.preventDefault();
//     res.innerText = inp.value;
//     res1.innerText = inp1.value;
// });

// for(let i=0; i<noteArray.length; i++){
//     res1.innerText = inp.value;
//     noteArray.push(inp.value);
//     console.log(noteArray);
// }
