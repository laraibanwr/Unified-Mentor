const display = document.querySelector('#display');

function show(input){
    display.value += input;
}

function clearAll(){
    display.value = "";
}

function popLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}