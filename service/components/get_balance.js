const {
  URLApi_Wax
} = require('../config/setConfig');

const httpClient = require('./axiosClient'),
      GetRewards_Claims = _0x2a162b => {
  return new Promise(async (_0x3a1972, _0x5b19df) => {
    for (let _0x16fc15 = 0; _0x16fc15 < URLApi_Wax.length; _0x16fc15++) {
      try {
        const _0x382e67 = {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json; charset=utf-8',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-gpc': '1',
          'referer': 'https://play.alienworlds.io/',
          'referrer-policy': 'strict-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
        };
        const _0x519daa = {
          'json': true,
          'code': 'm.federation',
          'scope': 'm.federation',
          'table': 'minerclaim',
          'index_position': 0x1,
          'key_type': '',
          'limit': 0xa,
          'reverse': false,
          'show_payer': false
        };
        _0x519daa.lower_bound = _0x2a162b, _0x519daa.upper_bound = _0x2a162b;
        const _0x455058 = {
          'method': 'POST'
        };
        _0x455058.url = URLApi_Wax[_0x16fc15] + '/v1/chain/get_table_rows', _0x455058.headers = _0x382e67, _0x455058.data = _0x519daa;

        const _0x2f1c9a = _0x455058,
              _0x3ec0fc = await httpClient.request(_0x2f1c9a);

        if (_0x3ec0fc.status === 200) {
          if (_0x3ec0fc.data.rows.length > 0) {
            _0x3a1972(_0x3ec0fc.data.rows[0].amount);

            break;
          } else {
            _0x3a1972('0.0000 TLM');

            break;
          }
        }
      } catch (_0x1cd247) {
        console.log('[Error] - GetRewards_Claims - '), _0x2a162b, URLApi_Wax[_0x16fc15];
      }
    }

    _0x5b19df(new Error('[ERROR] GET_Rewards_Claims'));
  });
},
      GetBalanceTLM = _0x26e880 => {
  return new Promise(async (_0x148196, _0x1d5bb4) => {
    for (let _0x17b8ba = 0; _0x17b8ba < URLApi_Wax.length; _0x17b8ba++) {
      try {
        const _0x5141e3 = {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json; charset=utf-8',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-gpc': '1',
          'referer': 'https://play.alienworlds.io/',
          'referrer-policy': 'strict-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
        };
        const _0x278fee = {
          'json': true,
          'code': 'alien.worlds',
          'table': 'accounts',
          'limit': 0x1,
          'reverse': false,
          'show_payer': false
        };
        _0x278fee.scope = _0x26e880;
        const _0x248f39 = {
          'method': 'POST'
        };
        _0x248f39.url = URLApi_Wax[_0x17b8ba] + '/v1/chain/get_table_rows', _0x248f39.headers = _0x5141e3, _0x248f39.data = _0x278fee;

        const _0x4016d1 = _0x248f39,
              _0x1600aa = await httpClient.request(_0x4016d1);

        if (_0x1600aa.status === 200) {
          if (_0x1600aa.data.rows.length > 0) {
            _0x148196(_0x1600aa.data.rows[0].balance);

            break;
          } else {
            _0x148196('0.0000 TLM');

            break;
          }
        }
      } catch (_0x4549cc) {
        console.log('[Error] - GetBalanceTLM - '), _0x26e880, URLApi_Wax[_0x17b8ba];
      }
    }

    _0x1d5bb4(new Error('[ERROR] GET_BALANCE_TLM'));
  });
},
      GetBalanceWAX = _0x2071c8 => {
  return new Promise(async (_0x423a83, _0x3fea47) => {
    for (let _0x9d61a4 = 0; _0x9d61a4 < URLApi_Wax.length; _0x9d61a4++) {
      try {
        const _0x4ba44f = {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json; charset=utf-8',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-gpc': '1',
          'referer': 'https://play.alienworlds.io/',
          'referrer-policy': 'strict-origin',
          'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
        };
        const _0x5db754 = {
          'json': true,
          'code': 'eosio.token',
          'table': 'accounts',
          'limit': 0x1,
          'reverse': false,
          'show_payer': false
        };
        _0x5db754.scope = _0x2071c8;
        const _0x4120a2 = {
          'method': 'POST'
        };
        _0x4120a2.url = URLApi_Wax[_0x9d61a4] + '/v1/chain/get_table_rows', _0x4120a2.headers = _0x4ba44f, _0x4120a2.data = _0x5db754;

        const _0x3e09db = _0x4120a2,
              _0x574338 = await httpClient.request(_0x3e09db);

        if (_0x574338.status === 200) {
          if (_0x574338.data.rows.length > 0) {
            _0x423a83(_0x574338.data.rows[0].balance);

            break;
          } else {
            _0x423a83('0.00000000 WAX');

            break;
          }
        }
      } catch (_0x25e3d2) {
        console.log('[Error] - GetBalanceWAX - '), _0x2071c8, URLApi_Wax[_0x9d61a4];
      }
    }

    _0x3fea47(new Error('[ERROR] GET_BALANCE_WAX'));
  });
};

const _0x10b6c3 = {};
_0x10b6c3.GetBalanceWAX = GetBalanceWAX, _0x10b6c3.GetBalanceTLM = GetBalanceTLM, _0x10b6c3.GetRewards_Claims = GetRewards_Claims, module.exports = _0x10b6c3;