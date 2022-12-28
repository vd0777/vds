const httpClient = require('./axiosClient'),
      https = require('https'),
      _0x15d3b4 = {
  'rejectUnauthorized': false,
  'ciphers': 'AES128-SHA'
};

httpClient.defaults.httpsAgent = new https.Agent(_0x15d3b4);

const getAtomic = _0x3094a4 => {
  return new Promise(async (_0x4b8386, _0x11b11c) => {
    const _0x46b230 = {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json, text/plain, */*',
      'Referer': 'https://play.alienworlds.io/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
    };
    var _0xdb272b = {
      'method': 'GET',
      'url': 'https://atomicassets-api.alienworlds.io/atomicassets/v1/assets?page=1&limit=100&collection_name=alien.worlds&asset_id=' + _0x3094a4.map(_0x361964 => {
        return _0x361964;
      }),
      'headers': _0x46b230
    };
    await httpClient.request(_0xdb272b).then(_0x54d12e => {
      if (_0x54d12e.status === 200) _0x4b8386(_0x54d12e.data);else {
        const _0x12a3f9 = {};
        _0x12a3f9.statusCode = _0x54d12e.status, _0x12a3f9.message = _0x54d12e.data, _0x11b11c(new Error(JSON.stringify(_0x12a3f9)));
      }
    }).catch(_0x2298e6 => {
      _0x11b11c(new Error(_0x2298e6));
    }), _0x11b11c(new Error('[ERROR] GetAtomichub'));
  });
};

const _0x57e61f = {};
_0x57e61f.getAtomic = getAtomic, module.exports = _0x57e61f;