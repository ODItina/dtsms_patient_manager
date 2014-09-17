/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var DrugAllergy = function(args){
    var allergy = {};
    allergy.description = args.description;
    allergy.remarks =args.remarks;

    return allergy;
};
module.exports = DrugAllergy;
