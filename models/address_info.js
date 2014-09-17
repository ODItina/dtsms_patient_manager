/**
 * Created by KP_TerminalUser2 on 09/08/2014.
 */

var assert = require('assert');

var AddressInfo = function(args){
    var addressInfo = {};

    addressInfo.is_current = args.is_current || true;
    addressInfo.addressType = args.addressType;
    addressInfo.street = args.street;
    addressInfo.descriptiveRemarks = args.descriptiveRemarks;
    addressInfo.city_town_village = args.city_town_village;
    addressInfo.stateRegion = args.stateRegion;
    addressInfo.is_valid = args.is_valid;


    return addressInfo;
};

module.exports = AddressInfo;
