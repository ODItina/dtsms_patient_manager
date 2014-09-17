/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var CurrentMedicationSchema = mongoose.Schema({
    name:String,
    is_discontinued:{type:Boolean, default:false}
});
module.exports = CurrentMedicationSchema;
