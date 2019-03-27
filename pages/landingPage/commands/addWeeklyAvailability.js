module.exports = {

    addWeeklyAvailability:function (){
        return this .waitForElementVisible('@turnOnMonday',9000)
            .click('@turnOnMonday')
            .waitForElementVisible('.add-break',9000)
            .click('@turnOnTuesday')
            .click('@turnOnWednesday')
            .click('@turnOnThursday')
            .click('@turnOnFriday')
            .verify.visible('.add-break:nth-child(1)')
            .verify.visible('.add-break:nth-child(2)')
            .verify.visible('.add-break:nth-child(3)')
            .verify.visible('.add-break:nth-child(4)')
            .click('@saveAvailability')
    }
}
