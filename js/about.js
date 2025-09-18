// Javascript to show/hide the 'specify' input field based on circuit selection

document.getElementById('driver').addEventListener('change', function() {
    if(this.value === 'Other') {
        let specifydriver = document.getElementsByClassName('d-specify');
        for(let i = 0; i < specifydriver.length; i++){
            specifydriver[i].style.display = 'inline-block';
        }
    } else{
        let specifydriver = document.getElementsByClassName('d-specify');
        for(let i = 0; i < specifydriver.length; i++){
            specifydriver[i].style.display = 'none';
        }
    }
});