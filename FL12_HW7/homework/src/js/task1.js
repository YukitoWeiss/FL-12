let email = prompt('Please enter your email adress.'),
    password,
    oldPassword,
    changePass,
    newPassword,
    newPasswordValid,
    validEmail = true,
    uLog = 'user@gmail.com',
    aLog = 'admin@gmail.com',
    uPass = 'UserPass',
    aPass = 'AdminPass';

if (!email) {
    alert('Canceled.');
    validEmail = false;
} else if (email.length < 5) {
    alert('I don\'t know any emails having name length less than 5 symbols');
    validEmail = false;
}

if (email === uLog || email === aLog && validEmail === true) {
    password = prompt('Please enter your password.');
    if (!password) {
        alert('Canceled.');
    } else if (email === uLog && password === uPass || email === aLog && password === aPass) {
        changePass = confirm('Do you want to change your password?');
        if (changePass === false) {
            alert('You have failed the change.');
        } else {
            oldPassword = prompt('Please enter your old password.');
            if (!oldPassword) {
                alert('Canceled.');
            } else if (password === oldPassword) {
                newPassword = prompt('Please enter your NEW password.');
                if (!newPassword) {
                    alert('Canceled.');
                } else if (newPassword.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPasswordValid = prompt('Please enter your NEW password AGAIN.');
                    if (newPasswordValid === newPassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else if (validEmail === true) {
    alert('I don’t know you');
}

