document.querySelector('.fortune').innerText = sessionStorage.getItem('fortune')

document.querySelector('.cookie').onclick = function () {
    document.querySelector('.cookie').style.animation = 'slideout 3s';
    setTimeout(() => {
        document.querySelector('.cookie').style.transform = 'translateX(100%)';
        document.querySelector('.container').style.display = 'block';
        // document.querySelector('.cookie').style.display = 'none';
    }, 3000);
}
