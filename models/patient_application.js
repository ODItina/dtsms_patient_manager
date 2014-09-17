/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var assert = require('assert');
var PatientApplication =  function(args){

    var app = {};

    app.firstName = args.firstName;
    app.surname = args.surname;
    app.otherNames = args.otherNames;
    app.patientId = args.patientId;
    app.nationality = args.nationality;
    app.gender = args.gender;
    app.status_ART = args.status_ART;
    app.date_confirmed_HIV = args.date_confirmed_HIV;
    app.maritalStatus = args.maritalStatus;
    app.birthDate = args.birthDate;
    app.educationLevel = args.educationLevel;
    app.addressInfo= args.addressInfo;
    app.contactPerson = args.contactPerson;
    app.occupationStatus = args.occupationStatus;
    app.hiv_status_at_registration = args.hiv_status_at_registration;
    app.email= args.email;
    app.phoneContact= args.phoneContact;
    app.registration_date = args.registration_date || new Date();
    app.tranferInfo = args.tranferInfo;

    app.is_authenticated = false;

    app.status = "pending";

    app.message = null;

    app.patient = null;


    app.isValid = function(){
        return self.status == "validated";
    };
    app.isInvalid = function(){
        return !isValid();
    };

    app.setInvalid = function(message){
        app.status = "invalid";
        app.message = message;
    };
    app.validate = function(){
        app.status = "validated";
    };

    return app;

};

module.exports = PatientApplication;