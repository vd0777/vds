const httpClient = require('./axiosClient'),
      https = require('https'),
      MAX_RETRIES = 3,
      ciphers = ['AES128-GCM-SHA256', 'AES128-SHA', 'AES128-SHA256', 'AES256-GCM-SHA384', 'AES256-SHA', 'AES256-SHA256', 'DHE-PSK-AES128-CBC-SHA', 'DHE-PSK-AES128-CBC-SHA256', 'DHE-PSK-AES128-GCM-SHA256', 'DHE-PSK-AES256-CBC-SHA', 'DHE-PSK-AES256-CBC-SHA384', 'DHE-PSK-AES256-GCM-SHA384', 'DHE-PSK-CHACHA20-POLY1305', 'DHE-RSA-AES128-GCM-SHA256', 'DHE-RSA-AES128-SHA', 'DHE-RSA-AES128-SHA256', 'DHE-RSA-AES256-GCM-SHA384', 'DHE-RSA-AES256-SHA', 'DHE-RSA-AES256-SHA256', 'DHE-RSA-CHACHA20-POLY1305', 'ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-AES128-SHA', 'ECDHE-ECDSA-AES128-SHA256', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES256-SHA', 'ECDHE-ECDSA-AES256-SHA384', 'ECDHE-ECDSA-CHACHA20-POLY1305', 'ECDHE-PSK-AES128-CBC-SHA', 'ECDHE-PSK-AES128-CBC-SHA256', 'ECDHE-PSK-AES256-CBC-SHA', 'ECDHE-PSK-AES256-CBC-SHA384', 'ECDHE-PSK-CHACHA20-POLY1305', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-SHA', 'ECDHE-RSA-AES128-SHA256', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-SHA', 'ECDHE-RSA-AES256-SHA384', 'ECDHE-RSA-CHACHA20-POLY1305', 'PSK-AES128-CBC-SHA', 'PSK-AES128-CBC-SHA256', 'PSK-AES128-GCM-SHA256', 'PSK-AES256-CBC-SHA', 'PSK-AES256-CBC-SHA384', 'PSK-AES256-GCM-SHA384', 'PSK-CHACHA20-POLY1305', 'RSA-PSK-AES128-CBC-SHA', 'RSA-PSK-AES128-CBC-SHA256', 'RSA-PSK-AES128-GCM-SHA256', 'RSA-PSK-AES256-CBC-SHA', 'RSA-PSK-AES256-CBC-SHA384', 'RSA-PSK-AES256-GCM-SHA384', 'RSA-PSK-CHACHA20-POLY1305', 'SRP-AES-128-CBC-SHA', 'SRP-AES-256-CBC-SHA', 'SRP-RSA-AES-128-CBC-SHA', 'SRP-RSA-AES-256-CBC-SHA', 'TLS_AES_128_GCM_SHA256', 'TLS_AES_256_GCM_SHA384', 'TLS_CHACHA20_POLY1305_SHA256'].join(':');

httpClient.defaults.withCredentials = true;
const _0x5c5446 = {
  'rejectUnauthorized': false
};
_0x5c5446.ciphers = ciphers, httpClient.defaults.httpsAgent = new https.Agent(_0x5c5446);
const _0x11ee13 = {
  'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
};
httpClient.defaults.headers = _0x11ee13;

const delay = _0x91b2af => {
  return new Promise(_0x1a50a3 => setTimeout(_0x1a50a3, _0x91b2af));
},
      getSing = async (_0x16e868, _0x55ae0e = 0) => {
  const _0x21ea4c = [];

  _0x16e868.serializeTransaction.map(_0x27a50c => {
    _0x21ea4c.push(_0x27a50c);
  });

  return new Promise(async (_0x18fc1b, _0x1d56b7) => {
    const _0x264973 = {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
      'origin': 'https://all-access.wax.io',
      'referer': 'https://all-access.wax.io/',
      'referrer-policy': 'strict-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
    };
    _0x264973['x-access-token'] = _0x16e868.token;
    const _0x506755 = {
      'description': 'jwt is insecure',
      'freeBandwidth': true,
      'feeFallback': false
    };
    _0x506755.serializedTransaction = _0x21ea4c;
    _0x506755.website = _0x16e868.website;
    const _0x2bdd35 = {
      'method': 'POST',
      'url': 'https://public-wax-on.wax.io/wam/sign'
    };
    _0x2bdd35.headers = _0x264973, _0x2bdd35.data = _0x506755;

    const _0x3cd40f = _0x2bdd35,
          _0x3acb62 = await httpClient.request(_0x3cd40f).catch(async _0x796ef1 => {
      if (_0x55ae0e < MAX_RETRIES && _0x796ef1.response.status === 403) return console.log('[ERROR] Send_Sing_Wax', _0x796ef1.response.status), await delay(1000), getSing(_0x16e868, _0x55ae0e + 1);

      _0x1d56b7(_0x796ef1);
    });

    _0x18fc1b(_0x3acb62);
  });
},
      _0x28cb58 = {};

_0x28cb58.getSing = getSing, module.exports = _0x28cb58;