window.onload = function(){
    let jumb = document.querySelector('.jumbotron');
    let overlay = document.querySelector('#overlay');
    let btn = document.querySelector('.jumbotron .btn');



    btn.onclick = function(){
        jumb.style.display = 'none';
        overlay.style.display = 'none';
    }
}