/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
    //Information on HIV Virus Levels
var VLInfo = function(args){
    var info ={};
    info.VL_count = args.VL_count;
    info.date_recorded = args.date_recorded;

    return info;
};
module.exports = VLInfo;
