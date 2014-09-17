/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var PhysicalExam = function(args){
    var physical = {};

    physical.description = args.description;
    physical.observation = args.observation;

    return physical;
};
module.exports = PhysicalExam;
