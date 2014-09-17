/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var drugFrequencySchema = mongoose.Schema({
    time_period:String,
    dosage:String
});
module.exports = drugFrequencySchema;
