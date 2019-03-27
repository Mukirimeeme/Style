module.exports = {

    manageAvailability:function (){
        return this .waitForElementVisible('@frontDesk',90000)
            .click('@frontDesk')
            .waitForElementVisible('@availabilityButton',90000)
            .click('@availabilityButton')
            .waitForElementVisible('@manageOngoingAvailabilityButton',90000)
            .click('@manageOngoingAvailabilityButton')
            .waitForElementVisible('@letClientsBook',90000)
            .click('@letClientsBook')

    }
}
