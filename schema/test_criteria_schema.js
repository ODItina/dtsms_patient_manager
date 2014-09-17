/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */

    //Laboratory test criteria
var mongoose = require('mongoose');

var testCriteriaSchema = mongoose.Schema({

    testDescription:String,
    result:String,
    standardUnit_result:String,
    relative_comparison:String,
    standardUnit_relativeComparison:String,
    remarks:String

});

module.exports = testCriteriaSchema;

