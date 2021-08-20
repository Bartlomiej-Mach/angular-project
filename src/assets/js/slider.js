// 
// 
//
// ten js ma działać ale nie stwierdził że nie będzie działać :/ 


// let slides = document.getElementsByClassName("info-slide");
const slides = document.querySelectorAll(".info-slide");

let slideIndex = 0;

console.log(slides);
console.log(slides[0]);

const slider = () => {

    Array.from(slides).forEach( el =>{
        console.log(el);
    });

    for(let i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";
      console.log(i);  

    };
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }   
    console.log(slides[slideIndex]); 
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 2000);
};

slider();
