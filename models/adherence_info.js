/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */

var AdherenceInfo = function(args){
    var info ={};
    info.ARV_reversion = args.ARV_reversion;
    info.is_in_adherence_program = args.is_in_adherence_program;

    return info;
};
module.exports = AdherenceInfo;