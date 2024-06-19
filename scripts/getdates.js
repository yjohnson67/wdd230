//Last Modified
let lastModified = new Date(document.lastModified);
document.querySelector('#last-modification').textContent = lastModified;
 
//Copyright Date
let currentDate = new Date();
let copyright = currentDate.getFullYear();
document.querySelector('#coRight').textContent = "©" + copyright