/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var ARVReversionSchema = mongoose.Schema({
    reversion_type:{type:String, enum:['Missed ARV','Treatment Interrupted', 'Treatment Stopped']},
    reason_for_reversion:String,
    date_stopped:Date,
    date_resumed:Date
});
module.exports = ARVReversionSchema;