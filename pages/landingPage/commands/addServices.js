module.exports = {

    addServices:function (){
        return this .waitForElementVisible('@frontDesk',90000)
            .click('@frontDesk')
            .waitForElementVisible('@servicesButton',90000)
            .click('@servicesButton')
            .waitForElementVisible('@addServiceButton',90000)
            .click('@addServiceButton')
            .waitForElementVisible('@newServiceButton',90000)
            .click('@newServiceButton')
            .waitForElementVisible('@womenHaircutButton',90000)
            .click('@womenHaircutButton')
            .waitForElementVisible('@bangTrimButton',90000)
            .click('@bangTrimButton')
            .waitForElementVisible('@saveBangTrim',90000)
            .click('@saveBangTrim')
            .waitForElementVisible('@saveAddedServices',90000)
            .click('@saveAddedServices')
    }
}
