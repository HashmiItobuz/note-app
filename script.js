console.log('Hello');
const inp = document.getElementById('ins');
const submit =  document.getElementById('btn');
const res = document.getElementById('result');
const res1 = document.getElementById('result1');
const res2 = document.getElementById('result2');
const inp1 = document.getElementById('ins1');

let noteArray = [];
submit.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(noteArray);
    // res.innerText = inp.value;
    // res1.innerText = inp.value;
    // res2.innerText = inp1.value;
    /*noteArray.push(inp.value);*/
    // res.innerText = inp1.value;
    // console.log(input.value);
    /*console.log(noteArray);*/
    
    /*let divElement = document.createElement("div");*/
    // let childSpanElement = document.createElement("span");
   /* let text = document.createTextNode(noteArray);*/
    // childSpanElement.innerText = i;
    // divElement.append(childSpanElement);
    /*divElement.append(text);*/
    // divElement.classList.add('box');
    // divElement.classList.add(`box${i}`)
            
   /* document.body.appendChild(divElement);
    divElement.className+='box';*/
    // noteArray.push({title:inp.value},{content:inp1.value});
    // let valuearray = inp.value + inp1.value
    noteArray.push(inp.value, inp1.value);
      
    showNotes();
});

// function showNotes(){
//     console.log(noteArray.length);
//     for(let i=0; i<noteArray.length; i=i+2){
//         let divElement = document.createElement("div");
//         divElement.innerHTML =`<h1>${noteArray[i]}</h1>
//         <p>${noteArray[i+1]}</p>`
        
//         // let text =  document.createTextNode(noteArray);
//         // divElement.append(text);
//         document.body.appendChild(divElement);
//         divElement.classList.add('box');
//     }
//     noteArray = [];
//    console.log(noteArray.length);
// }
function showNotes(){
    for(let i = 0; i < noteArray.length; i++){
        let divElement = document.createElement("div");
        let text = document.createTextNode(noteArray);
        divElement.append(text);
        document.body.appendChild(divElement);
        divElement.className+='box';
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

