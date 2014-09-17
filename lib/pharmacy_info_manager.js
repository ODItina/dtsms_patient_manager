/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var PharmacyInfoModel = require('../schema/pharmacy_info_schema');
var DrugRegiment = require('../models/drug_regiment');

//Create sub-docs
exports.createDrugRegiment = function(args,next){
    var drugRegiment = new DrugRegiment(args);
    PharmacyInfoModel.findOne({pharmacy_Id:args.pharmacy_Id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.drug_regiment.push(drugRegiment);
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

//Remove sub-docs
exports.removeDrugRegiment = function(pharmacyInfo, drugRegiment, next){
    PharmacyInfoModel.findOne(pharmacyInfo.pharmacy_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.drug_regiment.splice(doc.drug_regiment.indexOf(drugRegiment.medication), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            })
        }

    });
};