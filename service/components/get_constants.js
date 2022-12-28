const {
  TextEncoder,
  TextDecoder
} = require('util'),
      {
  Api,
  JsonRpc
} = require('eosjs'),
      {
  JsSignatureProvider
} = require('eosjs/dist/eosjs-jssig'),
      {
  base64ToBinary
} = require('eosjs/dist/eosjs-numeric');

const {
  PrivateKey
} = require('eosjs/dist/PrivateKey'),
      {
  getSing
} = require('./get_sing'),
      {
  URLApi_Wax,
  getPrivateKey,
  getMineBucket,
  Uniqid
} = require('../config/setConfig'),
      {
  getYeomen
} = require('./get_yeomenwarder'),
      httpClient = require('./axiosClient'),
      https = require('https'),
      MAX_RETRIES = 3,
      delay = _0x21be78 => {
  return new Promise(_0x2885ad => setTimeout(_0x2885ad, _0x21be78));
},
      getRandomString = _0x29992f => {
  var _0x46b5d6 = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var _0x2cfded = '';

  for (var _0x5efe43 = 0; _0x5efe43 < _0x29992f; _0x5efe43++) {
    _0x2cfded += _0x46b5d6.charAt(Math.floor(Math.random() * _0x46b5d6.length));
  }

  return _0x2cfded;
};

function getRandom(_0x2db9d5, _0x5139f0) {
  return Math.floor(Math.random() * (_0x5139f0 - _0x2db9d5) + _0x2db9d5);
}

