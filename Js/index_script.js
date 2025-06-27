
// for the button who goes to top
let topBtn = document.getElementById("topBtn");

    window.onscroll = function(){
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            topBtn.style.display = "block";
        } else{
            topBtn.style.display = "none";
        }
    };

    function scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

//for the darkmode button
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode");
})