const Database = require('@replit/database'),
      CryptoJS = require('crypto-js');

const db = new Database(),
      axios = require('axios');

const URLApi_Nonce = require('../../sv-nonce.json'),
      jwtSecret = 'dgKmm$&hFj@s1S5G*3&n!%HV&DO42u@9pmar1zirO&%NkpsEX6',
      URLApi_Wax = ['https://aw-guard.yeomen.ai', 'http://wax.pink.gg', 'http://api.waxsweden.org'],
      URLApi_Atomic = ['https://wax.api.atomicassets.io', 'https://wax-aa.eu.eosamsterdam.net', 'https://api.wax-aa.bountyblok.io', 'https://aa.wax.blacklusion.io', 'https://wax.blokcrafters.io', 'https://api.atomic.greeneosio.com', 'https://aa.wax.blacklusion.io'],
      Encrypt = _0x124dcb => {
  const _0x27fd32 = CryptoJS.enc.Utf8.parse(new Buffer.from('KaeNQqnmGQKcbxxWDpwNuHZgHCWnfECgRRFfhgAvvdzPEykbTC').toString('base64'));

  const _0x3732dc = CryptoJS.enc.Base64.parse('YWxpZW4tc2NyaXB0');

  var _0x1affb1 = CryptoJS.enc.Utf8.parse(_0x124dcb);

  var _0x3d1bbb = CryptoJS.TripleDES.encrypt(_0x1affb1, _0x27fd32, {
    'mode': CryptoJS.mode.CBC,
    'iv': _0x3732dc
  });

  return _0x3d1bbb.toString();
},
      Decrypt = _0x1182e4 => {
  const _0x4b0305 = CryptoJS.enc.Utf8.parse(new Buffer.from('KaeNQqnmGQKcbxxWDpwNuHZgHCWnfECgRRFfhgAvvdzPEykbTC').toString('base64')),
        _0x559718 = CryptoJS.enc.Base64.parse('YWxpZW4tc2NyaXB0');

  var _0x196e65 = CryptoJS.TripleDES.decrypt(_0x1182e4, _0x4b0305, {
    'mode': CryptoJS.mode.CBC,
    'iv': _0x559718
  }),
      _0x1b71ba = _0x196e65.toString(CryptoJS.enc.Utf8);

  return _0x1b71ba;
},
      setLoginAW = _0x3084b4 => {
  return new Promise(async (_0x105a34, _0x50b22f) => {
    const _0x45847b = {};
    _0x45847b.email = _0x3084b4.email;
    _0x45847b.password = _0x3084b4.password, await db.set('login', _0x45847b).then(_0x438e25 => {
      const _0x39118d = {
        'status': true
      };

      _0x105a34(_0x39118d);
    }).catch(_0x22942b => {
      console.log(_0x22942b);
    });
  });
},
      setAuthorized = _0x1bad36 => {
  return new Promise(async (_0x5c38b4, _0x27cd71) => {
    await db.get('login').then(async _0x4e124e => {
      const _0x564651 = {};
      _0x564651.email = _0x4e124e.email, _0x564651.password = _0x4e124e.password, _0x564651.authorized = _0x1bad36;
      await db.set('login', _0x564651).then(_0x4b0b0e => {
        const _0x2bda35 = {
          'status': true
        };

        _0x5c38b4(_0x2bda35);
      }).catch(_0x5da49a => {
        console.log(_0x5da49a);
      });
    }).catch(_0x5e9b56 => {
      _0x27cd71(new Error('NO Authorized'));
    });
  });
},
      setAutoSwap = (_0xf87b3a, _0x8ea744, _0x56bdee) => {
  return new Promise(async (_0x56c2f4, _0x5db949) => {
    const _0x25aa7a = {};
    _0x25aa7a.status = _0xf87b3a, _0x25aa7a.amount = _0x8ea744;
    _0x25aa7a.rate = _0x56bdee;
    await db.set('autoSwap', _0x25aa7a).then(() => {
      const _0x366e54 = {
        'status': true
      };

      _0x56c2f4(_0x366e54);
    });
  });
},
      setAutoTransfer = (_0x52714e, _0x2c30dd, _0x30c5a5, _0x23326f, _0x1e555f) => {
  return new Promise(async (_0x2acf14, _0x5bf6e0) => {
    const _0x58d43b = {};
    _0x58d43b.status = _0x52714e;
    _0x58d43b.type = _0x2c30dd;
    _0x58d43b.account = _0x30c5a5, _0x58d43b.memo = _0x23326f;
    _0x58d43b.amount = _0x1e555f, await db.set('autoTransfer', _0x58d43b).then(() => {
      const _0x2ca595 = {
        'status': true
      };

      _0x2acf14(_0x2ca595);
    });
  });
},
      setPrivateKey = (_0x385cce, _0x3f7b7d, _0x1448d7) => {
  return new Promise(async (_0xf14f96, _0x41935d) => {
    await db.set('private_key', {
      'status': _0x385cce,
      'account': _0x3f7b7d,
      'key': Encrypt(_0x1448d7)
    }).then(() => {
      const _0x5c8380 = {
        'status': true
      };

      _0xf14f96(_0x5c8380);
    });
  });
},
      getPrivateKey = () => {
  return new Promise(async (_0x1e8628, _0x76cb52) => {
    await db.get('private_key').then(_0x106036 => {
      _0x1e8628({
        'status': _0x106036.status,
        'account': _0x106036.account,
        'key': Decrypt(_0x106036.key)
      });
    }).catch(_0x4aa8c8 => {
      const _0x4a51cb = {
        'status': false,
        'account': 'xxxxxx',
        'key': '5KJEamqm4QT2bmDwQEmRAB3EzCrCmoBoX7f6MRdrhGjGgHhzUyf'
      };

      _0x1e8628(_0x4a51cb);
    });
  });
},
      getLogin = () => {
  return new Promise(async (_0x2da79a, _0x2a7e73) => {
    await db.get('login').then(_0x295b57 => {
      _0x2da79a(_0x295b57);
    }).catch(_0xe308eb => {
      _0x2a7e73(new Error('NO ACCOUNT'));
    });
  });
},
      setDatabase = _0x2b6d9a => {
  return new Promise(async (_0x150b08, _0x3a5b30) => {
    const _0x38a98e = {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
      '10': true,
      '11': true,
      '12': true,
      '13': true,
      '14': true,
      '15': true,
      '16': true,
      '17': true,
      '18': true,
      '19': true,
      '20': true,
      '21': true,
      '22': true,
      '23': true
    };
    const _0x42839c = {
      'status': false,
      'time': 0x1e
    };
    await db.set(_0x2b6d9a.account, {
      'account': _0x2b6d9a.account,
      'worker': false,
      'token': Encrypt(_0x2b6d9a.token),
      'authorization': Encrypt(JSON.stringify({
        'username': _0x2b6d9a.email,
        'password': _0x2b6d9a.password,
        '2fa': _0x2b6d9a.secret
      })),
      'timeWorker': _0x38a98e,
      'mine_bucket': {
        'status': false,
        'tlm': Number(0).toFixed(4),
        'time_out': 0x78
      },
      'mine_delay': _0x42839c
    }).then(_0x361ce0 => {
      _0x150b08(_0x361ce0);
    });
  });
},
      setWorkingScript = _0x2c7081 => {
  return new Promise(async (_0x322497, _0x107b5f) => {
    await db.get(_0x2c7081.account).then(async _0x345dc4 => {
      await db.set(_0x2c7081.account, {
        'account': _0x345dc4.account,
        'worker': _0x345dc4.worker,
        'token': _0x345dc4.token,
        'authorization': _0x345dc4.authorization,
        'timeWorker': _0x2c7081.actions,
        'mine_bucket': _0x345dc4.mine_bucket,
        'mine_delay': _0x345dc4.mine_delay
      }).then(async () => {
        const _0x4be36c = {
          'status': true
        };

        _0x322497(_0x4be36c);
      });
    });
  });
},
      getWorkingScript = _0x2e014e => {
  return new Promise(async (_0x33db29, _0x31d3aa) => {
    await db.get(_0x2e014e).then(_0x5d0df9 => {
      _0x33db29(_0x5d0df9.timeWorker);
    });
  });
},
      getAuthorization = _0x9f77a3 => {
  return new Promise(async (_0xba413, _0x2dee83) => {
    await db.get(_0x9f77a3).then(_0x3f5fc1 => {
      _0xba413(JSON.parse(Decrypt(_0x3f5fc1.authorization)));
    });
  });
},
      getDatabase = _0x41264d => {
  return new Promise(async (_0x39b073, _0x4ae552) => {
    await db.get(_0x41264d).then(_0x4e895f => {
      _0x39b073(_0x4e895f);
    });
  });
},
      getWorker = _0xa9782d => {
  return new Promise(async (_0xd766a3, _0x47001b) => {
    await db.get(_0xa9782d).then(_0xba097e => {
      _0xd766a3({
        'worker': _0xba097e.worker,
        'token': Decrypt(_0xba097e.token)
      });
    });
  });
},
      getMineBucket = _0xf12c36 => {
  return new Promise(async (_0x359f2b, _0x2f4b20) => {
    await db.get(_0xf12c36).then(_0x2e0deb => {
      const _0x1fdc49 = {};
      _0x1fdc49.mine_bucket = _0x2e0deb.mine_bucket, _0x359f2b(_0x1fdc49);
    }).catch(_0x3ca0f4 => {
      _0x359f2b({
        'mine_bucket': {
          'status': false,
          'tlm': Number(0).toFixed(4),
          'time_out': 0x78
        }
      });
    });
  });
},
      getMineDelay = _0x35f4d5 => {
  return new Promise(async (_0x3438c2, _0x4ee4a0) => {
    await db.get(_0x35f4d5).then(_0x3d1258 => {
      if (_0x3d1258.mine_delay === undefined) {
        const _0x24f448 = {
          'status': false,
          'time': 0x1e
        };
        const _0x27e592 = {};
        _0x27e592.mine_delay = _0x24f448, _0x3438c2(_0x27e592);
      } else {
        const _0xdeaa71 = {};
        _0xdeaa71.mine_delay = _0x3d1258.mine_delay, _0x3438c2(_0xdeaa71);
      }
    }).catch(_0x5690a4 => {
      const _0x61b25d = {
        'status': false,
        'time': 0x1e
      };
      const _0x13bfe0 = {};
      _0x13bfe0.mine_delay = _0x61b25d;

      _0x3438c2(_0x13bfe0);
    });
  });
},
      delDatabase = _0x37cd63 => {
  return new Promise(async (_0x386508, _0x32ff05) => {
    await db.delete(_0x37cd63).then(() => {
      const _0x4ce0e2 = {
        'status': true
      };

      _0x386508(_0x4ce0e2);
    });
  });
},
      listDatabase = () => {
  return new Promise(async (_0x5209dd, _0x516890) => {
    await db.list().then(_0x5b9383 => {
      _0x5209dd(_0x5b9383);
    });
  });
},
      editRunScript = _0x36dc11 => {
  return new Promise(async (_0x233f22, _0x42c879) => {
    await db.get(_0x36dc11).then(async _0x945a48 => {
      const _0x19ed20 = {};
      _0x19ed20.account = _0x945a48.account, _0x19ed20.worker = !_0x945a48.worker, _0x19ed20.token = _0x945a48.token, _0x19ed20.authorization = _0x945a48.authorization;
      _0x19ed20.timeWorker = _0x945a48.timeWorker;
      _0x19ed20.mine_bucket = _0x945a48.mine_bucket, _0x19ed20.mine_delay = _0x945a48.mine_delay;
      await db.set(_0x36dc11, _0x19ed20).then(async () => {
        const _0x1c0156 = {};
        _0x1c0156.status = !_0x945a48.worker;

        _0x233f22(_0x1c0156);
      });
    });
  });
},
      editRunScriptAll = (_0x20034f, _0x2d147a) => {
  return new Promise(async (_0x2f9403, _0x5356ca) => {
    await db.get(_0x20034f).then(async _0x8632dc => {
      const _0x463b5d = {};
      _0x463b5d.account = _0x8632dc.account;
      _0x463b5d.worker = _0x2d147a, _0x463b5d.token = _0x8632dc.token, _0x463b5d.authorization = _0x8632dc.authorization;
      _0x463b5d.timeWorker = _0x8632dc.timeWorker, _0x463b5d.mine_bucket = _0x8632dc.mine_bucket;
      _0x463b5d.mine_delay = _0x8632dc.mine_delay, await db.set(_0x20034f, _0x463b5d).then(() => {
        const _0x542de9 = {
          'status': true
        };

        _0x2f9403(_0x542de9);
      });
    });
  });
},
      editMineBucket = (_0x43569f, _0x26b1a4) => {
  return new Promise(async (_0x3105ec, _0x2fa9c5) => {
    await db.get(_0x43569f).then(async _0xcbe174 => {
      const _0x7c481f = {};
      _0x7c481f.account = _0xcbe174.account, _0x7c481f.worker = _0xcbe174.worker, _0x7c481f.token = _0xcbe174.token;
      _0x7c481f.authorization = _0xcbe174.authorization;
      _0x7c481f.timeWorker = _0xcbe174.timeWorker, _0x7c481f.mine_bucket = _0x26b1a4, _0x7c481f.mine_delay = _0xcbe174.mine_delay, await db.set(_0x43569f, _0x7c481f).then(() => {
        const _0x2a95a0 = {
          'status': true
        };

        _0x3105ec(_0x2a95a0);
      });
    });
  });
},
      editMineDelay = (_0x448a08, _0x532204) => {
  return new Promise(async (_0x56c53d, _0x22df4c) => {
    await db.get(_0x448a08).then(async _0x563ada => {
      const _0x30b745 = {};
      _0x30b745.account = _0x563ada.account, _0x30b745.worker = _0x563ada.worker, _0x30b745.token = _0x563ada.token, _0x30b745.authorization = _0x563ada.authorization, _0x30b745.timeWorker = _0x563ada.timeWorker;
      _0x30b745.mine_bucket = _0x563ada.mine_bucket;
      _0x30b745.mine_delay = _0x532204;
      await db.set(_0x448a08, _0x30b745).then(() => {
        const _0x13f47f = {
          'status': true
        };

        _0x56c53d(_0x13f47f);
      });
    });
  });
},
      getToken = _0x3ebc80 => {
  return new Promise(async (_0xc3ea1d, _0x37932b) => {
    await db.get(_0x3ebc80).then(_0x4a6ec2 => {
      _0xc3ea1d({
        'token': Decrypt(_0x4a6ec2.token)
      });
    });
  });
},
      editToken = (_0x211cf4, _0x41fc61) => {
  return new Promise(async (_0x564ece, _0x1e2dbf) => {
    await db.get(_0x211cf4).then(async _0x18a1c3 => {
      await db.set(_0x211cf4, {
        'account': _0x18a1c3.account,
        'worker': _0x18a1c3.worker,
        'token': Encrypt(_0x41fc61),
        'authorization': _0x18a1c3.authorization,
        'timeWorker': _0x18a1c3.timeWorker,
        'mine_bucket': _0x18a1c3.mine_bucket
      }).then(() => {
        const _0x40a102 = {};
        _0x40a102.token = _0x41fc61, _0x564ece(_0x40a102);
      });
    });
  });
},
      verifyMember = _0x2d61c2 => {
  return new Promise(async (_0x47c904, _0x3fbdb9) => {
    await db.set('token', {
      'token': Encrypt(_0x2d61c2)
    }).then(_0x5bf568 => {
      const _0x30d8f6 = {
        'status': true
      };

      _0x47c904(_0x30d8f6);
    }).catch(_0x4da69e => {
      _0x3fbdb9(new Error('NO TOKEN'));
    });
  });
},
      getVerifyMember = () => {
  return new Promise(async (_0x41a81d, _0x1de6d8) => {
    await db.get('token').then(_0x4c5f72 => {
      _0x41a81d({
        'token': Decrypt(_0x4c5f72.token)
      });
    }).catch(_0x4041d8 => {
      _0x1de6d8(new Error('NO TOKEN'));
    });
  });
},
      getAddress = async () => {
  const _0x1ccf6d = {
    'Content-Type': 'application/json'
  };
  const _0x559e2c = {
    'method': 'GET',
    'url': 'https://jsonip.com/'
  };
  _0x559e2c.headers = _0x1ccf6d;
  var _0x396cd3 = _0x559e2c;
  return await axios.request(_0x396cd3).then(function (_0x352614) {
    return _0x352614.data.ip;
  }).catch(function (_0x55b632) {
    console.error(_0x55b632);
  });
},
      getMember = async _0x291a53 => {
  return new Promise(async (_0x32893e, _0x15e6b9) => {
    const _0x421839 = {
      'method': 'GET'
    };
    _0x421839.url = 'https://alien-script.com/v1/api/member/' + _0x291a53;
    const _0x74dd3f = _0x421839;
    axios.request(_0x74dd3f).then(function (_0x189645) {
      const _0x4b6528 = _0x189645.data.coin > 0 ? true : false;

      const _0x1d1394 = {};
      _0x1d1394.status = _0x4b6528, _0x1d1394.coin = _0x189645.data.coin, _0x1d1394.masterKey = _0x189645.data.master_key;
      _0x1d1394.created_at = _0x189645.data.created_at, _0x32893e(_0x1d1394);
    }).catch(function (_0x3f59e1) {
      console.error('error:' + err);

      _0x15e6b9(new Error('Error GET MEMBER'));
    });
  });
},
      useCoin = async (_0x293ef9, _0x5d9c89) => {
  const _0x4b3a9c = _0x5d90fc => {
    const _0x428e8c = 0.0001;

    const _0x16cff2 = 1,
          _0x465e11 = parseFloat(_0x5d90fc);

    return Math.min(Math.max(_0x465e11, _0x428e8c), _0x16cff2);
  };

  return new Promise(async (_0x35293f, _0x41c007) => {
    const _0x1bf319 = {
      'Content-Type': 'application/json'
    };
    var _0xdf4dae = {
      'method': 'PUT',
      'url': 'https://alien-script.com/v1/api/member/' + _0x5d9c89,
      'headers': _0x1bf319,
      'data': {
        'coin': _0x4b3a9c(Number(_0x293ef9 * 5 / 100).toFixed(4))
      }
    };
    axios.request(_0xdf4dae).then(function (_0x21873a) {
      const _0x5e96df = _0x21873a.data.coin > 0 ? true : false;

      !_0x5e96df && exec('busybox reboot', (_0x5d2842, _0x2d93b2, _0x13a17d) => {
        if (_0x5d2842) {
          console.log('error: ' + _0x5d2842.message);
          return;
        }

        if (_0x13a17d) {
          console.log('stderr: ' + _0x13a17d);
          return;
        }

        console.log('stdout: ' + _0x2d93b2);
      });
      const _0x535299 = {};
      _0x535299.status = _0x5e96df, _0x535299.coin = _0x21873a.data.coin;

      _0x35293f(_0x535299);
    }).catch(function (_0x2d0cc3) {
      console.error(_0x2d0cc3);
    });
  });
},
      orgLog = console.log,
      logs = [];

