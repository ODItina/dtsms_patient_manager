/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');
var ARVReversionSchema = require('./arv_reversion_schema');

var adherenceInfoSchema = mongoose.Schema({
    ARV_reversion:[ARVReversionSchema],
    is_in_adherence_program:Boolean
});
module.exports = adherenceInfoSchema;
