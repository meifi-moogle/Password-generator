const btn = document.querySelector('#btn');

//~!@#$%^&*+-/|.,{}[]();:


function makePassword1(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

btn.addEventListener('click', function() {
    
console.log(makePassword1(12));
})


