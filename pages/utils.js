module.exports = function (browser) {
    this.openBrowser = function(){
        browser
        .windowMaximize()
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000);
    return browser
    };
    this.loginButton = function() {
        browser
        .click('.site-header__account [aria-hidden]')
    };
    this.adminLogin = function() {
        browser
        .setValue('#CustomerEmail', 'testcypress@mail.ru') //<input type="email" name="customer[email]" id="CustomerEmail" class="" autocorrect="off" autocapitalize="off" autofocus="">
        .setValue('#CustomerPassword', 'newday333') //<input type="password" value="" name="customer[password]" id="CustomerPassword" class="">
        .click('#CustomerLoginForm [type="submit"]')   
    }
    this.featuredProductAddtoCart = function () {
        browser
        .click('#AddToCart-1509217610578')
    }
    this.closeBrowser = function() {
        browser
        .pause(3000)
        .end();
    };
    return this;
};
