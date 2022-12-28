const {
  URLApi_Wax
} = require('../config/setConfig'),
      httpClient = require('./axiosClient'),
      GetAccount = _0x785be5 => {
  return new Promise(async (_0x3ee803, _0x242d59) => {
    for (let _0x265ee8 = 0; _0x265ee8 < URLApi_Wax.length; _0x265ee8++) {
      try {
        const _0x1f5737 = {
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
        const _0x511a91 = {};
        _0x511a91.account_name = _0x785be5;
        const _0xef6e58 = {
          'method': 'POST'
        };
        _0xef6e58.url = URLApi_Wax[_0x265ee8] + '/v1/chain/get_account', _0xef6e58.headers = _0x1f5737, _0xef6e58.data = _0x511a91;

        const _0x271fc0 = _0xef6e58,
              _0x39dddb = await httpClient.request(_0x271fc0);

        if (_0x39dddb.status === 200) {
          const _0x26d34e = _0x39dddb.data.ram_quota - _0x39dddb.data.ram_usage,
                _0x2456f5 = {};

          _0x2456f5.cpu_limit = _0x39dddb.data.cpu_limit, _0x2456f5.total_resources = _0x39dddb.data.total_resources, _0x2456f5.net_limit = _0x39dddb.data.net_limit, _0x2456f5.ram_limit = {}, _0x2456f5.ram_limit.used = _0x39dddb.data.ram_usage, _0x2456f5.ram_limit.available = _0x26d34e > 0 ? _0x26d34e : 0, _0x2456f5.ram_limit.max = _0x39dddb.data.ram_quota, _0x3ee803(_0x2456f5);
          break;
        }
      } catch (_0x301fe4) {
        console.log('[Error] - getAccount', _0x785be5, URLApi_Wax[_0x265ee8]);
      }
    }

    _0x242d59(new Error('[ERROR] GET_ACCOUNT OVER'));
  });
};

const _0x5f3dbb = {};
_0x5f3dbb.GetAccount = GetAccount;
module.exports = _0x5f3dbb;