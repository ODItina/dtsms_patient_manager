/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */

var TransferInfo = function(args){
    var transfer = {};

    transfer.reason_for_transfer = args.reason_for_transfer || null;
    transfer.transfer_from = args.transfer_from || null;
    transfer.date_transfer = args.date_transfer || null;
    transfer.is_current = args.is_current || false;

    return transfer;
};
module.exports = TransferInfo;