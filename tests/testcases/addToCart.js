const utils = require('../../pages/utils')

module.exports = {
    '@tags': ['addToCart', 'all'],

    before: function(browser){
        utils(browser).openBrowser();
    },
    'Add a featured product to cart': function (browser) {
        utils(browser).featuredProductAddtoCart();
    },
    after: function (browser) {
        browser.pause(5000);
        browser.end();
    }
};