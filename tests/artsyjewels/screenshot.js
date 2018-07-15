//copy of TC2
module.exports = {
    '@tags': ['testcase2', 'screenshot'],
    'Validate search option is working properly' : function (browser) {
        browser
        .url('https://www.artsyjewels.com/') 
        .waitForElementVisible('body', 1000)
        .assert.title('Artsyjewels - Premier Jewelry Marketplace')
        .setValue('#bc-sf-search-box-1',['watches', browser.Keys.ENTER])
        .assert.visible('#MainContent > div:nth-child(1) > div > h1')
        .pause(10000)
        browser.saveScreenshot('./screenshots/testcase2.jpg')
        .end();
        }

}