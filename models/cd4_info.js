/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var CD4Info = function(args){
    var info ={};
    info.CD4_count = args.CD4_count;
    info.date_recorded = args.date_recorded;

    return info;
};
module.exports = CD4Info;
