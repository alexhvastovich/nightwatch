/*1) Home Page Should open and validate all the images and buttons are functional.
    - Steps 
        - Open Homepage
        - Click on Homepage Headers.*/

module.exports = {
    '@tags' : ['testcase1','all'],
    'Validate all the images and buttons are functional' : function (browser) {
        browser 
           .url('https://www.artsyjewels.com/') // Go to a url
           .waitForElementVisible('body', 1000)
           .assert.title('Artsyjewels - Premier Jewelry Marketplace') //<meta property="og:title" content="Artsyjewels - Premier Jewelry Marketplace">
           .click('#SiteNav li:nth-of-type(1) .site-nav__link--main') //<a href="/" class="site-nav__link site-nav__link--main">Home</a> xpath //ul[@id='SiteNav']/li[1]/a[@href='/']
           .assert.title('Artsyjewels - Premier Jewelry Marketplace')
           .click('#SiteNav [aria-has-popup="true"]:nth-of-type(2) .site-nav__link--main') //<a href="/collections/rings" class="site-nav__link site-nav__link--main" aria-expanded="false">
           .click('#SiteNavLabel-rings > ul > li:nth-child(1) > a') //<a href="/collections/diamond-rings" class="site-nav__link site-nav__child-link">Diamond Rings</a>
           .pause(1000)
           .end();
      }
};
