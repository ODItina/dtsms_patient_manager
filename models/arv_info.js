/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */

    //Information on patient Anti-retro-viral therapy
var ARVInfo = function(args){
    var info ={};
    info.was_on_ARV = args.was_on_ARV;
    info.current_medication = args.current_medication;
    info.adherence_info = args.adherence_info;
    info.date_recoreded = args.date_recoreded;

    return info;
};
module.exports = ARVInfo;

