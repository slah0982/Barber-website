// page mode
let indicator = document.querySelector('.indicator');
let mode = document.querySelector('.mode');
let page = document.querySelector('body');
mode.onclick = () =>{
    page.classList.toggle('dark-mode');
    if(page.classList.contains('dark-mode')){
        indicator.classList.remove("active");
    }
    else{
        indicator.classList.add("active");
    }
}

// change header color
let header = document.querySelector('header');
let servies = document.getElementById('servies');
let contactUs = document.getElementById('contact-us');
window.onscroll = () =>{
    if(window.scrollY >= servies.offsetTop - 30 && window.scrollY < contactUs.offsetTop -30){
        header.style.backgroundColor = "var(--section-color)";
        header.style.color = "red";
        mode.style.backgroundColor = "var(--section-color)";
        console.log(window.scrollY);
    }
    else if(window.scrollY >= contactUs.offsetTop - 30){
        header.style.backgroundColor = "var(--second-sec-color)";
        mode.style.backgroundColor = "var(--section-sec-color)";
    }
    else{
        header.style.backgroundColor = "rgba(0, 0, 0, 0.342)";
        header.style.color = "#fff";
        mode.style.backgroundColor = "#222";
    }
}