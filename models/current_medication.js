/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var CurrentMedication = function(args){
    var medication = {};

    medication.name = args.name;
    medication.is_discontinued = args.is_discontinued || false;

    return medication;
};
module.exports = CurrentMedication;
