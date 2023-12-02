var name1 = prompt('Enter your name')

if( name1 !== null){
    var phone = prompt('Enter your phone number')
    if(phone !== null){
        var password = prompt('Enter your password')
        if(password !== null){
            var conf = prompt('Comfirm your password');
            if(conf === password){
                alert('YOU ARE SUCCESSFULY REGISTERED ')
            }
            else{alert('Write a same password')}
        }
        else{alert('Please fill in the input')}
    }
    else{alert('Please fill in the input')}
}
else{alert('Please fill in the input')}