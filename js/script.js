let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function() {
    navbar.classList.toggle('active');
};

window.onscroll = function() {
    removeActive();
};

let close = document.querySelector('.close');

close.addEventListener('click', function() {
        removeActive();
    }, false
);

function removeActive() {
    navbar.classList.remove('active');
}