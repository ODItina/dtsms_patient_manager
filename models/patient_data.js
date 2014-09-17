/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */

var assert = require('assert');
var PatientData =  function(args){

    var patient = {};



    patient.firstName = args.firstName;
    patient.surname = args.surname;
    patient.otherNames = args.otherNames;
    patient.patientId = args.patientId;
    patient.nationality = args.nationality;
    patient.gender = args.gender;
    patient.status_ART = args.status_ART;
    patient.date_confirmed_HIV = args.date_confirmed_HIV;
    patient.maritalStatus = args.maritalStatus;
    patient.birthDate = args.birthDate;
    patient.educationLevel = args.educationLevel;
    patient.occupationStatus = args.occupationStatus;
    patient.addressInfo= args.addressInfo;
    patient.contactPerson = args.contactPerson;
    patient.hiv_status_at_registration = args.hiv_status_at_registration;
    patient.email= args.email;
    patient.phoneContact= args.phoneContact;
    patient.registration_date = args.registration_date || new Date();
    patient.transferInfo = args.transferInfo;


    patient.is_authenticated = false;



    return patient;

};

module.exports = PatientData;