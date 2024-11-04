const TOKEN = '7659619237:AAGsNUbgzLQk02-VN80coscaOtv2d0Co6M8';
const CHAT_ID = '-4599610178';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector('.succes');

document.getElementById('form').addEventListener('submit', function(e) {

    e.preventDefault();

    let message = 'Заявка с сайта\n' + 'Имя:' + this.name.value + '\n' + 'Номер телефона: ' + this.phone.value + "\n" + 'Сообщение: ' + this.messages.value;

    axios.post(URL_API,{
        chat_id:CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) =>{
        succes.classList.remove('disp');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finaly(() =>{
        console.log('Скрипт выполнен');
    })
})
