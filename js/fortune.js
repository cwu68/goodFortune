document.querySelector('.fortune').innerText = sessionStorage.getItem('fortune')

document.querySelector('.cookie').onclick = function () {
    document.querySelector('.cookie').style.animation = 'slideout 2s';
    document.querySelector('.cookie').style.transform = 'translateX(40vw)';
    setTimeout(() => {
        document.querySelector('.container').style.display = 'block';
    }, 2000);
}
