const keys = document.getElementById('keys');
let value = "";
let a = "", b = "", c = "";

keys.addEventListener('click', function (event) {
    if (event.target.id != '=' && event.target.id != 'AC' && event.target.id != 'DEL') {
        const pressedKeyId = event.target.id;
        value += pressedKeyId;
    }
    else if (event.target.id == 'AC') {
        a = "";
        b = "";
        c = "";
        value = "";
    }
    else if (event.target.id == 'DEL') {
        value+="";
        value = value.slice(0, -1);
    }
    else {
        size = value.length;
        a = "", b = "", c = ""
        for (i = 0; i < size; i++) {
            if (value[i] != '+' && value[i] != '-' && value[i] != '*' && value[i] != '/' && value[i] != '%') {
                c += value[i];
            }
            else {
                a = c;
                b = value[i];
                c = "";
            }
        }

        a = parseFloat(a);
        c = parseFloat(c);

        switch (b) {
            case "+": {
                value = a + c;
                break;
            }
            case "-": {
                value = a - c;
                break;
            }
            case "/": {
                value = a / c;
                break;
            }
            case "%": {
                value = a % c;
                break;
            }
            case "*": {
                value = a * c;
                break;
            }
        }
    }
    if (Number.isNaN(value)) {
        value = "Invalid expression";
    } 
    document.getElementById('display').innerText = value;
});
