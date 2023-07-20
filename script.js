const form = document.querySelector('form');
statusTxt = form.querySelector('.button-area span');

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.display = 'block';

   
    let xhr = new XMLHttpsRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status ==200) {
            let response = xhr.response;
            console.log(response);
        }
    }
    xhr.send();
}
