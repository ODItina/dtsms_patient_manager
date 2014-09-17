/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var medicalHistorySchema = mongoose.Schema({
    symptom_description:String,
    duration_of_symptom:String,
    was_hospitalized:Boolean
});
module.exports = medicalHistorySchema;
