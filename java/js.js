const btnhamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        })
    }
    else{
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });
    }
    // console.log("hello");
    // if(btnhamburger.classList.contains('open')){
    //     btnhamburger.classList.remove('open');
    // }else{
    //     btnhamburger.classList.add('open');
    // }
});