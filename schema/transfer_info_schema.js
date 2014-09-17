/**
 * Created by KP_TerminalUser2 on 03/09/2014.
 */
    //Information on patient inter-facility transfer (if any)
var mongoose = require('mongoose');

var transferInfoSchema = mongoose.Schema({
    reason_for_transfer:{type:String, enum:['Relocation','Closer to new facility', 'Self-transfer','Stigma']},
    transfer_from:String,
    date_transfer:Date,
    is_current:{type:Boolean, default:true}
});
module.exports = transferInfoSchema;
