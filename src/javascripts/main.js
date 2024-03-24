//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { animalImages } from "./images"

for(let g of animalImages){
    let g_thumb = document.getElementById('g'+ g.id)
    g_thumb.innerHTML = `
    <img src="${g.URL}" alt="${g.title}" class="img-thumbnail"/>
    `
    g_thumb.onclick = function() {
        displayImage(g);
    }
    
}



let featured_image = document.querySelector(".featured");
// default image
displayImage(animalImages[0]);

function displayImage(image) {
    featured_image.innerHTML = `
        <div class="card">
            <div class="card-header">${image.title}</div>
            <img src="${image.URL}" class="card-img-top" alt="${image.title}">
            <div class="card-body">
            ${image.description}
            </div>
            
        </div>
    `;
}


