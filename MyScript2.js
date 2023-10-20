// Node
const para = document.createElement("p");
const node = document.createTextNode("Ini teks yang dibuat menggunakan node")
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);

// //DOM Event
// const pesanElement = document.getElementById("pesan");
// let klikPertama = true;

// pesanElement.addEventListener('click', () => {
//     if (klikPertama) {
//         pesanElement.textContent = "Selamat Pagi ayangie";
//         klikPertama = false;
//     } else {
//         pesanElement.textContent = "hihihihi";
//         klikPertama = true;
//     }
// })

// //DOM Animation

// var door = document.getElementById("door");
// var button = document.getElementById("button");

// var isOpen = false;

// button.addEventListener('click', function(){
//     if (isOpen) {
//         door.style.transform = 'rotateY(0deg)';
//     } else {
//         door.style.transform = 'rotateY(-90deg)';
//     }

//     isOpen = !isOpen;
// })

