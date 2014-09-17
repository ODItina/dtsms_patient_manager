/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');

var contactPersonSchema = mongoose.Schema({
    firstName: String,
    surname: String,
    otherNames: String,
    email: String,
    phoneNumber:String,
    relationship: {type:String, enum:['Parent','Spouse', 'Uncle/Aunt','Treatment Sponsor','Child','Niece/Nephew','Other']},
    is_valid:Boolean


});
module.exports = contactPersonSchema;