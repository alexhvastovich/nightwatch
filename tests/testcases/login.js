const utils = require('../../pages/utils')

module.exports = {
    '@tags': ['login', 'all'],
    
    before: function(browser){
        utils(browser).openBrowser();
    },
    'Go to the login page': function(browser){
        utils(browser).loginButton();
    },
    'login as admin': function(browser){
        utils(browser).adminLogin();
    },
    after: function(browser){
        utils(browser).closeBrowser();
    }
};