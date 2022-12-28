const axios = require('axios'),
      {
  TextDecoder,
  TextEncoder
} = require('util'),
      crypto = require('crypto-browserify/index.js');

const {
  Serialize
} = require('eosjs');

const {
  URLApi_Nonce
} = require('../config/setConfig'),
      fromHexString = _0x2b4934 => new Uint8Array(_0x2b4934.match(/.{1,2}/g).map(_0x245395 => parseInt(_0x245395, 16)));

function getRandom(_0x4be182, _0x1fbc9c) {
  return Math.floor(Math.random() * (_0x1fbc9c - _0x4be182) + _0x4be182);
}

const nameToArray = _0x3982b9 => {
  const _0x314b72 = new Serialize.SerialBuffer({
    'textEncoder': new TextEncoder(),
    'textDecoder': new TextDecoder()
  });

  return _0x314b72.pushName(_0x3982b9), _0x314b72.array;
},
      getRand = () => {
  const _0x1e7b05 = new Uint8Array(8);

  for (let _0x5a1634 = 0; _0x5a1634 < 8; _0x5a1634++) {
    const _0xe0f831 = Math.floor(Math.random() * 255);

    _0x1e7b05[_0x5a1634] = _0xe0f831;
  }

  return _0x1e7b05;
},
      toHex = _0x51f6bd => {
  return [...new Uint8Array(_0x51f6bd)].map(_0x4820a4 => _0x4820a4.toString(16).padStart(2, '0')).join('');
},
      GetNonce = async (_0x505342, _0x4304fd, _0x2503ad) => {
  return new Promise(async (_0x13606f, _0xe281c6) => {
    try {
      const _0x48a806 = await axios.post(URLApi_Nonce[getRandom(0, URLApi_Nonce.length)] + '/mine', {
        'account': _0x505342,
        'last_mine_tx': _0x4304fd,
        'difficulty': String(_0x2503ad)
      });

      _0x13606f(_0x48a806.data);
    } catch (_0x14b537) {
      console.log('[ERROR] GET_NONCE_API', _0x14b537.message);
      const _0x504985 = {
        'status': false,
        'nonce': 'nonce over time or itr',
        'answer': 'Loop Get Nonce [Over]'
      };
      _0x504985.account = _0x505342, _0x13606f(_0x504985);
    }
  });
},
      GetNonceFirst = async (_0x4ceff9, _0x223d11, _0xe91669) => {
  return new Promise(async (_0x2532df, _0x58f3a1) => {
    try {
      const _0x2fcb83 = await axios.post('https://api-nonec-first.kittipobk.repl.co/mine', {
        'account': _0x4ceff9,
        'last_mine_tx': _0x223d11,
        'difficulty': String(_0xe91669)
      });

      _0x2532df(_0x2fcb83.data);
    } catch (_0x119914) {
      console.log('[ERROR] GET_NONCE_API', _0x119914.message);
      const _0x5b6396 = {
        'status': false,
        'nonce': 'nonce over time or itr',
        'answer': 'Loop Get Nonce [Over]'
      };
      _0x5b6396.account = _0x4ceff9, _0x2532df(_0x5b6396);
    }
  });
},
      GetNonceLoc = async (_0x3498ab, _0x53c4f3, _0x33334d) => {
  return new Promise(async (_0x48fecd, _0x282770) => {
    let _0x181ce3 = _0x3498ab;

    try {
      _0x53c4f3 = _0x53c4f3.substr(0, 16);

      let _0x2ab75c = fromHexString(_0x53c4f3);

      _0x3498ab = nameToArray(_0x3498ab), _0x3498ab = _0x3498ab.slice(0, 8);

      let _0x19137c = false,
          _0x47f0a2 = 0,
          _0x15bf8f,
          _0x42dec8,
          _0x28e9ca,
          _0x406917,
          _0x1dd748;

      const _0x21325a = new Date().getTime();

      console.log('[' + _0x181ce3 + '] : Performing work with difficulty ' + _0x33334d + ', last tx is ' + _0x53c4f3 + '...');

      while (!_0x19137c) {
        _0x28e9ca = getRand();

        const _0x271de7 = new Uint8Array(_0x3498ab.length + _0x2ab75c.length + _0x28e9ca.length);

        _0x271de7.set(_0x3498ab), _0x271de7.set(_0x2ab75c, _0x3498ab.length), _0x271de7.set(_0x28e9ca, _0x3498ab.length + _0x2ab75c.length), _0x15bf8f = crypto.createHash('sha256'), _0x15bf8f.update(_0x271de7.slice(0, 24)), _0x42dec8 = _0x15bf8f.digest('hex'), _0x19137c = _0x42dec8.substr(0, 4) === '0000';
        _0x19137c && (_0x406917 = parseInt(_0x42dec8.substr(4, 1), 16), _0x19137c &= _0x406917 <= _0x33334d);
        _0x47f0a2++, _0x1dd748 = new Date().getTime();
        _0x47f0a2 % 100000 === 0 && console.log('[' + _0x181ce3 + '] : Still mining - tried ' + _0x47f0a2 + ' iterations taking ' + (_0x1dd748 - _0x21325a) / 1000 + 's');
        if (_0x47f0a2 >= 1000000 || (_0x1dd748 - _0x21325a) / 1000 >= 60 / Number(_0x33334d || 1)) throw new Error('nonce over time ro itr');
        !_0x19137c && (_0x15bf8f = null);
      }

      const _0x590ab3 = toHex(_0x28e9ca);

      console.log('[' + _0x181ce3 + '] : Found hash in ' + _0x47f0a2 + ' iterations with ' + _0x181ce3 + ' ' + _0x590ab3 + ', last = ' + _0x406917 + ', hex_digest ' + _0x42dec8 + ' taking ' + (_0x1dd748 - _0x21325a) / 1000 + 's');
      const _0x3f6dd5 = {
        'status': true
      };
      _0x3f6dd5.account = _0x181ce3, _0x3f6dd5.nonce = _0x590ab3, _0x3f6dd5.answer = _0x42dec8, _0x48fecd(_0x3f6dd5);
    } catch (_0x2f54da) {
      const _0x10b1ec = {
        'status': false,
        'nonce': 'nonce over time or itr',
        'answer': ''
      };
      _0x10b1ec.account = _0x181ce3, _0x48fecd(_0x10b1ec);
    }
  });
},
      _0xbafff4 = {};

_0xbafff4.GetNonce = GetNonce, _0xbafff4.GetNonceFirst = GetNonceFirst, _0xbafff4.GetNonceLoc = GetNonceLoc, module.exports = _0xbafff4;