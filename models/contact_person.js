/**
 * Created by KP_TerminalUser2 on 29/08/2014.
 */
var ContactPerson = function(args){
    var contact = {};

    contact.firstName = args.firstName;
    contact.surname = args.surname;
    contact.otherNames = args.otherNames;
    contact.email = args.email;
    contact.phoneNumber = args.phoneNumber;
    contact.relationship = args.relationship;
    contact.is_valid = args.is_valid;

    return contact;
};
module.exports = ContactPerson;