const GetInfo = async () => {
  return new Promise(async (_0x1ab832, _0x29eac3) => {
    const _0x5095ac = URLApi_Wax[getRandom(0, URLApi_Wax.length)];
    const _0x427737 = {
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
    const _0x192946 = {
      'method': 'POST'
    };
    _0x192946.url = _0x5095ac + '/v1/chain/get_info', _0x192946.headers = _0x427737;
    _0x192946.data = {};
    const _0x46e4af = _0x192946;
    await httpClient.request(_0x46e4af).then(_0x5328b5 => {
      const _0x1e1496 = _0x5328b5.data,
            _0x2c3acc = {};
      _0x2c3acc.apiUrl = _0x5095ac;
      const _0xd12136 = _0x2c3acc,
            _0x504241 = { ..._0x1e1496,
        ..._0xd12136
      },
            _0x33ce29 = _0x504241;

      _0x1ab832(_0x33ce29);
    }).catch(_0xa0d9c8 => {
      console.log(_0xa0d9c8);

      _0x29eac3(new Error('[ERROR] GET_INFO OVER'));
    });
  });
},
      GetBlock = async _0x4cd7ef => {
  return new Promise(async (_0x4d9cdb, _0x2fdcb6) => {
    const _0x4d985f = {
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
    const _0x7303d7 = {
      'method': 'POST'
    };
    _0x7303d7.url = _0x4cd7ef.apiUrl + '/v1/chain/get_block', _0x7303d7.headers = _0x4d985f, _0x7303d7.data = {}, _0x7303d7.data.block_num_or_id = _0x4cd7ef.last_irreversible_block_num;
    const _0x260d2b = _0x7303d7;
    await httpClient.request(_0x260d2b).then(_0xce3699 => {
      _0x4d9cdb(_0xce3699.data);
    }).catch(_0x5a54ae => {
      console.log('[ERROR] GET_BLOCK', _0x5a54ae.message), _0x2fdcb6(new Error('[ERROR] GET_BLOCK'));
    });
  });
},
      GetRawAbi = async (_0x159843, _0x4bbd47) => {
  return new Promise(async (_0x300fda, _0x2cd889) => {
    const _0x322e52 = {
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
    const _0x89ee78 = {};
    _0x89ee78.account_name = _0x159843;
    const _0x37240d = {
      'method': 'POST'
    };
    _0x37240d.url = _0x4bbd47 + '/v1/chain/get_raw_abi';
    _0x37240d.headers = _0x322e52, _0x37240d.data = _0x89ee78;
    const _0x5891fb = _0x37240d;
    await httpClient.request(_0x5891fb).then(_0x5e95e3 => {
      _0x300fda(_0x5e95e3.data);
    }).catch(_0x16273f => {
      console.log('[ERROR] GET_RAWABI', _0x16273f.message);

      _0x2cd889(new Error('[ERROR] GET_RAWABI'));
    });
  });
},
      GetPools = async _0x578698 => {
  return new Promise(async (_0x378b4d, _0x5a4c5c) => {
    const _0x498a26 = URLApi_Wax[getRandom(0, URLApi_Wax.length)],
          _0x36e2fb = {
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
    const _0x5c1da3 = {
      'json': true,
      'code': 'm.federation',
      'table': 'state3',
      'lower_bound': '',
      'upper_bound': '',
      'index_position': 0x1,
      'key_type': '',
      'limit': 0xa,
      'reverse': false,
      'show_payer': false
    };
    _0x5c1da3.scope = _0x578698;
    const _0x1a1ad8 = {
      'httpsAgent': new https.Agent({}),
      'method': 'POST',
      'headers': _0x36e2fb,
      'url': _0x498a26 + '/v1/chain/get_table_rows',
      'data': _0x5c1da3
    };
    await httpClient.request(_0x1a1ad8).then(_0x5eb3b8 => {
      _0x378b4d(_0x5eb3b8.data);
    }).catch(_0x5d7144 => {
      const _0x19cff1 = {
        'last_fill_time': '2022-04-13T12:46:48.500',
        'fill_rate': '9999.9999',
        'bucket_total': '99999.9999 TLM',
        'mine_bucket': '99999.9999 TLM'
      };
      const _0x32cf88 = {
        'more': false,
        'next_key': '',
        'next_key_bytes': ''
      };
      _0x32cf88.rows = [_0x19cff1];

      _0x378b4d(_0x32cf88);
    });
  });
},
      arrayToHex = _0x3175d0 => {
  let _0x3d5f58 = '';

  for (const _0x41a7cd of _0x3175d0) {
    _0x3d5f58 += ('00' + _0x41a7cd.toString(16)).slice(-2);
  }

  ;
  return _0x3d5f58;
},
      ApiPushTransaction = async (_0x58a50e, _0x146197, _0x5147cd, _0x433442 = 0) => {
  return new Promise(async (_0xa39d9, _0x56865b) => {
    const _0x5b31ac = {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'text/plain;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'sec-gpc': '1',
      'referer': 'https://play.alienworlds.io/',
      'referrer-policy': 'strict-origin',
      'user-agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
    };
    const _0x27beb8 = {
      'method': 'POST',
      'url': _0x5147cd + '/v1/chain/push_transaction',
      'headers': _0x5b31ac,
      'data': {
        'signatures': _0x58a50e.signatures,
        'compression': 0x0,
        'packed_context_free_data': '',
        'packed_trx': arrayToHex(_0x58a50e.serializedTransaction)
      }
    };

    try {
      console.log('[Send] - ApiPushTransaction -', '[' + _0x146197 + '][' + _0x433442 + ']');

      const _0x15c498 = await httpClient.request(_0x27beb8);

      _0xa39d9(_0x15c498);
    } catch (_0x450dd7) {
      _0x56865b(_0x450dd7);
    }
  });
},
      GetPermissionLinks = async (_0x3929d3, _0xc4183d) => {
  return new Promise(async (_0x8855d0, _0x279d55) => {
    const _0x19e206 = {
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
    const _0x3d6714 = {};
    _0x3d6714.account_name = _0x3929d3;
    const _0x1201a7 = {
      'method': 'POST'
    };
    _0x1201a7.url = _0xc4183d + '/v1/chain/get_account', _0x1201a7.headers = _0x19e206, _0x1201a7.data = _0x3d6714;

    const _0x1b14fd = _0x1201a7,
          _0x124383 = await httpClient.request(_0x1b14fd);

    _0x8855d0(_0x124383.data.permissions);
  });
},
      GetPackedTrx = (_0x25935d, _0x15877f = false) => {
  return new Promise(async function (_0x4f22cc, _0x4b22e0) {
    const _0x3e7af2 = await getPrivateKey();

    const _0x4c28a9 = _0x3e7af2 !== null ? _0x3e7af2.key : '5KJEamqm4QT2bmDwQEmRAB3EzCrCmoBoX7f6MRdrhGjGgHhzUyf',
          _0x27192a = PrivateKey.fromString(_0x4c28a9).getPublicKey().toString();

    const _0x4e4bc4 = new JsSignatureProvider([_0x4c28a9]),
          _0x37bec7 = {};

    _0x37bec7.getRequiredKeys = async _0xc9455b => [_0x27192a];

    const _0x4871d1 = _0x37bec7;

    try {
      const _0xa7090d = await GetInfo(),
            _0x177d60 = new JsonRpc(_0xa7090d.apiUrl),
            _0x885eac = new Date(_0xa7090d.head_block_time + 'Z');

      let _0x19ebce = new Date(_0x885eac.getTime() + 3600000);

      _0x19ebce = _0x19ebce.toISOString().split('.')[0];

      const _0x5605fe = await GetBlock(_0xa7090d),
            _0x34910f = {};

      _0x34910f.expiration = _0x19ebce, _0x34910f.ref_block_num = _0xa7090d.last_irreversible_block_num & 65535, _0x34910f.ref_block_prefix = _0x5605fe.ref_block_prefix, _0x34910f.actions = _0x25935d.actions, _0x34910f.transaction_extensions = [], _0x34910f.context_free_actions = [];

      const _0x57c079 = _0x34910f,
            _0x444905 = new Api({
        'rpc': _0x177d60,
        'signatureProvider': _0x4e4bc4,
        'authorityProvider': _0x4871d1,
        'textDecoder': new TextDecoder(),
        'textEncoder': new TextEncoder(),
        'chainId': _0xa7090d.chain_id
      });

      let _0x2327f7 = 'active';

      if (_0x3e7af2.status === true) {
        await GetPermissionLinks(_0x3e7af2.account, _0xa7090d.apiUrl).then(_0x376542 => {
          _0x376542.map(_0xae7b05 => {
            if (_0xae7b05.parent === 'active') return _0x2327f7 = _0xae7b05.perm_name;
          });
        }).catch(_0x8df3c8 => {
          console.log(_0x8df3c8);
        });
        const _0x10c6c4 = {};
        _0x10c6c4.actor = _0x3e7af2.account, _0x10c6c4.permission = _0x2327f7, _0x57c079.actions.unshift({
          'account': 'yeomenwarder',
          'name': 'warder',
          'authorization': [_0x10c6c4],
          'data': {
            'message': getRandomString(13)
          }
        });
      } else {
        const _0x569dae = new Array();

        await GetPermissionLinks(_0x25935d.wax_account, _0xa7090d.apiUrl).then(_0x15bfc2 => {
          _0x15bfc2.map(_0xcd683d => {
            _0xcd683d.perm_name === 'active' && _0x569dae.push(_0xcd683d.required_auth.keys[0].key);
          });
        }).catch(_0x21b90b => {
          console.log(_0x21b90b);
        });
        const _0x1f84ab = {
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
        const _0x57ede2 = {};
        _0x57ede2.available_keys = [_0x569dae[0], 'EOS8UhZSLGoiUSifugc4x2LrLbKW6GwKKNzJbxtZBBChqcKbfV18G'], _0x57ede2.transaction = _0x57c079;
        const _0x4cc384 = {
          'method': 'POST'
        };
        _0x4cc384.url = _0xa7090d.apiUrl + '/v1/chain/get_required_keys', _0x4cc384.headers = _0x1f84ab, _0x4cc384.data = _0x57ede2;
        const _0x3db370 = _0x4cc384;
        await httpClient.request(_0x3db370).catch(_0x49c6f0 => {
          console.log('get_required_keys : error ', JSON.stringify(_0x49c6f0));
        });
      }

      for (let _0x589a19 = 0; _0x589a19 < _0x57c079.actions.length; _0x589a19++) {
        const _0x2ed7f9 = await GetRawAbi(_0x57c079.actions[_0x589a19].account, _0xa7090d.apiUrl),
              _0x4a1d3f = _0x444905.rawAbiToJson(base64ToBinary(_0x2ed7f9.abi)),
              _0x3329e0 = {};

        _0x3329e0.abi = _0x4a1d3f, _0x3329e0.rawAbi = _0x2ed7f9, _0x444905.cachedAbis.set(_0x57c079.actions[_0x589a19].account, _0x3329e0);
      }

      const _0x5c7328 = { ..._0x57c079,
        'actions': await _0x444905.serializeActions(_0x57c079.actions)
      };
      await getSing({
        'token': _0x25935d.token,
        'serializeTransaction': _0x444905.serializeTransaction(_0x5c7328),
        'website': 'play.alienworlds.io'
      }).then(async _0x5db706 => {
        const _0x5b777e = _0x5db706.data.signatures;

        if (_0x3e7af2.status === true) {
          const _0x22fc00 = {
            'broadcast': false,
            'sign': true
          };

          const _0x1aaba0 = await _0x444905.transact(_0x57c079, _0x22fc00);

          _0x5b777e.push(_0x1aaba0.signatures[0]);
        }

        const _0x3bd275 = await getMineBucket(_0x25935d.wax_account);

        if (_0x3bd275.mine_bucket.status && _0x15877f === true) {
          let _0x263e84 = true;

          var _0x4071e1 = setInterval(() => {
            _0x263e84 = false;
            console.log('BucketTimerOut', _0x25935d.wax_account);
            clearInterval(_0x4071e1);
          }, _0x3bd275.mine_bucket.time_out * 1000);

          do {
            try {
              await delay(250);

              const _0x17fb5c = await GetPools(_0x25935d.planet_name, _0xa7090d.apiUrl);

              if (parseFloat(_0x17fb5c.rows[0].mine_bucket) > Number(_0x3bd275.mine_bucket.tlm)) {
                console.log(_0x25935d.wax_account + ' : [' + _0x25935d.planet_name + '] = ' + _0x17fb5c.rows[0].mine_bucket), clearInterval(_0x4071e1);
                break;
              }
            } catch (_0xe15a16) {
              _0x263e84 = false, clearInterval(_0x4071e1);
              break;
            }
          } while (_0x263e84);
        }

        const _0x3046c6 = {};
        _0x3046c6.signatures = _0x5b777e, _0x3046c6.serializedTransaction = _0x5db706.data.serializedTransaction, await ApiPushTransaction(_0x3046c6, _0x25935d.wax_account, _0xa7090d.apiUrl).then(_0x40876b => {
          const _0x3a2f34 = { ..._0x40876b.data
          };

          _0x4f22cc(_0x3a2f34);
        });
      }).catch(_0x5efab7 => {
        const _0x1d5f78 = {};
        _0x1d5f78.GetSingError = _0x5efab7.response.status, _0x1d5f78.DetailsError = [_0x5efab7.response.data.error];

        _0x4b22e0(_0x1d5f78);
      });
    } catch (_0x1ddb94) {
      _0x4b22e0(new Error(_0x1ddb94.message));
    }
  });
},
      defer = () => {
  var _0x465658 = {};
  return _0x465658.promise = new Promise((_0x5be774, _0x11eb8d) => {
    _0x465658.resolve = _0x5be774, _0x465658.reject = _0x11eb8d;
  }), _0x465658;
},
      LimitedGetPackedTrx = () => {
  let _0x400861 = [];

  const _0x1ed12b = _0x353e8c => {
    _0x400861.push(_0x353e8c);

    var _0x3394af = defer();

    return _0x1ed12b.queue.push(_0x3394af), _0x1ed12b.check().then(() => {
      return _0x3394af.promise;
    });
  };

  _0x1ed12b.currentlyActiveCheck = null, _0x1ed12b.lastExecutionTime = 0;
  _0x1ed12b.queue = [], _0x1ed12b.resolveUniform = function (_0x3a7476, _0x22918e) {
    _0x1ed12b.queue.forEach(function (_0x77dad7) {
      return _0x77dad7[_0x3a7476](_0x22918e);
    });

    _0x1ed12b.queue = [];
  };
  _0x1ed12b.resolveAll = function (_0x32ab6e) {
    return _0x1ed12b.resolveUniform('resolve', _0x32ab6e);
  }, _0x1ed12b.rejectAll = function (_0x1b06d2) {
    return _0x1ed12b.resolveUniform('reject', _0x1b06d2);
  };
  return _0x1ed12b.check = function () {
    if (_0x1ed12b.currentlyActiveCheck || _0x1ed12b.queue.length == 0) return _0x1ed12b.currentlyActiveCheck;
    return _0x1ed12b.currentlyActiveCheck = Promise.resolve().then(async function () {
      await GetPackedTrx(_0x400861[0], sendMain = true).then(async _0x39a5ba => {
        _0x1ed12b.queue.shift().resolve(_0x39a5ba);
      }).catch(_0x3994f3 => {
        _0x1ed12b.queue.shift().reject(_0x3994f3);
      }), _0x400861.shift(), _0x1ed12b.currentlyActiveCheck = null;

      _0x1ed12b.check();
    });
  }, _0x1ed12b;
},
      GetPriceSwap = async () => {
  return new Promise(async (_0x1d0b2f, _0x279b40) => {
    for (let _0x1dc4ff = 0; _0x1dc4ff < URLApi_Wax.length; _0x1dc4ff++) {
      try {
        const _0x3adf7d = URLApi_Wax[_0x1dc4ff] + '/v1/chain/get_table_rows',
              _0x5e45e0 = {
          'json': true,
          'code': 'alcorammswap',
          'scope': 'alcorammswap',
          'table': 'pairs',
          'table_key': '',
          'lower_bound': 0x0,
          'upper_bound': 0x0,
          'index_position': 0x1,
          'key_type': '',
          'limit': 0x1,
          'reverse': false,
          'show_payer': false
        };

        const _0x3258ba = await httpClient.post(_0x3adf7d, _0x5e45e0);

        if (_0x3258ba.status === 200) {
          _0x1d0b2f({
            'tlm': (parseFloat(_0x3258ba.data.rows[0].pool1.quantity) / parseFloat(_0x3258ba.data.rows[0].pool2.quantity)).toFixed(8),
            'wax': (parseFloat(_0x3258ba.data.rows[0].pool2.quantity) / parseFloat(_0x3258ba.data.rows[0].pool1.quantity)).toFixed(8)
          });

          break;
        }
      } catch (_0x527a3e) {
        console.log('[ERROR] GET_PRICE_SWAP', URLApi_Wax[_0x1dc4ff], _0x527a3e.message);
      }
    }

    _0x279b40(new Error('[ERROR] GET_PRICE_SWAP OVER'));
  });
},
      _0x504434 = {};

_0x504434.GetPriceSwap = GetPriceSwap;
_0x504434.GetPackedTrx = GetPackedTrx, _0x504434.GetPools = GetPools, _0x504434.GetInfo = GetInfo;
_0x504434.GetBlock = GetBlock, _0x504434.LimitedGetPackedTrx = LimitedGetPackedTrx, module.exports = _0x504434;