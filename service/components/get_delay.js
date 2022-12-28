const dayjs = require('dayjs');

const GetDelay = (_0x4a1c9a, _0x4ffa5d = 1) => {
  return new Promise(async (_0xd25675, _0x31c5c2) => {
    let _0x2c72eb = -1;

    const _0x2fcc3a = new Date().getTime(),
          _0x54c56d = Date.parse(dayjs(_0x4a1c9a).toISOString());

    _0x2c72eb = parseInt(_0x54c56d + _0x4ffa5d * 1000 - _0x2fcc3a);
    _0x2c72eb < 0 && (_0x2c72eb = 0), _0xd25675({
      'next_delay_mine': parseInt(_0x54c56d + _0x4ffa5d * 1000),
      'total_next_delay_mine': parseInt(_0x2c72eb)
    });
  });
};

const GetInfoDelay = _0x2dd79e => {
  return new Promise(async (_0xbbd50e, _0x5d32c1) => {
    const _0x511177 = {
      'delay': 0x0,
      'difficulty': 0x0,
      'ease': 0x0
    };
    const _0x1a313b = _0x511177;
    let _0x12de69 = 65535;

    for (let _0x169744 = 1; _0x169744 < _0x2dd79e.length; _0x169744++) {
      _0x2dd79e[_0x169744].data.data.delay < _0x12de69 && (_0x12de69 = _0x2dd79e[_0x169744].data.data.delay), _0x1a313b.delay += _0x2dd79e[_0x169744].data.data.delay, _0x1a313b.difficulty += _0x2dd79e[_0x169744].data.data.difficulty, _0x1a313b.ease += _0x2dd79e[_0x169744].data.data.ease / 10;
    }

    if (_0x2dd79e.length === 3) _0x1a313b.delay -= parseInt(_0x12de69 / 2);else _0x2dd79e.length === 4 && (_0x1a313b.delay -= _0x12de69);
    _0x1a313b.delay *= _0x2dd79e[0].data.data.delay / 10, _0x1a313b.difficulty += _0x2dd79e[0].data.data.difficulty;
  });
},
      _0x55eac3 = {};

_0x55eac3.GetDelay = GetDelay, _0x55eac3.GetInfoDelay = GetInfoDelay;
module.exports = _0x55eac3;