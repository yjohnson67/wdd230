// query selectors
const announcement = document.querySelector('.announcement');
var today = new Date();
var day = today.getDay();
 
 
// display banner only on Monday(1), Tuesday(2), and Wednesday (3)
if (day === 1 || day === 2 || day === 3) {
    // check local storage
    if(localStorage.getItem('announcement') === 'hidden'){
        // empty, do nothing    
    } else {
        const navHeight = document.querySelector('nav').offsetHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        //console.log(navHeight);
        announcement.style.top = `(${headerHeight}+${navHeight})px`;
    }
} else {
    announcement.style.top = '-100px';
}
 
// handle closed announcement
function hideAnnouncement() {
    console.log('Button Clicked');
    announcement.style.top = '-100px';
    localStorage.setItem('announcement', 'hidden');
}