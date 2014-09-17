/**
 * Created by KP_TerminalUser2 on 05/09/2014.
 */
var ClinicalEvaluationModel = require('../schema/clinical_evaluation_schema');
var MedicalHistory = require('../models/medical_history');
var DrugAllergy = require('../models/drug_allergy');
var PregnancyInfo = require('../models/pregnancy_info');
var CD4Info = require('../models/cd4_info');
var VLInfo = require('../models/vl_info');
var ARVInfo = require('../models/arv_info');
var PhysicalExam = require('../models/physical_exam');
var WHOStage = require('../models/who_stage');

//Create sub-docs
exports.createMedicalHistory = function(args,next){
    var medicalHistory = new MedicalHistory(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.medical_history.push(medicalHistory);
            doc.save(function(err,result){
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

exports.createDrugAllergy = function(args,next){
    var drugAllergy = new DrugAllergy(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.drug_allergy.push(drugAllergy);
            doc.save(function(err,result){
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


exports.createPregnancyInfo = function(args,next){
    var pregnancyInfo = new PregnancyInfo(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.pregnancy_info.push(pregnancyInfo);
            doc.save(function(err,result){
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



exports.createCD4Info = function(args,next){
    var cd4Info = new CD4Info(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.cd4_info.push(cd4Info);
            doc.save(function(err,result){
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


exports.createVLInfo = function(args,next){
    var vlInfo = new VLInfo(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.vl_info.push(vlInfo);
            doc.save(function(err,result){
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


exports.createARVInfo = function(args,next){
    var arvInfo = new ARVInfo(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.arv_info.push(arvInfo);
            doc.save(function(err,result){
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

exports.createPhysicalExam = function(args,next){
    var physicalExam = new PhysicalExam(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.physical_exam.push(physicalExam);
            doc.save(function(err,result){
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

exports.createWHOStage = function(args,next){
    var whoStage = new WHOStage(args);
    ClinicalEvaluationModel.findOne({hospitalId:args.hospital_Id}, function(err,doc){
        if(err){
            next(err,null);
        }
        if(doc){
            doc.who_stage.push(whoStage);
            doc.save(function(err,result){
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



//Delete sub-docs
exports.removeMedicalHistory = function(clinical, medicalHistory, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.medical_history.splice(doc.medical_history.indexOf(medicalHistory.symptom_description), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};

exports.removeDrugAllergy = function(clinical, drugAllergy, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.drug_allergy.splice(doc.drug_allergy.indexOf(drugAllergy.description), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};


exports.removePregnancyInfo = function(clinical, pregnancyInfo, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.pregnancy_info.splice(doc.pregnancy_info.indexOf(pregnancyInfo.date_delivery_expected), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};


exports.removeCD4Info = function(clinical, cd4Info, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.cd4_info.splice(doc.cd4_info.indexOf(cd4Info.date_recorded), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};


exports.removeVLInfo = function(clinical, vlInfo, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.vl_info.splice(doc.vl_info.indexOf(vlInfo.date_recorded), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};

exports.removeARVInfo = function(clinical, arvInfo, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.arv_info.splice(doc.arv_info.indexOf(arvInfo.date_recorded), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};

exports.removePhysicalExam = function(clinical, physicalExam, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.physical_exam.splice(doc.physical_exam.indexOf(physicalExam.description), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};

exports.removeWHOStage = function(clinical, whoStage, next){
    ClinicalEvaluationModel.findOne(clinical.hospital_Id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.who_stage.splice(doc.who_stage.indexOf(whoStage.stage_name), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};

