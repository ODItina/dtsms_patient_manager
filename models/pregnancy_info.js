/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var PregnancyInfo = function(args){
    var pregnancy = {};
    pregnancy.date_last_menstruation = args.date_last_menstruation;
    pregnancy.gestation_age = args.gestation_age;
    pregnancy.date_delivery_expected = args.date_delivery_expected;

};
module.exports = PregnancyInfo;
