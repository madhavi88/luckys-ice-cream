 function signIn(){
        document.theForm.action="thanks.html";
        document.theForm.submit();
        alert("welcome to Luckys Ice Cream");
    }
    function createAnAccount(){
        document.theForm.action="thanks.html";
        document.theForm.submit();
        alert("You are sucessfully Created your account");
    }

    // flavors page  slide show
    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
} 
    