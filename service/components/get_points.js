const {
  URLApi_Wax
} = require('../config/setConfig');

const httpClient = require('./axiosClient'),
      GetPoints = _0x27a223 => {
  const _0xe21c19 = {
    '1': 'Novice',
    '2': 'Initiate',
    '3': 'Associate',
    '4': 'Peacekeeper',
    '5': 'Expert',
    '6': 'SkyRider',
    '7': 'Master',
    '8': 'Champion',
    '9': 'Grand Master',
    '10': 'Oshi Initiate'
  };
  const _0x2b4b0f = _0xe21c19,
        _0xade519 = {
    'id': 0x1,
    'level': 0x1,
    'template_id': 0x7dde5,
    'required': 0x0
  };
  const _0x20b1b2 = {
    'id': 0x2,
    'level': 0x2,
    'template_id': 0x7dde6,
    'required': 0x294
  };
  const _0x308384 = {
    'id': 0x3,
    'level': 0x3,
    'template_id': 0x7dde7,
    'required': 0xb18
  };
  const _0x46d237 = {
    'id': 0x4,
    'level': 0x4,
    'template_id': 0x7dde8,
    'required': 0x25b2
  };
  const _0x8dd7ec = {
    'id': 0x5,
    'level': 0x5,
    'template_id': 0x7dde9,
    'required': 0x6f0e
  };
  const _0x327130 = {
    'id': 0x6,
    'level': 0x6,
    'template_id': 0x7dfb2,
    'required': 0x132c2
  };
  const _0x2bec7e = {
    'id': 0x7,
    'level': 0x7,
    'template_id': 0x7dfb3,
    'required': 0x337ac
  };
  const _0x707e98 = {
    'id': 0x8,
    'level': 0x8,
    'template_id': 0x7dfb4,
    'required': 0x8855e
  };
  const _0x35a286 = {
    'id': 0x9,
    'level': 0x9,
    'template_id': 0x7dfb5,
    'required': 0x166b1a
  };
  const _0x17e58b = {
    'id': 0xa,
    'level': 0xa,
    'template_id': 0x7dfb6,
    'required': 0x3ad040
  };
  const _0x4e27a8 = {
    'id': 0xb,
    'level': 0xb,
    'template_id': 0x7dfb6,
    'required': 0x174876e7ff
  };
  const _0x50950b = [_0xade519, _0x20b1b2, _0x308384, _0x46d237, _0x8dd7ec, _0x327130, _0x2bec7e, _0x707e98, _0x35a286, _0x17e58b, _0x4e27a8];
  return new Promise(async (_0x8cd9f4, _0x50af55) => {
    for (let _0x7e4250 = 0; _0x7e4250 < URLApi_Wax.length; _0x7e4250++) {
      try {
        const _0x66bb4f = {
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
        const _0x34fee8 = {
          'json': true,
          'code': 'uspts.worlds',
          'scope': 'uspts.worlds',
          'table': 'userpoints',
          'index_position': 0x1,
          'key_type': '',
          'limit': 0xa,
          'reverse': false,
          'show_payer': false
        };
        _0x34fee8.lower_bound = _0x27a223, _0x34fee8.upper_bound = _0x27a223;
        const _0x548d98 = {
          'method': 'POST'
        };
        _0x548d98.url = URLApi_Wax[_0x7e4250] + '/v1/chain/get_table_rows', _0x548d98.headers = _0x66bb4f, _0x548d98.data = _0x34fee8;

        const _0x2bbcd0 = _0x548d98,
              _0x5f4eeb = await httpClient.request(_0x2bbcd0);

        if (_0x5f4eeb.status === 200) {
          if (_0x5f4eeb.data.rows.length > 0) {
            const _0x566744 = _0x5f4eeb.data.rows[0].total_points,
                  _0x12fa4b = Number(_0x5f4eeb.data.rows[0].top_level_claimed),
                  _0x350e15 = _0x50950b[_0x12fa4b];

            if (_0x566744 >= _0x350e15.required) {
              const _0x4b83f1 = {
                'status': true
              };
              _0x4b83f1.level_claimed = _0x12fa4b + 1, _0x4b83f1.next_level_points = _0x350e15.required, _0x4b83f1.points = _0x566744, _0x4b83f1.class = _0x12fa4b, _0x8cd9f4(_0x4b83f1);
            } else {
              const _0x46c36d = {
                'status': false
              };
              _0x46c36d.level_claimed = _0x12fa4b + 1, _0x46c36d.next_level_points = _0x350e15.required, _0x46c36d.points = _0x566744, _0x46c36d.class = _0x12fa4b, _0x8cd9f4(_0x46c36d);
            }

            break;
          } else {
            const _0x4bd66a = {
              'status': false,
              'level_claimed': 0x0,
              'next_level_points': 0x0,
              'points': 0x0,
              'class': 0x1
            };

            _0x8cd9f4(_0x4bd66a);

            break;
          }
        }
      } catch (_0x5981a6) {
        console.log('[Error] - GetPoints', _0x27a223, URLApi_Wax[_0x7e4250]);
      }
    }

    _0x50af55(new Error('[ERROR] GetPoints OVER'));
  });
},
      _0x3e33d4 = {};

_0x3e33d4.GetPoints = GetPoints;
module.exports = _0x3e33d4;