/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');
var adherenceInfoSchema = require('./adherence_info_schema');
var currentMedicationSchema = require('./current_medication_schema');

var ARVInfoSchema = mongoose.Schema({
    was_on_ARV:Boolean,
    current_medication:[currentMedicationSchema],
    adherence_info:[adherenceInfoSchema],
    date_recorded:Date
});
module.exports = ARVInfoSchema;