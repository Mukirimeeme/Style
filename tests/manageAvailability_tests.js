const data = require('config/test_data.json')
//const login = require('pages/login/commands/goToNewcredit')

//const name = 'login tests'

module.exports = {
    tags: ['all', 'availability'],

    before(browser) {
        browser.maximizeWindow().url(data.url.site)
    },

    after(browser, done) {
        browser.end()
        done()
    },

    'Manage Availability tests': (browser) => {

        const loginPage = browser.page.login()
        const  landingPage = browser.page.landingPage()

        browser.pause(1000)

        loginPage.openLoginPopup()
        loginPage.login()
       landingPage.manageAvailability()
        browser.pause(200)
        landingPage.addWeeklyAvailability()
        browser.pause(3000)
        landingPage.closeNotificationPopup()
        browser.pause(90000)
        browser.pause(300)
    }
}
