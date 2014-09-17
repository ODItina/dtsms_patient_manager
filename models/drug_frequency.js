/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var DrugFrequency = function(args){
    var frequency = {};

    frequency.time_period = args.time_period;
    frequency.dosage = args.dosage;

    return frequency;
};
module.exports = DrugFrequency;