function nowAsString() {
  const _0x3095d3 = {
    'timeZoneName': 'short',
    'timeZone': 'Asia/Ho_Chi_Minh',
    'hour12': false
  };
  return new Date().toLocaleString('en-US', _0x3095d3).replace(/(\d?\d\/\d?\d\/\d{4})\,\s(\d{1,2}\:\d{1,2}\:\d{1,2})\sGMT\+\d/, '$2');
}

console.log = function (..._0x1e6a21) {
  _0x1e6a21.unshift('[' + nowAsString() + ']');

  orgLog(..._0x1e6a21);
  logs.unshift(_0x1e6a21.join(' '));
  if (logs.length > 10) logs.pop();
};

const _0x2a0ac5 = {};
_0x2a0ac5.logs = logs, _0x2a0ac5.jwtSecret = jwtSecret, _0x2a0ac5.listDatabase = listDatabase, _0x2a0ac5.setLoginAW = setLoginAW, _0x2a0ac5.setAutoSwap = setAutoSwap, _0x2a0ac5.setAutoTransfer = setAutoTransfer, _0x2a0ac5.setPrivateKey = setPrivateKey, _0x2a0ac5.setDatabase = setDatabase, _0x2a0ac5.setWorkingScript = setWorkingScript, _0x2a0ac5.setAuthorized = setAuthorized;
_0x2a0ac5.getAuthorization = getAuthorization, _0x2a0ac5.getToken = getToken, _0x2a0ac5.getLogin = getLogin, _0x2a0ac5.getDatabase = getDatabase, _0x2a0ac5.getWorker = getWorker, _0x2a0ac5.getMineDelay = getMineDelay, _0x2a0ac5.getMember = getMember, _0x2a0ac5.getAddress = getAddress, _0x2a0ac5.getVerifyMember = getVerifyMember, _0x2a0ac5.getWorkingScript = getWorkingScript, _0x2a0ac5.getPrivateKey = getPrivateKey, _0x2a0ac5.getMineBucket = getMineBucket, _0x2a0ac5.delDatabase = delDatabase, _0x2a0ac5.editMineDelay = editMineDelay, _0x2a0ac5.editRunScript = editRunScript, _0x2a0ac5.editToken = editToken, _0x2a0ac5.editRunScriptAll = editRunScriptAll, _0x2a0ac5.editMineBucket = editMineBucket, _0x2a0ac5.verifyMember = verifyMember, _0x2a0ac5.useCoin = useCoin, _0x2a0ac5.URLApi_Wax = URLApi_Wax, _0x2a0ac5.URLApi_Atomic = URLApi_Atomic, _0x2a0ac5.URLApi_Nonce = URLApi_Nonce, module.exports = _0x2a0ac5;