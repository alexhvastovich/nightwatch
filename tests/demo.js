const driver = require('selenium-webdriver');

module.exports = {
    '@tags' : ['demo','all'],
    'Demo test Google' : function (browser) {
         browser 
            .url('http://www.google.com') // Go to a url
            .waitForElementVisible('body', 1000) // wait till page loads
            .assert.title('Google') // Make sure Site title matches
            .assert.visible('input[type=text]') 
            .setValue('input[type=text]', 'nightwatch.js') // send values
            .keys(browser.Keys.ENTER) //sent specific keyboard key
            .click("div:nth-of-type(6) span") // # - means id  #tsf > div.tsf-p > div.jsb > center > div
            .pause(10000)
            .end();
       }
 };
 // = comment not necessary for code