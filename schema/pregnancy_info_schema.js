/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
    //Pregnancy Info for pregnant patients
var mongoose = require('mongoose');

var pregnancyInfoSchema = mongoose.Schema({
    date_last_menstruation:Date,
    gestation_age:String,
    date_delivery_expected:Date
});
module.exports = pregnancyInfoSchema;
