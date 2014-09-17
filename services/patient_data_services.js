/**
 * Created by KP_TerminalUser2 on 30/08/2014.
 */

var patientDataSchema = require('../schema/patient_data_schema');

//Create

exports.createPatientData = function(args, next){
    patientDataSchema.create(args, function(err, newPatient){
        if(err){
            next(err, null);
        }
        if(newPatient){
            return next(null, newPatient);
        }
    });
};

//Read


var getPatientBioDataById = function(args, next){
    patientDataSchema.findById({_id:args}, function(err,foundPatient){
        if(err){
            return next(err, null);
        }
        if(foundPatient){
            return next(null, foundPatient);
        }
    });

};

var getPatientBioData = function(args, next){
    patientDataSchema.findOne(args,function(err, biodata){
        if(err){
            return next(err, null);
        }
        if(biodata){
            return next(null, biodata)
        }
    });
};

var getAllBioData = function(args, next){
    patientDataSchema.find(args,function(err, allBioData){
        if(err){
            return next(err, null);
        }
        if(allBioData){
            return next(null, allBioData)
        }
    });
};


var getPhoneContactByPatientId = function(args, next){
    patientDataSchema.findOne({patientId: args.patientId}, 'phoneContact', function(err, phoneContact){
        if(err){
            return next(err, null);
        }
        if(phoneContact){
            return next(null, phoneContact)
        }
    });
};


var getAddressInfoByPatientId = function(args, next){
    patientDataSchema.findOne({patientId: args.patientId},'addressInfo', function(err, addressInfo){
        if(err){
            return next(err, null);
        }
        if(addressInfo){
            return next(null, addressInfo)
        }
    });
};


var getContactPersonByPatientId = function(args, next){
    patientDataSchema.findOne({patientId: args.patientId},'contactPerson', function(err, contactPerson){
        if(err){
            return next(err, null);
        }
        if(contactPerson){
            return next(null, contactPerson)
        }
    });
};


var getTransferInfoByPatientId = function(args, next){
    patientDataSchema.findOne({patientId: args.patientId},'transferInfo', function(err, transferInfo){
        if(err){
            return next(err, null);
        }
        if(transferInfo){
            return next(null, transferInfo)
        }
    });
};

exports.read = {
    getPatientBioDataById:getPatientBioDataById,
    getPatientBioData:getPatientBioData,
    getAllBioData:getAllBioData,
    getPhoneContactByPatientId:getPhoneContactByPatientId,
    getTransferInfoByPatientId:getTransferInfoByPatientId,
    getContactPersonByPatientId:getContactPersonByPatientId,
    getAddressInfoByPatientId:getAddressInfoByPatientId
};


//Update

exports.updatePatientBioData = function(args, next){
    patientDataSchema.findOneAndUpdate({patientId: args.patientId}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};


//Delete

exports.removePatientBioData = function(args, next){
    patientDataSchema.findAndRemove(args, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    })
};

return exports;


