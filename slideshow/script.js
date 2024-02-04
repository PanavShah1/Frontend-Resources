let slideIndex = 1;
let num = 1;
showSlides(slideIndex);


function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function nextSlide(){
    plusSlides(1);
}

function showSlides(n){
    // alert(n);
    let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
        n = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
        n = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
        slides[i].className = slides[i].className.replace(" slide-active", "");
        slides[i].className = slides[i].className.replace(" slide-last-active", "");
    }
    console.log(n, num, slideIndex);

    slides[slideIndex-1].style.display = "block"; 
    slides[num-1].style.display = "block"; //problem
    dots[slideIndex-1].className += " active";
    slides[slideIndex-1].className += " slide-active";
    slides[num-1].className += " slide-last-active"; //problem
    num = slideIndex; //problem
}

// function keepSlide(n){
//     // alert(n);
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
    
//     for (var i = 0; i< dots.length; i++){
//         slides[i].style.display = "none";
//     }
//     slides[n-1].style.display = "block";

// }

setInterval(nextSlide, 3000);


