/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var drugAllergySchema = mongoose.Schema({
    description:String,
    remarks:String
});
module.exports = drugAllergySchema;