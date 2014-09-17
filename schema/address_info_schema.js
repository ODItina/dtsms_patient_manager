/**
 * Created by KP_TerminalUser2 on 10/08/2014.
 */
var mongoose = require('mongoose');

var addressInfoSchema = mongoose.Schema({

    addressType:{type:String, enum:['Residential', 'Work Address', 'Other', 'Health Facility']},
    street: String,
    descriptiveRemarks:String,
    city_town_village: String,
    locality_lga:String,
    state_region: String,
    country: {type:String, default: 'Nigeria'},
    is_current: {type:Boolean, default: true},
    is_valid:{type:Boolean, default:true}

});

module.exports = addressInfoSchema;


