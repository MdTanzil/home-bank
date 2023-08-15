document.getElementById("login").addEventListener('click',()=>{
    const email = document.getElementById("email-input").value 
    const password = document.getElementById("password-input").value
    if (email && password) {
        if (email === 'pola@bap.com' && password === '12345') {
            location.href='bank.html'
        }

    }else{
        alert('email or password can not empty')
        return
    }

})