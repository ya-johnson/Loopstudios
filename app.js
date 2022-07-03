const nav = document.getElementById('nav');
const hamburger = document.getElementById('ham');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open')
})


/*
hamburger.addEventListener('click', () => {
    console.log('click')
    if(nav.classList.contains('open')) {
        nav.classList.remove('open')
    }
    else {
        nav.classList.add('open');
    }
})
*/