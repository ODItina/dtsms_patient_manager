/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */

var pharmacyInfoSchema = require('../schema/pharmacy_info_schema');

//Create

exports.createInfo = function(args, next){
    pharmacyInfoSchema.create(args, function(err, newOrder){
        if(err){
            next(err, null);
        }
        if(newOrder){
            return next(null, newOrder);
        }
    });
};

//Read


var getPharmacyInfoById = function(args, next){
    pharmacyInfoSchema.findById({_id:args}, function(err,foundInfo){
        if(err){
            return next(err, null);
        }
        if(foundInfo){
            return next(null, foundInfo);
        }
    });

};

var getPharmacyInfo = function(args, next){
    pharmacyInfoSchema.findOne(args,function(err, pharmacy){
        if(err){
            return next(err, null);
        }
        if(pharmacy){
            return next(null, pharmacy)
        }
    });
};

var getAllPharmacyInfo = function(args, next){
    pharmacyInfoSchema.find(args,function(err, allPharmacy){
        if(err){
            return next(err, null);
        }
        if(allPharmacy){
            return next(null, allPharmacy)
        }
    });
};


var getDrugRegimentByPharmacyId = function(args, next){
    pharmacyInfoSchema.findOne({pharmacy_Id: args.pharmacy_Id}, 'drugRegiment', function(err, phoneContact){
        if(err){
            return next(err, null);
        }
        if(phoneContact){
            return next(null, phoneContact)
        }
    });
};

exports.read = {
    getPharmacyInfoById:getPharmacyInfoById,
    getPharmacyInfo:getPharmacyInfo,
    getAllPharmacyInfo:getAllPharmacyInfo,
    getDrugRegimentByPharmacyId:getDrugRegimentByPharmacyId
};


//Update

exports.updatePharmacyInfo = function(args, next){
    pharmacyInfoSchema.findOneAndUpdate({pharmacy_Id: args.pharmacy_Id}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};

//Delete

exports.removePharmacyInfo = function(args, next){
    pharmacyInfoSchema.findAndRemove(args, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    })
};

