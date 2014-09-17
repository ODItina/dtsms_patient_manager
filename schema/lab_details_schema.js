/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var mongoose = require('mongoose');
var testCriteriaSchema = require('./test_criteria_schema');

var labDetailsSchema = mongoose.Schema({

    hospitalId:String,
    lab_registrationId:String,
    testCriteria: [testCriteriaSchema],
    date_sample_collected: Date,
    date_result_submitted:Date,
    baseline_or_repeat:{type:String, enum:['Baseline', 'Repeat']},
    is_current:{type:Boolean, default:true}



});
var LabDetails = mongoose.model('laboratorydata',labDetailsSchema)

module.exports = LabDetails;

