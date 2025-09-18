// JavaScript to show/hide the 'specify' input field based on circuit selection

document.getElementById('circuit').addEventListener('change', function() {
    if (this.value === 'Other') {
        let specifyElements = document.getElementsByClassName('t-specify');
        for (let i = 0; i < specifyElements.length; i++) {
            specifyElements[i].style.display = 'inline-block';
        }
    } else {
        let specifyElements = document.getElementsByClassName('t-specify');
        for (let i = 0; i < specifyElements.length; i++) {
            specifyElements[i].style.display = 'none';
        }
    }
});


