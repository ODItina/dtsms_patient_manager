/**
 * Created by KP_TerminalUser2 on 10/08/2014.
 */
var mongoose = require('mongoose');

var phoneContactSchema = mongoose.Schema({

    is_working: {type:Boolean, default:true},
    phoneNumber: {type: String}

});
module.exports =  phoneContactSchema;


