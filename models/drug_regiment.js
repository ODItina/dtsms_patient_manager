/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
var DrugRegiment = function(args){
    var regiment = {};

    regiment.medication_description = args.medication_description;
    regiment.medication_strength = args.medication_strength;
    regiment.drug_frequency = args.drug_frequency;
    regiment.duration = args.duration;
    regiment.prescribed_quantity = args.prescribed_quantity;
    regiment.dispensed_quantity = args.dispensed_quantity;

    return regiment;

};
module.exports = DrugRegiment;