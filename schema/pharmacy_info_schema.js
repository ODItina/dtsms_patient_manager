/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var mongoose = require('mongoose');
var drugRegimentSchema = require('./drug_regiment_schema');

var pharmacyInfoSchema = mongoose.Schema({
    pharmacy_Id:String,
    date_of_dispensing:String,
    date_of_visit:Date,
    patient_height:String,
    patient_weight:String,
    type_of_visit:{type:String, enum:['Initial Visit', 'Follow-up Visit']},
    drug_regiment:[drugRegimentSchema],
    remarks:String,
    has_adverse_effects:{type:Boolean, default:false},
    is_current:{type:Boolean, default:true}
});
var PharmacyInfo =mongoose.model('pharmacydata', pharmacyInfoSchema);
module.exports = PharmacyInfo;

