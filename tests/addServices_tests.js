const data = require('config/test_data.json')


module.exports = {
    tags: ['all', 'service'],

    before(browser) {
        browser.maximizeWindow().url(data.url.site)
    },

    after(browser, done) {
        browser.end()
        done()
    },

    'Manage Availability tests': (browser) => {

        const loginPage = browser.page.login()
        const landingPage = browser.page.landingPage()

        browser.pause(1000)
        loginPage.openLoginPopup()
        loginPage.login()
        landingPage.addServices()
        browser.pause(200)
        //landingPage.closeNotificationPopup()
        landingPage.verifyServiceAdded()
        browser.pause(90000)
        browser.pause(300)
    }
}
