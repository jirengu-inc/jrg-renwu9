/**
 * Created by lenovo on 2016/12/22.
 */
function testAccountFormat() {
    var input = usernameIpt.value;
    if (!/^[A-z0-9_]{3,10}$/.test(input)){
        accountReminder.textContent = MSG.USERNAME_TYPE_ERROR;
        addClass(usernameIpt, 'msg4');
        return false;
    } else {
        accountReminder.textContent = MSG.USERNAME_AVAILABLE;
        removeClass(usernameIpt, 'msg4');
        return true;
    }
}
function testPasswordFormat() {
    var input = passwordIpt.value;
    if(isLegalPassword(input)){
        passwordReminder1.textContent = MSG.PASSWORD_AVAILABLE;
        removeClass(passwordIpt, 'msg4');
        return true;
    } else {
        passwordReminder1.textContent = MSG.PASSWORD_TYPE_ERROR;
        addClass(passwordIpt, 'msg4');
        return false;
    }
}
function testPasswordRepeat() {
    var inputSecond = passwordIpt2.value;
    var inputFirst = passwordIpt.value;
    if(!isLegalPassword(inputSecond)) {
        passwordReminder2.textContent = MSG.PASSWORD_TYPE_ERROR;
        addClass(passwordIpt2, 'msg4');
        return false;
    }
    if (inputFirst !== inputSecond) {
        passwordReminder2.textContent = MSG.PASSWORD_MISMATCHING;
        addClass(passwordIpt2, 'msg4');
        return false;
    } else {
        passwordReminder2.textContent = MSG.PASSWORD_AVAILABLE;
        removeClass(passwordIpt2, 'msg4');
        return true;
    }
}
function testAccountAvailable() {
    console.log(1);
    if(testAccountFormat()) {
        $.ajax({
            url:'/username/uid',
            type: 'get',
            dataType:'json',
            data: {
                username: usernameIpt.value
            },
            success: function (json) {
                console.log(json);
                console.log(typeof json);//object
                return (onSuccess(json));
            }
        });
    } else {
        return;
    }

}
