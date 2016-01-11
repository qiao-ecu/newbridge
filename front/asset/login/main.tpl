<!-- target: login -->
<div class="login">
    <div class="login-left">
    </div>
    <div class="login-right">
        <div class="login-status-container">
            <div class="validity-bg">
                <div data-ui="type:Validity;id:usernameerr"></div>
                <div data-ui="type:Validity;id:passworderr"></div>
                <div data-ui="type:Validity;id:captchaerr"></div>
            </div>
        </div>
        <div class="login-name-container">
            <div data-ui="type:MatchInput;id:username"></div>
            <div class="login-delete" style="display:none;"></div>
        </div>
        <div class="login-password-container">
            <div data-ui="type:TextBox;mode:password;id:password"></div>
        </div>
        <div class="login-captcha-container" style="display:none;">
            <div data-ui="type:TextBox;id:captcha"></div><img class="login-captcha-image" alt="验证码"/>
        </div>
        <div class="login-option-container">
            <div data-ui="type:SelectList;id:status;skin:login"></div>
            <div data-ui="type:CheckBox;id:remenber;title:记住密码" class="login-remenber-password"></div>
            <div data-ui="type:CheckBox;id:autologin;title:自动登陆"></div>
        </div>
        <div class="login-btn-container">
            <div data-ui="type:Button;skin:ok;id:loginbtn;" class="login-btn">登录</div>
        </div>
        
        <div class="login-register-container">
            <div>百度推广用户可直接登陆</div>
            <a data-href="https://u.baidu.com/ucweb/?module=Reguser&controller=reg&action=index&appid=3" target="_blank">注册账号</a>
        </div>
    </div>
</div>
