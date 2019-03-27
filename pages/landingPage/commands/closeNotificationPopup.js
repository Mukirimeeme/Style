module.exports = {

    closeNotificationPopup:function (){
        return this .waitForElementVisible('@closeNotificationPopup', 90000)
            .click('@closeNotificationPopup')

    }
}
