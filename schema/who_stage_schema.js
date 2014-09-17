/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var WHOStageSchema = mongoose.Schema({
    stage_name:{type:String, enum:['Stage 1', 'Stage 2','Stage 3','Stage 4']},
    is_current:Boolean
});
module.exports = WHOStageSchema;