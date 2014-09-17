/**
 * Created by KP_TerminalUser2 on 30/08/2014.
 */
//Patients
exports.createPatient =  require('./patient_data_services').createPatientData;
exports.readPatientData = require('./patient_data_services').read;
exports.updatePatientData = require('./patient_data_services').updatePatientBioData;
exports.deletePatientData = require('./patient_data_services').removePatientBioData;



//Lab Details
exports.createLabDetails =  require('./lab_details_services').createLabDetail;
exports.readLabDetails = require('./lab_details_services').read;
exports.updateLabDetails = require('./lab_details_services').updateLabDetails;
exports.deleteLabDetails = require('./lab_details_services').removeLabDetails;


//Pharmacy Info
exports.createPharmacyInfo =  require('./pharmacy_info_services').createInfo;
exports.readPharmacyInfo = require('./pharmacy_info_services').read;
exports.updatePharmacyInfo = require('./pharmacy_info_services').updatePharmacyInfo;
exports.deletePharmacyInfo = require('./pharmacy_info_services').removePharmacyInfo;


//Clinical Evaluation
exports.createClinicalEvaluation =  require('./clinical_evaluation_services').createEvaluation;
exports.readClinicalEvaluation = require('./clinical_evaluation_services').read;
exports.updateClinicalEvaluation = require('./clinical_evaluation_services').updateClinicalEvaluation;
exports.deleteClinicalEvaluation = require('./clinical_evaluation_services').removeClinicalEvaluation;
