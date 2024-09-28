// document.body.childNodes[1].innerText = "abcd"
// let heading = document.getElementById("Header1");
// console.dir(header1);
// let headings = document.getElementsByClassName("Heading")
// console.dir(headings);
// console.log(headings); 
// let para = document.getElementsByTagName("p")
// console.dir(para);
// console.log(para)
// let element = document.querySelectorAll("h1")
// let elements = document.querySelectorAll(".heading")
// console.dir(elements)
// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students"

// let div = document.querySelector("div")
// divs[0].innerText =  "new unique value 1" 
// divs[1].innerText =  "new unique value 2" 
// divs[2].innerText =  "new unique value 3" 

// let idx = 1;
// for(div of divs) {
//     div.innerText = `new unique value ${idx}`
//     idx++;
// }
// let id = div.getAttribute("id")
// let name = div.getAttribute("name")
// console.log(id);
// console.log(name);
// console.log(div);
// let p = document.querySelector("p")
// console.log(p.getAttribute("class"));
// console.log(p.setAttribute("class", "newClass"));

// div.style.backgroundColor = "yellow";
// div.style.fontSize = "20px";
// div.innerText = "Hello!";

// let newBtn = document.createElement("Button");
// newBtn.innerText = "Click me!"
// console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// // div.after(newBtn);
// newBtn.style.margin = "10px" 

// let newHeading = document.createElement("h1")
// newHeading.innerHTML = "<i>Hey, I am new!</i>"
// let body = document.querySelector("body").prepend(newHeading);
// console.log(newHeading);
// let h2 = document.querySelector("h2")
// h2.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!"
// let body = document.querySelector("body").prepend(newBtn);
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// let para = document.querySelector("p");
// para.classList.add("newClass");

// let Btn = document.querySelector("#Btn");
// Btn.onclick = () =>{
//     console.log("Button was clicked");
//     let a = 26;
//     a++;
//     console.log(a);
// }

// Btn.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clintX, e.clintY);
// }
// Btn.addEventListener("click", () => {
//     console.log("Btn wa clicked")
// })
// // }
// Btn.addEventListener("click", (evt) => {
//     console.log("Btn wa clicked - Header1");
//     console.log(evt);

// })
// Btn.addEventListener("click", (evt) => {
//     console.log("Btn wa clicked - Header2");
// })
// const Header3 = () => {
//     console.log("Btn wa clicked - Header3")
// }
// Btn.addEventListener("click", Header3);
// Btn.addEventListener("click", (evt) => {
//     console.log("Btn wa clicked - Header4");
// })
// Btn.removeEventListener("click", Header3)


// let Div = document.querySelector("div");
// Div.onmouseover = () => {
//     console.log("You are inside div");
// }

let mode = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = "light"

mode.addEventListener("click", () =>{
    console.log("You are trying to chnage your mode");
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }else{
        currMode = "light"
    body.classList.add("light")
    body.classList.remove("dark")
    }
console.log(currMode)
})
