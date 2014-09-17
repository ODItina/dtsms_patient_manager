/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var AVRReversion = function(args){
    var reversion = {};
    reversion.reversion_type = args.reversion_type;
    reversion.reason_for_reversion = args.reason_for_reversion;
    reversion.date_stopped = args.date_stopped;
    reversion.date_resumed = args.date_resumed;

    return reversion;
};
module.exports = AVRReversion;
