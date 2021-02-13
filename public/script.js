const socket = io.connect(`192.168.178.112:5000`);
const input = document.getElementById('input');
const form = document.getElementById('chat');
const message = document.getElementById('messages');
form.addEventListener('submit', e =>{
    e.preventDefault();
    if(input.value){
        socket.emit('msg', input.value);
        const item = document.createElement('li');
        item.textContent = input.value;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
        input.value = '';
    }
});
socket.on('msg', msg => {
    const item = document.createElement('li');
    item.textContent = msg;
    item.style = "background-color: gray";
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
alert(location.host)
