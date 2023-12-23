const toggle = document.querySelector('#toggle');
const nav = document.querySelector('header nav');
toggle.onclick = () => {
    nav.classList.toggle('active');
}

const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const btn = document.querySelector('header nav .btn');
window.onscroll = () => {
    if(window.scrollY > 100) {
        header.classList.add('bg-white');
        logo.classList.add('black');
        btn.classList.add('btn-gradient');
    } else {
        header.classList.remove('bg-white');
        logo.classList.remove('black');
        btn.classList.remove('btn-gradient');
    }
    if(window.scrollY > 600) {
        up.style.display = "block";
    } else {
        up.style.display = "none"
    }
}

const up = document.querySelector("#up");
up.addEventListener("click", function (){
    window.scrollTo(0,0);
})