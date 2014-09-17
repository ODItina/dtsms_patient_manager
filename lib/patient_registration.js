/**
 * Created by KP_TerminalUser2 on 30/08/2014.
 */
var PatientApplication = require('../models/patient_application');
var PatientInfo = require('../models/patient_data');
var PatientInfoModel = require('../schema/patient_data_schema');
var PatientServices = require('../services/index');

var Emitter = require('events').EventEmitter;
var util = require('util');
var validator = require('validator');

var PatientRegResult = function(){
    var result = {
        success: false,
        message: null,
        patient: null
    };
    return result;
};

var PatientRegistration = function(){
    Emitter.call(this);
    var continueWith = null;
    var self = this;

    self.newApplication = function(args, next){
        //receive application information
        continueWith = next;
        var patientApp = new PatientApplication(args);
        self.emit("application-received", patientApp);
    };

    var validateInputs = function(patientApp){
        if(!validator.isAlpha(patientApp.firstName)){
            patientApp.setInvalid("First Name is required");
            self.emit("invalid-application", patientApp);
        }

        if(!validator.isAlpha(patientApp.surname)){
            patientApp.setInvalid("Surname is required");
            self.emit("invalid-application", patientApp);
        }

        if(!patientApp.patientId){
            patientApp.setInvalid("Patient ID is required");
            self.emit("invalid-application", patientApp);
        }

        if(!patientApp.gender){
            patientApp.setInvalid("Gender is required");
            self.emit("invalid-application", patientApp);
        }

        if(!validator.isDate(patientApp.birthDate)){
            patientApp.setInvalid("Birth Date is required");
            self.emit("invalid-application", patientApp);
        }

        if(!validator.isEmail(patientApp.email)){
            patientApp.setInvalid("Email  is required");
            self.emit("invalid-application", patientApp);
        }
        if(!patientApp.status_ART){
            patientApp.setInvalid("ART status is required");
            self.emit("invalid-application", patientApp);
        }

        if(!patientApp.nationality){
            patientApp.setInvalid("region or province or state of primary is required");
            self.emit("invalid-application", patientApp);
        }

        patientApp.validate();
        self.emit("validated", patientApp);
    };


    var createPatientAccount = function(patientApp){
        var patientInfo = new PatientInfo(patientApp);
        PatientServices.createPatient(patientInfo, function(err,newPatientInfo){
            if(err){
                patientApp.setInvalid(err);
                console.log(err.toString());
                self.emit('error',patientApp);
            }
            if(newPatientInfo){
                patientApp.employee = newPatientInfo;
                self.emit('patient-account-created', patientApp);
            }
        })

    };

    var successfulRegistration = function (patientApp){
        var oprResult = new PatientRegResult();
        oprResult.success = true;
        oprResult.message = "PatientData Registration Successful";
        oprResult.employee = patientApp.employee;
        self.emit('patient-registration-success', oprResult);
        if(continueWith){
            continueWith(null, oprResult);
        }
    };

    var unsuccessfulRegistration = function(patientApp){
        var oprResult = new PatientRegResult();
        oprResult.success = false;
        oprResult.message = patientApp.message;
        self.emit('patient-registration-failure', oprResult);
        if(continueWith){
            continueWith(null, oprResult);
        }
    };


    //events wiring
    self.on("application-received", validateInputs);
    self.on("validated", createPatientAccount);
    self.on("patient-account-created", successfulRegistration);
    self.on('invalid-application', unsuccessfulRegistration);
    self.on('error', unsuccessfulRegistration);


    return self;
};
util.inherits(PatientRegistration, Emitter);
module.exports = PatientRegistration;