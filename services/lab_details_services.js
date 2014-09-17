/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var labDetailsSchema = require('../schema/lab_details_schema');
var LabDetails = require('../models/lab_details');

//Create
exports.createLabDetail = function(args,next){
    var labDetails= new LabDetails(args);
    labDetailsSchema.create(labDetails, function(err,newDetail){
        if(err){
            next(err,null);
        }
        if(newDetail){
            if(labDetails.date_sample_collected <= labDetails.date_result_submitted){
                return next(null, newDetail);
            }else{console.log('Sample collection date must be greater than date result was submitted')}
        }
    });
};

//Read


var getLabDetailsById = function(args, next){
    labDetailsSchema.findById({_id:args}, function(err,foundLabDetail){
        if(err){
            return next(err, null);
        }
        if(foundLabDetail){
            return next(null, foundLabDetail);
        }
    });

};

var getLabDetails = function(args, next){
    labDetailsSchema.findOne(args,function(err, labDetail){
        if(err){
            return next(err, null);
        }
        if(labDetail){
            return next(null, labDetail)
        }
    });
};

var getAllLabDetails= function(args, next){
    labDetailsSchema.find(args,function(err, allLabDetails){
        if(err){
            return next(err, null);
        }
        if(allLabDetails){
            return next(null, allLabDetails)
        }
    });
};


var getTestCriteriaByLabId = function(args, next){
    labDetailsSchema.findOne({lab_registrationId: args.lab_registrationId}, 'testCriteria', function(err, testCriteria){
        if(err){
            return next(err, null);
        }
        if(testCriteria){
            return next(null, testCriteria)
        }
    });
};

exports.read = {
    getLabDetailsById: getLabDetailsById,
    getLabDetails : getLabDetails,
    getAllLabDetails:getAllLabDetails,
    getTestCriteriaByLabId:getTestCriteriaByLabId
};


//Update

exports.updateLabDetails = function(args, next){
    labDetailsSchema.findOneAndUpdate({lab_registrationId: args.lab_registrationId}, args, function(err, update){
        if(err){
            return next(err, null);
        }
        if(update){
            return next(null, update);
        }
    });
};

//Delete

exports.removeLabDetails = function(args, next){
    labDetailsSchema.findAndRemove(args, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    })
};

