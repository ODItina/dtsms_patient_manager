/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var PharmacyInfo = function(args){
    var pharmacy = {};

    pharmacy.pharmacy_Id = args.pharmacy_Id;
    pharmacy.date_of_visit = args.date_of_visit;
    pharmacy.date_of_dispensing = args.date_of_dispensing;
    pharmacy.patient_height = args.patient_height;
    pharmacy.patient_weight = args.patient_weight;
    pharmacy.type_of_visit = args.type_of_visit;
    pharmacy.drug_regiment = args.drug_regiment;
    pharmacy.remarks = args.remarks;
    pharmacy.has_adverse_effects = args.has_adverse_effects || false;
    pharmacy.is_current = args.is_current || false;

    return pharmacy;
};
module.exports = PharmacyInfo;
