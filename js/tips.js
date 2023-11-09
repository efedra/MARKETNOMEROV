let text = document.querySelector('.link-underline')
let flag = false

text.addEventListener('click', () => {
    flag = !flag;
    if (flag) {
        document.getElementById('tips').style.display = 'grid';
    } else {
        document.getElementById('tips').style.display = 'none';
    }
})