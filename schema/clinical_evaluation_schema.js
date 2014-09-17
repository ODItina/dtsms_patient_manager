/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');
var medicalHistorySchema = require('./medical_history_schema');
var drugAllergySchema = require('./drug_allergy_schema');
var pregnancyInfoSchema = require('./pregnancy_info_schema');
var cd4InfoSchema = require('./cd4_info_schema');
var vLInfoSchema = require('./vl_info_schema');
var arvInfoSchema = require('./arv_info_schema');
var physicalExamSchema = require('./physical_exam_schema');
var whoStageSchema = require('./who_stage_schema');

var clinicalEvaluationSchema = mongoose.Schema({
    hospital_Id:String,
    date_of_visit:Date,
    date_next_appointment:Date,
    medical_history:[medicalHistorySchema],
    drug_allergy:[drugAllergySchema],
    pregnancy_info:[pregnancyInfoSchema],
    cd4_info:[cd4InfoSchema],
    vl_info:[vLInfoSchema],
    arv_info:[arvInfoSchema],
    physical_exam:[physicalExamSchema],
    assessment_of_patient:String,
    who_stage:[whoStageSchema]
});
var ClinicalEvaluation = mongoose.model('clinicaldata',clinicalEvaluationSchema);
module.exports = ClinicalEvaluation;
