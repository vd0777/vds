const {
  URLApi_Wax
} = require('../config/setConfig'),
      httpClient = require('./axiosClient'),
      GetLastMine = _0x5e18d9 => {
  return new Promise(async (_0x5c2b56, _0x35d093) => {
    for (let _0xe9d6ea = 0; _0xe9d6ea < URLApi_Wax.length; _0xe9d6ea++) {
      try {
        const _0x456a7b = {
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
        const _0x468a85 = {
          'json': true,
          'code': 'm.federation',
          'scope': 'm.federation',
          'table': 'miners'
        };
        _0x468a85.lower_bound = _0x5e18d9, _0x468a85.upper_bound = _0x5e18d9;
        const _0x2ed442 = {
          'method': 'POST'
        };
        _0x2ed442.url = URLApi_Wax[_0xe9d6ea] + '/v1/chain/get_table_rows', _0x2ed442.headers = _0x456a7b, _0x2ed442.data = _0x468a85;

        const _0x4569d6 = _0x2ed442,
              _0x218126 = await httpClient.request(_0x4569d6);

        if (_0x218126.status === 200) {
          _0x5c2b56(_0x218126.data);

          break;
        }
      } catch (_0xf0df5b) {
        console.log('[ERROR] LAST_MINED', URLApi_Wax[_0xe9d6ea], _0xf0df5b.message);
      }
    }

    _0x35d093(new Error('[ERROR] LAST_MINED OVER'));
  });
};

const GetTools = _0x5a38b8 => {
  return new Promise(async (_0x462dc4, _0x5e5e41) => {
    for (let _0x10876e = 0; _0x10876e < URLApi_Wax.length; _0x10876e++) {
      try {
        const _0x5fa611 = {
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
        const _0x34afc3 = {
          'json': true,
          'code': 'm.federation',
          'scope': 'm.federation',
          'table': 'bags',
          'table_key': '',
          'index_position': 0x1,
          'key_type': '',
          'reverse': false,
          'show_payer': false
        };
        _0x34afc3.lower_bound = _0x5a38b8, _0x34afc3.upper_bound = _0x5a38b8;
        const _0x28da19 = {
          'method': 'POST'
        };
        _0x28da19.url = URLApi_Wax[_0x10876e] + '/v1/chain/get_table_rows', _0x28da19.headers = _0x5fa611, _0x28da19.data = _0x34afc3;

        const _0x1d5d3a = _0x28da19,
              _0x427b52 = await httpClient.request(_0x1d5d3a);

        if (_0x427b52.status === 200) {
          _0x462dc4(_0x427b52.data);

          break;
        }
      } catch (_0x3b7776) {
        console.log('[ERROR] TOOLS_MINED', URLApi_Wax[_0x10876e], _0x3b7776.message);
      }
    }

    _0x5e5e41(new Error('[ERROR] TOOLS_MINED OVER'));
  });
},
      _0x58c43d = {};

_0x58c43d.GetLastMine = GetLastMine;
_0x58c43d.GetTools = GetTools, module.exports = _0x58c43d;