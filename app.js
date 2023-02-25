const password = document.querySelector('.password');
const checkbox = document.querySelector('#checkbox');

function checkboxCheck() {          //change characters according to checkbox
    if (checkbox.checked === true) {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*+-/|.,{}[]();:';
    } else {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
}

const select = document.querySelector('#numberSelect');

function numberCheck() {            //use number value
    number = select.value;
    return number;
}

function makePassword(length) {     //make password based on settings
    let result = '';
    let characters = checkboxCheck();
    length = numberCheck();
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    password.textContent = result;
}

const copyBtn = document.querySelector('.copy-btn');

copyBtn.addEventListener('click', function () {      //copy to clipboard
    let text = password.textContent;
    navigator.clipboard.writeText(`${text}`);
    alert('Password ready to paste!')
})

const restartBtn = document.querySelector('.restart-btn')

restartBtn.addEventListener('click', () => {
    makePassword();
})

makePassword();

