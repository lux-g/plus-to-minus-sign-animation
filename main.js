const menuBar = document.querySelector('.menu-bar')
menuBar.addEventListener('click', ()=> {
    document.querySelector('#bar1').classList.toggle('change');
    document.querySelector('#bar2').classList.toggle('change')
})
