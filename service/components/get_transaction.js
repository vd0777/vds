const httpClient = require('./axiosClient'),
      https = require('https'),
      _0x3fa34a = {
  'rejectUnauthorized': false,
  'ciphers': 'AES128-SHA'
};

httpClient.defaults.httpsAgent = new https.Agent(_0x3fa34a);

const URLApi_Wax_V1 = ['http://wax.blokcrafters.io', 'http://wax.greymass.com', 'http://wax.hivebp.io', 'http://wax.eosphere.io'],
      URLApi_Wax_V2 = ['https://hyperion.wax.tgg.gg', 'https://hyperion-wax-mainnet.wecan.dev', 'http://hyperion.wax.blacklusion.io', 'http://hyperion2.sentnl.io', 'http://hyperion3.sentnl.io', 'http://hyperion.tokengamer.io', 'http://wax.eu.eosamsterdam.net', 'http://api.wax.greeneosio.com', 'http://wax.blokcrafters.io', 'http://hyperion.sentnl.io', 'http://apiwax.3dkrender.com', 'http://wax.blacklusion.io', 'http://wax.eosphere.io', 'http://wax.hivebp.io'],
      GetTransactionV1 = (_0x3528ea, _0x41df3c) => {
  return new Promise(async (_0x359e3d, _0x459a53) => {
    for (let _0x415b81 = 0; _0x415b81 < URLApi_Wax_V1.length; _0x415b81++) {
      try {
        const _0x241c46 = URLApi_Wax_V1[_0x415b81] + '/v1/history/get_transaction',
              _0x5de6e8 = {
          'block_num_hint': 0x0
        };

        _0x5de6e8.id = _0x41df3c;

        const _0x301b85 = await httpClient.post(_0x241c46, _0x5de6e8);

        if (_0x301b85.status === 200) {
          if (_0x301b85.data.traces.length > 0) {
            _0x359e3d(_0x301b85.data);

            break;
          }
        }
      } catch (_0x1d9ec8) {
        console.log('[ERROR] GET_TRX_V1', URLApi_Wax_V1[_0x415b81], _0x1d9ec8.message);
      }
    }

    _0x459a53(new Error('[ERROR] GET_TRX_V1 OVER'));
  });
};

const GetTransactionV2 = (_0x490696, _0x572c53) => {
  return new Promise(async (_0x56bdeb, _0x5ce828) => {
    for (let _0x55bc71 = 0; _0x55bc71 < URLApi_Wax_V2.length; _0x55bc71++) {
      try {
        const _0x4115ed = URLApi_Wax_V2[_0x55bc71] + '/v2/history/get_transaction?id=' + _0x572c53,
              _0x2bc64a = await httpClient.get(_0x4115ed);

        if (_0x2bc64a.status === 200) {
          if (_0x2bc64a.data.actions.length > 0 && _0x2bc64a.data.executed === true) {
            _0x56bdeb(_0x2bc64a.data);

            break;
          }
        }
      } catch (_0x11f5d4) {
        console.log('[ERROR] GET_TRX_V2', URLApi_Wax_V2[_0x55bc71], _0x11f5d4.message);
      }
    }

    _0x5ce828(new Error('[ERROR] GET_TRX_V2 OVER'));
  });
},
      GetTransactionV3 = (_0x15592a, _0x2ec2aa) => {
  return new Promise(async (_0x5c3a70, _0x4283d6) => {
    try {
      const _0x3fa485 = await httpClient.get('https://alien-script.com/v1/api/trx/' + _0x2ec2aa);

      _0x3fa485.data.data.traces[0].traces.length > 0 ? _0x5c3a70(_0x3fa485.data) : _0x4283d6(new Error('ERROR Transaction V3'));
    } catch (_0xfbe11) {
      _0x4283d6(new Error('[ERROR] GET_TRX_V3 OVER'));
    }
  });
},
      _0xe70f42 = {};

_0xe70f42.GetTransactionV1 = GetTransactionV1, _0xe70f42.GetTransactionV2 = GetTransactionV2, _0xe70f42.GetTransactionV3 = GetTransactionV3, module.exports = _0xe70f42;