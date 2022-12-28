const httpClient = require('./axiosClient');

const https = require('https');

const getRandomString = _0x1f35aa => {
  var _0x263461 = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var _0x3cb6e4 = '';

  for (var _0xa21885 = 0; _0xa21885 < _0x1f35aa; _0xa21885++) {
    _0x3cb6e4 += _0x263461.charAt(Math.floor(Math.random() * _0x263461.length));
  }

  return _0x3cb6e4;
};

const getYeomen = async _0x299eeb => {
  return new Promise(async (_0x1a5966, _0x5a5eb9) => {
    const _0x52735a = {
      'rejectUnauthorized': false
    };
    const _0x5d96e0 = {
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
    const _0x583b05 = {};
    _0x583b05.account_name = _0x299eeb.account;
    _0x583b05.actions = [_0x299eeb.actions];
    const _0x3dde10 = {
      'httpsAgent': new https.Agent(_0x52735a),
      'method': 'POST',
      'url': 'http://aw-guard.yeomen.ai/platform-guard',
      'headers': _0x5d96e0,
      'data': _0x583b05
    };
    await httpClient.request(_0x3dde10).then(function (_0x275202) {
      console.log('[Transaction Free - Enable] - ' + _0x299eeb.account);
      const _0x48f4ba = { ..._0x275202.data
      };
      _0x48f4ba.cosign = _0x275202.data.enabled, _0x1a5966(_0x48f4ba);
    }).catch(async _0x34a8f4 => {
      console.log('[Transaction Free - Disable] - ' + _0x299eeb.account + ' - ' + _0x34a8f4.message);
      const _0x3ab6a7 = {
        'error': null,
        'errorCode': null,
        'message': 'Account has 0 transactions remaining',
        'cosign': false,
        'buyram': false,
        'cosign_remaining_txs': 0x7d0,
        'cosign_ratelimit_txs': 0x0
      };

      _0x1a5966({
        'uniqid': getRandomString(13),
        'account': 'wam',
        'enabled': false,
        'contract_account': 'yeomenwarder',
        'contract_action': 'warder',
        'contract_permission': 'guard',
        'buyram_bytes': '591',
        'account_tag_exists': true,
        'asn': '000000',
        'stats': _0x3ab6a7
      });
    });
  });
},
      _0x2fdcce = {};

_0x2fdcce.getYeomen = getYeomen, module.exports = _0x2fdcce;