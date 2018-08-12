var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("banner");   
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);// Change image every 2 seconds
}

const ticketModal = document.getElementById("myTicketBox");
const buyButtons = document.querySelectorAll(".buy-btn");
const closeSign = document.querySelectorAll(".close");

buyButtons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        ticketModal.style.display= "block";
    });
});

closeSign.forEach((close)=>{
    close.addEventListener("click", ()=>{
        ticketModal.style.display = "none";
    });
});

window.addEventListener("click", (event)=>{
    if (event.target == ticketModal) {
        ticketModal.style.display = "none";
    }
});

/*Google Map*/
// Initialize and add the map
initMap =()=> {
    // The location of California
    const cali = {lat: 33.705519, lng: -118.016310};
    // The map, centered at Cali
    const CaliMap = new google.maps.Map(
        document.getElementById('google-map'), {
            zoom: 4, 
            center: cali,
            backgroundColor: '#afb9c5',
            draggable: false
        });
    // The marker, positioned at California
    let marker = new google.maps.Marker({position: cali, map: CaliMap});
  } 



