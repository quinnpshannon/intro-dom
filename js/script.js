// const ul = document.getElementById('todo-list'); //IDs only
// // const h1 = document.getElementById('heading-1');

// const h1 = document.querySelector('#heading-1'); // id
// const navbar = document.querySelector('.navbar'); // class
// const h2 = document.querySelector('h2'); // element name

// const lis = document.querySelectorAll('li'); // element name

// console.log(h1.innerText);
// console.log(ul);
// console.log(navbar);
// console.log(h2);
// console.log(lis);

const app = document.getElementById("app");
const table = document.createElement("table");
console.log(app);
let rows = 5;
let cols = 10;
for(let r=0;r<rows;r++){
    const tr=document.createElement("tr");
    for(let d=0;d<cols;d++){
        const td=document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
app.appendChild(table);