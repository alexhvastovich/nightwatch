/* 2) Search Functionality is working.
    - Steps
        - Click on Search Box. 
        - Search for a specific term.
        - Assert a valid page result based on the search term.
*/

module.exports = {
    '@tags': ['testcase2', 'all'],
    'Validate search option is working properly' : function (browser) {
        browser
        .url('https://www.artsyjewels.com/') 
        .waitForElementVisible('body', 1000)
        .assert.title('Artsyjewels - Premier Jewelry Marketplace')
        .setValue('#bc-sf-search-box-1', 'rings')
        .keys(browser.Keys.ENTER)
        .assert.visible('#MainContent > div:nth-child(1) > div > h1')
        .pause(2000)
        .end();
        }

}