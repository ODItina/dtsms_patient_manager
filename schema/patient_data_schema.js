/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var mongoose = require('mongoose');
var addressInfoSchema = require('./address_info_schema');
var phoneContactSchema = require('./phone_contact_schema');
var contactPersonSchema = require('./contact_person_schema');
var transferInfoSchema = require('./transfer_info_schema');

var patientDataSchema = mongoose.Schema({
    surname:{type:String, required:true},
    firstName: {type:String, required:true},
    otherNames:String,
    patientId:String,
    nationality: {type:String, default:'Nigeria', required: true},
    gender: {type:String, enum:['Male', 'Female'], required:true},
    maritalStatus:{type:String, enum:['Single', 'Married', 'Divorced', 'Widowed', 'Separated']},
    birthDate: {type:Date, required:true},
    status_ART: {type:String, enum:['ART', 'Non-ART'], required:true},
    date_confirmed_HIV:Date,
    educationalLevel:{type:String, enum:['None', 'Primary', 'Quranic','Secondary', 'Post Secondary']},
    occupationStatus:{type:String, enum:['Unemployed', 'Employed', 'Student', 'Retired']},
    addressInfo: [addressInfoSchema],
    contactPerson:[contactPersonSchema],
    hiv_status_at_registration:{type:String, enum:['HIV+none ART', 'HIV+ART']},
    email:String,
    phoneContact: [phoneContactSchema],
    registration_date:Date,
    transferInfo:[transferInfoSchema]
});
var PatientData = mongoose.model('patientdata', patientDataSchema);

module.exports = PatientData;
