/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var clinicalEvaluationSchema = require('../schema/clinical_evaluation_schema');

//Create

exports.createEvaluation = function(args,next){
    clinicalEvaluationSchema.create(args, function(err,  newEvaluation){
        if(err){
            next(err, null)
        }
        if(newEvaluation){
            return next(null,newEvaluation);
        }
    });
};

//Read


var getClinicalEvaluationById = function(args, next){
    clinicalEvaluationSchema.findById({_id:args}, function(err,foundEvaluation){
        if(err){
            return next(err, null);
        }
        if(foundEvaluation){
            return next(null, foundEvaluation);
        }
    });

};

var getClinicalEvaluation = function(args, next){
    clinicalEvaluationSchema.findOne(args,function(err, evaluation){
        if(err){
            return next(err, null);
        }
        if(evaluation){
            return next(null, evaluation)
        }
    });
};

var getAllClinicalEvaluation= function(args, next){
    clinicalEvaluationSchema.find(args,function(err, allEvaluation){
        if(err){
            return next(err, null);
        }
        if(allEvaluation){
            return next(null, allEvaluation)
        }
    });
};


var getMedicalInfoByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'medical_history', function(err, medicalInfo){
        if(err){
            return next(err, null);
        }
        if(medicalInfo){
            return next(null, medicalInfo)
        }
    });
};


var getDrugAllergyByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'drug_allergy', function(err, allergy){
        if(err){
            return next(err, null);
        }
        if(allergy){
            return next(null, allergy)
        }
    });
};

var getPregnancyInfoByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'pregnancy_info', function(err, pregnancy){
        if(err){
            return next(err, null);
        }
        if(pregnancy){
            return next(null, pregnancy)
        }
    });
};

var getCD4InfoByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'cd4_info', function(err, info){
        if(err){
            return next(err, null);
        }
        if(info){
            return next(null, info)
        }
    });
};

var getVLInfoByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'vl_info', function(err, info){
        if(err){
            return next(err, null);
        }
        if(info){
            return next(null, info)
        }
    });
};

var getARVInfoByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'arv_info', function(err, info){
        if(err){
            return next(err, null);
        }
        if(info){
            return next(null, info)
        }
    });
};

var getPhysicalExamByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'physical_exam', function(err, exam){
        if(err){
            return next(err, null);
        }
        if(exam){
            return next(null, exam)
        }
    });
};

var getWHOStageByHospitalId = function(args, next){
    clinicalEvaluationSchema.findOne({hospitalId: args.hospital_Id}, 'who_stage', function(err, stage){
        if(err){
            return next(err, null);
        }
        if(stage){
            return next(null, stage)
        }
    });
};


exports.read = {
    getClinicalEvaluationById : getClinicalEvaluationById,
    getWHOStageByHospitalId: getWHOStageByHospitalId,
    getPhysicalExamByHospitalId:getPhysicalExamByHospitalId,
    getARVInfoByHospitalId:getARVInfoByHospitalId,
    getVLInfoByHospitalId:getVLInfoByHospitalId,
    getCD4InfoByHospitalId:getCD4InfoByHospitalId,
    getPregnancyInfoByHospitalId:getPregnancyInfoByHospitalId,
    getDrugAllergyByHospitalId:getDrugAllergyByHospitalId,
    getMedicalInfoByHospitalId:getMedicalInfoByHospitalId,
    getAllClinicalEvaluation:getAllClinicalEvaluation,
    getClinicalEvaluation:getClinicalEvaluation
};
//Update

exports.updateClinicalEvaluation = function(args, next){
    clinicalEvaluationSchema.findOneAndUpdate({hospitalId: args.hospital_Id}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};

//Delete

exports.removeClinicalEvaluation = function(args, next){
    clinicalEvaluationSchema.findAndRemove(args, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    })
};