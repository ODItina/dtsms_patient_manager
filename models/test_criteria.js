/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var TestCriteria = function(args){
    var criteria = {};

    criteria.testDescription = args.testDescription;
    criteria.result = args.result;
    criteria.standardUnit_result = args.standardUnit_result;
    criteria.relative_comparison = args.relative_comparison;
    criteria.standardUnit_relativeComparison = args.standardUnit_relativeComparison;
    criteria.remarks = args.remarks;


    return criteria;
};
module.exports = TestCriteria;
