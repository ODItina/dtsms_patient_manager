/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var MedicalHistory = function(args){
    var medical = {};

    medical.symptom_description = args.symptom_description;
    medical.duration_of_symptom = args.duration_of_symptom;
    medical.was_hospitalized = args.was_hospitalized || false;

    return medical;
};
module.exports = MedicalHistory;
