/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var LabDetails = function(args){
    var lab = {};
    lab.hospital_Id = args.hospital_Id;
    lab.testCriteria = args.testCriteria;
    lab.date_sample_collected = args.date_sample_collected;
    lab.date_result_submitted = args.date_result_submitted;
    lab.baseline_or_repeat = args.baseline_or_repeat;
    lab.lab_registrationId = args.lab_registrationId;
    lab.is_current = args.is_current || false;


    return lab;
};
module.exports = LabDetails;
