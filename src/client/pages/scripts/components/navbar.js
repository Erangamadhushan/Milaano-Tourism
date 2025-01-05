import {navbarContent} from '../contents/navbarContent.js';

window.addEventListener("DOMContentLoaded", () => {
    renderNavbarContents(navbarContent);
});

let navbarContainer = document.querySelector('.navbar-expand-sm');
function renderNavbarContents(contents) {
    
    navbarContainer.innerHTML = " ";
    let navbarContent = `
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">MILAANO TOURISM</a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#siteNavbarSection" type="button"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="siteNavbarSection">
                <ul class="navbar-nav">
    `;
    contents.forEach((content) => {
        navbarContent += `
            <li class="nav-item">
                <a class="nav-link" href="${content.link}">${content.title}</a>
            </li>
        `
    });
    navbarContent += `
                </ul>
            </div>
        </div>
    `;
    navbarContainer.innerHTML = navbarContent;
    console.log(navbarContent);
}