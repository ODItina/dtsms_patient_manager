/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var CD4InfoSchema = mongoose.Schema({
    CD4_count:String,
    date_recorded:Date
});
module.exports = CD4InfoSchema;
