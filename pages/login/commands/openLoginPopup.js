module.exports = {

    openLoginPopup: function () {
        return this.waitForElementVisible('@openLogin', 90000)
            .click('@openLogin')
    }
}
