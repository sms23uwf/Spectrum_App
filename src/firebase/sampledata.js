import './firebase';

var emitter1 = database.ref('emitter').push({lnot: 'WXG589',
elint: 'el2',
nsn: 'nsn2',
code_type: 'ct2',
nick: 'wagshall deli',
antenna_type: 'type1'});


var mode1 = database.ref('mode').push({emitterId: emitter1.key,
mc: 'mc12',
mp: 'mp12',
fc1: 'fc112',
fc2: 'fc212',
sn: 'sn12',
sd: 'sd12'});

var generator1 = database.ref('generator').push({modeId: mode1.key,
    polarization_type: 'pt12',
    rf_min: 145.9495585,
    rf_max: 786.444585,
    rf_mod_type_code: 'rfmtc12'});

var mode2 = database.ref('mode').push({emitterId: emitter1.key,
    mc: 'mc22',
    mp: 'mp22',
    fc1: 'fc122',
    fc2: 'fc222',
    sn: 'sn22',
    sd: 'sd22'});

var generator2 = database.ref('generator').push({modeId: mode2.key,
    polarization_type: 'pt22',
    rf_min: 245.9996585,
    rf_max: 796.484585,
    rf_mod_type_code: 'rfmtc22'});

var generator3 = database.ref('generator').push({modeId: mode2.key,
    polarization_type: 'pt32',
    rf_min: 45.9996585,
    rf_max: 376.484585,
    rf_mod_type_code: 'rfmtc32'});

var generator4 = database.ref('generator').push({modeId: mode2.key,
    polarization_type: 'pt42',
    rf_min: 75.9996585,
    rf_max: 476.484585,
    rf_mod_type_code: 'rfmtc42'});
    
var mode3 = database.ref('mode').push({emitterId: emitter1.key,
    mc: 'mc32',
    mp: 'mp32',
    fc1: 'fc132',
    fc2: 'fc232',
    sn: 'sn32',
    sd: 'sd32'});
        
var generator1 = database.ref('generator').push({modeId: mode3.key,
    polarization_type: 'pt32',
    rf_min: 95.9495585,
    rf_max: 286.444585,
    rf_mod_type_code: 'rfmtc32'});
        
export default sampledata;
