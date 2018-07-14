/*3) Existing User Should be able to Login.
    - Steps
        - Go to Login Page
        - Enter Username testcypress@mail.ru / Password newday333
        - Click Login
        - Validate correct User.*/

        module.exports = {
            '@tags': ['testcase3', 'all'],
            'Validate user can log in properly' : function(browser) {
                browser
                .url('https://www.artsyjewels.com/') 
                .waitForElementVisible('body', 1000)
                .assert.title('Artsyjewels - Premier Jewelry Marketplace')
                .click('.site-header__account [aria-hidden]')
                .setValue('#CustomerEmail', 'testcypress@mail.ru') //<input type="email" name="customer[email]" id="CustomerEmail" class="" autocorrect="off" autocapitalize="off" autofocus="">
                .setValue('#CustomerPassword', 'newday333') //<input type="password" value="" name="customer[password]" id="CustomerPassword" class="">
                .click('#CustomerLoginForm [type="submit"]') //<input type="submit" class="btn" value="Sign In">
                .assert.visible('#MainContent > div.page-width > div.section-header.text-center > h1') //how to verify text inside h1?
                .pause(2000)
                .end();
            }
        }