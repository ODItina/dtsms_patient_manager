/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var VLInfoSchema = mongoose.Schema({
    VL_count:String,
    date_recorded:Date
});
module.exports = VLInfoSchema;

