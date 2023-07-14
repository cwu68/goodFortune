document.querySelector('.fortune').innerText = sessionStorage.getItem('fortune')

document.querySelector('.cookie').onclick = function () {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.cookie').style.display = 'none';
}
