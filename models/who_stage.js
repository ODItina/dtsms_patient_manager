/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */

//World Health Organization disease staging system for HIV infection Information
var WHOStage = function(args){
    var stage = {};

    stage.stage_name = args.stage_name;
    stage.is_current = args.is_current;

    return stage;
};
module.exports = WHOStage;