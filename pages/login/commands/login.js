
module.exports = {

    login() {
        this.api.pause(5000)
        if (this.isVisible('.login-form')) {
            return this
                .verify.visible('@enterUsernameTab')
                .verify.visible('@enterPasswordTab')
                .verify.visible('@submit')
                .click('@enterUsernameTab')
                .setValue('@enterUsernameTab', '234234erwe@gmail.com')
                .click('@enterPasswordTab')
                .setValue('@enterPasswordTab', '1qaz2wsx')
                .click('@submit')
        }
    }
}
