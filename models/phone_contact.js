/**
 * Created by KP_TerminalUser2 on 09/08/2014.
 */

var assert = require('assert');
//var PersonalInfo = require('./personalInfo');

var PhoneContact = function(args) {
    var phoneContact = {};

    phoneContact.is_working = args.is_working;
    phoneContact.phoneNumber = args.phoneNumber;

    return phoneContact;
};

module.exports = PhoneContact;