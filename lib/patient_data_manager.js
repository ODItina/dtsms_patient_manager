/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var PatientDataModel = require('../schema/patient_data_schema');
var ContactPerson = require('../models/contact_person');
var PhoneContact = require('../models/phone_contact');
var AddressInfo = require('../models/address_info');
var TransferInfo = require('../models/transfer_info');


//Create sub-docs
exports.createContactPerson = function(args,next){
    var contactPerson = new ContactPerson(args);
    PatientDataModel.findOne({patientId:args.patientId}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.contactPerson.push(contactPerson);
            doc.save(function(err, result){
                if(err){
                    next(err, null);
                }
                if(result){
                    next(null, result)
                }
            });
        }
    });
};

exports.createPhoneContact = function(args,next){
    var phoneContact = new PhoneContact(args);
    PatientDataModel.findOne({patientId:args.patientId}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.phoneContact.push(phoneContact);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result)
                }
            });
        }
    });
};

exports.createAddressInfo = function(args,next){
    var addressInfo = new AddressInfo(args);
    PatientDataModel.findOne({patientId:args.patientId}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.addressInfo.push(addressInfo);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result)
                }
            });
        }
    });
};

exports.createTransferInfo = function(args,next){
    var transferInfo = new TransferInfo(args);
    PatientDataModel.findOne({patientId:args.patientId}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.transferInfo.push(transferInfo);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result)
                }
            });
        }
    });
};

//Remove sub-docs

exports.removeContactPerson = function(patientData, contactPerson, next){
    PatientDataModel.findOne(patientData.patientId, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.contactPerson.splice(doc.contactPerson.indexOf(contactPerson.email), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            })
        }

    });
};

exports.removeAddressInfo = function(patientData, addressInfo, next){
    PatientDataModel.findOne(patientData.patientId, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.addressInfo.splice(doc.addressInfo.indexOf(addressInfo.street), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            })
        }

    });
};

exports.removePhoneContact = function(patientData, phoneContact, next){
    PatientDataModel.findOne(patientData.patientId, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.phoneContact.splice(doc.phoneContact.indexOf(phoneContact.phoneNumber), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            })
        }

    });
};


exports.removeTransferInfo = function(patientData, transferInfo, next){
    PatientDataModel.findOne(patientData.patientId, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.tranferInfo.splice(doc.transferInfo.indexOf(transferInfo.date_transfer), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            })
        }

    });
};
