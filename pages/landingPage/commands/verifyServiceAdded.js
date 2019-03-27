module.exports = {

    verifyServiceAdded:function (){
        this.api.pause(3000)
        this.assert.containsText('.service-name-container > h3', 'Bang Trim')
    }
}
