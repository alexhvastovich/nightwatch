module.exports = {
    '@tags' : ['hw','all'],
    'We are going to click and click on a button': function (browser) {
        browser
            .url('https://clickclickclick.click')
            .waitForElementVisible('body', 1000)
            .click('body > main > div > div:nth-child(1) > a')
            .pause(10000)
            .end();
    }
};