/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var LabDetailsModel = require('../schema/lab_details_schema');
var TestCriteria = require('../models/test_criteria');

//Create sub-docs
exports.createTestCriteria = function(args,next){
    var testCriteria = new TestCriteria(args);
    LabDetailsModel.findOne({lab_registrationId:args.lab_registrationId}, function(err,doc){
       if(err){
           next(err,null);
       }
        if(doc){
            doc.testCriteria.push(testCriteria);
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
exports.removeContactPerson = function(labDetails, testCriteria, next){
    LabDetailsModel.findOne(labDetails.lab_registrationId, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.testCriteria.splice(doc.testCriteria.indexOf(testCriteria.testDescription), 1);

            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });
        }

    });
};