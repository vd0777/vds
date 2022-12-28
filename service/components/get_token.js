const totp = require('totp-generator'),
      httpClient = require('./axiosClient'),
      https = require('https');

const ciphers = ['AES128-GCM-SHA256', 'AES128-SHA', 'AES128-SHA256', 'AES256-GCM-SHA384', 'AES256-SHA', 'AES256-SHA256', 'DHE-PSK-AES128-CBC-SHA', 'DHE-PSK-AES128-CBC-SHA256', 'DHE-PSK-AES128-GCM-SHA256', 'DHE-PSK-AES256-CBC-SHA', 'DHE-PSK-AES256-CBC-SHA384', 'DHE-PSK-AES256-GCM-SHA384', 'DHE-PSK-CHACHA20-POLY1305', 'DHE-RSA-AES128-GCM-SHA256', 'DHE-RSA-AES128-SHA', 'DHE-RSA-AES128-SHA256', 'DHE-RSA-AES256-GCM-SHA384', 'DHE-RSA-AES256-SHA', 'DHE-RSA-AES256-SHA256', 'DHE-RSA-CHACHA20-POLY1305', 'ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-AES128-SHA', 'ECDHE-ECDSA-AES128-SHA256', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES256-SHA', 'ECDHE-ECDSA-AES256-SHA384', 'ECDHE-ECDSA-CHACHA20-POLY1305', 'ECDHE-PSK-AES128-CBC-SHA', 'ECDHE-PSK-AES128-CBC-SHA256', 'ECDHE-PSK-AES256-CBC-SHA', 'ECDHE-PSK-AES256-CBC-SHA384', 'ECDHE-PSK-CHACHA20-POLY1305', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-SHA', 'ECDHE-RSA-AES128-SHA256', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-SHA', 'ECDHE-RSA-AES256-SHA384', 'ECDHE-RSA-CHACHA20-POLY1305', 'PSK-AES128-CBC-SHA', 'PSK-AES128-CBC-SHA256', 'PSK-AES128-GCM-SHA256', 'PSK-AES256-CBC-SHA', 'PSK-AES256-CBC-SHA384', 'PSK-AES256-GCM-SHA384', 'PSK-CHACHA20-POLY1305', 'RSA-PSK-AES128-CBC-SHA', 'RSA-PSK-AES128-CBC-SHA256', 'RSA-PSK-AES128-GCM-SHA256', 'RSA-PSK-AES256-CBC-SHA', 'RSA-PSK-AES256-CBC-SHA384', 'RSA-PSK-AES256-GCM-SHA384', 'RSA-PSK-CHACHA20-POLY1305', 'SRP-AES-128-CBC-SHA', 'SRP-AES-256-CBC-SHA', 'SRP-RSA-AES-128-CBC-SHA', 'SRP-RSA-AES-256-CBC-SHA', 'TLS_AES_128_GCM_SHA256', 'TLS_AES_256_GCM_SHA384', 'TLS_CHACHA20_POLY1305_SHA256'].join(':');
httpClient.defaults.withCredentials = true;
const _0x5d3f60 = {
  'rejectUnauthorized': false
};
_0x5d3f60.ciphers = ciphers, httpClient.defaults.httpsAgent = new https.Agent(_0x5d3f60);
const _0x1e9747 = {
  'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
};
httpClient.defaults.headers = _0x1e9747;

const getSession = _0x348f9a => {
  const _0x2263ba = {
    'digits': 0x6,
    'period': 0x1e
  };

  const _0x47ff64 = totp(String(_0x348f9a['2fa']).replace(/\s/g, ''), _0x2263ba);

  return new Promise(async (_0x4070cb, _0x595295) => {
    await httpClient.get('https://all-access.wax.io/api/session').catch(async _0x41f84d => {
      const _0x4fa17b = {};
      _0x4fa17b.username = _0x348f9a.username;
      _0x4fa17b.password = _0x348f9a.password, await httpClient.post('https://all-access.wax.io/api/session', _0x4fa17b, {}).catch(async _0x5b399e => {
        if (_0x5b399e.response.data.errors) {
          const _0x4fe068 = {};
          _0x4fe068.GetSingError = _0x5b399e.response.status, _0x4fe068.DetailsError = _0x5b399e.response.data.errors[0].message, _0x595295(_0x4fe068);
        } else {
          const _0x3e3a0c = {};
          _0x3e3a0c.code = _0x47ff64, _0x3e3a0c.token2fa = _0x5b399e.response.data.token2fa, await httpClient.post('https://all-access.wax.io/api/session/2fa', _0x3e3a0c).then(async _0x515d80 => {
            const _0x28a13f = {
              'accept': '*/*',
              'accept-language': 'en-US,en;q=0.9',
              'content-type': 'application/json, text/plain, */*',
              'Referer': 'https://all-access.wax.io/dashboard',
              'Referrer-Policy': 'strict-origin-when-cross-origin',
              'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
            };
            _0x28a13f.cookie = _0x515d80.headers['set-cookie'][0];
            const _0x389cd4 = {
              'method': 'GET',
              'url': 'https://all-access.wax.io/api/session'
            };
            _0x389cd4.headers = _0x28a13f;
            const _0x2c7919 = _0x389cd4;
            await httpClient.request(_0x2c7919).then(_0x4ff0b1 => {
              _0x4070cb(_0x4ff0b1.data);
            }).catch(_0x5a43aa => {
              console.log('SEND_GET_TOKEN ERROR');
            });
          }).catch(_0x2e946f => {
            const _0x3b9f2e = {};
            _0x3b9f2e.SendSingError = _0x2e946f.response.status, _0x3b9f2e.DetailsError = _0x2e946f.response.data.errors[0].message;

            _0x595295(_0x3b9f2e);
          });
        }
      });
    });
  });
};

const _0xe57fb9 = {};
_0xe57fb9.getSession = getSession, module.exports = _0xe57fb9;