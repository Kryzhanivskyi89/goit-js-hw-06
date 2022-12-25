const fontSizeControl = document.querySelector("#font-size-control");
const abracadabra = document.querySelector("#text");

fontSizeControl.addEventListener(`input`, fontSizeControlInput);

function fontSizeControlInput() {
    abracadabra.style.fontSize = fontSizeControl.value + 'px';    
}