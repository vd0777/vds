(this["webpackJsonpmonitor-website-v2"] = this["webpackJsonpmonitor-website-v2"] || []).push([[0], {
  108: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return b;
    }), n.d(t, "a", function () {
      return f;
    }), n.d(t, "b", function () {
      return j;
    });

    var a = n(10),
        r = n(4),
        c = n.n(r),
        s = n(212),
        o = n(305),
        i = o.TextDecoder,
        l = o.TextEncoder,
        u = n(176),
        d = u.Api,
        m = u.JsonRpc,
        p = n(308).JsSignatureProvider,
        x = new m("https://wax.greymass.com", {
      fetch: n(72)
    }),
        h = new p(["5KJEamqm4QT2bmDwQEmRAB3EzCrCmoBoX7f6MRdrhGjGgHhzUyf"]),
        b = (new d({
      rpc: x,
      signatureProvider: h,
      textDecoder: new i(),
      textEncoder: new l()
    }), new s.WaxJS({
      rpcEndpoint: "https://wax.greymass.com",
      tryAutoLogin: false,
      freeBandwidth: false
    })),
        f = function () {
      var e = Object(a.a)(c.a.mark(function e(t) {
        var n, a;
        return c.a.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.prev = 0, e.next = 3, x.get_table_rows({
                json: true,
                code: "eosio.token",
                table: "accounts",
                scope: t,
                limit: 1
              });

            case 3:
              return n = e.sent, a = "0.0000 WAX", n.rows.length && (a = n.rows[0].balance), e.abrupt("return", {
                wax: a
              });

            case 9:
              e.prev = 9, e.t0 = e.catch(0), window.location.reload();

            case 12:
            case "end":
              return e.stop();
          }
        }, e, null, [[0, 9]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }(),
        j = function () {
      var e = Object(a.a)(c.a.mark(function e(t) {
        return c.a.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return console.log(JSON.stringify(t, null, 4)), e.abrupt("return", new Promise(function () {
                var e = Object(a.a)(c.a.mark(function e(n, r) {
                  return c.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, b.api.transact({
                          actions: t
                        }, {
                          blocksBehind: 3,
                          expireSeconds: 90
                        }).then(function () {
                          var e = Object(a.a)(c.a.mark(function e(t) {
                            return c.a.wrap(function (e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  console.log("PushTransaction ===> ", t), n(t);

                                case 2:
                                case "end":
                                  return e.stop();
                              }
                            }, e);
                          }));
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        }()).catch(function (e) {
                          console.log("Failed to push mine results ".concat(e.message)), r(e);
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                  }, e);
                }));
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              }()));

            case 2:
            case "end":
              return e.stop();
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
  },
  144: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/logo.5e5ee8a1.png";
  },
  196: function (e, t, n) {
    "use strict";

    n.r(t), t.default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEt2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMzAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDYtMTlUMDI6MDE6NDgrMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDYtMTlUMDI6MDE6NDgrMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gKE1hciAzMSAyMDIwKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMC0wNi0xOVQwMjowMTo0OCswMjowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+b+esCwAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/ZjCTH42QLCwmYTUjRk1slJmEkjRGGWxm3vxS8+P13kiyVbZTlNj4teAvYKuslSJSsrKwJjZMz3kzUyOZczv3fO733nO691ywBFNKWq8dgHQmpwUmfM6F0KLT9kI9rXTgwR5WdHVsdnaaqvZ5T40Zb91mrern/rXGaExXoMYuPKqoWk54Unh6LaeavCPcriTDUeEzYZcmFxS+M/VIiV9NTpT422QtGPCDpUXYmfjFkV+sJLW0sLycnnRqVSnfx3xJUywzPyexW7wLnQAT+HAyxTh+vAwyIrMXt/SnX1ZUyR8o5s+QlVxFZpV1NFZIkCSHS9RVqR6TGBc9JiPFutn/v33V40OeUvUmH9Q9G8Z7L9i2oZA3jK8jwygcg/UJLjOV/OwhDH+Inq9oPQfg2ITzq4oW2YWLLeh8VMNauChZxS3xOLydQnMI2m6gYanUs/I+Jw8Q3JCvuoa9feiT847lH1hwZ9/TwxVHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8klEQVRIie2Uz0tUcRTFzx0nLTBKCHQ14cIJ+rEpxMBFuugPSHAhEdQm2kQtQ4kpaqU5u4pw1cLViBG4SKEfCFFESNFQEbWQmrI2UeGMhtOnxbvDPN883QvvbO4753vv+d73ffd9pQQJEiTYajBJAlKSMDMAq+kx2jpuZv+AJknHJXVI+iZpznNSwbpMBfcbFGaioQtvYFNtg5wu4DMBHgG7JIlisbkhN3csXSu6ADwBOp33AHPALHAkZDwPXA5tdgv4ALwGDrg25Zsvsrp6UJJ+Tw7tWc5nxiv5zPPyaPudlYXJLqBXwBlPHvHiu9Qx4do15+edjzr/4rECdPja9VB93/IlnaWQpZLfu7gyltkvSaXSyx0CdgNrwCugBfgJfAWWgB+uvQPW3PiUm753PuT8DbDdtQGgCsDf8nB5RIPfc2oNjlr1TwXc8+IbHoeBKxHtNnDYn38B/UABeBZ6wxn3O8l6jMfOCHAikrgPOBTRLvoJABwFssAYkAPOAQ997aPHP/7mjwGoVovU5yhV27gVeEpwvPdDDT0APgEvgJIbno5OashjGlgAZoCs683ATeAtwfzsjCtuitHavAjgqmtpIOUxDWzboJnG3wnSUv0CMTMjkmB+EXRK6pa0ZGbzm+W7H4q5bGo8rsEECRIk2Br4D20NhhljafHuAAAAAElFTkSuQmCC";
  },
  197: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/anchorlogo.d7b6826b.svg";
  },
  198: function (e, t, n) {
    "use strict";

    n.r(t), t.default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABSCAYAAAC8CEFXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAxLTMwVDIyOjAxOjQwKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAxLTMwVDIyOjAxOjQwKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wMS0zMFQyMjowMTo0MCswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMjVjMDExOS00YmZkLTdmNGUtYThiYi0yYjU1NTgxN2QzM2EiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNDViOWQ1OS01OGRkLTZiNGQtYjNiYy0zMzQwYjUwZmNlYTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiY2RmZWE0Ni1hMDM4LWZiNDUtYTVjYi1iYjM4NTFhMzcxMGMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjZGZlYTQ2LWEwMzgtZmI0NS1hNWNiLWJiMzg1MWEzNzEwYyIgc3RFdnQ6d2hlbj0iMjAyMi0wMS0zMFQyMjowMTo0MCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMjVjMDExOS00YmZkLTdmNGUtYThiYi0yYjU1NTgxN2QzM2EiIHN0RXZ0OndoZW49IjIwMjItMDEtMzBUMjI6MDE6NDArMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BELFXAAAQPElEQVR4nO2deXQUxb6Av+5Zk8lkZ8uEJAQFATGIgRAguFwXFJJAEAXFiwIiVxQNQVC5xyv3KCIC4hXFDRWXdxWfKCg+F3YEibJDFhBClEgWNiFkssx01/sjTkgkmSVmEgbyndN/cFLV9aO/qeqq6qpuhBA0khDgRmAVIC6S4zUgrLEXxJtIQggkSQKgf8q0ehPpdVrmPH43WbmHGX9PSjDwKjDa8ffgkHBiYzvRtk0b2rVrgxBgR09Ux6hm+C+4j0aWKSop4XjJUQIDjPx++gxFhUX8cqSAY8VHqfWj/Rh4cPDomSev7duVbl2iad82lCO/lbBz3yGKS35Hq9U0S8yvL8gAQOtJpvH3pLwJTADQ6430vOoqAkPaM3TIYPr26U1Ux0gsEe1RFAUhBAaDoekjbwLKy8vRaDScPHmKw78cYevWbWzfnslvR37lh61bqayw3gnc+fV/n/3o6/9y9+erNqgtHbNbNWrLynn+wAYgXpJlkpIGEXt5D/4xcRzx1/RCluXmi9hLlJaWkp9fwJKlH7Jh3WpysvdSWWF1/Pm1rT/t/UdL1iiXV3jLynldgD1AfEynyxiedheLFr3Ka4vm07dP74tCEoDZbKZnz24snPcMKz5bxqQH04noGAvVP+JJ/fr0XNKS8Tm9yrUkde6bkMij6VP54L036Hlltwu2WWsKoqKiWDj/GV5b/Ap9EpLQ6nQA40YO+9vnLRVTg6JqSTIkJt3Iwpf+w7h7x+Dn59d80bUwyUMGs2D+84wYMYqw8DYAqbP/OfHTloiljihVFaiqYMvKeR2AzYChf9JNrFqxjMSEeMxmc0vE2KIMSExg9rOzuH3knQQFhQCkLfnP9PebO446ooLMRoLMRqgeG4X3iOvLF59/REhISHPHdcEgSRLR0VE8/NCDXHfDTej1BoAxry/IWNyccdTpngeaDHzy1lPvAldf1uUK5j43i9DQUI9PqtqqOHPWytmz5X/ci91HljUEBpsx+TfcxFZUVlJcdBytxrOOjBACP6OB4GAzGp3e7XwajYbu3a4gI+NRDh7KI2vPdkBMen1BxuRxU+Y2S9e9jqhP3nqqCzBWo9ExceIk+if2c/tEx4+fYMOWfWzNLaC01EqZtZyysoqarr87KIpC+7Ag0u8bTNcunRpMt/9wIdNmvU1gsGdNsRAqRoOeQLMJnUFPj84dSL32KjpYOrjMK0kSSQMSmZYxlenTp3Gs+CjAh1GW8NGu8jYFfx7wPgEQnzCQ+8ePJTg42OUJKsvLeX/5Or75IYedew9xqOAU6LTIsoQsSXgyQaXYFTp3DOeBOwY5TXfsVBmrv9uJpp1ntV0CVFF9H8ZmJzTUxFfrdjAo/gruGppIhKW9y3PcnpbMd999y2fLP6HcWjbq6RnjJr+xdMVJjwJpBLVFLQbu1Wi0zHxiqluSCgtLyJj7Eeu27KH4TBX+fnpCwwI9klMbm10hwM/gcmym1cgQ4EegydjIkqqHR3a7yhebslm/7Wd+3LGf9AnJJPbp4TSfwWBg0sSJ7NixndzsvQAvlZ613tPoQNzEIUoGJkmSRHy/JAYlJbnMWFh0jAeefpcv1u7CHGgi2Fx9T2n0FG8zIwRoNDKhQf7Y7CrLN+6j6Phpnn98jFNZOp2OPn2uJi6uN3kHf6aqqmJMxuTRk596bskZb8brEKUC3wshBj6W/jBBQUFOM536vZSJT73Nlxv2EhpqpvET8C2PENU1NCDARGbub/zrxY9ZMPPvXNnjsgbzaDQabr3tVn768QfyDh0AuHxgwpXbvRmnQ9QAYGDb9hZiYlzPeC9a8hlfrt9DaEiAT0uqjSyB0c/Ixt35vPnxamZPb4cpoP7Oik6nI2XoLbz79lsOUQ8XHzt1rzfjc4hKAujbtz8xMTENJhZCcCDvCIs/2URw8MUjyYFGltDodXz87U56x3Vl7IjrG0zr7+dHWHg7tFoddrtt7D13Dp48+bEXy7wVm0NUF4BrrokjLKzh52aqqvL9ll2csNoxGd0fh/gSRr2O4mNnWP9jLqOG9MNgrH88J8syiYn92bhhLcdKCgEie3SN3u+tuByiogF6XdXTaWJVhVeWbcLPoPNWPC2OEAK9v4EjBUUcPHSEHj261JtOp9PRs2c3wsPDHKJCr+jivQelDlEhAB07WhpMKITgyNFidh0sItjs77WALgT0ei0H84vZu7+gQVEAYaEhtTteAW3Cg70Wk0OUBNW9GWec+r30oq5NDrQamd9OlJJXdNppOqPRiF5fcz10fgbv3Q7qzEy4Wuii8XBuzVeRqB4Ml9sUp+lUVUWo4tw/vdi7ujSufGOQqqfALhQ8WtzyV1GF4PTZCqioAlHPpLNNodigxWazOz1PZZUdCk9wqqEEkgQGPSZ/Awad1mVL4Qs0myi7XcVms/HQiESuubobAQHnd0hUVWD2N9C5c7TTc/XqFs2Hy2ahb2CIUFFZyc7dB/hy3U4OFJ0hzOyPN5ul5qBZRNkVFa1Ww/xpaaTdnEBYuOfPuGrTLiyQu1IHOk2TPOgqBsV35d+LV7A77xhBJoNPD9C9LkoIQYCfnvEpCdw/6maQm2eZVVBwEKmDB2Atr2LK7A+oVARa+cK553iK1zsTqioIMvsxcdQNzSapBkkiKaEH1/a+jPLyquYtu4lpll6fRiMTEuJ8Rt5bmPwMREaEY1ecd7UvdJpFlBBgt7fghfLhe5ODS2IcdRF4ujREXQy0ivIRWkX5CB6NoxRFxXrGilXvwQy6onI6wNhi0zhCCKwVVXDa2vCUU32cLqO8wuatsDzGA1ESYaFBzBh/MxoP9gYJVRBk9vdoZWpTojPouTGxO4EmA0YPHkNYyyq4oc/lXozMM9wWJUlg6RDOkw+N9LgQSZbwN7XMLhCTvx9Db0pk8PXxSLg/M6EKgdF44Wwt8qjp02m16IJ8a0eHLMuYTH6Ab28Xau1M+AitonyEVlE+QqsoH6FVlI/QKspHcLt7LoTg57wC7v/XUvQ693v1iqrSNszMm7PubZHN2sespRw7W0r3thHNXnZT4tE46qy1nO+378fgwRSSoqh07BCK3cXKIm8hVMHyQ1msLvyFKXGJLRJDU+CRKFmSMBp0Hosy6LUe7eVtSrSyxEl7FW/lbCdYb+Dv3Xq3SBx/lUviHqWVNJxUbCzI3s572TtaOpxGcUmIAoesKhbkbOe9HK9uDvQKl4woqFuzlmb7lqxLShSAVpI5qdh5Mce3msFmEyW30OJHCc5b7O+QNT97m880g94XJVWPwcqsFV4vqj4UVWCtqjzvSZRWkjml2pmf5Rs1y+uiZEni7NlyVn61xdtF1cuWY0dZVpiPWXv+kKJGVvY23svxXJaqqnWWGMiy1GSHJEnoak0seH3tuSRJlFZU8cqnW4iNbsdNN/b3dpE17Dj6Ky/vzQRZbnCvk0PWvKxtSALu6e7+OCvAZMJurxnIzzx+8vTXfz3qavQ6HVm5+efibKoTO0NC4sjxMzw89xOu/2Ybw2+JJyjQjFDr7pESCPQ6HdGdLISHBjd4vtMVVnYV/opec374siRRabOxpriA/y3Mp8Juw6+edLVxyHohextCwu1BsdlsYtTdYyguKeFw3sGB/eJ7btqcudv1a2/cQNWoWMvP3S6abX+UBBSdLGP5pmy+3ZFX7/uO7HaF6A4hvPzkaKeickt/Z0zmatoaTfWWoyKw2u1YVTtaSXZrpYSuVs0SQjC2+zUu84SHhzM8dShCVXn5pYXk5R0cOCAhbuPmzN3O37rlJrVnc5p1x6EsS1QpghOnrfUuM7bZFcz+BlTF+SvwqlSVksoKNE52h0iShFby7Bask2ROKXbmZ29HkiSXNUuWZSItFkYMT0EVgkUvLeTw4UNJAxLimqxm1ZTVlCdzB0mqFqZp4HCnGy8Bmj/22DZ0NHYwoJNlflfsvJC1jffd6GDIsozFYmFkWipTHkknNvYygIEDEuI2NTKE+svxJPHFsBfWHbSyzGnFztysnzySNSIt5c+yNjZVTHVEOZvhliSJkOBA7MqlJEvh+X0/8X7OTpfpHbLShqcwJX0qnWI7AyQ1lSyHqDMAR48WO03cJiyYTmF+Pr9x2V20sswZVeH5fT96ULMiSEtNJj19WpPKcogqANiXne00sV6v5Y7B8ahqi3+qotk4J8uTZjCCYalDeXRqRpPJcojKBtiauc1pYp1Wy92330xpWeVfKdPncMia40EzGBlpYXhqMulT69SsDY2NwSFqE8DatWvIyclxmqFTVDuemXQLZRW+vXnZU7SyTKmqMGdfpluyJEnCEhHBsJShPJqeQUynzgCDGluzHKK2AJw5VUJWVq7TDHq9jvGjb2Vwryiq7JdOEwgOWSrP7cvkAzebwchIC8OHJZOenvGXapZDlB14QwjBm28vdZmpbZsQ/pVxF+39ZWwuBqcXG1pZ5qxQmb0vkw/crFmRFgvDhw0lPX1a7Zrlkaza3fM3Adat+YZdu3Y5zyTL9Op5OWv+ZxbXde9AWXmVT78VxVO0ksxZIXh271a3m8HIyEiGpQ4hY9pjtWWtd7fM2qJ2ANiqKpj+xNNku+gByrJMdFR73n9lBgseSaGtv4y1wobNrqCoF781rSRjBWbv3epWM1gjK2UIGdOmExMTC3Ctu7Jqz/WpVH+McdL6NV9x8OfxdO/e3eUJggNNPHBvMnffcRMbf9jNnqxD7NiXz4rMg+g9/GqZzaZQUWlz2f1XhaBcsVOhtMxawdqcEIJ/7tpMhaIwoUc8zj5GIkkSFouF1OTbAJj/wvPk5+ddOyAhbv3mzN3XOSunzqfz0u57muXvPP02cF9IWAfWrfmKuLhebgetqCqqoqKoKnZFeDzfJqieBzTqtU6/JqD8IepCerORXpbRufkKISEEBQW/sfLL/2Pe3Dnk5+cBbKgty6DXsWPPz0wcm3ouk4MR42ZBdS0TkiSLhP7Xi9zcXNFK06OqqigoKBCLXn1DxHSKdXxedu3mzN1sztzNtp3ZvLF0RY2b8362I8bN+qMHqLItcxNT0mdw4MABD39frbhCkiQiIiJISb6VaY/NICo6BuD6AQlx6+pLX2/7MmLcrAeAJYpiZ+13q3j4kens3++1V3pfsji67qnJtzF9xpNEx3QCuK4+WQ3eCG4f/+8JwBK73c6a1atIGzmGvXv3eDHsS5NzHYxb68iKv7p7HVlOn0fNWfjBBGCJYreTs2878X0SeXnRYnJznc9etOIZtWXNeHxmjayJY1NrZLl8cPjKW59OAF4XQlBVaSVj6iOkjRzDO++853JesBX3cchKHnILM2bMJKZTLMB1wDr4U/f8j15fTcb4nrGYA/wQQvDQ/bdrgNeB8UgSWo2Gth1iuGPkCG65+W9EdbS4Ne5qxTVHjx7l629WM3PmTIoKCwCS3BaVf6SEn7J+ZcOncxYDk2qn02i1hLeNpGvXK+jYMZLu3boSYDKh1vfK7FZcIwSBZjOffr6KVSuXATzR2HUQMqCn+nN7ovXw+jGwTo1qJDLVg+R+QA/AQvXXc4xcHC+fbAkE1e8E2gJ8D3wvNbJGtdLM/D8SnLoyOa9m7gAAAABJRU5ErkJggg==";
  },
  199: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/wax.65d18127.png";
  },
  200: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/tlm.927e0768.png";
  },
  208: function (e, t, n) {
    "use strict";

    (function (e) {
      n.d(t, "a", function () {
        return J;
      });

      var a = n(10),
          r = n(7),
          c = n(13),
          s = n(12),
          o = n(4),
          i = n.n(o),
          l = n(1),
          u = n(366),
          d = n(369),
          m = n(229),
          p = n(109),
          x = n(155),
          h = n(32),
          b = n(370),
          f = n(368),
          j = n(228),
          g = n(156),
          w = n(371),
          O = n(51),
          v = n(363),
          y = n(364),
          k = n(57),
          N = n(210),
          S = n(211),
          A = n.n(S),
          C = n(227),
          T = n(29),
          P = n(365),
          M = n(150),
          z = n(93),
          F = n(108),
          W = n(151),
          I = n.n(W),
          _ = n(0),
          L = n(312),
          E = n(142).PrivateKey,
          D = new (n(320))(),
          R = n(72),
          X = {
        position: "absolute",
        maxHeight: "95%",
        maxWidth: "95%",
        display: "block",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid #8DC53F"
      };

      function J() {
        var t = new N.a(),
            o = new k.h({
          transport: t,
          chains: [{
            chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
            nodeUrl: "https://wax.greymass.com"
          }]
        }),
            S = Object(l.useContext)(z.b),
            W = S.popMemberShipAW,
            J = S.setPopMemberShipAW,
            B = S.masterKey,
            H = Object(l.useState)(null),
            q = Object(s.a)(H, 2),
            Y = q[0],
            U = q[1],
            G = Object(l.useState)({
          tlm: 0,
          wax: 0
        }),
            K = Object(s.a)(G, 2),
            Z = K[0],
            Q = K[1],
            V = Object(l.useState)("10"),
            $ = Object(s.a)(V, 2),
            ee = $[0],
            te = $[1],
            ne = Object(l.useState)({
          status: false,
          amount: 50,
          price: 0,
          depositAmount: 0,
          dateTransfer: "2022-02-03T15:59"
        }),
            ae = Object(s.a)(ne, 2),
            re = ae[0],
            ce = ae[1],
            se = Object(l.useState)(0),
            oe = Object(s.a)(se, 2),
            ie = oe[0],
            le = oe[1],
            ue = Object(l.useState)(0),
            de = Object(s.a)(ue, 2),
            me = de[0],
            pe = de[1],
            xe = Object(l.useState)(false),
            he = Object(s.a)(xe, 2),
            be = he[0],
            fe = he[1],
            je = Object(l.useState)({
          cpu_limit: {
            used: 0,
            available: 0,
            max: 1
          },
          net_limit: {
            used: 0,
            available: 0,
            max: 1
          },
          ram_limit: {
            used: 0,
            available: 0,
            max: 1
          },
          total_resources: {
            owner: "alienscripts",
            net_weight: "0.00000000 WAX",
            cpu_weight: "0.00000000 WAX",
            ram_bytes: 0
          }
        }),
            ge = Object(s.a)(je, 2),
            we = ge[0],
            Oe = ge[1],
            ve = Object(l.useState)({
          status: false,
          masterKey: "XXXXXXXXXXX",
          coin: 0,
          created_at: "",
          trx: ""
        }),
            ye = Object(s.a)(ve, 2),
            ke = ye[0],
            Ne = ye[1],
            Se = Object(l.useState)({
          status: false,
          amount: 0,
          rate: 0
        }),
            Ae = Object(s.a)(Se, 2),
            Ce = Ae[0],
            Te = Ae[1],
            Pe = Object(l.useState)({
          status: false,
          type: "wax",
          account: "",
          memo: "",
          amount: 0
        }),
            Me = Object(s.a)(Pe, 2),
            ze = Me[0],
            Fe = Me[1],
            We = Object(l.useState)({
          status: false,
          account: "",
          key: "",
          showPrivatekey: false
        }),
            Ie = Object(s.a)(We, 2),
            _e = Ie[0],
            Le = Ie[1],
            Ee = function () {
          Ne(function (e) {
            return Object(c.a)(Object(c.a)({}, e), {}, {
              masterKey: A()(10).toUpperCase()
            });
          });
        },
            De = function (e) {
          var t = e.target,
              n = t.name,
              a = t.value;
          Fe(function (t) {
            var s;
            return Object(c.a)(Object(c.a)({}, t), {}, (s = {}, Object(r.a)(s, n, a), Object(r.a)(s, "status", e.target.checked), s));
          });
        },
            Re = function (e) {
          var t = e.target,
              n = t.name,
              a = t.value;
          Te(function (t) {
            var s;
            return Object(c.a)(Object(c.a)({}, t), {}, (s = {}, Object(r.a)(s, n, a), Object(r.a)(s, "status", e.target.checked), s));
          });
        },
            Xe = function (e) {
          var t = e.target,
              n = t.name,
              a = t.value;
          ce(function (e) {
            return Object(c.a)(Object(c.a)({}, e), {}, Object(r.a)({}, n, a));
          });
        },
            Je = function (e) {
          var t = e.target,
              n = t.name,
              a = t.value;
          Le(function (t) {
            var s;
            return Object(c.a)(Object(c.a)({}, t), {}, (s = {}, Object(r.a)(s, n, a), Object(r.a)(s, "status", e.target.checked), s));
          });
        };

        Object(l.useEffect)(function () {
          function e() {
            return (e = Object(a.a)(i.a.mark(function e() {
              return i.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, R("https://wax.greymass.com/v1/chain/get_accounts_by_authorizers", {
                      headers: {
                        accept: "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "content-type": "text/plain;charset=UTF-8",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        "sec-gpc": "1"
                      },
                      referrer: "https://wax.bloks.io/",
                      referrerPolicy: "strict-origin-when-cross-origin",
                      body: JSON.stringify({
                        accounts: [],
                        keys: [E.fromString(_e.key).getPublicKey().toString()]
                      }),
                      method: "POST",
                      mode: "cors",
                      credentials: "omit"
                    }).then(function (e) {
                      return e.json();
                    }).then(function (e) {
                      Ze(e.accounts[0].account_name), Le(Object(c.a)(Object(c.a)({}, _e), {}, {
                        account: e.accounts[0].account_name
                      }));
                    }).catch(function (e) {
                      return console.error("error:" + e);
                    });

                  case 2:
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            }))).apply(this, arguments);
          }

          "" !== _e.key && function () {
            e.apply(this, arguments);
          }();
        }, [_e.key]);

        var Be,
            He = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (undefined === t) {
                    e.next = 2;
                    break;
                  }

                  return e.abrupt("return", new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("https://alien-script.com/v1/api/member/".concat(t), {
                              method: "GET"
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              n({
                                masterKey: e.master_key,
                                coin: e.coin,
                                created_at: e.created_at
                              }), Ne({
                                masterKey: e.master_key,
                                coin: e.coin,
                                created_at: e.created_at
                              });
                            }).catch(function (e) {
                              return console.error("error:" + e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()));

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            qe = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            var n;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  n = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("/verify", {
                              method: "POST",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token"),
                                "Content-type": "application/json",
                                Accept: "application/json"
                              },
                              body: JSON.stringify({
                                token: t
                              })
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              true === e.verifyMember ? (n(true), window.sessionStorage.setItem("login", false), window.location.reload()) : a(false);
                            }).catch(function (e) {
                              return a(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Enable Key : ".concat(t);
                      }
                    },
                    error: {
                      render: function (e) {
                        e.data;
                        return "Failed";
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            Ye = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            var n;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  n = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("/autosawp", {
                              method: "POST",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token"),
                                "Content-type": "application/json",
                                Accept: "application/json"
                              },
                              body: JSON.stringify(t)
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              true === e.autosawp ? n(true) : a(false);
                            }).catch(function (e) {
                              return a(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Save Succeed";
                      }
                    },
                    error: {
                      render: function (e) {
                        e.data;
                        return "Save Failed";
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            Ue = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            var n;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  n = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("/privatekey", {
                              method: "POST",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token"),
                                "Content-type": "application/json",
                                Accept: "application/json"
                              },
                              body: JSON.stringify(t)
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              true === e.privatekey ? n(true) : a(false);
                            }).catch(function (e) {
                              return a(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Save Succeed";
                      }
                    },
                    error: {
                      render: function (e) {
                        e.data;
                        return "Save Failed";
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            Ge = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, R("/autosawp", {
                    method: "GET",
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token")
                    }
                  }).then(function (e) {
                    return e.json();
                  }).then(function (e) {
                    e.amount && Te(e);
                  }).catch(function (e) {
                    return console.error(e.message);
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            Ke = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(t, n) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("/privatekey", {
                              method: "GET",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                              }
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              e && (t({
                                account: e.account,
                                status: e.status
                              }), Le(Object(c.a)(Object(c.a)({}, _e), {}, {
                                status: e.status,
                                account: e.account,
                                key: e.key
                              })));
                            }).catch(function (e) {
                              return console.error(e.message);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()));

                case 1:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            Ze = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, R("https://wax.greymass.com/v1/chain/get_account", {
                    headers: {
                      accept: "*/*",
                      "accept-language": "en-US,en;q=0.9",
                      "content-type": "text/plain;charset=UTF-8",
                      "sec-fetch-dest": "empty",
                      "sec-fetch-mode": "cors",
                      "sec-fetch-site": "cross-site",
                      "sec-gpc": "1"
                    },
                    referrer: "https://wax.bloks.io/",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    body: JSON.stringify({
                      account_name: t
                    }),
                    method: "POST",
                    mode: "cors",
                    credentials: "omit"
                  }).then(function (e) {
                    return e.json();
                  }).then(function (e) {
                    Oe({
                      cpu_limit: e.cpu_limit,
                      net_limit: e.net_limit,
                      ram_limit: {
                        used: e.ram_usage,
                        available: 0,
                        max: e.ram_quota
                      },
                      total_resources: e.total_resources
                    });
                  }).catch(function (e) {
                    return console.error("error:" + e);
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            Qe = function () {
          var e = Object(a.a)(i.a.mark(function e(t) {
            var n;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  n = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("/autotransfer", {
                              method: "POST",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token"),
                                "Content-type": "application/json",
                                Accept: "application/json"
                              },
                              body: JSON.stringify(t)
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              true === e.autotransfer ? n(true) : a(false);
                            }).catch(function (e) {
                              return a(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Save Succeed";
                      }
                    },
                    error: {
                      render: function (e) {
                        e.data;
                        return "Save Failed";
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(),
            Ve = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, R("/autotransfer", {
                    method: "GET",
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token")
                    }
                  }).then(function (e) {
                    return e.json();
                  }).then(function (e) {
                    e.amount && Fe(e);
                  }).catch(function (e) {
                    return console.error(e.message);
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            $e = function () {
          var e = Object(a.a)(i.a.mark(function e(t, n) {
            var r;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  r = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(a, r) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("https://alien-script.com/v1/api/trx/".concat(n), {
                              method: "PUT",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                master_key: t
                              })
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              1 === me && qe(ke.masterKey), "error" === e.code ? r(e.data.message) : a(e);
                            }).catch(function (e) {
                              return r(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(r, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Top-Up Succeed ";
                      }
                    },
                    error: {
                      render: function (e) {
                        var t = e.data;
                        return "Top-Up Failed : ".concat(t);
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t, n) {
            return e.apply(this, arguments);
          };
        }(),
            et = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(t, n) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("https://wax.greymass.com/v1/chain/get_table_rows", {
                              headers: {
                                accept: "*/*",
                                "accept-language": "en-US,en;q=0.9",
                                "content-type": "text/plain;charset=UTF-8",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "cross-site",
                                "sec-gpc": "1"
                              },
                              referrer: "https://wax.alcor.exchange/",
                              referrerPolicy: "strict-origin-when-cross-origin",
                              body: JSON.stringify({
                                json: true,
                                code: "alcorammswap",
                                scope: "alcorammswap",
                                table: "pairs",
                                table_key: "",
                                lower_bound: 0,
                                upper_bound: 0,
                                index_position: 1,
                                key_type: "",
                                limit: 1,
                                reverse: false,
                                show_payer: false
                              }),
                              method: "POST",
                              mode: "cors"
                            }).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              Q({
                                tlm: (parseFloat(e.rows[0].pool1.quantity) / parseFloat(e.rows[0].pool2.quantity)).toFixed(8),
                                wax: (parseFloat(e.rows[0].pool2.quantity) / parseFloat(e.rows[0].pool1.quantity)).toFixed(8)
                              }), t({
                                tlm: (parseFloat(e.rows[0].pool1.quantity) / parseFloat(e.rows[0].pool2.quantity)).toFixed(8),
                                wax: (parseFloat(e.rows[0].pool2.quantity) / parseFloat(e.rows[0].pool1.quantity)).toFixed(8)
                              });
                            }).catch(function (e) {
                              console.error("error:" + e), n(e);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()));

                case 1:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            tt = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            var t;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  t = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(t, n) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, F.c.login().then(function () {
                              var e = Object(a.a)(i.a.mark(function e(r) {
                                return i.a.wrap(function (e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      return t(r), e.next = 3, Object(F.a)(r).then(function () {
                                        var e = Object(a.a)(i.a.mark(function e(t) {
                                          return i.a.wrap(function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, et().then(function (e) {
                                                  1 === me && Ee(), U({
                                                    account: r,
                                                    wax: t.wax,
                                                    rate: e,
                                                    type: "wax"
                                                  });
                                                }).catch(function (e) {
                                                  n(new Error("Rate WAX/TLM"));
                                                });

                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                          }, e);
                                        }));
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      }()).catch(function (e) {
                                        n(new Error("Wallet"));
                                      });

                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                                }, e);
                              }));
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            }()).catch(function (e) {
                              n(new Error("Login"));
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(t, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Login Succeed";
                      }
                    },
                    error: {
                      render: function (e) {
                        var t = e.data;
                        return "".concat(t, " Failed ");
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            nt = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            var t;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  t = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(t, n) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, o.login("AlienScripts").then(function () {
                              var e = Object(a.a)(i.a.mark(function e(r) {
                                return i.a.wrap(function (e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      return t(r), console.log(r.payload.sa), e.next = 4, Object(F.a)(r.payload.sa).then(function () {
                                        var e = Object(a.a)(i.a.mark(function e(t) {
                                          return i.a.wrap(function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return e.next = 2, et().then(function (e) {
                                                  1 === me && Ee(), U({
                                                    account: r.payload.sa,
                                                    wax: t.wax,
                                                    rate: e,
                                                    type: "anchor"
                                                  });
                                                }).catch(function (e) {
                                                  n(new Error("Rate WAX/TLM"));
                                                });

                                              case 2:
                                              case "end":
                                                return e.stop();
                                            }
                                          }, e);
                                        }));
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      }()).catch(function (e) {
                                        n(new Error("Wallet"));
                                      });

                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                                }, e);
                              }));
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            }()).catch(function (e) {
                              n(new Error("Login"));
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(t, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        e.data;
                        return "Login Succeed";
                      }
                    },
                    error: {
                      render: function (e) {
                        var t = e.data;
                        return "".concat(t, " Failed ");
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            at = function () {
          var t = Object(a.a)(i.a.mark(function t() {
            var n;
            return i.a.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  n = new Promise(function () {
                    var t = Object(a.a)(i.a.mark(function t(n, r) {
                      return i.a.wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if ("wax" !== Y.type) {
                              t.next = 5;
                              break;
                            }

                            return t.next = 3, Object(F.b)([{
                              account: "eosio.token",
                              name: "transfer",
                              authorization: [{
                                actor: Y.account,
                                permission: "active"
                              }],
                              data: {
                                from: Y.account,
                                to: "alienscripts",
                                quantity: "".concat(Number(ee).toFixed(8), " WAX"),
                                memo: e.from(Y.rate.wax).toString("base64").replace(/=/g, "")
                              }
                            }]).then(function () {
                              var e = Object(a.a)(i.a.mark(function e(t) {
                                return i.a.wrap(function (e) {
                                  for (;;) switch (e.prev = e.next) {
                                    case 0:
                                      return n(t.transaction_id), e.next = 3, $e(ke.masterKey, t.transaction_id);

                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                                }, e);
                              }));
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            }()).catch(function (e) {
                              return r(e);
                            });

                          case 3:
                            t.next = 6;
                            break;

                          case 5:
                            o.restoreSession("AlienScripts").then(function (t) {
                              console.log(t), console.log("Session for ".concat(t.auth, " restored"));
                              var c = {
                                account: "eosio.token",
                                name: "transfer",
                                authorization: [{
                                  actor: Y.account,
                                  permission: "active"
                                }],
                                data: {
                                  from: Y.account,
                                  to: "alienscripts",
                                  quantity: "".concat(Number(ee).toFixed(8), " WAX"),
                                  memo: e.from(Y.rate.wax).toString("base64").replace(/=/g, "")
                                }
                              };
                              t.transact({
                                action: c
                              }).then(function () {
                                var e = Object(a.a)(i.a.mark(function e(t) {
                                  return i.a.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return n(t.payload.tx), e.next = 3, $e(ke.masterKey, t.payload.tx);

                                      case 3:
                                        console.log("Transaction broadcast! Id: ".concat(t.payload.tx));

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                  }, e);
                                }));
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              }()).catch(function (e) {
                                return r(e);
                              });
                            });

                          case 6:
                          case "end":
                            return t.stop();
                        }
                      }, t);
                    }));
                    return function (e, n) {
                      return t.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (e) {
                        var t = e.data;
                        return "Succeed : ".concat(t.slice(0, 10));
                      }
                    },
                    error: {
                      render: function (e) {
                        var t = e.data;
                        return "Failed : ".concat(t);
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 2:
                case "end":
                  return t.stop();
              }
            }, t);
          }));
          return function () {
            return t.apply(this, arguments);
          };
        }(),
            rt = function () {
          var e = Object(a.a)(i.a.mark(function e() {
            var t, n;
            return i.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  "https://alien-script.com/v1/api/promptpay", t = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      transDate: re.dateTransfer,
                      depositAmount: Number(re.depositAmount),
                      package: re.amount,
                      price: re.price,
                      master_key: ke.masterKey
                    })
                  }, n = new Promise(function () {
                    var e = Object(a.a)(i.a.mark(function e(n, a) {
                      return i.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, R("https://alien-script.com/v1/api/promptpay", t).then(function (e) {
                              return e.json();
                            }).then(function (e) {
                              "success" === e.code ? n(e) : a(e);
                            }).catch(function (e) {
                              a(false);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }()), T.b.promise(n, {
                    pending: "Payment is pending",
                    success: {
                      render: function (e) {
                        var t = e.data;
                        return "Payment Succeed : ".concat(t.data.message);
                      }
                    },
                    error: {
                      render: function (e) {
                        var t = e.data;
                        return "Payment Failed : ".concat(t.data.message);
                      }
                    }
                  }, {
                    success: {
                      duration: 5e3,
                      icon: "🔥"
                    },
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });

                case 4:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function () {
            return e.apply(this, arguments);
          };
        }(),
            ct = function (e) {
          te(e.target.value);
        };

        return Object(l.useEffect)(function () {
          return W && (et(), Ge(), Ve(), Ke().then(function (e) {
            e.status && (Be = setInterval(Object(a.a)(i.a.mark(function t() {
              return i.a.wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, Ze(e.account);

                  case 2:
                  case "end":
                    return t.stop();
                }
              }, t);
            })), 5e3));
          }), He(B.master_key)), function () {
            return clearInterval(Be);
          };
        }, [W]), Object(l.useEffect)(function () {
          0 === ie && (new Promise(function () {
            var e = Object(a.a)(i.a.mark(function e(t, n) {
              return i.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, D.simple.price({
                      ids: ["alien-worlds"],
                      vs_currencies: ["thb"]
                    }).then(function (e) {
                      t(e.data["alien-worlds"].thb);
                    }).catch(function (e) {
                      console.error(e);
                    });

                  case 2:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t, n) {
              return e.apply(this, arguments);
            };
          }()).then(function (e) {
            ce(function (t) {
              return Object(c.a)(Object(c.a)({}, t), {}, {
                price: e
              });
            });
          }), He(B.master_key));
        }, [ie]), Object(_.jsx)("div", {
          children: Object(_.jsx)(u.a, {
            open: W,
            onClose: function () {
              return J(!W);
            },
            closeAfterTransition: true,
            fullWidth: true,
            BackdropComponent: d.a,
            BackdropProps: {
              timeout: 500
            },
            children: Object(_.jsxs)(m.a, {
              sx: X,
              className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker rounded-xl font-semibold w-full md:w-auto overflow-auto mx-auto outline-none p-1 md:p-3",
              children: [Object(_.jsx)(m.a, {
                sx: {
                  m: 2
                },
                children: Object(_.jsx)("div", {
                  children: Object(_.jsxs)("nav", {
                    className: "bg-transparent",
                    children: [Object(_.jsx)("div", {
                      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                      children: Object(_.jsxs)("div", {
                        className: "flex items-center justify-center",
                        children: [Object(_.jsx)("div", {
                          className: "flex items-center",
                          children: Object(_.jsx)("div", {
                            className: "hidden whitespace-nowrap md:block",
                            children: Object(_.jsxs)("div", {
                              className: "flex flex-row uppercase",
                              children: [Object(_.jsx)("a", {
                                className: "cursor-pointer flex w-36 px-3 items-center justify-center py-2 border-b-8 text-md font-medium ".concat(0 === ie ? "border-green text-green" : null),
                                onClick: function () {
                                  return le(0);
                                },
                                children: " Profile "
                              }), Object(_.jsx)("a", {
                                className: "cursor-pointer flex w-36 px-3 items-center justify-center py-2 border-b-8 text-md font-medium ".concat(1 === ie ? "border-green text-green" : null),
                                onClick: function () {
                                  return le(1);
                                },
                                children: " Master Key "
                              }), Object(_.jsx)("a", {
                                className: "cursor-pointer flex w-36 px-3 items-center justify-center py-2 border-b-8 text-md font-medium ".concat(2 === ie ? "border-green text-green" : null),
                                onClick: function () {
                                  return le(2);
                                },
                                children: " Top-up "
                              })]
                            })
                          })
                        }), Object(_.jsx)("div", {
                          className: "flex md:hidden text-lg cursor-pointer border-2 border-green rounded-lg px-9",
                          children: Object(_.jsx)("span", {
                            className: "inline-flex items-center justify-center",
                            onClick: function () {
                              return fe(!be);
                            },
                            children: 0 === ie ? "Profile" : 1 === ie ? "Master Key" : "Top-up"
                          })
                        })]
                      })
                    }), Object(_.jsx)(P.a, {
                      show: be,
                      enter: "transition ease-out duration-100 transform",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "transition ease-in duration-75 transform",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: function (e) {
                        return Object(_.jsx)("div", {
                          className: "md:hidden",
                          id: "mobile-menu",
                          children: Object(_.jsxs)("div", {
                            ref: e,
                            className: "px-2 whitespace-nowrap pt-2 pb-3 space-y-1 sm:px-3",
                            onClick: function () {
                              return fe(!be);
                            },
                            children: [Object(_.jsx)("a", {
                              className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(0 === ie ? "border-green border-b-4" : null),
                              onClick: function () {
                                return le(0);
                              },
                              children: " Profile "
                            }), Object(_.jsx)("a", {
                              className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(1 === ie ? "border-green border-b-4" : null),
                              onClick: function () {
                                return le(1);
                              },
                              children: " Master Key "
                            }), Object(_.jsx)("a", {
                              className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(2 === ie ? "border-green border-b-4" : null),
                              onClick: function () {
                                return le(2);
                              },
                              children: " Top-up "
                            })]
                          })
                        });
                      }
                    })]
                  })
                })
              }), Object(_.jsx)("div", {
                children: 0 === ie ? Object(_.jsxs)("div", {
                  className: "relative justify-center items-center ",
                  children: [Object(_.jsxs)("div", {
                    className: "uppercase flex flex-row space-x-2 text-gray-darker",
                    children: [Object(_.jsxs)("div", {
                      className: "flex w-full rounded-lg bg-green justify-center items-center py-4",
                      children: [Object(_.jsx)("p", {
                        className: "hidden md:block",
                        children: "Master Key :"
                      }), ke.masterKey]
                    }), Object(_.jsxs)("div", {
                      className: "flex w-full rounded-lg bg-green justify-center items-center py-4",
                      children: [Object(_.jsx)("p", {
                        className: "hidden md:block",
                        children: "Coin :"
                      }), Number(ke.coin).toFixed(4)]
                    })]
                  }), Object(_.jsxs)("div", {
                    className: "flex flex-col w-full rounded-lg bg-green mt-2 p-2 space-y-2",
                    children: [Object(_.jsx)("p", {
                      className: "text-left text-lg text-gray-darker",
                      children: "Setup"
                    }), Object(_.jsxs)("div", {
                      className: "flex flex-col w-full rounded-lg border-2 border-green bg-gray-lighter dark:bg-gray-darker p-2 space-y-2",
                      children: [Object(_.jsx)("div", {
                        className: "flex flex-row -mt-2",
                        children: Object(_.jsx)(p.a, {
                          control: Object(_.jsx)(x.a, {
                            name: "status",
                            checked: Ce.status,
                            onChange: Re,
                            sx: {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28
                              }
                            }
                          }),
                          label: "Auto Swap TLM/WAX",
                          labelPlacement: "end"
                        })
                      }), Object(_.jsxs)("div", {
                        className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                        style: {
                          marginTop: 0
                        },
                        children: [Object(_.jsx)(h.a, {
                          label: "Amount",
                          type: "number",
                          InputLabelProps: {
                            shrink: true
                          },
                          variant: "outlined",
                          fullWidth: true,
                          size: "small",
                          name: "amount",
                          value: Number(Ce.amount).toFixed(4),
                          onChange: Re
                        }), Object(_.jsx)(h.a, {
                          label: "Rate [ 1 TLM : ".concat(Number(Z.tlm).toFixed(6), " WAX ]"),
                          type: "number",
                          InputLabelProps: {
                            shrink: true
                          },
                          variant: "outlined",
                          fullWidth: true,
                          size: "small",
                          name: "rate",
                          value: Number(Ce.rate).toFixed(6),
                          onChange: Re
                        }), Object(_.jsx)("button", {
                          className: "bg-green rounded-lg w-full text-gray-darker",
                          onClick: function () {
                            return Ye(Ce);
                          },
                          children: "Save"
                        })]
                      })]
                    }), Object(_.jsxs)("div", {
                      className: "flex flex-col w-full rounded-lg border-2 border-green bg-gray-lighter dark:bg-gray-darker p-2 space-y-2",
                      children: [Object(_.jsx)("div", {
                        className: "flex flex-row",
                        children: Object(_.jsx)(b.a, {
                          component: "fieldset",
                          children: Object(_.jsxs)(f.a, {
                            row: true,
                            "aria-label": "gender",
                            name: "row-radio-buttons-group",
                            value: ze.type,
                            onChange: function (e) {
                              Fe(function (t) {
                                return Object(c.a)(Object(c.a)({}, t), {}, {
                                  type: e.target.value
                                });
                              });
                            },
                            sx: {
                              "& .MuiSvgIcon-root": {
                                fontSize: 28
                              },
                              mt: -1.5,
                              ml: 0
                            },
                            children: [Object(_.jsx)(p.a, {
                              control: Object(_.jsx)(x.a, {
                                name: "status",
                                checked: ze.status,
                                onChange: De
                              }),
                              label: "Auto Transfer",
                              labelPlacement: "end"
                            }), Object(_.jsx)(p.a, {
                              value: "wax",
                              control: Object(_.jsx)(j.a, {}),
                              label: "WAX"
                            }), Object(_.jsx)(p.a, {
                              value: "tlm",
                              control: Object(_.jsx)(j.a, {}),
                              label: "TLM"
                            })]
                          })
                        })
                      }), Object(_.jsxs)("div", {
                        className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                        style: {
                          marginTop: -0
                        },
                        children: [Object(_.jsx)(h.a, {
                          label: "Account",
                          variant: "outlined",
                          fullWidth: true,
                          size: "small",
                          InputLabelProps: {
                            shrink: true
                          },
                          name: "account",
                          value: ze.account,
                          onChange: De
                        }), Object(_.jsx)(h.a, {
                          label: "Memo",
                          variant: "outlined",
                          fullWidth: true,
                          size: "small",
                          InputLabelProps: {
                            shrink: true
                          },
                          name: "memo",
                          value: ze.memo,
                          onChange: De
                        }), Object(_.jsx)(h.a, {
                          label: "Amount",
                          variant: "outlined",
                          fullWidth: true,
                          size: "small",
                          name: "amount",
                          type: "number",
                          InputLabelProps: {
                            shrink: true
                          },
                          value: Number(ze.amount).toFixed("wax" === ze.type ? 8 : 4),
                          onChange: De
                        })]
                      }), Object(_.jsx)("button", {
                        className: "bg-green rounded-lg w-full h-10 text-gray-darker",
                        onClick: function () {
                          return Qe(ze);
                        },
                        children: "Save"
                      })]
                    }), Object(_.jsx)("div", {
                      className: "block hidden",
                      children: Object(_.jsxs)("div", {
                        className: "flex flex-col w-full rounded-lg border-2 border-green bg-gray-lighter dark:bg-gray-darker p-2 space-y-2",
                        children: [Object(_.jsx)("div", {
                          className: "flex flex-row -mt-2",
                          children: Object(_.jsx)(p.a, {
                            control: Object(_.jsx)(x.a, {
                              name: "status",
                              checked: _e.status,
                              onChange: Je,
                              sx: {
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28
                                }
                              }
                            }),
                            label: "Anchor Wallet Share Resources",
                            labelPlacement: "end"
                          })
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 ",
                          style: {
                            marginTop: 0
                          },
                          children: [Object(_.jsx)("div", {
                            className: "md:flex-initial md:w-6/12 w-full",
                            children: Object(_.jsx)(h.a, {
                              type: _e.showPrivatekey ? "text" : "password",
                              value: _e.key,
                              onChange: Je,
                              label: "Private Key ( Anchor Wallet )",
                              name: "key",
                              size: "small",
                              variant: "outlined",
                              fullWidth: true,
                              InputProps: {
                                endAdornment: Object(_.jsx)(g.a, {
                                  position: "end",
                                  children: Object(_.jsx)(w.a, {
                                    onClick: function () {
                                      Le(Object(c.a)(Object(c.a)({}, _e), {}, {
                                        showPrivatekey: !_e.showPrivatekey
                                      }));
                                    },
                                    onMouseDown: function (e) {
                                      e.preventDefault();
                                    },
                                    children: _e.showPrivatekey ? Object(_.jsx)(v.a, {}) : Object(_.jsx)(y.a, {})
                                  })
                                })
                              }
                            })
                          }), Object(_.jsx)("div", {
                            className: "md:flex-initial md:w-3/12 w-full",
                            children: Object(_.jsx)(h.a, {
                              label: "Account",
                              type: "text",
                              InputLabelProps: {
                                shrink: true
                              },
                              variant: "outlined",
                              fullWidth: true,
                              size: "small",
                              name: "account",
                              value: _e.account
                            })
                          }), Object(_.jsx)("div", {
                            className: "md:flex-initial md:w-3/12 w-full",
                            children: Object(_.jsx)("button", {
                              className: "bg-green rounded-lg text-gray-darker w-full h-10",
                              onClick: function () {
                                return Ue(_e);
                              },
                              children: "Save"
                            })
                          })]
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                          children: [Object(_.jsxs)("div", {
                            className: "flex flex-col w-full ",
                            children: [Object(_.jsx)("div", {
                              className: "w-full bg-gray-light rounded text-left h-4",
                              children: Object(_.jsx)("div", {
                                className: "".concat(Math.round(we.cpu_limit.used / we.cpu_limit.max * 100) > 75 ? Math.round(we.cpu_limit.used / we.cpu_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                                style: {
                                  width: Math.round(we.cpu_limit.used / we.cpu_limit.max * 100) + "%",
                                  maxWidth: "100%",
                                  fontSize: 10
                                },
                                children: Object(_.jsxs)("span", {
                                  className: "px-1 whitespace-nowrap text-gray-darkest",
                                  children: ["CPU ", Math.round(we.cpu_limit.used / we.cpu_limit.max * 100), "% ( ", Number(we.cpu_limit.used / 1e3).toFixed(1), " ms / ", Number(we.cpu_limit.max / 1e3).toFixed(1), " ms )"]
                                })
                              })
                            }), Object(_.jsx)("span", {
                              className: "text-gray-darkest dark:text-gray-lighter",
                              style: {
                                fontSize: 10
                              },
                              children: we.total_resources.cpu_weight
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [Object(_.jsx)("div", {
                              className: "w-full bg-gray-light rounded text-left h-4",
                              children: Object(_.jsx)("div", {
                                className: "".concat(Math.round(we.net_limit.used / we.net_limit.max * 100) > 75 ? Math.round(we.net_limit.used / we.net_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                                style: {
                                  width: Math.round(we.net_limit.used / we.net_limit.max * 100) + "%",
                                  maxWidth: "100%",
                                  fontSize: 10
                                },
                                children: Object(_.jsxs)("span", {
                                  className: "px-1 whitespace-nowrap text-gray-darkest",
                                  children: ["NET ", Math.round(we.net_limit.used / we.net_limit.max * 100), "% ( ", Number(we.net_limit.used / 1e3).toFixed(1), " KB / ", Number(we.net_limit.max / 1e3).toFixed(1), " KB )"]
                                })
                              })
                            }), Object(_.jsx)("span", {
                              className: "text-gray-darkest dark:text-gray-lighter",
                              style: {
                                fontSize: 10
                              },
                              children: we.total_resources.net_weight
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [Object(_.jsx)("div", {
                              className: "w-full bg-gray-light rounded text-left h-4",
                              children: Object(_.jsx)("div", {
                                className: "".concat(Math.round(we.ram_limit.used / we.ram_limit.max * 100) > 75 ? Math.round(we.ram_limit.used / we.ram_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                                style: {
                                  width: Math.round(we.ram_limit.used / we.ram_limit.max * 100) + "%",
                                  maxWidth: "100%",
                                  fontSize: 10
                                },
                                children: Object(_.jsxs)("span", {
                                  className: "px-1 whitespace-nowrap text-gray-darkest",
                                  children: ["RAM ", Math.round(we.ram_limit.used / we.ram_limit.max * 100), "% ( ", Number(we.ram_limit.used / 1e3).toFixed(1), " KB / ", Number(we.ram_limit.max / 1e3).toFixed(1), " KB )"]
                                })
                              })
                            }), Object(_.jsxs)("span", {
                              className: "text-gray-darkest dark:text-gray-lighter",
                              style: {
                                fontSize: 10
                              },
                              children: [we.total_resources.ram_bytes, " Bytes"]
                            })]
                          })]
                        })]
                      })
                    })]
                  })]
                }) : 1 === ie ? Object(_.jsxs)("div", {
                  className: "relative justify-center items-center",
                  children: [Object(_.jsxs)("ul", {
                    className: "flex w-full justify-center items-center mb-2 space-x-1 uppercase text-xs md:text-lg",
                    children: [Object(_.jsx)("li", {
                      className: "flex w-full justify-center cursor-pointer py-2 px-4 rounded-lg ".concat(0 === me ? "text-gray-darkest bg-green" : null, "  index"),
                      onClick: function () {
                        return pe(0);
                      },
                      children: "Enable"
                    }), Object(_.jsx)("li", {
                      className: "flex w-full justify-center cursor-pointer py-2 px-4 rounded-lg ".concat(1 === me ? "text-gray-darkest bg-green" : null, "  index"),
                      onClick: function () {
                        return pe(1);
                      },
                      children: "Register"
                    })]
                  }), 0 === me ? Object(_.jsxs)("div", {
                    className: "flex flex-col border-2 rounded-xl p-2  space-y-2",
                    children: ["Enable", Object(_.jsx)(h.a, {
                      id: "standard-basic",
                      label: "Master Key",
                      variant: "standard",
                      value: ke.masterKey,
                      fullWidth: true,
                      name: "masterKey",
                      onChange: function (e) {
                        var t = e.target,
                            n = t.name,
                            a = t.value;
                        Ne(function (e) {
                          return Object(c.a)(Object(c.a)({}, e), {}, Object(r.a)({}, n, a));
                        });
                      }
                    }), Object(_.jsx)("button", {
                      className: "flex items-center justify-center gap-1 font-bold outline-none uppercase rounded-lg py-1.5 px-6 text-xs text-white bg-green hover:text-gray-darker focus:bg-green-dark",
                      onClick: function () {
                        return qe(ke.masterKey);
                      },
                      children: "Enable"
                    })]
                  }) : Object(_.jsx)("div", {
                    className: "flex flex-col border-2 rounded-xl p-2 space-y-2",
                    children: null === Y ? Object(_.jsxs)("div", {
                      children: [Object(_.jsxs)("div", {
                        className: "flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 items-center justify-center",
                        children: [Object(_.jsxs)("div", {
                          className: "flex flex-nowrap w-full bg-black items-center order-1 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                          onClick: function () {
                            return tt();
                          },
                          children: [Object(_.jsx)("img", {
                            src: n(196).default,
                            alt: "WaxLogo",
                            style: {
                              width: "2rem",
                              height: "2rem"
                            }
                          }), Object(_.jsx)("span", {
                            className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                            children: " WAX Cloud Wallet"
                          })]
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-nowrap w-full items-center order-2 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                          style: {
                            backgroundColor: "rgb(24, 50, 132)"
                          },
                          onClick: function () {
                            return nt();
                          },
                          children: [Object(_.jsx)("img", {
                            src: n(197).default,
                            alt: "WaxLogo",
                            style: {
                              width: "2rem",
                              height: "2rem"
                            }
                          }), Object(_.jsx)("span", {
                            className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                            children: " Anchor Wallet"
                          })]
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-nowrap w-full items-center order-3 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                          style: {
                            backgroundColor: "rgb(24, 50, 132)"
                          },
                          onClick: function () {
                            return ce(function (e) {
                              return Ee(), U(true), Object(c.a)(Object(c.a)({}, e), {}, {
                                status: !e.status
                              });
                            });
                          },
                          children: [Object(_.jsx)("img", {
                            src: n(198).default,
                            alt: "WaxLogo",
                            style: {
                              width: "2.5rem",
                              height: "2rem"
                            }
                          }), Object(_.jsx)("span", {
                            className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                            children: " Promptpay [Thai]"
                          })]
                        })]
                      }), Object(_.jsxs)("div", {
                        className: "text-xs text-red-500 pt-3",
                        children: [Object(_.jsx)("li", {
                          children: "Connect Wallet WAX or Anchor"
                        }), Object(_.jsx)("li", {
                          children: "A master key generator and your master key must be kept secret."
                        }), Object(_.jsx)("li", {
                          children: "Then select the package you want to top-up."
                        }), Object(_.jsx)("li", {
                          children: "According to the exchange rate of Wax to TLM."
                        }), Object(_.jsx)("li", {
                          children: "Service charge is based on 5% mined amount."
                        })]
                      })]
                    }) : Object(_.jsx)("div", {
                      children: true === re.status ? Object(_.jsxs)("div", {
                        className: "flex w-full md:flex-row flex-col items-center justify-center pt-3 space-y-3 md:space-y-0",
                        children: [Object(_.jsxs)("div", {
                          className: "w-full md:w-2/6 text-center",
                          children: [Object(_.jsx)("label", {
                            className: "font-bold",
                            children: "QR-Payment"
                          }), Object(_.jsx)(L, {
                            className: "flex w-4/6 h-4/6 rounded-md mx-auto items-center justify-between",
                            fgColor: "#000000",
                            bgColor: "#FFFFFF",
                            value: I()("004999054911697", {
                              amount: Number(re.amount * re.price)
                            }),
                            size: 60,
                            renderAs: "svg",
                            imageSettings: {
                              src: n(144).default,
                              height: 9,
                              width: 9,
                              excavate: true
                            }
                          }), Object(_.jsx)("label", {
                            className: "font-extralight text-xs",
                            children: "สแกนเพื่อชำระค่าบริการ"
                          })]
                        }), Object(_.jsxs)("div", {
                          className: "md:w-4/6 w-full space-y-2",
                          children: [Object(_.jsxs)("div", {
                            className: "flex w-full flex-col space-y-3",
                            children: [Object(_.jsx)(h.a, {
                              id: "standard-basic",
                              label: "มาสเตอร์คีย์",
                              size: "small",
                              color: "warning",
                              variant: "outlined",
                              fullWidth: true,
                              value: ke.masterKey,
                              sx: {
                                mt: 2
                              },
                              helperText: "มาสเตอร์คีย์ ต้องเก็บรักษาไว้ทางเราไม่สามารถกู้คืนให้ได้",
                              InputProps: {
                                endAdornment: Object(_.jsx)(g.a, {
                                  position: "end",
                                  children: Object(_.jsx)(M.CopyToClipboard, {
                                    text: ke.masterKey,
                                    children: Object(_.jsx)(C.a, {
                                      size: "20",
                                      className: "cursor-pointer"
                                    })
                                  })
                                }),
                                readOnly: true
                              }
                            }), Object(_.jsxs)(h.a, {
                              disabled: false,
                              value: re.amount,
                              onChange: Xe,
                              label: "กรุณาเลือก package ที่ต้องการ",
                              variant: "outlined",
                              name: "amount",
                              fullWidth: true,
                              size: "small",
                              InputProps: {
                                sx: {
                                  fontSize: 16
                                },
                                style: {
                                  textAlignLast: "center",
                                  textAlign: "center"
                                }
                              },
                              select: true,
                              SelectProps: {
                                IconComponent: function () {
                                  return null;
                                }
                              },
                              children: [Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 25,
                                children: "Package 25 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 50,
                                children: "Package 50 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 75,
                                children: "Package 75 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 100,
                                children: "Package 100 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 150,
                                children: "Package 150 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 300,
                                children: "Package 300 COIN"
                              }), Object(_.jsx)(O.a, {
                                style: {
                                  fontSize: 12,
                                  fontFamily: "monospace"
                                },
                                value: 500,
                                children: "Package 500 COIN"
                              })]
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex flex-col border-green border-2 rounded-md p-3 text-sm",
                            children: [Object(_.jsxs)("div", {
                              className: "flex w-full",
                              children: [Object(_.jsx)("div", {
                                className: "flex-1 pr-3 text-left font-semibold",
                                children: "ราคาปัจจุบัน"
                              }), Object(_.jsxs)("div", {
                                className: "text-right",
                                children: ["1 COIN = ", re.price, " THB"]
                              })]
                            }), Object(_.jsxs)("div", {
                              className: "flex w-full",
                              children: [Object(_.jsx)("div", {
                                className: "flex-1 pr-3 text-left font-semibold",
                                children: "มาสเตอร์คีย์"
                              }), Object(_.jsx)("div", {
                                className: "text-right",
                                children: ke.masterKey
                              })]
                            }), Object(_.jsxs)("div", {
                              className: "flex w-full",
                              children: [Object(_.jsx)("div", {
                                className: "flex-1 pr-3 text-left font-semibold",
                                children: "ราคาแพ็คเกจ"
                              }), Object(_.jsxs)("div", {
                                className: "text-right",
                                children: [(Number(re.amount) * re.price).toFixed(2), " THB"]
                              })]
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                            style: {
                              marginTop: 15
                            },
                            children: [Object(_.jsx)(h.a, {
                              variant: "standard",
                              label: "วันที่และเวลา",
                              fullWidth: true,
                              type: "datetime-local",
                              size: "small",
                              name: "dateTransfer",
                              onChange: Xe,
                              InputLabelProps: {
                                shrink: true
                              }
                            }), Object(_.jsx)(h.a, {
                              id: "standard-basic",
                              name: "depositAmount",
                              label: "ยอดเงินที่ชำระ",
                              size: "small",
                              type: "number",
                              variant: "standard",
                              onChange: Xe,
                              value: re.depositAmount,
                              InputLabelProps: {
                                shrink: true
                              }
                            })]
                          }), Object(_.jsx)("button", {
                            className: "bg-green rounded-lg w-full text-gray-darker",
                            onClick: function () {
                              return rt();
                            },
                            children: "แจ้งชำระค่าบริการ"
                          }), Object(_.jsx)("p", {
                            className: "text-xs text-center underline text-red-500",
                            children: "*** ราคา Coin จะขึ้นอยู่กับอัตราการแรกเปลี่ยนระหว่าง TLM กับ THB ***"
                          }), Object(_.jsx)("p", {
                            className: "text-xs text-center underline text-red-500",
                            children: "*** หลีกเลี่ยงการทำรายการระหว่าง 00:00 - 03:00 ธนาคารปรับปรุงระบบ ***"
                          })]
                        })]
                      }) : Object(_.jsxs)("div", {
                        children: [Object(_.jsxs)("div", {
                          className: "flex flex-row space-x-2 text-center",
                          children: [Object(_.jsx)(h.a, {
                            id: "standard-basic",
                            label: "Account Wax",
                            variant: "standard",
                            fullWidth: true,
                            value: Y.account,
                            InputProps: {
                              readOnly: true
                            }
                          }), Object(_.jsx)(h.a, {
                            id: "standard-basic",
                            label: "Quantity",
                            variant: "standard",
                            fullWidth: true,
                            value: Y.wax,
                            InputProps: {
                              readOnly: true
                            }
                          }), Object(_.jsx)(h.a, {
                            id: "standard-basic",
                            label: "Rate",
                            variant: "standard",
                            fullWidth: true,
                            value: Number(Y.rate.wax).toFixed(4),
                            InputProps: {
                              readOnly: true
                            }
                          })]
                        }), Object(_.jsxs)(h.a, {
                          id: "simple-select-package",
                          select: true,
                          fullWidth: true,
                          label: "Package",
                          value: ee,
                          onChange: ct,
                          SelectProps: {
                            native: true
                          },
                          helperText: "Select the package you want to top up.",
                          variant: "standard",
                          sx: {
                            mt: 2
                          },
                          children: [Object(_.jsxs)("option", {
                            value: 5,
                            children: [" Package 5 WAX / Received ", Number(5 * Y.rate.wax).toFixed(4), " COIN"]
                          }), Object(_.jsxs)("option", {
                            value: 10,
                            children: [" Package 10 WAX / Received ", Number(10 * Y.rate.wax).toFixed(4), " COIN"]
                          }), Object(_.jsxs)("option", {
                            value: 25,
                            children: [" Package 25 WAX / Received ", Number(25 * Y.rate.wax).toFixed(4), " COIN"]
                          }), Object(_.jsxs)("option", {
                            value: 50,
                            children: [" Package 50 WAX / Received ", Number(50 * Y.rate.wax).toFixed(4), " COIN"]
                          }), Object(_.jsxs)("option", {
                            value: 75,
                            children: [" Package 75 WAX / Received ", Number(75 * Y.rate.wax).toFixed(4), " COIN"]
                          }), Object(_.jsxs)("option", {
                            value: 100,
                            children: [" Package 100 WAX / Received ", Number(100 * Y.rate.wax).toFixed(4), " COIN"]
                          })]
                        }), Object(_.jsx)(h.a, {
                          id: "standard-basic",
                          label: "Master Key",
                          color: "warning",
                          variant: "standard",
                          fullWidth: true,
                          value: ke.masterKey,
                          sx: {
                            mt: 2
                          },
                          helperText: "Your master key must be kept secret. Admin can't restore.",
                          InputProps: {
                            endAdornment: Object(_.jsx)(g.a, {
                              position: "end",
                              children: Object(_.jsx)(M.CopyToClipboard, {
                                text: ke.masterKey,
                                children: Object(_.jsx)(C.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                })
                              })
                            }),
                            readOnly: true
                          }
                        }), Object(_.jsx)("button", {
                          className: "flex w-full items-center justify-center font-bold outline-none uppercase focus:outline-none focus:shadow-none rounded-lg py-1.5 px-6 text-xs mt-3 bg-green text-gray-darkest",
                          onClick: function () {
                            return at();
                          },
                          children: "Confirm"
                        })]
                      })
                    })
                  })]
                }) : 2 === ie ? Object(_.jsx)("div", {
                  className: "relative justify-center items-center",
                  children: null === Y ? Object(_.jsxs)("div", {
                    children: [Object(_.jsxs)("div", {
                      className: "flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 items-center justify-center",
                      children: [Object(_.jsxs)("div", {
                        className: "flex flex-nowrap w-full bg-black items-center order-1 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                        onClick: function () {
                          return tt();
                        },
                        children: [Object(_.jsx)("img", {
                          src: n(196).default,
                          alt: "WaxLogo",
                          style: {
                            width: "2rem",
                            height: "2rem"
                          }
                        }), Object(_.jsx)("span", {
                          className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                          children: " WAX Cloud Wallet"
                        })]
                      }), Object(_.jsxs)("div", {
                        className: "flex flex-nowrap w-full items-center order-2 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                        style: {
                          backgroundColor: "rgb(24, 50, 132)"
                        },
                        onClick: function () {
                          return nt();
                        },
                        children: [Object(_.jsx)("img", {
                          src: n(197).default,
                          alt: "WaxLogo",
                          style: {
                            width: "2rem",
                            height: "2rem"
                          }
                        }), Object(_.jsx)("span", {
                          className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                          children: " Anchor Wallet"
                        })]
                      }), Object(_.jsxs)("div", {
                        className: "flex flex-nowrap w-full items-center order-3 sm:order-none space-x-2 p-3 font-bold outline-none uppercase rounded-lg cursor-pointer",
                        style: {
                          backgroundColor: "rgb(24, 50, 132)"
                        },
                        onClick: function () {
                          return ce(function (e) {
                            return U(true), Object(c.a)(Object(c.a)({}, e), {}, {
                              status: !e.status
                            });
                          });
                        },
                        children: [Object(_.jsx)("img", {
                          src: n(198).default,
                          alt: "PromptpayLogo",
                          style: {
                            width: "2.5rem",
                            height: "2rem"
                          }
                        }), Object(_.jsx)("span", {
                          className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-md text-white font-sans",
                          children: " Promptpay [ Thai ]"
                        })]
                      })]
                    }), Object(_.jsxs)("div", {
                      className: "text-xs text-red-500 pt-3",
                      children: [Object(_.jsx)("li", {
                        children: "Connect Wallet WAX or Anchor"
                      }), Object(_.jsx)("li", {
                        children: "Then select the package you want to top-up."
                      }), Object(_.jsx)("li", {
                        children: "According to the exchange rate of Wax to TLM."
                      }), Object(_.jsx)("li", {
                        children: "Service charge is based on 5% mined amount."
                      })]
                    })]
                  }) : Object(_.jsx)("div", {
                    children: true === re.status ? Object(_.jsxs)("div", {
                      className: "flex w-full md:flex-row flex-col items-center justify-center pt-3 space-y-3 md:space-y-0",
                      children: [Object(_.jsxs)("div", {
                        className: "w-full md:w-2/6 text-center",
                        children: [Object(_.jsx)("label", {
                          className: "font-bold",
                          children: "QR-Payment"
                        }), Object(_.jsx)(L, {
                          className: "flex w-5/6 h-5/6 rounded-md mx-auto items-center justify-between",
                          fgColor: "#000000",
                          bgColor: "#FFFFFF",
                          value: I()("004999054911697", {
                            amount: Number(re.amount * re.price)
                          }),
                          size: 85,
                          renderAs: "svg",
                          imageSettings: {
                            src: n(144).default,
                            height: 12,
                            width: 12,
                            excavate: true
                          }
                        }), Object(_.jsx)("label", {
                          className: "font-extralight text-xs",
                          children: "สแกนเพื่อชำระค่าบริการ"
                        })]
                      }), Object(_.jsxs)("div", {
                        className: "md:w-4/6 w-full space-y-2",
                        children: [Object(_.jsx)("div", {
                          className: "flex w-full",
                          children: Object(_.jsxs)(h.a, {
                            disabled: false,
                            value: re.amount,
                            onChange: Xe,
                            label: "กรุณาเลือก package ที่ต้องการ",
                            variant: "outlined",
                            name: "amount",
                            fullWidth: true,
                            size: "small",
                            InputProps: {
                              sx: {
                                fontSize: 16
                              },
                              style: {
                                textAlignLast: "center",
                                textAlign: "center"
                              }
                            },
                            select: true,
                            SelectProps: {
                              IconComponent: function () {
                                return null;
                              }
                            },
                            children: [Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 25,
                              children: "Package 25 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 50,
                              children: "Package 50 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 75,
                              children: "Package 75 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 100,
                              children: "Package 100 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 150,
                              children: "Package 150 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 300,
                              children: "Package 300 COIN"
                            }), Object(_.jsx)(O.a, {
                              style: {
                                fontSize: 12,
                                fontFamily: "monospace"
                              },
                              value: 500,
                              children: "Package 500 COIN"
                            })]
                          })
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-col border-green border-2 rounded-md p-3 text-sm",
                          children: [Object(_.jsxs)("div", {
                            className: "flex w-full",
                            children: [Object(_.jsx)("div", {
                              className: "flex-1 pr-3 text-left font-semibold",
                              children: "ราคาปัจจุบัน"
                            }), Object(_.jsxs)("div", {
                              className: "text-right",
                              children: ["1 COIN = ", re.price, " THB"]
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex w-full",
                            children: [Object(_.jsx)("div", {
                              className: "flex-1 pr-3 text-left font-semibold",
                              children: "มาสเตอร์คีย์"
                            }), Object(_.jsx)("div", {
                              className: "text-right",
                              children: ke.masterKey
                            })]
                          }), Object(_.jsxs)("div", {
                            className: "flex w-full",
                            children: [Object(_.jsx)("div", {
                              className: "flex-1 pr-3 text-left font-semibold",
                              children: "ราคาแพ็คเกจ"
                            }), Object(_.jsxs)("div", {
                              className: "text-right",
                              children: [(Number(re.amount) * re.price).toFixed(2), " THB"]
                            })]
                          })]
                        }), Object(_.jsxs)("div", {
                          className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                          style: {
                            marginTop: 15
                          },
                          children: [Object(_.jsx)(h.a, {
                            variant: "standard",
                            label: "วันที่และเวลา",
                            fullWidth: true,
                            type: "datetime-local",
                            size: "small",
                            name: "dateTransfer",
                            onChange: Xe,
                            InputLabelProps: {
                              shrink: true
                            }
                          }), Object(_.jsx)(h.a, {
                            id: "standard-basic",
                            name: "depositAmount",
                            label: "ยอดเงินที่ชำระ",
                            size: "small",
                            type: "number",
                            variant: "standard",
                            onChange: Xe,
                            value: re.depositAmount,
                            InputLabelProps: {
                              shrink: true
                            }
                          })]
                        }), Object(_.jsx)("button", {
                          className: "bg-green rounded-lg w-full text-gray-darker",
                          onClick: function () {
                            return rt();
                          },
                          children: "แจ้งชำระค่าบริการ"
                        }), Object(_.jsx)("p", {
                          className: "text-xs text-center underline text-red-500",
                          children: "*** ราคา Coin จะขึ้นอยู่กับอัตราการแรกเปลี่ยนระหว่าง TLM กับ THB ***"
                        }), Object(_.jsx)("p", {
                          className: "text-xs text-center underline text-red-500",
                          children: "*** หลีกเลี่ยงการทำรายการระหว่าง 00:00 - 03:00 ธนาคารปรับปรุงระบบ ***"
                        })]
                      })]
                    }) : Object(_.jsxs)("div", {
                      className: "border-2 border-green rounded-lg w-full p-3 mt-2",
                      children: [Object(_.jsxs)("div", {
                        className: "flex flex-row space-x-2 text-center",
                        children: [Object(_.jsx)(h.a, {
                          id: "standard-basic",
                          label: "Account Wax",
                          variant: "standard",
                          fullWidth: true,
                          value: Y.account,
                          InputProps: {
                            readOnly: true
                          }
                        }), Object(_.jsx)(h.a, {
                          id: "standard-basic",
                          label: "Quantity",
                          variant: "standard",
                          fullWidth: true,
                          value: Y.wax,
                          InputProps: {
                            readOnly: true
                          }
                        }), Object(_.jsx)(h.a, {
                          id: "standard-basic",
                          label: "Rate",
                          variant: "standard",
                          fullWidth: true,
                          value: Number(Y.rate.wax).toFixed(4),
                          InputProps: {
                            readOnly: true
                          }
                        })]
                      }), Object(_.jsxs)(h.a, {
                        id: "simple-select-package",
                        select: true,
                        fullWidth: true,
                        label: "Package",
                        value: ee,
                        onChange: ct,
                        SelectProps: {
                          native: true
                        },
                        helperText: "Select the package you want to top up.",
                        variant: "standard",
                        sx: {
                          mt: 2
                        },
                        children: [Object(_.jsxs)("option", {
                          value: 5,
                          children: [" Package 5 WAX / Received ", Number(5 * Y.rate.wax).toFixed(4), " COIN"]
                        }), Object(_.jsxs)("option", {
                          value: 10,
                          children: [" Package 10 WAX / Received ", Number(10 * Y.rate.wax).toFixed(4), " COIN"]
                        }), Object(_.jsxs)("option", {
                          value: 25,
                          children: [" Package 25 WAX / Received ", Number(25 * Y.rate.wax).toFixed(4), " COIN"]
                        }), Object(_.jsxs)("option", {
                          value: 50,
                          children: [" Package 50 WAX / Received ", Number(50 * Y.rate.wax).toFixed(4), " COIN"]
                        }), Object(_.jsxs)("option", {
                          value: 75,
                          children: [" Package 75 WAX / Received ", Number(75 * Y.rate.wax).toFixed(4), " COIN"]
                        }), Object(_.jsxs)("option", {
                          value: 100,
                          children: [" Package 100 WAX / Received ", Number(100 * Y.rate.wax).toFixed(4), " COIN"]
                        })]
                      }), Object(_.jsx)("button", {
                        className: "flex w-full items-center justify-center font-bold outline-none uppercase focus:outline-none focus:shadow-none rounded-lg py-1.5 px-6 text-xs mt-3 bg-green text-gray-darkest",
                        onClick: function () {
                          return at();
                        },
                        children: "Confirm"
                      })]
                    })
                  })
                }) : null
              })]
            })
          })
        });
      }
    }).call(this, n(28).Buffer);
  },
  222: function (e, t, n) {
    "use strict";

    (function (e) {
      var a = n(10),
          r = n(7),
          c = n(13),
          s = n(12),
          o = n(34),
          i = n(4),
          l = n.n(i),
          u = n(1),
          d = n(93),
          m = n(29),
          p = n(32),
          x = n(0),
          h = ["component"],
          b = n(72);

      t.a = function (t) {
        t.component, Object(o.a)(t, h);

        var n = Object(u.useContext)(d.d).setLogin,
            i = Object(u.useState)(0),
            f = Object(s.a)(i, 2),
            j = f[0],
            g = f[1],
            w = Object(u.useState)({
          email: "",
          password: "",
          confirm: ""
        }),
            O = Object(s.a)(w, 2),
            v = O[0],
            y = O[1],
            k = function (e) {
          var t = e.target,
              n = t.name,
              a = t.value;
          y(function (e) {
            return Object(c.a)(Object(c.a)({}, e), {}, Object(r.a)({}, n, a));
          });
        },
            N = function () {
          var t = Object(a.a)(l.a.mark(function t(r) {
            var c;
            return l.a.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r.email && r.password) {
                    t.next = 2;
                    break;
                  }

                  return t.abrupt("return");

                case 2:
                  return c = {
                    method: "POST",
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                      "Content-type": "application/json",
                      Accept: "application/json"
                    },
                    body: JSON.stringify({
                      email: r.email,
                      password: new e.from(r.password).toString("base64")
                    })
                  }, t.next = 5, b("/login", c).then(function () {
                    var e = Object(a.a)(l.a.mark(function e(t) {
                      var a;
                      return l.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (200 !== t.status) {
                              e.next = 9;
                              break;
                            }

                            return e.next = 3, t.json();

                          case 3:
                            a = e.sent, localStorage.setItem("token", a.token), m.b.success("Login Succeed", {
                              position: "top-right",
                              autoClose: 5e3,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                            }, {
                              theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                            }), n(true), e.next = 12;
                            break;

                          case 9:
                            localStorage.removeItem("token"), m.b.error("Login Failed", {
                              position: "top-right",
                              autoClose: 5e3,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                            }, {
                              theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                            }), n(false);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }()).catch(function (e) {
                    console.log("login Failed");
                  });

                case 5:
                case "end":
                  return t.stop();
              }
            }, t);
          }));
          return function (e) {
            return t.apply(this, arguments);
          };
        }(),
            S = function () {
          var t = Object(a.a)(l.a.mark(function t(n) {
            var r;
            return l.a.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (n.password === n.confirm || 1 !== j) {
                    t.next = 3;
                    break;
                  }

                  return m.b.error("Password does not match", {
                    position: "top-right",
                    autoClose: 5e3,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  }), t.abrupt("return");

                case 3:
                  if (n.email && n.password) {
                    t.next = 5;
                    break;
                  }

                  return t.abrupt("return");

                case 5:
                  return r = {
                    method: "POST",
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                      "Content-type": "application/json",
                      Accept: "application/json"
                    },
                    body: JSON.stringify({
                      email: n.email,
                      password: new e.from(n.password).toString("base64")
                    })
                  }, t.next = 8, b("/register", r).then(function () {
                    var e = Object(a.a)(l.a.mark(function e(t) {
                      var n;
                      return l.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (200 !== t.status) {
                              e.next = 8;
                              break;
                            }

                            return e.next = 3, t.json();

                          case 3:
                            n = e.sent, localStorage.setItem("token", n.token), m.b.success("Register Succeed", {
                              position: "top-right",
                              autoClose: 5e3,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                            }, {
                              theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                            }), e.next = 10;
                            break;

                          case 8:
                            localStorage.removeItem("token"), m.b.error("Register Failed", {
                              position: "top-right",
                              autoClose: 5e3,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined
                            }, {
                              theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                            });

                          case 10:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }()).catch(function (e) {
                    console.log("Register Failed");
                  });

                case 8:
                case "end":
                  return t.stop();
              }
            }, t);
          }));
          return function (e) {
            return t.apply(this, arguments);
          };
        }();

        return Object(u.useEffect)(function () {
          var e = {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          };
          b("/auth", e).then(function () {
            var e = Object(a.a)(l.a.mark(function e(t) {
              var a;
              return l.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (200 !== t.status) {
                      e.next = 8;
                      break;
                    }

                    return e.next = 3, t.json();

                  case 3:
                    a = e.sent, localStorage.setItem("token", a.token), n(true), e.next = 11;
                    break;

                  case 8:
                    n(false), localStorage.removeItem("token"), console.log(t);

                  case 11:
                  case "end":
                    return e.stop();
                }
              }, e);
            }));
            return function (t) {
              return e.apply(this, arguments);
            };
          }()).catch(function (e) {
            console.log("login Failed");
          });
        }, []), Object(x.jsx)("div", {
          className: "flex items-center justify-center h-screen bg-gray-darkest",
          children: Object(x.jsxs)("div", {
            className: "bg-gray-darkest flex-col max-w-sm border-4 border-green rounded-2xl px-4 py-5 m-2",
            children: [Object(x.jsx)("div", {
              className: "flex justify-center items-center mt-4",
              children: Object(x.jsx)("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "130.000000pt",
                height: "130.000000pt",
                viewBox: "0 0 512.000000 512.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: Object(x.jsx)("g", {
                  transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                  fill: "#8dc53f",
                  stroke: "none",
                  children: Object(x.jsx)("path", {
                    d: "M858 5109 c-145 -21 -302 -83 -429 -170 -219 -148 -381 -413 -418 -683 -15 -108 -15 -3284 0 -3392 58 -420 378 -759 799 -846 96 -19 3404 -19 3500 0 421 87 741 426 799 846 15 108 15 3284 0 3392 -37 270 -199 535 -418 683 -89 60 -231 126 -331 153 l-85 23 -1680 1 c-924 1 -1706 -2 -1737 -7z m1997 -220 c965 -121 1638 -523 1945 -1162 83 -172 136 -349 160 -530 18 -138 13 -193 -29 -343 -103 -362 -234 -673 -409 -976 l-57 -98 -72 0 c-40 0 -73 1 -73 3 0 2 30 53 66 113 173 287 316 621 414 969 42 146 43 153 37 255 -19 318 -166 661 -396 927 -285 328 -745 567 -1316 682 -348 70 -636 84 -885 42 -456 -76 -850 -236 -1160 -470 -107 -82 -309 -283 -381 -381 -166 -226 -278 -464 -354 -752 l-35 -135 41 -139 c66 -228 181 -517 292 -739 42 -84 165 -308 193 -350 l16 -25 -74 0 -75 0 -60 108 c-186 329 -348 716 -433 1037 l-30 111 29 119 c103 421 296 770 577 1047 130 128 204 188 344 280 295 193 665 332 1060 397 269 45 374 46 665 10z m-1795 -1460 c647 -89 1099 -386 1289 -846 52 -127 82 -265 88 -406 l6 -128 -54 6 c-414 48 -695 121 -966 250 -406 194 -640 480 -694 845 -12 82 -7 278 7 301 8 14 117 6 324 -22z m3404 -6 c13 -79 6 -257 -14 -345 -99 -450 -503 -773 -1172 -937 -119 -29 -364 -71 -505 -86 l-63 -7 0 74 c0 272 119 577 308 795 193 221 517 392 902 476 141 31 363 61 491 65 46 2 46 2 53 -35z m-3514 -1858 l0 -115 -250 0 -250 0 0 -54 0 -55 220 -3 220 -3 27 -28 28 -27 3 -208 c3 -231 -1 -246 -58 -274 -31 -16 -71 -18 -377 -18 l-343 0 0 110 0 110 248 2 247 3 0 55 0 55 -217 5 -218 5 -27 28 -28 27 0 219 c0 202 2 221 19 240 11 12 33 25 50 30 17 5 183 10 369 10 l337 1 0 -115z m920 0 l0 -115 -250 0 -250 0 2 -222 3 -223 248 -3 247 -2 0 -110 0 -110 -342 0 c-307 0 -347 2 -378 18 -60 30 -60 29 -58 443 3 356 4 378 22 398 11 12 33 25 50 30 17 5 183 10 369 10 l337 1 0 -115z m841 105 c72 -20 74 -27 77 -265 l3 -213 -30 -34 -29 -33 -219 -5 -218 -5 -3 -167 -2 -168 -140 0 -140 0 0 280 0 280 250 0 250 0 0 55 0 55 -250 0 -250 0 0 115 0 115 333 0 c190 0 347 -4 368 -10z m499 -440 l0 -450 -140 0 -140 0 0 450 0 450 140 0 140 0 0 -450z m841 440 c72 -20 74 -27 77 -265 l3 -213 -30 -34 -29 -33 -219 -5 -218 -5 -3 -167 -2 -168 -140 0 -140 0 0 280 0 280 250 0 250 0 0 55 0 55 -250 0 -250 0 0 115 0 115 333 0 c190 0 347 -4 368 -10z m929 -105 l0 -115 -105 0 -105 0 0 -335 0 -335 -145 0 -145 0 0 335 0 335 -105 0 -105 0 0 115 0 115 355 0 355 0 0 -115z m-2258 -677 l67 -108 -142 0 -142 0 -48 78 c-26 42 -57 92 -68 110 l-21 33 143 -3 143 -3 68 -107z m-735 -297 c135 -90 305 -187 439 -250 l92 -43 68 27 c149 59 435 212 576 307 l58 39 102 -3 103 -3 -65 -45 c-263 -183 -541 -334 -782 -424 l-65 -25 -116 53 c-210 97 -444 235 -629 373 -49 36 -88 67 -88 69 0 2 42 4 94 4 l94 0 119 -79z"
                  })
                })
              })
            }), Object(x.jsx)("h1", {
              className: "text-center text-2xl text-white font-semibold py-3 uppercase",
              children: "Alien-Script Cloud"
            }), Object(x.jsxs)("div", {
              className: "bg-gray-lightest dark:bg-gray-dark rounded-2xl p-3 relative justify-center items-center",
              children: [Object(x.jsxs)("ul", {
                className: "flex w-full justify-center items-center mb-2 space-x-1 uppercase",
                children: [Object(x.jsx)("li", {
                  className: "flex w-full justify-center cursor-pointer py-2 px-4 rounded-lg font-semibold ".concat(0 === j ? "bg-green" : null),
                  onClick: function () {
                    return g(0);
                  },
                  children: "Login"
                }), Object(x.jsx)("li", {
                  className: "flex w-full justify-center cursor-pointer py-2 px-4 rounded-lg font-semibold ".concat(1 === j ? "bg-green" : null),
                  onClick: function () {
                    return g(1);
                  },
                  children: "Register"
                })]
              }), 0 === j ? Object(x.jsxs)("div", {
                className: "m-2 space-y-3",
                children: [Object(x.jsx)(p.a, {
                  label: "E-Mail",
                  type: "email",
                  variant: "standard",
                  fullWidth: true,
                  required: true,
                  name: "email",
                  value: v.email,
                  onChange: k
                }), Object(x.jsx)(p.a, {
                  label: "Password",
                  variant: "standard",
                  type: "password",
                  autoComplete: "current-password",
                  fullWidth: true,
                  required: true,
                  name: "password",
                  value: v.password,
                  onChange: k
                }), Object(x.jsx)("button", {
                  className: "bg-green rounded-lg py-2 font-semibold w-full",
                  onClick: Object(a.a)(l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, N(v);

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  })),
                  children: "Sign In"
                })]
              }) : Object(x.jsxs)("div", {
                className: "m-2 space-y-3",
                children: [Object(x.jsx)(p.a, {
                  label: "E-Mail",
                  type: "email",
                  variant: "standard",
                  fullWidth: true,
                  required: true,
                  name: "email",
                  value: v.email,
                  onChange: k
                }), Object(x.jsx)(p.a, {
                  label: "Password",
                  variant: "standard",
                  type: "password",
                  autoComplete: "current-password",
                  fullWidth: true,
                  required: true,
                  name: "password",
                  value: v.password,
                  onChange: k
                }), Object(x.jsx)(p.a, {
                  label: "Confirm Password",
                  variant: "standard",
                  type: "password",
                  autoComplete: "current-password",
                  fullWidth: true,
                  required: true,
                  name: "confirm",
                  value: v.confirm,
                  onChange: k
                }), Object(x.jsx)("button", {
                  className: "bg-green rounded-lg py-2 font-semibold w-full",
                  onClick: Object(a.a)(l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, S(v);

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  })),
                  children: "Sign Up"
                })]
              })]
            })]
          })
        });
      };
    }).call(this, n(28).Buffer);
  },
  261: function (e, t, n) {},
  269: function (e, t) {},
  276: function (e, t) {},
  311: function (e, t) {},
  325: function (e, t) {},
  327: function (e, t) {},
  344: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/miningtools.87e189c8.svg";
  },
  345: function (e) {
    e.exports = JSON.parse('[{"status_login":true,"status_worker":"Delay Next Mine 01:27:12","account":"2ginq.c.wam","wax":0,"tlm":30.2021,"rewards":0.6411,"land":{"id":"1099512959557","commission":50,"fill_rate":16151.395,"bucket_total":71352.5128,"planet_name":"Mountains on Kavian"},"bag_items":[[]],"last_mine":{"trx":"69fdd3f5abb115ad7a674c6ee6c08cbdcda352064cdb5668eb1130fbaf5e7d59","timestamp":"2022-12-20T13:32:15","bounty":0.1053},"total_points":{"status":false,"level_claimed":4,"next_level_points":9650,"points":4059,"class":3},"resources":{"total_resources":{"owner":"2ginq.c.wam","net_weight":"0.30000000 WAX","cpu_weight":"209.00000000 WAX","ram_bytes":3089},"cpu_next":500,"cpu_limit":{"used":8098,"available":37231,"max":45329},"net_limit":{"used":2514,"available":50617,"max":53131},"ram_limit":{"used":4211,"available":278,"max":4489}}},{"status_login":true,"status_worker":"Delay Next Mine 01:26:33","account":"3oinq.c.wam","wax":0,"tlm":38.9105,"rewards":0.6962,"land":{"id":"1099512959557","commission":50,"fill_rate":16151.395,"bucket_total":71423.5728,"planet_name":"Mountains on Kavian"},"bag_items":[[]],"last_mine":{"trx":"261b4b54604dd6a480f91e0af4e63fad6674fa72b57cbe71522ffe908392dc4b","timestamp":"2022-12-20T13:31:36","bounty":0.1326},"total_points":{"status":false,"level_claimed":0,"next_level_points":0,"points":0,"class":1},"resources":{"total_resources":{"owner":"3oinq.c.wam","net_weight":"0.10000000 WAX","cpu_weight":"200.00000000 WAX","ram_bytes":2611},"cpu_next":500,"cpu_limit":{"used":6049,"available":37415,"max":43464},"net_limit":{"used":2300,"available":15410,"max":17710},"ram_limit":{"used":3312,"available":699,"max":4011}}},{"status_login":true,"status_worker":"Delay Next Mine 01:27:37","account":"tqcny.c.wam","wax":0,"tlm":34.7678,"rewards":3.0171,"land":{"id":"1099512959557","commission":50,"fill_rate":16151.395,"bucket_total":71305.6778,"planet_name":"Mountains on Kavian"},"bag_items":[[]],"last_mine":{"trx":"9345faf28a95ab4135790707f414b0b01756ed234d85872a7b3b22e316990a16","timestamp":"2022-12-20T13:32:40","bounty":0.5552},"total_points":{"status":false,"level_claimed":0,"next_level_points":0,"points":0,"class":1},"resources":{"total_resources":{"owner":"tqcny.c.wam","net_weight":"0.10000000 WAX","cpu_weight":"200.00000000 WAX","ram_bytes":2648},"cpu_next":500,"cpu_limit":{"used":6868,"available":36596,"max":43464},"net_limit":{"used":2338,"available":15372,"max":17710},"ram_limit":{"used":3312,"available":736,"max":4048}}},{"status_login":true,"status_worker":"Delay Next Mine 01:26:25","account":".winq.c.wam","wax":0,"tlm":33.5172,"rewards":0.0598,"land":{"id":"1099512959557","commission":50,"fill_rate":16151.395,"bucket_total":71430.8403,"planet_name":"Mountains on Kavian"},"bag_items":[[]],"last_mine":{"trx":"1ba4c9c8744d17d2960727b98c7df16c1cffa70a8aa7035e11cc229e03d72840","timestamp":"2022-12-20T13:31:28","bounty":0.0339},"total_points":{"status":false,"level_claimed":4,"next_level_points":9650,"points":4150,"class":3},"resources":{"total_resources":{"owner":".winq.c.wam","net_weight":"0.30000000 WAX","cpu_weight":"209.00000000 WAX","ram_bytes":3090},"cpu_next":500,"cpu_limit":{"used":7775,"available":37645,"max":45420},"net_limit":{"used":2362,"available":50769,"max":53131},"ram_limit":{"used":4211,"available":279,"max":4490}}},{"status_login":true,"status_worker":"Delay Next Mine 01:26:24","account":"xci3q.c.wam","wax":0.73741073,"tlm":41.7487,"rewards":0.0192,"land":{"id":"1099512959557","commission":50,"fill_rate":16151.395,"bucket_total":71458.2965,"planet_name":"Mountains on Kavian"},"bag_items":[[]],"last_mine":{"trx":"3e3424cb3be6d10523056be8713887f02af51fca8ef5849a890dd39dcc47c3ea","timestamp":"2022-12-20T13:31:27","bounty":0.2445},"total_points":{"status":false,"level_claimed":4,"next_level_points":9650,"points":5187,"class":3},"resources":{"total_resources":{"owner":"xci3q.c.wam","net_weight":"0.30000000 WAX","cpu_weight":"209.00000000 WAX","ram_bytes":3546},"cpu_next":500,"cpu_limit":{"used":6985,"available":38435,"max":45420},"net_limit":{"used":2256,"available":50875,"max":53131},"ram_limit":{"used":4342,"available":604,"max":4946}}}]');
  },
  346: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/logo-new.1d5e144c.png";
  },
  347: function (e, t, n) {
    "use strict";

    n.r(t), t.default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAATm0lEQVR42uVceXhTZbqPyPyPf49/yX1mHp97vbPcGZdrQRiVUUeWtkmbdLVspZQqoig6jHQU2QoUmp606b6ke5KTrU3TpJSlgtAisikIFQcQLPVKQdA223vf9zvnpGlpaVLSgs/k4eWcnpzzfef7fe/+vV9kskh/QPZQdkf2dEWj4uHgy6/x5TNSjNqoJD23Ks6YXxjPc06lXn1SaeD6FTznVxg5vxyPcTzno2vx+J2K1zjj8d4UfcEqepbaCG6T+qC+qE/ZA/sBeGi5Vvur4EuLDZrH4g3qLJUh364yaPpU1iJIbCsHVVsZKFtLIK6lGGLNGlAY8iEOSW7Mh1gkOV6Lx+/ongRnufAMPhvPa/qU1BavzsrAtoP7Yn3jOzxQmAQDkp2dPS3ZqFYkGNUOpVHtSXSWQryjBOSWAhq0L4bP9+DRjURHL5KfwIjmBSJwkPxIXjk+Lzfku2OEe30KcwHEI1gqFwKL11L0aseSJo0CsmHaaO9y3z6KxsaHJZHJ7uiYnqjXZKIonEtwlIIKByDnGQe4RTB8BIIiiDNijUHn/PC/8RlGQfcRWNQGAwvFDkEqBuoLxfJcslGb2YHvIHBv9jR6t/vDJd1DM5PawKkSDJqeBGcFKGxaGoRHzmaZ80uDkxsEijUOJ3nQd8OIwBGJ7lMEPS9xFXESkRz7TMK+k4yanjQ9p7ov3EOiIs1GKq+dmWDMd6W0lkG8VQuiiHhHDn4KyBtrULvjLYWQiu+SyHOuLHw3iavpnScVlDnZ2dOl83gTlx6HIqJEVkauEADhpxyQOwCKNnJuVWsp0LslmQrSR3v3yHKKJL/4STIW6BJdFagXOGJp930GYzTxRL3GQTKKV6qpUDfaGCKqTzJsmkeUPNetdJWTvLtFhQoPKPlIvJTtFZBgKujebKt5JKJ6R2poqaH40QQDd5FEB0VmQP7gAjLSug2o8J1TjQUX3zHoHo0IOBLrESjonfYq0enCDgdjH3BQAuAMWcFBchhTjAW9f29v/PU9iZWkrDKQBVXIKdRwrFH9iwElGByFwEEMnDTkHEmswvZ1gs2binRKW4kACj8++045jXAYxyTBqx6MI7Hitd2jjTUkj5aOyWh9VKhoY3n1QJise79FZ0xiOgfHlG4q0oVlxiULpEI/hUyyXB+aOWYergnNN5pJxRQT9Ul9h+xHobVKxrGtaC5JH+nF35VTlqPXSA6S6Kf4QrEAMQY1LNDvhvlICyJA4bQz3yDcjwMOSaxoTBSwJvEa70ft9TPH1TfZIMhbopFzxaMsir7KuB0tMqohgddAhrUcqQxWENnw/C60wlY29vfYzkqrcMwIoZ1MSxnrN96kCcRW44sd56YxppuKXVLgeVd/hYKwVHsZdRASKEoEZHZ9Duw+2ALX/R7oHxyAfvfglNAN8XgT6ZpnADa0N8KLjTsxHOBCAmcRr/akYWy12lKmGt2/ERM8FLaju98Tby0EKRgcjzWVOEtP122DokNtcD8/XqSP2/XwfMMOSmiFHFvFmQtgqVnbg49PD8ZiGLek6jWZiRhfSNwiv0u6IJhjnqnfBoUHHeDH1n0+H/j8fvBPEXnE4yD2/lGYwIipDXcKjnm1tSJzONeI+VLKgsXz+eflzZRP4UJOHQjAbIXCQw42c8ILTx2n+Gg68B8BszEADBdO6OCNtWphsanoHDY3TWAa5BrJNV5u1CgSKQ4S0oghN0yi9GwdcUwb4xiQZhMgJBrzI6I7bht4H4FDwGxy6WFumMAIxiPfk+oog3W2ckUgXJBSkyl6zkHJZzENCeFwzLN1OaBBYLxBouTz+4Rz9nfQuUgSeMOxGH6FtePzjU5+39D3eO5G2uQyTAgYGrPSXgyvW0ocTIqkFQ7KuFNyWXSQ/OFyzDPEMZ86whYDSU/ccX08bhqtLaRN7UYRGE2YkTjnj0aXI8Wk8Wx2GYZWH1J4TRZl3inBE246gV5ibv122NHZDFcHfoLvbt+Ea7d/FOinESRep3tuDP48KpdInOLFoV4fuA29IbR3De+5/NNNWO9qhHlhmOsRKQp3ImLwVkt5VgCYZCNnV7YWM/0Sw08s9xFn5CDBoEEXXQNKo0Dxo1AKr4VZCGRNV8eowEh6w4PHvAM2eKFhJ3qohcPaUAaOBTgxBUx0EowEBheygzdMlIQxeEiVZFpK7AyU1R3lM1S8pk9hZuznm2gCKgZZkcICOpJrThQjHuVBf5NO+nPdFqg+sifAHcEiJQFD+mrHfgtzHpnOMAxvV2qb9cv6zmPrUhN5d3FJxyc3FcBia3Ff7rGOGbKV1tKoRFuxtBjG1n0mmjEbi4LXjVTYOemkKoljJEUcAMYfAGYXAkNiihMnBKl8CP1MEBiMC/0Y2viWtJTClg5jFAWMq5Lbygl1T+w9dhBYA0KWJjmPwwFR/EKkpL/xugrP/1C3FSq6RI4ZDRi8RsDsRGCeachhYMbjs8RtRHGMhD7kRi7AsfeUBqUFPowN09DZy3Y2rpK9ZtIWJrSVBQLGmAk0ShmyOBo8DoDSAK9ipPt84w6YjZzxbM0WiKrdCrPw/EW0GLRGPbc2B2q7940BDHGRwDHqA83wYt12iNWrUdcI7VFbRHNQxCguWqDPE/Qa9h0XZI1iJsY5bsJijaO6kMIAJykdtk4sriGPmyo0CB2TEkxE5UchfxRywZ91m+EVVJYrLKWw3tkAOag8i7v3Qt2JQ2D+8jNo/uo4tH79BbScPwXHey+jY3anKEkK2Y3Hrm+/Yffae05D89njwH9xFHSffwKFR9ph0wELrGurg8XmYphXvxP+WLsZnkOwYhCoBAKJOCnE7F7M0PKwJ478GVulU5as15xUNBfRTHqlAY8nLtQQsfcLTTvhCd3HkG4pwei6FUynu8Fx/jQbiPnMMaj8vBPUR1ywudMCG1xNsNaug9XNlTC/cRfoxuCYIXONHPNJCyiQW1a3VME7rTWQ3d4E2zptwGGbNZ8fBNuZz8HWg8CdOwWNJz6FbQesaPUK4Le6jfCKfhcDKJoPbTWBxq7g871yDKCzmqtOypLM2v4Ylv3i/KHpF47pkGeQOz5w1cO+f30FnZd6oOl0F+R/0gprbJUQ25QHc9Ebfq5mKzxXuw3m4DnFMPOaclnu5gm8XjmWjqFzUZR2Ilf8CTlxoTGPPfsXEk/kimfxWhSK1Vw8j9Pnw1oEjfu0DXjkys7LX4MTJ+aN5nKIqtkckhfM3A3iLjQ+BOSy1op+GeoGXziKi+SYBsmfPgLXPW6wnOrCWc2H/0WgnsZg8mWcKYUYKjDFG6QocUbYLD6DeqOqe88w7zdYx4DIMbs7rTAH+0oQdRcNUhmkhJWitZqnz4Wn0AWYpdsCaegn7UFgfnAPQhmK3F/QqoXiCQeYAjlUZSn0yWKNw4t2xouLaKZ2H7KzQXxx9RLIuDfhVcNuSLYVQbJFy8BgbRkEkkRPMKl5KIIcDmJbgGO8Xi94yQr5pfhHiIXcCFEuisZzDYK5lqodYng1I6l9apf6TMK+U6xFENW4HWQl6+Hqj/0M5Pfb6kPyhiU9w9SJifPLWJmXQR0it3DwUmMuvN/eCDe8btax/cxnbBafqP4YnkZr8bcmgWNIByWgvCchJeLAVMwj5iDJXIgO3laoO7p/3Pgn/6AdZiMwSSbBu6U2qC1KoxIXKc0FDJiX8Z3+WLsFfl+9CZaaS+DgN1+x569gmEAp1gVNuxnHhezsmTR+WaK50EcBlHxEDcpYipe45nlkzw2uBvj6/66xF+j3eqAb9UxplwtWtZSjLtgOj6MC/E31RvhvFDECgmaelPUC7GsOnm/cy8ORq9/A8e8uwelrV+BM31X4su8KnLr2LZzEa11XLsC7znp4vmkHzEdOewFnfRY+9z8I/n/pNsHj1HbNJpyIXHjbUQ01n+2DU8jBt8Tw88TVi6hEK+FltJKhiJLk2JJHnWIr9snSzMX9i0zMKbuj2mksUuHMv4CK8K91O2AbDnD/hS+h9+dbzMRSaNiLgd3Za1fh0DdnwXTqMJQcdsKmPXpYh1ZphaUYYyoOXkET+6fqLfCHys3wHwje49Wbkes2Mfo9nv8OB/8qDjoZXYJMaym876iFnL0mKEcRtKDZPnKxB85/3wt9P9+GAeyT+v729g1oP3ccPsRJm41K/yXUdwIo6nE9dsEqMe8XMp26flkKmuu4Zlb045WH4RgRW8tRX0Q1bIX/RJNNA12H1kGHfsuhC2fh7PdX2Yve8A4iWD728gM4m7f8HnbtOkbi1368AVdu9sOlmz/ApRsCXb5xHa9dh95bN+CHwZ+YyP6Iqvhn9rwAfD8q/cu3+uEMctpeVLSlh12wpqWSpRx+h+8yB7mMedtGLpwgktanvLG2QljTXH1SlmbSOuOZgyckqGL40Ff7CGUVL7j5tAY1T5T1mfhyv0UikSO/Yq29GnL2m6EYOacBHTTTqSNw6rvL4+qYo5e+Bh45rvbYAdCiOd6M3Pkm+jSJGMXPQhdgJorSb7CfJ1G8XiLdZuKYbiNxD3npNljxkoPXWgzvttY4ZcssRfcUEgzzBXjhxUgxElik8GhBjAAjJfok+R/oe8hK3ocCdAglqyRl4ViaUszKkWh85GwCWdk/2DO0EjEX23gJxWshRtIKMe5iQJg0Ytx0z0u87iTE4oM9DYWyN6xlq1IiFESOHkcJPgzJOg0k1axlLF99dO/YsRL+52F+TDP8lfQMmmLJbyHrpIjwe0rvusigdi9zVcHOTusq2Vv2qqhkWwlxig8jTP9kLczHiHW8NLtPsbTDXaJr0cGj6JosUZxZA4v48cX8XtIOVJWOwPiWt1agF+2MkmV38DOSTYV9cjFRNVmVCAox+CQf5Ely8Mb0fIOAwZCARJCJpSHyXDLs/SgfhToqo7mir+PCMaE0f4mp0E4R9kRTm+EQDTIcYGaJwExBaZonHiPr91p19kDON8NSlJVIdTCG8JPhEwMmB4HpGAUY3whgrOgObGfiFzPJ9Xro2LlT2qtgy35+KBmebat5LJnXeGLEpYTJBaYgLGBmicBMKregflmAli7LWuGxnegSl0/ExaUMXusgfyY2zAW3XzowYloTxagINjgbhQU3BWIiLdGutZUrUhwVZDn+7YBZaMzzLHNVguaAfWiJVip7oAXt13jteXKJY8VFffkk+At3AOO7z8BgGLDIooG3W6uHL+oHlz6saa7KTKUyEFREsSFE2790jmE5bn0eOnXVkH+wNfOOejwY4prpS83FPXGWAgLEOxmme6JWaTIcTvTKvXJs+11HTaBwCEbukpO45q3matVi9P4W0Y6SMNeAQwXmqTEW3AIk5nxz908ex9B61Hzjbs9KZxVwh9tUdy+lFwv0VthKXWxJxRD5nSUqsTStEoHxjQgJgsktcszs+kkDxk2lHx926IXixGzZtHHLWbe18zNTLIWeRby4phtBJSzV7AU4BqNrJkYiCRzjG+IYAobXRNj953x/Q7/l9ZZKb/vFk6yctXG88nlJ+ayxV6enoQkjRSyPYNU3rRhSbrjy6L5AUaFPjKq9IknnOw80w+y6nLDrXe5uhdA8o8LN6KgBrquNFUBru0PdjSKi97qtQqdyMd9mgC2oRyCQo+dp5TKzpQJ2fdICuQdssEuk3E4b+3s3O2+GJdYSGkTEuJVAWcSrB5JwTNv2mYUNXtlzpk9ok0W6raxb2cpq8wblvFjSEQFwaH2bElCzkKJEmhVE9HekQJEmlDZZqFpKYL2roXtk0XcYe5WEzQc1Jw48km4uuUh5YYVRPSjnIyNWihELZ6ORPJJuP4JCO3zfc9RePAH9bFtOI8DD97SRq7ij5dF0c1EvrXGj0zf4oO9uGyk+MTShCMrbDl3vwe8v/Voq9o7Ifsg8BCfTXHoxzlHCdI78HvLDU0WUc16IOiXeXgLr2movdlw+96igbLt/FdHNoiRWK23l3QkuIWxQPMCbRckkL9DvdtNO2r+3N3T/SxSf0C3QBLYXv9VSrUtzVZGGp4DT/QDstx4qFhKqrNyvop+yYk8NWh9TYHtxR6S3F49UyPR5z1WfvsRa5KEcTrS4Q/9+6h65UJ7iXWDMYx7t6/ZKj+SnTMqe61FNuejnaLvbZ75pq3AtdVQABZ7RzBnkvJORrhhraVVKHUTrsW9zAVDs8889Ta6Wc4JHS4m4Sf8Jg7F+9OKD9gbVSltZT5oTPWVrARUHeWJZ6ZpQjBQTVKImH/FLH/K775kOLJ8GV5MqxHRkNK/2UJIpGvtc1l4N7zh0Pdxhu2q0d5zSD4svFEJqlMJ2dJwyEaBzaW0VQJYgWqj5dYu/DuKTqrbkQQOMCwYraJnlznJY+lUiFrd5SPEvxLYpHZmOynWNo/pc7sHWzMCeIwwIG+E+/UzKWD+sQ1mwje1NirXNlY5lFq0nub0caD04FoNHqqMlbqLqSAXbu4BiN0qJG1UdsO/wHoWBc9MztBgWTUuxqD9S2ysgy1bq2dBW79h10KaQMm8PzA/rDN8kBw+NZN2yLtdj6521WW80V9iX2kr7lraUwWKc4cS2MjZAKgRkXKVXM85h1UwYchA3kEgq8B66dymK6DI77Xot61vXqrNv2WvIMgSy+UNiAw/aTzGNBEjY7zP8x7vKLxybsb3TGvVhh37Vu221hattVU6qjlzeWtGfYNEShzBKshb5MxzV/W/gd2/bdc71exoKc/abV9GyKS+tEAbyJLKHqa/JAOT/Afu3v35Dwm9XAAAAAElFTkSuQmCC";
  },
  348: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/eyeke.7576dcc3.png";
  },
  349: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/kavian.a16f5ca9.png";
  },
  350: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/magor.2ae878ff.png";
  },
  351: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/naron.da81904a.png";
  },
  352: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/neri.914a411a.png";
  },
  353: function (e, t, n) {
    "use strict";

    n.r(t), t.default = n.p + "static/media/veles.8ebd2c5a.png";
  },
  356: function (e, t, n) {
    "use strict";

    n.r(t);

    var a = n(1),
        r = n.n(a),
        c = n(49),
        s = n.n(c),
        o = (n(261), n(93)),
        i = function (e) {
      e && e instanceof Function && n.e(3).then(n.bind(null, 451)).then(function (t) {
        var n = t.getCLS,
            a = t.getFID,
            r = t.getFCP,
            c = t.getLCP,
            s = t.getTTFB;
        n(e), a(e), r(e), c(e), s(e);
      });
    },
        l = n(29),
        u = (n(354), n(0));

    s.a.render(Object(u.jsxs)(r.a.StrictMode, {
      children: [Object(u.jsx)(l.a, {}), Object(u.jsx)(o.e, {})]
    }), document.getElementById("root")), i();
  },
  93: function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return Je;
    }), n.d(t, "d", function () {
      return Xe;
    }), n.d(t, "b", function () {
      return De;
    }), n.d(t, "a", function () {
      return Re;
    });

    var a = n(12),
        r = n(1),
        c = n.n(r),
        s = n(429),
        o = n(224),
        i = n(445),
        l = n(7),
        u = n(13),
        d = n(10),
        m = n(22),
        p = n(204),
        x = n(4),
        h = n.n(x),
        b = n(29),
        f = n(229),
        j = n(366),
        g = n(369),
        w = n(32),
        O = n(426),
        v = n(443),
        y = n(449),
        k = n(446),
        N = n(448),
        S = n(439),
        A = n(419),
        C = n(418),
        T = n(155),
        P = n(442),
        M = n(417),
        z = n(440),
        F = n(450),
        W = n(438),
        I = n(441),
        _ = n(447),
        L = n(135),
        E = n(0);

    function D(e, t) {
      return e.filter(function (e) {
        return -1 === t.indexOf(e);
      });
    }

    var R = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #8DC53F",
      maxWidth: "90%"
    },
        X = function () {
      var e = Object(r.useContext)(Re),
          t = e.popAddAccount,
          n = e.setPopAddAccount,
          s = Object(r.useState)([]),
          o = Object(a.a)(s, 2),
          i = o[0],
          x = o[1],
          X = Object(r.useState)(0),
          J = Object(a.a)(X, 2),
          B = J[0],
          H = J[1],
          q = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: t.account,
                    email: t.email,
                    password: t.password,
                    secret: t.secret
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, fetch("/accounts", n).then(function () {
                            var e = Object(d.a)(h.a.mark(function e(n) {
                              return h.a.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    200 === n.status ? (Oe(function (e) {
                                      return e + 1;
                                    }), t(true)) : a(false);

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                              }, e);
                            }));
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          }()).catch(function (e) {
                            return a(false);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "ADD WAX : Succeed";
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "ADD WAX : Failed";
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          Y = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: t.account,
                    actions: [{
                      account: "eosio",
                      name: "delegatebw",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        from: t.account,
                        receiver: t.account,
                        stake_net_quantity: "0.20000000 WAX",
                        stake_cpu_quantity: "".concat(parseFloat(t.newResources - 1).toFixed(8), " WAX"),
                        transfer: false
                      }
                    }, {
                      account: "eosio",
                      name: "buyram",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        payer: t.account,
                        quant: "0.80000000 WAX",
                        receiver: t.account,
                        transfer: false
                      }
                    }]
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, fetch("/push_transaction", n).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? (Oe(function (e) {
                              return e + 1;
                            }), t(e)) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          U = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n, a, r;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = [], de.map(function (e) {
                  return n.push(e.id);
                }), console.log(n), a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: t.account,
                    actions: [{
                      account: "federation",
                      name: "agreeterms",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        account: t.account,
                        terms_id: 1,
                        terms_hash: "e2e07b7d7ece0d5f95d0144b5886ff74272c9873d7dbbc79bc56f047098e43ad"
                      }
                    }, {
                      account: "federation",
                      name: "setavatar",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        account: t.account,
                        avatar_id: 1
                      }
                    }, {
                      account: "federation",
                      name: "settag",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        account: t.account,
                        tag: V.newName
                      }
                    }, {
                      account: "m.federation",
                      name: "setland",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        account: t.account,
                        land_id: V.newLand
                      }
                    }]
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, fetch("/push_transaction", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? (Oe(function (e) {
                              return e + 1;
                            }), t(e)) : n(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          G = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n, a, r;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = [], de.map(function (e) {
                  return n.push(e.id);
                }), console.log(n), a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: t.account,
                    actions: [{
                      account: "m.federation",
                      name: "setbag",
                      authorization: [{
                        actor: t.account,
                        permission: "active"
                      }],
                      data: {
                        account: t.account,
                        items: n.slice(0, 3)
                      }
                    }]
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, fetch("/push_transaction", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? (Oe(function (e) {
                              return e + 1;
                            }), t(e)) : n(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          K = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n, a, r, c, s;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = false, n = false, e.prev = 2, r = function () {
                  var e = s.value,
                      t = {
                    method: "POST",
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                      "Content-type": "application/json",
                      Accept: "application/json"
                    },
                    body: JSON.stringify({
                      account: e.account,
                      email: e.username,
                      password: e.password,
                      secret: e.secret
                    })
                  },
                      n = new Promise(function () {
                    var e = Object(d.a)(h.a.mark(function e(n, a) {
                      return h.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, fetch("/accounts", t).then(function (e) {
                              200 === e.status ? n(true) : a(false);
                            }).catch(function (e) {
                              return a(false);
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  }());
                  b.b.promise(n, {
                    pending: "Promise is pending",
                    success: {
                      render: function (t) {
                        t.data;
                        return "".concat(e.account.toUpperCase(), " : Succeed");
                      }
                    },
                    error: {
                      render: function (t) {
                        t.data;
                        return "".concat(e.account.toUpperCase(), " : Failed");
                      }
                    }
                  }, {
                    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                  });
                }, c = Object(p.a)(i);

              case 5:
                return e.next = 7, c.next();

              case 7:
                if (!(t = !(s = e.sent).done)) {
                  e.next = 12;
                  break;
                }

                r();

              case 9:
                t = false, e.next = 5;
                break;

              case 12:
                e.next = 18;
                break;

              case 14:
                e.prev = 14, e.t0 = e.catch(2), n = true, a = e.t0;

              case 18:
                if (e.prev = 18, e.prev = 19, !t || null == c.return) {
                  e.next = 23;
                  break;
                }

                return e.next = 23, c.return();

              case 23:
                if (e.prev = 23, !n) {
                  e.next = 26;
                  break;
                }

                throw a;

              case 26:
                return e.finish(23);

              case 27:
                return e.finish(18);

              case 28:
              case "end":
                return e.stop();
            }
          }, e, null, [[2, 14, 18, 28], [19,, 23, 27]]);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Z = Object(r.useState)({
        account: "",
        email: "",
        password: "",
        secret: "",
        newResources: "5.7",
        newName: "",
        newLand: ""
      }),
          Q = Object(a.a)(Z, 2),
          V = Q[0],
          $ = Q[1],
          ee = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if ("" !== t) {
                  e.next = 2;
                  break;
                }

                return e.abrupt("return");

              case 2:
                return n = [], e.next = 5, fetch("https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=alien.worlds&owner=".concat(t, "&limit=200&schema_name=tool.worlds"), {
                  headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "none",
                    "sec-fetch-user": "?1",
                    "sec-gpc": "1",
                    "upgrade-insecure-requests": "1"
                  },
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: null,
                  method: "GET",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.data.forEach(function (e) {
                    console.log(e.asset_id), n.push({
                      id: e.asset_id,
                      name: e.template.immutable_data.name
                    });
                  }), me(n), re(n);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 5:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          te = Object(r.useState)([]),
          ne = Object(a.a)(te, 2),
          ae = ne[0],
          re = ne[1],
          ce = c.a.useState([]),
          se = Object(a.a)(ce, 2),
          oe = se[0],
          ie = se[1],
          le = c.a.useState([ae]),
          ue = Object(a.a)(le, 2),
          de = ue[0],
          me = ue[1],
          pe = function (e) {
        var t = e.target,
            n = t.name,
            a = t.value;
        $(function (e) {
          return Object(u.a)(Object(u.a)({}, e), {}, Object(l.a)({}, n, a));
        });
      },
          xe = function (e) {
        return function () {
          var t = oe.indexOf(e),
              n = Object(m.a)(oe);
          -1 === t ? n.push(e) : n.splice(t, 1), ie(n);
        };
      },
          he = function (e) {
        return (t = oe, n = e, t.filter(function (e) {
          return -1 !== n.indexOf(e);
        })).length;
        var t, n;
      },
          be = function (e) {
        return function () {
          var t, n;
          he(e) === e.length ? ie(D(oe, e)) : ie((t = oe, n = e, [].concat(Object(m.a)(t), Object(m.a)(D(n, t)))));
        };
      };

      Object(r.useEffect)(function () {
        ee(V.account);
      }, [V.account]);

      var fe = [{
        label: "ADD Account Wax in database"
      }, {
        label: "Need resources? Stake WAXP"
      }, {
        label: "Create an account alienworlds.io"
      }, {
        label: "Setup Tools"
      }],
          je = c.a.useState(0),
          ge = Object(a.a)(je, 2),
          we = ge[0],
          Oe = ge[1],
          ve = function () {
        Oe(function (e) {
          return e + 1;
        });
      },
          ye = function () {
        Oe(function (e) {
          return e - 1;
        });
      };

      return Object(E.jsx)(E.Fragment, {
        children: Object(E.jsx)(j.a, {
          fullWidth: true,
          open: t,
          onClose: function () {
            return n(!t);
          },
          closeAfterTransition: true,
          BackdropComponent: g.a,
          BackdropProps: {
            timeout: 500
          },
          children: Object(E.jsx)(f.a, {
            sx: R,
            className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker rounded-xl font-semibold w-full md:w-auto mx-auto outline-none p-3 overflow-auto",
            children: Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsx)("div", {
                className: "flex items-center justify-center",
                children: Object(E.jsx)("div", {
                  className: "flex items-center",
                  children: Object(E.jsx)("div", {
                    className: "block whitespace-nowrap mb-4",
                    children: Object(E.jsxs)("div", {
                      className: "flex flex-row uppercase",
                      children: [Object(E.jsx)("a", {
                        className: "cursor-pointer flex w-full px-3 border-b-8 text-md font-medium ".concat(0 === B ? "border-green text-green" : null),
                        onClick: function () {
                          return H(0);
                        },
                        children: " Single "
                      }), Object(E.jsx)("a", {
                        className: "cursor-pointer flex w-full px-3 border-b-8 text-md font-medium ".concat(1 === B ? "border-green text-green" : null),
                        onClick: function () {
                          return H(1);
                        },
                        children: " Multiple "
                      })]
                    })
                  })
                })
              }), 0 === B ? Object(E.jsx)("div", {
                className: "grid grid-cols-1 w-72",
                children: Object(E.jsxs)(f.a, {
                  sx: {
                    maxWidth: 400
                  },
                  children: [Object(E.jsx)(z.a, {
                    activeStep: we,
                    orientation: "vertical",
                    children: fe.map(function (e, t) {
                      return Object(E.jsxs)(F.a, {
                        children: [Object(E.jsx)(W.a, {
                          optional: 3 === t ? Object(E.jsx)(L.a, {
                            variant: "caption",
                            children: "Last step"
                          }) : null,
                          children: e.label
                        }), Object(E.jsx)(I.a, {
                          children: 0 === t ? Object(E.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [Object(E.jsx)(w.a, {
                              type: "text",
                              variant: "standard",
                              label: "Account Wax",
                              name: "account",
                              value: V.account,
                              onChange: pe,
                              size: "small"
                            }), Object(E.jsx)(w.a, {
                              type: "email",
                              variant: "standard",
                              label: "E-Mail Wax",
                              name: "email",
                              value: V.email,
                              onChange: pe,
                              size: "small"
                            }), Object(E.jsx)(w.a, {
                              type: "password",
                              variant: "standard",
                              label: "Password Wax",
                              name: "password",
                              value: V.password,
                              onChange: pe,
                              size: "small"
                            }), Object(E.jsx)(w.a, {
                              type: "text",
                              variant: "standard",
                              label: "Secret Key",
                              name: "secret",
                              value: V.secret,
                              onChange: pe,
                              size: "small"
                            }), Object(E.jsx)(f.a, {
                              sx: {
                                mb: 2
                              },
                              children: Object(E.jsxs)("div", {
                                children: [Object(E.jsx)(P.a, {
                                  variant: "contained",
                                  onClick: function () {
                                    return q(V);
                                  },
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Submit"
                                }), Object(E.jsx)(P.a, {
                                  onClick: ve,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Skip"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ye,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Back"
                                })]
                              })
                            })]
                          }) : 1 === t ? Object(E.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [Object(E.jsx)(w.a, {
                              type: "number",
                              variant: "standard",
                              label: "Need resources? Stake WAXP",
                              name: "newResources",
                              value: V.newResources,
                              onChange: pe,
                              size: "small"
                            }), Object(E.jsxs)("div", {
                              style: {
                                fontSize: 8
                              },
                              children: [Object(E.jsxs)("p", {
                                children: ["CPU : ", Number(V.newResources > 0 ? V.newResources - 1 : 0).toFixed(8), " WAX"]
                              }), Object(E.jsxs)("p", {
                                children: ["NET : ", Number(V.newResources > 0 ? .2 : 0).toFixed(8), " WAX"]
                              }), Object(E.jsxs)("p", {
                                children: ["RAM : ", Number(V.newResources > 0 ? .8 : 0).toFixed(8), " WAX"]
                              })]
                            }), Object(E.jsx)(f.a, {
                              sx: {
                                mb: 2
                              },
                              children: Object(E.jsxs)("div", {
                                children: [Object(E.jsx)(P.a, {
                                  variant: "contained",
                                  onClick: function () {
                                    return Y(V);
                                  },
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Submit"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ve,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Skip"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ye,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Back"
                                })]
                              })
                            })]
                          }) : 2 === t ? Object(E.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [Object(E.jsx)(w.a, {
                              type: "text",
                              variant: "standard",
                              label: "Name",
                              name: "newName",
                              value: V.newName,
                              onChange: pe,
                              size: "small",
                              fullWidth: true
                            }), Object(E.jsx)(w.a, {
                              type: "number",
                              variant: "standard",
                              label: "Land ID",
                              name: "newLand",
                              value: V.newLand,
                              onChange: pe,
                              size: "small",
                              fullWidth: true
                            }), Object(E.jsx)(f.a, {
                              sx: {
                                mb: 2
                              },
                              children: Object(E.jsxs)("div", {
                                children: [Object(E.jsx)(P.a, {
                                  variant: "contained",
                                  onClick: function () {
                                    return U(V);
                                  },
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Submit"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ve,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Skip"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ye,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Back"
                                })]
                              })
                            })]
                          }) : Object(E.jsxs)("div", {
                            children: [Object(E.jsxs)("div", {
                              className: "flex flex-col w-full space-y-1",
                              children: [Object(E.jsx)("p", {
                                className: "text-center text-lg",
                                children: "Set Mining tools"
                              }), Object(E.jsx)(v.a, {
                                container: true,
                                spacing: 2,
                                justifyContent: "center",
                                alignItems: "center",
                                children: Object(E.jsx)(v.a, {
                                  item: true,
                                  children: (n = "List Tools", a = de, Object(E.jsxs)(k.a, {
                                    children: [Object(E.jsx)(N.a, {
                                      sx: {
                                        px: 2,
                                        py: 1
                                      },
                                      avatar: Object(E.jsx)(T.a, {
                                        onClick: be(a),
                                        checked: he(a) === a.length && 0 !== a.length,
                                        indeterminate: he(a) !== a.length && 0 !== he(a),
                                        disabled: 0 === a.length,
                                        inputProps: {
                                          "aria-label": "all items selected"
                                        }
                                      }),
                                      title: n,
                                      subheader: "".concat(he(a), "/").concat(a.length, " selected")
                                    }), Object(E.jsx)(M.a, {}), Object(E.jsxs)(y.a, {
                                      sx: {
                                        width: 350,
                                        height: 230,
                                        bgcolor: "background.paper",
                                        overflow: "auto"
                                      },
                                      dense: true,
                                      component: "div",
                                      role: "list",
                                      children: [a.map(function (e) {
                                        var t = "transfer-list-all-item-".concat(e.id, "-label");
                                        return Object(E.jsxs)(S.a, {
                                          role: "listitem",
                                          button: true,
                                          onClick: xe(e),
                                          children: [Object(E.jsx)(C.a, {
                                            children: Object(E.jsx)(T.a, {
                                              checked: -1 !== oe.indexOf(e),
                                              tabIndex: -1,
                                              disableRipple: true,
                                              inputProps: {
                                                "aria-labelledby": t
                                              }
                                            })
                                          }), Object(E.jsx)(A.a, {
                                            id: t,
                                            primary: e.name,
                                            secondary: e.id
                                          })]
                                        }, e);
                                      }), Object(E.jsx)(S.a, {})]
                                    })]
                                  }))
                                })
                              })]
                            }), Object(E.jsx)(f.a, {
                              sx: {
                                mb: 2
                              },
                              children: Object(E.jsxs)("div", {
                                children: [Object(E.jsx)(P.a, {
                                  variant: "contained",
                                  onClick: function () {
                                    return G(V);
                                  },
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Submit"
                                }), Object(E.jsx)(P.a, {
                                  disabled: 0 === t,
                                  onClick: ye,
                                  sx: {
                                    mt: 1,
                                    mr: 1
                                  },
                                  children: "Back"
                                })]
                              })
                            })]
                          })
                        })]
                      }, e.label);
                      var n, a;
                    })
                  }), we === fe.length && Object(E.jsxs)(_.a, {
                    square: true,
                    elevation: 0,
                    sx: {
                      p: 3
                    },
                    children: [Object(E.jsx)(L.a, {
                      children: "All steps completed - you're finished"
                    }), Object(E.jsx)(P.a, {
                      onClick: function () {
                        Oe(0);
                      },
                      sx: {
                        mt: 1,
                        mr: 1
                      },
                      children: "Reset"
                    })]
                  })]
                })
              }) : Object(E.jsxs)("div", {
                className: "flex flex-col w-96",
                children: [Object(E.jsx)(O.a, {
                  fullWidth: true,
                  className: "".concat(0 === i.length ? "block" : "hidden", " text-xs"),
                  onChange: function (e) {
                    var t = e.target.value;
                    x(JSON.parse(t));
                  },
                  maxRows: 20,
                  placeholder: "Input Json File",
                  defaultValue: JSON.stringify([{
                    account: "xxxx.wam",
                    secret: "XXXX XXXX XXXX XXXX",
                    username: "xxxx@xxxx.com",
                    password: "1234"
                  }, {
                    account: "yyyy.wam",
                    secret: "YYYY YYYY YYYY YYYY",
                    username: "yyyy@yyyy.com",
                    password: "1234"
                  }, {
                    account: "zzzz.wam",
                    secret: "ZZZZ ZZZZ ZZZZ ZZZZ",
                    username: "zzzz@zzzz.com",
                    password: "1234"
                  }], null, 4),
                  style: {
                    padding: 5,
                    marginBottom: 10
                  }
                }), Object(E.jsxs)("div", {
                  className: "text-xs",
                  children: ["Multiple Add : ", i.length, " Account", Object(E.jsx)("div", {
                    className: "flex flex-col max-h-52 mb-2 overflow-y-scroll",
                    children: i.map(function (e) {
                      return Object(E.jsxs)("li", {
                        children: ["Account : ", e.account]
                      }, e.account);
                    })
                  })]
                }), Object(E.jsx)("button", {
                  className: "flex w-full items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1.5 px-6 text-xs leading-normal text-white bg-green hover:text-gray-darker focus:bg-green-dark active:bg-green-dark hover:shadow-inner",
                  onClick: function () {
                    return K(V);
                  },
                  children: "Submit"
                })]
              })]
            })
          })
        })
      });
    },
        J = n(208),
        B = n(223),
        H = n(67),
        q = n.n(H),
        Y = n(214),
        U = n.n(Y),
        G = n(215),
        K = n.n(G),
        Z = n(216),
        Q = n.n(Z);

    q.a.extend(U.a), q.a.extend(Q.a), q.a.extend(K.a);
    var V = q.a,
        $ = n(72),
        ee = n(430),
        te = n(431),
        ne = n(432),
        ae = n(433),
        re = n(434),
        ce = n(444),
        se = n(18),
        oe = n(128),
        ie = n(428),
        le = n(218),
        ue = n(435),
        de = n(217),
        me = n.n(de);
    V.extend(me.a);

    var pe = function (e) {
      var t = e.info,
          n = e.account,
          c = e.usdt,
          s = function (e) {
        var t = e.chartData;
        return {
          labels: t.labels,
          datasets: [{
            type: "bar",
            label: "SUM IN HR. [TLM] ",
            backgroundColor: "rgba(141, 197, 63,1)",
            borderColor: "rgba(141, 197, 63,1)",
            data: t.data,
            fill: true
          }]
        };
      }(t),
          o = Object(r.useContext)(xe).setResHistory,
          i = Object(r.useState)({
        imgTools: [],
        miningPower: 0,
        chargeTime: 0
      }),
          l = Object(a.a)(i, 2),
          m = l[0],
          p = l[1],
          x = Object(r.useState)(0),
          b = Object(a.a)(x, 2),
          f = b[0],
          j = b[1],
          g = Object(r.useState)(0),
          O = Object(a.a)(g, 2),
          v = O[0],
          y = O[1],
          k = Object(r.useState)(0),
          N = Object(a.a)(k, 2),
          S = N[0],
          A = N[1],
          C = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var a, r, c;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                a = ["https://api.wax.greeneosio.com", "https://wax.blokcrafters.io", "https://waxapi.ledgerwise.io", "https://api.waxsweden.org"], r = 0;

              case 2:
                if (!(r < a.length)) {
                  e.next = 16;
                  break;
                }

                return e.prev = 3, e.delegateYield(h.a.mark(function e() {
                  var c, s, i, l, u, x, b, f;
                  return h.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return c = [], s = [], e.next = 4, fetch("".concat(a[r], "/v2/history/get_actions?account=").concat(n, "&skip=0&limit=100&sort=desc&transfer.to=").concat(n, "&transfer.from=m.federation&after=").concat(V(t).subtract(1, "day").format("YYYY-MM-DDT17:00:00.000[Z]"), "&before=").concat(V(t).format("YYYY-MM-DDT16:59:59.999[Z]")));

                      case 4:
                        return i = e.sent, e.next = 7, i.json();

                      case 7:
                        if (!(l = e.sent).actions) {
                          e.next = 19;
                          break;
                        }

                        if ((u = l.actions).forEach(function (e, t) {
                          var n = l.actions[t < u.length - 1 ? t + 1 : t].act.data.amount,
                              a = e.act.data.amount;
                          s.push(a), c.push({
                            id: l.actions.length - t,
                            timestamp: e.timestamp + "Z",
                            amount: a,
                            change: Number(100 * (a - n) / n)
                          });
                        }), u.length > 0 && (j(Math.max.apply(Math, s)), y(Math.min.apply(Math, s)), A(s.reduce(function (e, t) {
                          return e + t;
                        }, 0)), o(c)), x = [], b = [], f = [], 0 !== m.imgTools.length) {
                          e.next = 18;
                          break;
                        }

                        return e.next = 18, fetch("https://wax.greymass.com/v1/chain/get_table_rows", {
                          method: "POST",
                          headers: {
                            accept: "*/*",
                            "accept-language": "en-US,en;q=0.9",
                            "content-type": "text/plain;charset=UTF-8",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "cross-site",
                            "sec-gpc": "1"
                          },
                          referrer: "https://wax.bloks.io/",
                          referrerPolicy: "strict-origin-when-cross-origin",
                          mode: "cors",
                          credentials: "omit",
                          body: JSON.stringify({
                            json: true,
                            code: "m.federation",
                            scope: "m.federation",
                            table: "miners",
                            lower_bound: n,
                            upper_bound: n
                          })
                        }).then(function (e) {
                          return e.json();
                        }).then(function () {
                          var e = Object(d.a)(h.a.mark(function e(t) {
                            var a, r;
                            return h.a.wrap(function (e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.next = 2, fetch("https://api.atomic.greeneosio.com/atomicmarket/v1/assets/".concat(t.rows[0].current_land));

                                case 2:
                                  return a = e.sent, e.next = 5, a.json();

                                case 5:
                                  return (r = e.sent).success && x.push(r), e.next = 9, fetch("https://wax.greymass.com/v1/chain/get_table_rows", {
                                    method: "POST",
                                    headers: {
                                      accept: "*/*",
                                      "accept-language": "en-US,en;q=0.9",
                                      "content-type": "text/plain;charset=UTF-8",
                                      "sec-fetch-dest": "empty",
                                      "sec-fetch-mode": "cors",
                                      "sec-fetch-site": "cross-site",
                                      "sec-gpc": "1"
                                    },
                                    referrer: "https://wax.bloks.io/",
                                    referrerPolicy: "strict-origin-when-cross-origin",
                                    mode: "cors",
                                    credentials: "omit",
                                    body: JSON.stringify({
                                      json: true,
                                      code: "m.federation",
                                      scope: "m.federation",
                                      table: "bags",
                                      table_key: "",
                                      lower_bound: n,
                                      upper_bound: n,
                                      index_position: 1,
                                      key_type: "",
                                      reverse: false,
                                      show_payer: false
                                    })
                                  }).then(function (e) {
                                    return e.json();
                                  }).then(function () {
                                    var e = Object(d.a)(h.a.mark(function e(t) {
                                      var n, a, r, c, s, o, i, l, u, d, m, j, g, w;
                                      return h.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            w = function (e) {
                                              var t = ~~e % 60;
                                              return "".concat(~~(e % 3600 / 60), " min ").concat((t < 10 ? "0" : "") + t, " sec");
                                            }, n = t.rows[0].items, a = ["https://api.atomic.greeneosio.com"], r = Object(se.a)(n), e.prev = 4, r.s();

                                          case 6:
                                            if ((c = r.n()).done) {
                                              e.next = 30;
                                              break;
                                            }

                                            s = c.value, o = 0;

                                          case 9:
                                            if (!(o < a.length)) {
                                              e.next = 28;
                                              break;
                                            }

                                            return e.prev = 10, e.next = 13, fetch("".concat(a[o], "/atomicmarket/v1/assets/").concat(s));

                                          case 13:
                                            return i = e.sent, e.next = 16, i.json();

                                          case 16:
                                            if (!(l = e.sent).success) {
                                              e.next = 20;
                                              break;
                                            }

                                            return x.push(l), e.abrupt("break", 28);

                                          case 20:
                                            e.next = 25;
                                            break;

                                          case 22:
                                            e.prev = 22, e.t0 = e.catch(10), console.error(e.t0.message);

                                          case 25:
                                            o++, e.next = 9;
                                            break;

                                          case 28:
                                            e.next = 6;
                                            break;

                                          case 30:
                                            e.next = 35;
                                            break;

                                          case 32:
                                            e.prev = 32, e.t1 = e.catch(4), r.e(e.t1);

                                          case 35:
                                            return e.prev = 35, r.f(), e.finish(35);

                                          case 38:
                                            for (x.map(function (e, t) {
                                              return f.push(e.data.data.img), e.data.data.img;
                                            }), x.map(function (e, t) {
                                              return b.push(e.data.data.ease / 10), e.data.data.ease;
                                            }), u = 0, d = 1; d < b.length; d++) u += b[d];

                                            for (m = {
                                              delay: 0,
                                              difficulty: 0,
                                              ease: 0
                                            }, j = 65535, g = 1; g < x.length; g++) x[g].data.data.delay < j && (j = x[g].data.data.delay), m.delay += x[g].data.data.delay, m.difficulty += x[g].data.data.difficulty, m.ease += x[g].data.data.ease / 10;

                                            3 === x.length ? m.delay -= parseInt(j / 2) : 4 === x.length && (m.delay -= j), m.delay *= x[0].data.data.delay / 10, m.difficulty += x[0].data.data.difficulty, p({
                                              imgTools: f,
                                              miningPower: (u * b[0]).toFixed(1),
                                              chargeTime: w(m.delay)
                                            });

                                          case 49:
                                          case "end":
                                            return e.stop();
                                        }
                                      }, e, null, [[4, 32, 35, 38], [10, 22]]);
                                    }));
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  }()).catch(function (e) {
                                    return console.error("error:" + e);
                                  });

                                case 9:
                                case "end":
                                  return e.stop();
                              }
                            }, e);
                          }));
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        }()).catch(function (e) {
                          return console.error("error:" + e);
                        });

                      case 18:
                        return e.abrupt("return", {
                          v: undefined
                        });

                      case 19:
                      case "end":
                        return e.stop();
                    }
                  }, e);
                })(), "t0", 5);

              case 5:
                if ("object" !== typeof (c = e.t0)) {
                  e.next = 8;
                  break;
                }

                return e.abrupt("return", c.v);

              case 8:
                e.next = 13;
                break;

              case 10:
                e.prev = 10, e.t1 = e.catch(3), console.error(e.t1.message);

              case 13:
                r++, e.next = 2;
                break;

              case 16:
              case "end":
                return e.stop();
            }
          }, e, null, [[3, 10]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          T = Object(r.useState)(new Date()),
          P = Object(a.a)(T, 2),
          M = P[0],
          z = P[1];

      return Object(r.useEffect)(function () {
        C(M);
      }, [M]), Object(E.jsx)(E.Fragment, {
        children: Object(E.jsxs)("div", {
          className: "flex flex-col w-full overflow-hidden space-y-2 md:flex-row md:space-x-2 md:space-y-0",
          children: [Object(E.jsx)("div", {
            className: "w-full md:w-7/12",
            children: Object(E.jsx)(oe.a, {
              data: s,
              options: {
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    callbacks: {
                      label: function (e) {
                        return "SUN : " + Number(e.parsed.y).toFixed(4) + " TLM";
                      },
                      title: function (e) {
                        return "TIME :  [ ".concat(e[0].label, " ]");
                      },
                      labelTextColor: function (e) {
                        return "#B5ED67";
                      }
                    },
                    titleAlign: "center",
                    displayColors: false
                  }
                },
                layout: {
                  padding: 3
                },
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: false,
                      text: "Time."
                    },
                    ticks: {
                      color: "#659D17"
                    }
                  },
                  y: {
                    display: true,
                    title: {
                      display: false,
                      text: "value"
                    },
                    ticks: {
                      color: "#659D17",
                      callback: function (e, t, n) {
                        return Number(e).toFixed(4) + " TLM";
                      }
                    }
                  }
                }
              }
            })
          }), Object(E.jsxs)("div", {
            className: "md:w-5/12 md:flex md:justify-center w-full flex-col",
            children: [Object(E.jsx)(le.a, {
              dateAdapter: ie.a,
              children: Object(E.jsx)(ue.a, {
                label: "Select Date",
                value: M,
                onChange: function (e) {
                  z(e);
                },
                renderInput: function (e) {
                  return Object(E.jsx)(w.a, Object(u.a)({
                    variant: "standard",
                    fullWidth: true,
                    size: "small"
                  }, e));
                }
              })
            }), Object(E.jsxs)("div", {
              className: "flex w-full text-xs",
              children: [Object(E.jsxs)("div", {
                className: "flex w-6/12",
                children: [Object(E.jsx)("div", {
                  className: "flex-1 pr-3 text-left font-semibold",
                  children: "High"
                }), Object(E.jsx)("div", {
                  className: "px-3 text-right",
                  children: Number.parseFloat(f).toFixed(4)
                })]
              }), Object(E.jsxs)("div", {
                className: "flex w-6/12",
                children: [Object(E.jsx)("div", {
                  className: "flex-1 px-3 text-left font-semibold whitespace-nowrap",
                  children: "Total TLM"
                }), Object(E.jsx)("div", {
                  className: "flex-1 pl-3 text-right",
                  children: Number.parseFloat(S).toFixed(4)
                })]
              })]
            }), Object(E.jsxs)("div", {
              className: "flex w-full text-xs",
              children: [Object(E.jsxs)("div", {
                className: "flex w-6/12",
                children: [Object(E.jsx)("div", {
                  className: "flex-1 pr-3 text-left font-semibold",
                  children: "Low"
                }), Object(E.jsx)("div", {
                  className: "px-3 text-right",
                  children: Number.parseFloat(v).toFixed(4)
                })]
              }), Object(E.jsxs)("div", {
                className: "flex w-6/12",
                children: [Object(E.jsx)("div", {
                  className: "flex-1 px-3 text-left font-semibold whitespace-nowrap",
                  children: "Total USD"
                }), Object(E.jsx)("div", {
                  className: "pl-3 text-right",
                  children: Number(Number(S) * Number(c)).toFixed(3)
                })]
              })]
            }), Object(E.jsx)("div", {
              className: "flex justify-center space-x-2 my-2",
              children: m.imgTools.map(function (e, t) {
                return Object(E.jsx)("img", {
                  className: "h-16 md:h-20",
                  src: "https://ipfs.io/ipfs/".concat(e),
                  alt: e
                }, t);
              })
            }), Object(E.jsxs)("div", {
              className: "flex justify-center space-x-6 my-2 text-xs",
              children: [Object(E.jsxs)("div", {
                className: "font-light flex flex-row space-x-3",
                children: ["Charge Time: ", Object(E.jsx)("div", {
                  className: "font-semibold pl-2",
                  children: m.chargeTime
                })]
              }), Object(E.jsxs)("div", {
                className: "font-light flex flex-row space-x-3",
                children: ["Mining Power: ", Object(E.jsxs)("div", {
                  className: "font-semibold pl-2",
                  children: [m.miningPower, "%"]
                })]
              })]
            })]
          })]
        })
      });
    },
        xe = c.a.createContext(),
        he = {
      position: "absolute",
      top: "50%",
      left: "50%",
      maxWidth: "100%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #8DC53F"
    };

    function be(e) {
      var t = Object(r.useState)({
        chartData: {
          labels: [],
          data: []
        }
      }),
          n = Object(a.a)(t, 2),
          c = n[0],
          s = n[1],
          o = Object(r.useContext)(Fe),
          i = o.TLMUSDT,
          l = o.showModalGetHistory,
          d = o.setShowModalGetHistory,
          m = Object(r.useState)([]),
          p = Object(a.a)(m, 2),
          x = p[0],
          h = p[1];
      return Object(r.useEffect)(function () {
        var e,
            t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            n = x.reduce(function (e, t) {
          var n = V.utc(t.timestamp).local().format("HH");
          return e.set(n, e.get(n) ? e.get(n).concat(t.amount) : [t.amount]), e;
        }, new Map()),
            r = Object(se.a)(n);

        try {
          for (r.s(); !(e = r.n()).done;) {
            var c = e.value,
                o = Object(a.a)(c, 2),
                i = o[0],
                l = o[1];
            t[Number(i)] = Number(l.reduce(function (e, t) {
              return e + t;
            }, 0)).toFixed(4);
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }

        s({
          chartData: {
            labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
            data: t
          }
        });
      }, [x]), Object(E.jsx)(E.Fragment, {
        children: Object(E.jsx)(j.a, {
          open: l.show,
          onClose: function () {
            return d(Object(u.a)(Object(u.a)({}, l), {}, {
              show: !l.show
            }));
          },
          closeAfterTransition: true,
          BackdropComponent: g.a,
          BackdropProps: {
            timeout: 500
          },
          children: Object(E.jsx)(f.a, {
            sx: he,
            className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker rounded-xl w-full md:w-auto p-1 overflow-auto",
            children: Object(E.jsxs)(xe.Provider, {
              value: {
                resHistory: x,
                setResHistory: h
              },
              children: [Object(E.jsx)("div", {
                className: "w-full",
                children: Object(E.jsx)("div", {
                  className: "flex dark:border-gray-darkest",
                  children: Object(E.jsx)(pe, {
                    info: c,
                    account: l.wax,
                    usdt: i
                  })
                })
              }), 0 === x.length ? null : Object(E.jsx)("div", {
                className: "shadow overflow-y-auto border-2 border-gray-darker dark:border-gray-light rounded-lg",
                style: {
                  maxHeight: 350
                },
                children: Object(E.jsxs)("table", {
                  className: "min-w-full border-collapse text-center",
                  children: [Object(E.jsx)("thead", {
                    className: "bg-gray-darker dark:bg-gray-light text-gray-lightest dark:text-gray-darkest uppercase ",
                    children: Object(E.jsxs)("tr", {
                      children: [Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-center text-xs font-bold tracking-wider",
                        children: "#"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-3/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "Mining Attempts"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "TLM"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "USD"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: " w-1/12 py-3 text-xs font-bold tracking-wider",
                        children: "% Change"
                      })]
                    })
                  }), Object(E.jsx)("tbody", {
                    className: "bg-gray-lighter  dark:bg-gray-darkest divide-y divide-gray-200",
                    children: x.map(function (e, t) {
                      var n = e.change > 0 ? "green" : 0 === e.change ? "gray-light" : "danger";
                      return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-green-600 text-xs",
                          children: e.id
                        }), Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-green-600 text-xs",
                          children: V.utc(e.timestamp).local().format("YYYY-MM-DD HH:mm:ss")
                        }), Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-green-600 text-xs",
                          children: Number(e.amount).toFixed(4)
                        }), Object(E.jsxs)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-green-600 text-xs",
                          children: ["$ ", Number(Number(e.amount).toFixed(4) * Number(i)).toFixed(3)]
                        }), Object(E.jsx)("td", {
                          className: "flex flex-nowrap px-1 border-r-2 border-green-600 text-xs",
                          children: Object(E.jsxs)("span", {
                            className: "bg-".concat(n, " bg-opacity-60 dark:text-gray-light text-gray-darkest text-xs rounded py-0.5 m-1 w-full font-medium"),
                            children: [e.change > 0 ? "+" : null, Number(e.change).toFixed(4), "%"]
                          })
                        })]
                      }, t);
                    })
                  })]
                })
              })]
            })
          })
        })
      });
    }

    var fe = n(156),
        je = n(51),
        ge = n(370),
        we = n(365),
        Oe = n(72),
        ve = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #8DC53F",
      maxHeight: "95%",
      maxWidth: "95%"
    };

    function ye(e, t) {
      return e.filter(function (e) {
        return -1 === t.indexOf(e);
      });
    }

    function ke(e, t) {
      return e.filter(function (e) {
        return -1 !== t.indexOf(e);
      });
    }

    function Ne() {
      var e,
          t = Object(r.useState)(false),
          s = Object(a.a)(t, 2),
          o = s[0],
          i = s[1],
          p = Object(r.useContext)(Fe),
          x = p.swapPrice,
          O = p.setSwapPrice,
          P = p.waxPriceRam,
          z = p.setWaxPriceRam,
          F = p.data24Hr,
          W = p.setData24Hr,
          I = p.pushTrx,
          _ = p.setPushTrx,
          L = Object(r.useState)(0),
          D = Object(a.a)(L, 2),
          R = D[0],
          X = D[1],
          J = Object(r.useState)([]),
          B = Object(a.a)(J, 2),
          H = B[0],
          q = B[1],
          Y = Object(r.useState)([]),
          U = Object(a.a)(Y, 2),
          G = U[0],
          K = U[1],
          Z = Object(r.useState)([]),
          Q = Object(a.a)(Z, 2),
          $ = Q[0],
          ee = Q[1],
          te = c.a.useState([]),
          ne = Object(a.a)(te, 2),
          ae = ne[0],
          re = ne[1],
          ce = c.a.useState([H]),
          se = Object(a.a)(ce, 2),
          ie = se[0],
          le = se[1],
          ue = ke(ae, ie),
          de = Object(r.useState)({
        receive: "",
        quantity: 0,
        memo: "",
        typeTransfer: "wax",
        typeStake: "cpu",
        type: "stake",
        bags: [],
        land: "",
        rewards: ""
      }),
          me = Object(a.a)(de, 2),
          pe = me[0],
          xe = me[1],
          he = Object(r.useState)([]),
          be = Object(a.a)(he, 2),
          Ne = be[0],
          Se = be[1],
          Ae = Object(r.useState)({
        tlm: 0,
        wax: 0
      }),
          Ce = Object(a.a)(Ae, 2),
          Te = Ce[0],
          Pe = Ce[1],
          Me = function (e) {
        var t = e.target,
            n = t.name,
            a = t.value;
        xe(function (e) {
          return Object(u.a)(Object(u.a)({}, e), {}, Object(l.a)({}, n, a));
        });
      },
          ze = function (e) {
        xe(function (t) {
          return Object(u.a)(Object(u.a)({}, t), {}, {
            quantity: e
          });
        });
      },
          We = Object(r.useMemo)(function () {
        return (pe.quantity * x.tlm * 0.9969480000000001).toFixed(8);
      }, [pe.quantity, x.tlm]),
          Ie = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n, a, r;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, n = "https://wax.api.atomicassets.io/atomicassets/v1/assets?owner=".concat(t, "&limit=1000"), e.next = 4, Oe(n);

              case 4:
                return a = e.sent, e.next = 7, a.json();

              case 7:
                r = e.sent, Se(r.data), e.next = 14;
                break;

              case 11:
                e.prev = 11, e.t0 = e.catch(0), console.log(e.t0.message);

              case 14:
              case "end":
                return e.stop();
            }
          }, e, null, [[0, 11]]);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          _e = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                Oe("https://wax.pink.gg/v1/chain/get_currency_balance", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    code: "eosio.token",
                    account: t,
                    symbol: null
                  }),
                  method: "POST"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  Pe(function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      wax: e.length > 0 ? e[0] : "0.00000000 WAX"
                    });
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                }), Oe("https://wax.pink.gg/v1/chain/get_currency_balance", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    code: "alien.worlds",
                    account: t,
                    symbol: null
                  }),
                  method: "POST"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  Pe(function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      tlm: e.length > 0 ? e[0] : "0.0000 TLM"
                    });
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          Le = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = [], e.next = 3, Oe("https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=alien.worlds&owner=".concat(t, "&limit=200&schema_name=tool.worlds"), {
                  headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "none",
                    "sec-fetch-user": "?1",
                    "sec-gpc": "1",
                    "upgrade-insecure-requests": "1"
                  },
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: null,
                  method: "GET",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.data.forEach(function (e) {
                    console.log(e.asset_id), n.push({
                      id: e.asset_id,
                      name: e.template.immutable_data.name
                    });
                  }), le(n), q(n);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          Ee = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("https://wax.pink.gg/v1/chain/get_table_rows", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "m.federation",
                    table: "minerclaim",
                    lower_bound: t,
                    upper_bound: t,
                    index_position: 1,
                    key_type: "",
                    limit: 10,
                    reverse: false,
                    show_payer: false
                  }),
                  method: "POST",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.rows[0] ? ee(e) : ee({
                    rows: [{
                      miner: "xxxxx.x.wam",
                      amount: "0.0000 TLM",
                      timestamp: "1970-01-01T00:00:00"
                    }],
                    more: false,
                    next_key: ""
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          De = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("https://wax.pink.gg/v1/chain/get_account", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    account_name: t
                  }),
                  method: "POST",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  K(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          Re = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("https://wax.alcor.exchange/api/pools/0/charts?period=24H").then(function (e) {
                  return e.json();
                }).then(function (e) {
                  console.log(e);
                  var t = [],
                      n = [];
                  e.forEach(function (e) {
                    t.push(V.utc(e._id).local().format("HH:mm")), n.push(e.price);
                  }), W({
                    labels: t,
                    datasets: [{
                      label: "LTM / WAX ",
                      data: n,
                      fill: true,
                      backgroundColor: "rgba(141, 197, 63,0.2)",
                      borderColor: "rgba(141, 197, 63,1)"
                    }]
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Xe = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("https://wax.pink.gg/v1/chain/get_table_rows", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    json: true,
                    code: "alcorammswap",
                    scope: "alcorammswap",
                    table: "pairs",
                    table_key: "",
                    lower_bound: 0,
                    upper_bound: 0,
                    index_position: 1,
                    key_type: "",
                    limit: 1,
                    reverse: false,
                    show_payer: false
                  }),
                  method: "POST",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  O({
                    tlm: (parseFloat(e.rows[0].pool1.quantity) / parseFloat(e.rows[0].pool2.quantity)).toFixed(8),
                    wax: (parseFloat(e.rows[0].pool2.quantity) / parseFloat(e.rows[0].pool1.quantity)).toFixed(8)
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Je = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("https://wax.pink.gg/v1/chain/get_table_rows", {
                  headers: {
                    accept: "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "text/plain;charset=UTF-8",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "sec-gpc": "1"
                  },
                  referrer: "https://wax.alcor.exchange/",
                  referrerPolicy: "strict-origin-when-cross-origin",
                  body: JSON.stringify({
                    json: true,
                    code: "eosio",
                    scope: "eosio",
                    table: "rammarket",
                    lower_bound: "",
                    upper_bound: "",
                    index_position: 1,
                    key_type: "",
                    limit: 10,
                    reverse: false,
                    show_payer: false
                  }),
                  method: "POST",
                  mode: "cors"
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  z({
                    bytes: (parseFloat(e.rows[0].quote.balance) / parseFloat(e.rows[0].base.balance)).toFixed(8)
                  });
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Be = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = [], ue.map(function (e) {
                  return t.push(e.id);
                }), console.log(t), n = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "m.federation",
                      name: "setbag",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        account: I.account,
                        items: t.slice(0, 3)
                      }
                    }]
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", n).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? t(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          He = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "eosio",
                      name: "refund",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        owner: I.account
                      }
                    }]
                  })
                }, n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? n(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          qe = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = [], "stake" !== pe.type) {
                  e.next = 14;
                  break;
                }

                e.t0 = pe.typeStake, e.next = "cpu" === e.t0 ? 5 : "net" === e.t0 ? 7 : "ram" === e.t0 ? 9 : 11;
                break;

              case 5:
                return t.push({
                  account: "eosio",
                  name: "delegatebw",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    from: I.account,
                    receiver: I.account,
                    stake_net_quantity: "0.00000000 WAX",
                    stake_cpu_quantity: "".concat(parseFloat(pe.quantity).toFixed(8), " WAX"),
                    transfer: false
                  }
                }), e.abrupt("break", 12);

              case 7:
                return t.push({
                  account: "eosio",
                  name: "delegatebw",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    from: I.account,
                    receiver: I.account,
                    stake_net_quantity: "".concat(parseFloat(pe.quantity).toFixed(8), " WAX"),
                    stake_cpu_quantity: "0.00000000 WAX",
                    transfer: false
                  }
                }), e.abrupt("break", 12);

              case 9:
                return t.push({
                  account: "eosio",
                  name: "buyram",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    payer: I.account,
                    quant: "".concat(parseFloat(pe.quantity).toFixed(8), " WAX"),
                    receiver: I.account,
                    transfer: false
                  }
                }), e.abrupt("break", 12);

              case 11:
                return e.abrupt("break", 12);

              case 12:
                e.next = 24;
                break;

              case 14:
                e.t1 = pe.typeStake, e.next = "cpu" === e.t1 ? 17 : "net" === e.t1 ? 19 : "ram" === e.t1 ? 21 : 23;
                break;

              case 17:
                return t.push({
                  account: "eosio",
                  name: "undelegatebw",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    from: I.account,
                    receiver: I.account,
                    unstake_net_quantity: "0.00000000 WAX",
                    unstake_cpu_quantity: "".concat(parseFloat(pe.quantity).toFixed(8), " WAX"),
                    transfer: false
                  }
                }), e.abrupt("break", 24);

              case 19:
                return t.push({
                  account: "eosio",
                  name: "undelegatebw",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    from: I.account,
                    receiver: I.account,
                    unstake_net_quantity: "".concat(parseFloat(pe.quantity).toFixed(8), " WAX"),
                    unstake_cpu_quantity: "0.00000000 WAX",
                    transfer: false
                  }
                }), e.abrupt("break", 24);

              case 21:
                return t.push({
                  account: "eosio",
                  name: "sellram",
                  authorization: [{
                    actor: I.account,
                    permission: "active"
                  }],
                  data: {
                    account: I.account,
                    bytes: parseInt(pe.quantity / P.bytes),
                    transfer: false
                  }
                }), e.abrupt("break", 24);

              case 23:
                return e.abrupt("break", 24);

              case 24:
                n = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: t
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", n).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? t(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 27:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ye = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "m.federation",
                      name: "setland",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        account: I.account,
                        land_id: pe.land
                      }
                    }]
                  })
                }, n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? n(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ue = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Oe("/account", {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  }
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.account.forEach(function (e) {
                    var t = {
                      method: "POST",
                      headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-type": "application/json",
                        Accept: "application/json"
                      },
                      body: JSON.stringify({
                        account: e,
                        actions: [{
                          account: "m.federation",
                          name: "setland",
                          authorization: [{
                            actor: e,
                            permission: "active"
                          }],
                          data: {
                            account: e,
                            land_id: pe.land
                          }
                        }]
                      })
                    },
                        n = new Promise(function () {
                      var e = Object(d.a)(h.a.mark(function e(n, a) {
                        return h.a.wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                                return e.json();
                              }).then(function (e) {
                                console.log(e), e.transaction_id ? n(e) : a(e);
                              }).catch(function (e) {
                                return a(e);
                              });

                            case 2:
                            case "end":
                              return e.stop();
                          }
                        }, e);
                      }));
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    }());
                    b.b.promise(n, {
                      pending: "Promise is pending",
                      success: {
                        render: function (t) {
                          var n = t.data;
                          return "".concat(e, " Succeed : ").concat(n.transaction_id.slice(0, 10));
                        }
                      },
                      error: {
                        render: function (t) {
                          var n = t.data;
                          return 401 === n.GetSingError ? "Failed : Token expired please new login" : "".concat(e, " Failed : ").concat(n.DetailsError[0].what);
                        }
                      }
                    }, {
                      theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                    });
                  });
                }).catch(function (e) {
                  return console.log(e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ge = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "alien.worlds",
                      name: "transfer",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        from: I.account,
                        to: "alcorammswap",
                        quantity: "".concat(parseFloat(pe.quantity).toFixed(4), " TLM"),
                        memo: "".concat((pe.quantity * x.tlm * .995).toFixed(8), " WAX@eosio.token")
                      }
                    }]
                  })
                }, n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? n(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ke = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "wax" === pe.typeTransfer ? "eosio.token" : "alien.worlds",
                      name: "transfer",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        from: I.account,
                        to: pe.receive,
                        quantity: "wax" === pe.typeTransfer ? "".concat(parseFloat(pe.quantity).toFixed(8), " WAX") : "".concat(parseFloat(pe.quantity).toFixed(4), " TLM"),
                        memo: pe.memo
                      }
                    }]
                  })
                }, n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? n(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ze = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "m.federation",
                      name: "claimmines",
                      authorization: [{
                        permission: "active",
                        actor: I.account
                      }],
                      data: {
                        receiver: I.account
                      }
                    }]
                  })
                }, n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? n(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Qe = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n, a, r;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = [], n = document.getElementById("show-nfts"), n.querySelectorAll("input:checked").forEach(function (e) {
                  t.push(e.id);
                }), 0 !== t.length) {
                  e.next = 6;
                  break;
                }

                return e.abrupt("return");

              case 6:
                a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "atomicassets",
                      name: "transfer",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        from: I.account,
                        to: pe.receive,
                        asset_ids: t,
                        memo: ""
                      }
                    }]
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? t(e) : n(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 9:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Ve = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, n, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = [], Ne.forEach(function (e) {
                  console.log(e.asset_id), t.push(e.asset_id);
                }), 0 !== t.length) {
                  e.next = 4;
                  break;
                }

                return e.abrupt("return");

              case 4:
                n = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: I.account,
                    actions: [{
                      account: "atomicassets",
                      name: "transfer",
                      authorization: [{
                        actor: I.account,
                        permission: "active"
                      }],
                      data: {
                        from: I.account,
                        to: pe.receive,
                        asset_ids: t,
                        memo: ""
                      }
                    }]
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Oe("/push_transaction", n).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            console.log(e), e.transaction_id ? t(e) : a(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      var t = e.data;
                      return "Succeed : ".concat(t.transaction_id.slice(0, 10));
                    }
                  },
                  error: {
                    render: function (e) {
                      var t = e.data;
                      return 401 === t.GetSingError ? "Failed : Token expired please new login" : "Failed : ".concat(t.DetailsError[0].what);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();

      Object(r.useEffect)(function () {
        return I.show && (Re(), Le(I.account), _e(I.account), Ie(I.account), De(I.account), Ee(I.account), Je(), e = setInterval(Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Xe();

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })), 1e3)), function () {
          return clearInterval(e);
        };
      }, [I]), Object(r.useEffect)(function () {
        (0 === R && I.show || 1 === R && I.show) && _e(I.account);
      }, [R]);

      var $e,
          et,
          tt,
          nt = function (e) {
        return function () {
          var t = ae.indexOf(e),
              n = Object(m.a)(ae);
          -1 === t ? n.push(e) : n.splice(t, 1), re(n);
        };
      },
          at = function (e) {
        return ke(ae, e).length;
      },
          rt = function (e) {
        return function () {
          var t, n;
          at(e) === e.length ? re(ye(ae, e)) : re((t = ae, n = e, [].concat(Object(m.a)(t), Object(m.a)(ye(n, t)))));
        };
      };

      return Object(E.jsx)(E.Fragment, {
        children: Object(E.jsx)(j.a, {
          open: I.show,
          onClose: function () {
            return _(Object(u.a)(Object(u.a)({}, !I), {}, {
              show: !I.show
            }));
          },
          closeAfterTransition: true,
          BackdropComponent: g.a,
          BackdropProps: {
            timeout: 500
          },
          children: Object(E.jsxs)(f.a, {
            sx: ve,
            className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker rounded-xl font-semibold p-3 w-full md:w-auto overflow-auto",
            children: [Object(E.jsx)("div", {
              children: Object(E.jsxs)("nav", {
                className: "bg-transparent",
                children: [Object(E.jsx)("div", {
                  className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: Object(E.jsxs)("div", {
                    className: "flex items-center justify-center h-16",
                    children: [Object(E.jsx)("div", {
                      className: "flex items-center",
                      children: Object(E.jsx)("div", {
                        className: "hidden whitespace-nowrap md:block",
                        children: Object(E.jsxs)("div", {
                          className: "flex flex-row uppercase",
                          children: [Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(0 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(0);
                            },
                            children: " SWAP TLM / WAX "
                          }), Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(1 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(1);
                            },
                            children: " TRANSFER "
                          }), Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(2 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(2);
                            },
                            children: " RESOURCES "
                          }), Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(3 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(3);
                            },
                            children: " REWARDS CLAIMS [TLM] "
                          }), Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(4 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(4);
                            },
                            children: " SET TOOLS "
                          }), Object(E.jsx)("a", {
                            className: "cursor-pointer flex w-full px-3 py-2 border-b-8 text-md font-medium ".concat(5 === R ? "border-green text-green" : null),
                            onClick: function () {
                              return X(5);
                            },
                            children: " NFTs "
                          })]
                        })
                      })
                    }), Object(E.jsx)("div", {
                      className: "flex md:hidden text-lg cursor-pointer border-2 border-green rounded-lg px-9",
                      children: Object(E.jsx)("span", {
                        className: "inline-flex items-center justify-center",
                        onClick: function () {
                          return i(!o);
                        },
                        children: 0 === R ? "SWAP TLM / WAX" : 1 === R ? "TRANSFER WAX" : 2 === R ? "RESOURCES" : 3 === R ? "REWARDS CLAIMS [TLM]" : 4 === R ? "SET TOOLS" : "NFTs"
                      })
                    })]
                  })
                }), Object(E.jsx)(we.a, {
                  show: o,
                  enter: "transition ease-out duration-100 transform",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "transition ease-in duration-75 transform",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: function (e) {
                    return Object(E.jsx)("div", {
                      className: "md:hidden",
                      id: "mobile-menu",
                      children: Object(E.jsxs)("div", {
                        ref: e,
                        className: "px-2 whitespace-nowrap pt-2 pb-3 space-y-1 sm:px-3",
                        onClick: function () {
                          return i(!o);
                        },
                        children: [Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(0 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(0);
                          },
                          children: " SWAP TLM / WAX "
                        }), Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(1 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(1);
                          },
                          children: " TRANSFER "
                        }), Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(2 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(2);
                          },
                          children: " RESOURCES "
                        }), Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(3 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(3);
                          },
                          children: " REWARDS CLAIMS [TLM] "
                        }), Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(4 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(4);
                          },
                          children: " SET TOOLS "
                        }), Object(E.jsx)("a", {
                          className: "cursor-pointer flex w-full text-md font-medium border-b-0 ".concat(5 === R ? "border-green border-b-4" : null),
                          onClick: function () {
                            return X(5);
                          },
                          children: " NFTs "
                        })]
                      })
                    });
                  }
                })]
              })
            }), 0 === R ? Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsxs)("h1", {
                className: "font-bold",
                children: ["Swap TLM / WAX [ ", Te.tlm, " ]"]
              }), 0 === F.length ? null : Object(E.jsx)(oe.b, {
                data: F,
                options: {
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      callbacks: {
                        label: function (e) {
                          return "1 WAX : " + Number(e.parsed.y).toFixed(8) + " TLM";
                        },
                        title: function (e) {
                          return "TIME : " + e[0].label;
                        },
                        labelTextColor: function (e) {
                          return "#B5ED67";
                        }
                      },
                      titleAlign: "center",
                      displayColors: false
                    }
                  },
                  layout: {
                    padding: 0
                  },
                  scales: {
                    x: {
                      display: true,
                      title: {
                        display: false,
                        text: "Time."
                      },
                      ticks: {}
                    },
                    y: {
                      display: true,
                      title: {
                        display: false,
                        text: "value"
                      },
                      ticks: {
                        callback: function (e, t, n) {
                          return Number(e).toFixed(4) + " TLM";
                        }
                      }
                    }
                  }
                }
              }), Object(E.jsxs)("div", {
                className: "flex flex-col sm:justify-center sm:space-x-6 sm:flex-row",
                children: [Object(E.jsxs)("div", {
                  className: "flex flex-nowrap items-center order-2 sm:order-none space-x-2",
                  children: [Object(E.jsx)("img", {
                    src: n(199).default,
                    alt: "TLM",
                    style: {
                      width: "1rem",
                      height: "1rem"
                    }
                  }), Object(E.jsxs)("span", {
                    className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-sm",
                    children: [" 1 WAX = ", Number.parseFloat(x.wax).toFixed(8), " TLM"]
                  })]
                }), Object(E.jsxs)("div", {
                  className: "flex flex-nowrap items-center order-3 sm:order-none space-x-2",
                  children: [Object(E.jsx)("img", {
                    src: n(200).default,
                    alt: "WAX",
                    style: {
                      width: "1rem",
                      height: "1rem"
                    }
                  }), Object(E.jsxs)("span", {
                    className: "whitespace-nowrap flex-grow sm:flex-grow-0 text-sm",
                    children: [" 1 TLM = ", Number.parseFloat(x.tlm).toFixed(8), " WAX"]
                  })]
                })]
              }), Object(E.jsxs)("div", {
                className: "flex flex-col space-y-2 md:space-y-0 md:space-x-3 md:flex-row mt-2",
                children: [Object(E.jsxs)("div", {
                  className: "flex flex-row w-full md:w-6/12",
                  children: [Object(E.jsx)("input", {
                    className: "flex w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest",
                    type: "text",
                    placeholder: "Amount",
                    name: "quantity",
                    value: pe.quantity,
                    onChange: function (e) {
                      var t = e.target.value;
                      /^\d+(\.\d{0,8})?$/.test(t) && Me({
                        target: {
                          name: "quantity",
                          value: t
                        }
                      });
                    }
                  }), Object(E.jsx)("button", {
                    className: "bg-gray-light hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-4 h-8 w-24 -ml-24 rounded-lg",
                    onClick: function () {
                      return ze(parseFloat(Te.tlm));
                    },
                    children: "MAX"
                  })]
                }), Object(E.jsxs)("button", {
                  className: "flex w-full md:w-6/12 items-center justify-center h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-4 rounded-lg",
                  onClick: function () {
                    return Ge();
                  },
                  children: ["Swap ", Number(We).toFixed(8), " WAX"]
                })]
              })]
            }) : 1 === R ? Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsx)("h1", {
                className: "font-bold whitespace-nowrap",
                children: "TRANSFER"
              }), Object(E.jsxs)("div", {
                className: "flex flex-col space-y-2 mt-2",
                children: [Object(E.jsx)("input", {
                  className: "w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest ",
                  type: "text",
                  placeholder: "Receive Wax ID",
                  name: "receive",
                  value: pe.receive,
                  onChange: Me
                }), Object(E.jsxs)("div", {
                  className: "flex flex-row space-x-2",
                  children: [Object(E.jsx)("input", {
                    className: "w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest ",
                    type: "text",
                    placeholder: "Amount Of ".concat("wax" === pe.typeTransfer ? "WAX (WAXP)" : "Alien Worlds (TLM)"),
                    name: "quantity",
                    value: pe.quantity,
                    onChange: function (e) {
                      var t = e.target.value;
                      /^\d+(\.\d{0,8})?$/.test(t) && Me({
                        target: {
                          name: "quantity",
                          value: t
                        }
                      });
                    }
                  }), Object(E.jsx)("button", {
                    className: "bg-gray-light hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-4 h-8 w-24 -ml-0 rounded-lg",
                    onClick: function () {
                      return ze(parseFloat("wax" === pe.typeTransfer ? Te.wax : Te.tlm));
                    },
                    children: "MAX"
                  }), Object(E.jsxs)("select", {
                    className: "bg-gray-light hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-2 h-8 -ml-84 rounded-lg outline-none",
                    name: "typeTransfer",
                    onChange: (tt = "typeTransfer", function (e) {
                      xe(Object(u.a)(Object(u.a)({}, pe), {}, Object(l.a)({}, tt, e.target.value)));
                    }),
                    children: [Object(E.jsx)("option", {
                      className: "py-1",
                      value: "wax",
                      children: Te.wax
                    }), Object(E.jsx)("option", {
                      className: "py-1",
                      value: "tlm",
                      children: Te.tlm
                    })]
                  })]
                }), Object(E.jsx)("input", {
                  className: "w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest ",
                  type: "text",
                  placeholder: "Memo",
                  name: "memo",
                  value: pe.memo,
                  onChange: Me
                }), Object(E.jsxs)("button", {
                  className: "w-full h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold border-2 border-gray-darkest px-4 rounded-lg",
                  onClick: function () {
                    return Ke();
                  },
                  children: ["Transfer ", pe.quantity, " ", "wax" === pe.typeTransfer ? "WAX" : "TLM", " To ", pe.receive]
                })]
              })]
            }) : 2 === R ? Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsx)("h1", {
                className: "font-bold",
                children: "Network Resources"
              }), Object(E.jsxs)("div", {
                className: "mt-4 mx-auto",
                children: [Object(E.jsxs)("div", {
                  className: "flex flex-col w-full space-y-2 md:space-y-0 md:space-x-3 md:flex-row mt-2",
                  children: [Object(E.jsx)(ge.a, {
                    variant: "standard",
                    fullWidth: true,
                    children: Object(E.jsxs)(w.a, {
                      select: true,
                      label: "Stake : ".concat("cpu" === pe.typeStake ? G.total_resources.cpu_weight : "net" === pe.typeStake ? G.total_resources.net_weight : "".concat(Number(G.total_resources.ram_bytes * P.bytes).toFixed(8), " WAX")),
                      name: "typeStake",
                      value: pe.typeStake,
                      onChange: Me,
                      size: "small",
                      children: [Object(E.jsx)(je.a, {
                        value: "cpu",
                        children: "CPU"
                      }), Object(E.jsx)(je.a, {
                        value: "net",
                        children: "NET"
                      }), Object(E.jsx)(je.a, {
                        value: "ram",
                        children: "RAM"
                      })]
                    })
                  }), Object(E.jsx)(ge.a, {
                    variant: "standard",
                    fullWidth: true,
                    children: Object(E.jsxs)(w.a, {
                      select: true,
                      label: "Type",
                      name: "type",
                      value: pe.type,
                      onChange: Me,
                      size: "small",
                      children: [Object(E.jsx)(je.a, {
                        value: "stake",
                        children: "Stake"
                      }), Object(E.jsx)(je.a, {
                        value: "unstake",
                        children: "UnStake"
                      })]
                    })
                  }), Object(E.jsx)(ge.a, {
                    variant: "outlined",
                    fullWidth: true,
                    children: Object(E.jsx)(w.a, {
                      label: "Quantity",
                      name: "quantity",
                      type: "text",
                      value: pe.quantity,
                      onChange: function (e) {
                        var t = e.target.value;
                        /^\d+(\.\d{0,8})?$/.test(t) && Me({
                          target: {
                            name: "quantity",
                            value: t
                          }
                        });
                      },
                      InputProps: {
                        endAdornment: Object(E.jsx)(fe.a, {
                          position: "end",
                          children: "WAX"
                        })
                      },
                      size: "small"
                    })
                  })]
                }), Object(E.jsxs)("div", {
                  className: "flex flex-row mt-2 space-x-3",
                  children: [Object(E.jsx)("button", {
                    className: "bg-gray-lighter w-full hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-green px-4 h-8 rounded-lg",
                    onClick: function () {
                      return qe();
                    },
                    children: "Submit"
                  }), Object(E.jsx)("button", {
                    className: "bg-gray-lighter w-full hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-green px-4 h-8 rounded-lg",
                    onClick: function () {
                      return He();
                    },
                    children: "Refund"
                  })]
                })]
              })]
            }) : 3 === R ? Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsx)("h1", {
                className: "font-bold",
                children: "Rewards Claims"
              }), Object(E.jsx)("div", {
                className: "mt-4 mx-auto",
                children: Object(E.jsxs)("div", {
                  className: "flex flex-col space-y-2 md:space-y-0 md:space-x-3 md:flex-row mt-2",
                  children: [Object(E.jsx)("input", {
                    className: "w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest",
                    type: "text",
                    placeholder: "Rewards Claims",
                    name: "rewards",
                    value: $.rows[0].amount,
                    readOnly: true
                  }), Object(E.jsx)("button", {
                    className: "w-full h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold border-2 border-gray-darkest px-4 rounded-lg",
                    onClick: function () {
                      return Ze(false);
                    },
                    children: "Submit Claims"
                  })]
                })
              })]
            }) : 4 === R ? Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsx)("h5", {
                children: "Set Land"
              }), Object(E.jsxs)("div", {
                className: "flex flex-col space-y-2 md:space-y-0 md:space-x-3 md:flex-row mt-2",
                children: [Object(E.jsx)("input", {
                  className: "w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest",
                  type: "text",
                  placeholder: "ID Land",
                  name: "land",
                  value: pe.land,
                  onChange: Me
                }), Object(E.jsx)("button", {
                  className: "w-full h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold border-2 border-gray-darkest px-4 rounded-lg",
                  onClick: function () {
                    return Ye(false);
                  },
                  children: "LAND SINGLE"
                }), Object(E.jsx)("button", {
                  className: "w-full h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold border-2 border-gray-darkest px-4 rounded-lg",
                  onClick: function () {
                    return Ue(true);
                  },
                  children: "LAND ALL"
                })]
              }), Object(E.jsx)("h5", {
                children: "Set Bags"
              }), Object(E.jsx)(v.a, {
                container: true,
                justifyContent: "center",
                alignItems: "center",
                children: Object(E.jsx)(v.a, {
                  fullWidth: true,
                  item: true,
                  children: ($e = "Set Tools", et = ie, Object(E.jsxs)(k.a, {
                    children: [Object(E.jsx)(N.a, {
                      sx: {
                        px: 2,
                        py: 1
                      },
                      avatar: Object(E.jsx)(T.a, {
                        onClick: rt(et),
                        checked: at(et) === et.length && 0 !== et.length,
                        indeterminate: at(et) !== et.length && 0 !== at(et),
                        disabled: 0 === et.length,
                        inputProps: {
                          "aria-label": "all items selected"
                        }
                      }),
                      title: $e,
                      subheader: "".concat(at(et), "/").concat(et.length, " selected")
                    }), Object(E.jsx)(M.a, {}), Object(E.jsxs)(y.a, {
                      sx: {
                        width: 250,
                        height: 230,
                        bgcolor: "background.paper",
                        overflow: "auto"
                      },
                      dense: true,
                      component: "div",
                      role: "list",
                      children: [et.map(function (e) {
                        var t = "transfer-list-all-item-".concat(e.id, "-label");
                        return Object(E.jsxs)(S.a, {
                          role: "listitem",
                          button: true,
                          onClick: nt(e),
                          children: [Object(E.jsx)(C.a, {
                            children: Object(E.jsx)(T.a, {
                              checked: -1 !== ae.indexOf(e),
                              tabIndex: -1,
                              disableRipple: true,
                              inputProps: {
                                "aria-labelledby": t
                              }
                            })
                          }), Object(E.jsx)(A.a, {
                            id: t,
                            primary: e.name,
                            secondary: e.id
                          })]
                        }, e);
                      }), Object(E.jsx)(S.a, {})]
                    })]
                  }))
                })
              }), Object(E.jsx)("button", {
                className: "w-full h-8 bg-gray-lightest hover:bg-green hover:text-gray-lightest text-gray-darkest font-bold border-2 border-gray-darkest px-4 rounded-lg mt-2",
                onClick: function () {
                  return Be();
                },
                children: "SET Mining Equipment"
              })]
            }) : Object(E.jsxs)("div", {
              className: "relative justify-center items-center",
              children: [Object(E.jsxs)("div", {
                className: "flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row",
                children: [Object(E.jsx)("input", {
                  className: "flex w-full h-8 pl-3 pr-8 text-sm bg-gray-lightest placeholder-gray-dark border-2 border-gray-darkest rounded-lg focus:outline-none text-gray-darkest",
                  type: "text",
                  placeholder: "WAX Account Receive NFTs",
                  name: "receive",
                  value: pe.receive,
                  onChange: Me
                }), Object(E.jsx)("button", {
                  className: "bg-gray-light hover:bg-orange hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-4 h-8 w-full md:w-38 ml-0 md:-ml-24 rounded-lg",
                  onClick: function () {
                    return Qe();
                  },
                  children: "TRANSFER SELECT"
                }), Object(E.jsx)("button", {
                  className: "bg-gray-light hover:bg-orange hover:text-gray-lightest text-gray-darkest font-bold text-sm border-2 border-gray-darkest px-4 h-8 w-full md:w-38 ml-0 md:-ml-24 rounded-lg",
                  onClick: function () {
                    return Ve();
                  },
                  children: "TRANSFER ALL"
                })]
              }), Ne.length > 0 ? Object(E.jsx)("section", {
                id: "show-nfts",
                className: "p-2 max-h-96 overflow-y-auto",
                children: Object(E.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center",
                  children: Ne.map(function (e, t) {
                    return Object(E.jsxs)("div", {
                      children: [Object(E.jsxs)("div", {
                        className: "relative bg-gray-light dark:bg-gray-darkest rounded-t-2xl flex flex-col items-center justify-center pt-8",
                        children: [Object(E.jsxs)("div", {
                          className: "absolute text-xs top-0 right-0 m-1 bg-gray-dark rounded-3xl px-2 py-1 opacity-50",
                          children: ["#", e.template_mint]
                        }), Object(E.jsx)("div", {
                          className: "absolute text-xs top-0 left-0 m-1 ",
                          children: Object(E.jsxs)("div", {
                            className: "flex items-center",
                            children: [Object(E.jsx)("input", {
                              type: "checkbox",
                              id: e.asset_id,
                              value: e.asset_id,
                              defaultValue: "yes",
                              className: "opacity-0 absolute h-6 w-6"
                            }), Object(E.jsx)("div", {
                              className: "bg-transparent border-2 rounded-xl border-orange w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500",
                              children: Object(E.jsx)("svg", {
                                className: "fill-current hidden w-3 h-3 text-orange pointer-events-none",
                                version: "1.1",
                                viewBox: "0 0 17 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: Object(E.jsx)("g", {
                                  fill: "none",
                                  fillRule: "evenodd",
                                  children: Object(E.jsx)("g", {
                                    transform: "translate(-9 -11)",
                                    fill: "#FF684D",
                                    fillRule: "nonzero",
                                    children: Object(E.jsx)("path", {
                                      d: "m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                                    })
                                  })
                                })
                              })
                            })]
                          })
                        }), Object(E.jsx)("img", {
                          src: "https://cloudflare-ipfs.com/ipfs/".concat(e.data.img),
                          style: {
                            height: 180
                          },
                          alt: e.data.name
                        }), Object(E.jsx)("div", {
                          className: "text-sm whitespace-nowrap",
                          children: e.data.name
                        }), Object(E.jsxs)("div", {
                          className: "text-xs",
                          children: ["ID : ", e.asset_id]
                        })]
                      }), Object(E.jsx)("div", {
                        className: " bg-gray-lightest dark:bg-gray-dark rounded-b-2xl flex flex-row space-x-2 items-center justify-center",
                        children: Object(E.jsx)("a", {
                          className: "flex w-full h-full items-center justify-center rounded-xl py-1.5 m-1.5 text-xs hover:text-orange border-2 border-orange",
                          href: "https://wax.atomichub.io/explorer/asset/".concat(e.asset_id),
                          target: "_blank",
                          rel: "noreferrer",
                          children: "Details"
                        })
                      })]
                    }, e.asset_id);
                  })
                })
              }) : Object(E.jsx)("div", {})]
            })]
          })
        })
      });
    }

    var Se = n(72),
        Ae = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #8DC53F"
    };

    function Ce(e) {
      var t = Object(r.useContext)(Fe),
          n = t.showModalSetTime,
          a = t.setShowModalSetTime,
          c = function (e) {
        var t = e.target,
            n = t.name,
            r = t.value;
        a(function (e) {
          return Object(u.a)(Object(u.a)({}, e), {}, Object(l.a)({}, n, Number(r)));
        });
      },
          s = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t, a;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                t = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    account: n.account,
                    actions: {
                      start: n.start,
                      stop: n.stop
                    }
                  })
                }, a = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Se("/working", t).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            return n(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(a, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "Succeed Setup";
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "Failed Setup";
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }();

      return Object(E.jsx)(E.Fragment, {
        children: Object(E.jsx)(j.a, {
          open: n.show,
          onClose: function () {
            return a(!n.show);
          },
          closeAfterTransition: true,
          BackdropComponent: g.a,
          BackdropProps: {
            timeout: 500
          },
          children: Object(E.jsxs)(f.a, {
            sx: Ae,
            className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker rounded-xl max-w-7xl p-3 space-y-3 flex flex-col ",
            children: [Object(E.jsx)("h1", {
              children: "Setup Working"
            }), Object(E.jsx)(w.a, {
              label: "Work Script",
              type: "number",
              value: n.start,
              defaultValue: 0,
              size: "small",
              name: "start",
              onChange: c,
              InputLabelProps: {
                shrink: true
              },
              InputProps: {
                endAdornment: Object(E.jsx)(fe.a, {
                  position: "end",
                  children: "Hour"
                })
              }
            }), Object(E.jsx)(w.a, {
              label: "Standby Script",
              type: "number",
              defaultValue: 0,
              value: n.stop,
              size: "small",
              name: "stop",
              onChange: c,
              InputLabelProps: {
                shrink: true
              },
              InputProps: {
                endAdornment: Object(E.jsx)(fe.a, {
                  position: "end",
                  children: "Hour"
                })
              }
            }), Object(E.jsxs)("div", {
              className: "grid grid-cols-2 gap-4 text-xs",
              children: [Object(E.jsx)("span", {
                className: "text-left",
                children: "Work Time"
              }), Object(E.jsxs)("span", {
                className: "w-full bg-green rounded-lg text-right text-gray-darkest px-2",
                children: [" ", V.utc(n.strStart).local().format("YYYY-MM-DD HH:mm:ss")]
              }), Object(E.jsx)("span", {
                className: "text-left",
                children: "Standby Time"
              }), Object(E.jsxs)("span", {
                className: "w-full bg-warning rounded-lg text-right text-gray-darkest px-2",
                children: [" ", V.utc(n.strStop).local().format("YYYY-MM-DD HH:mm:ss")]
              })]
            }), Object(E.jsx)("button", {
              className: "flex w-full items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-lg py-1.5 px-6 text-xs leading-normal text-white bg-green hover:text-gray-darker focus:bg-green-dark active:bg-green-dark hover:shadow-inner",
              onClick: function () {
                return s();
              },
              children: "Submit"
            })]
          })
        })
      });
    }

    var Te = n(109),
        Pe = n(72),
        Me = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #8DC53F",
      maxHeight: "95%",
      maxWidth: "95%"
    };

    function ze() {
      var e = Object(r.useContext)(Fe),
          t = e.showModalMiningTools,
          n = e.setShowModalMiningTools,
          c = Object(r.useState)({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: true,
        12: true,
        13: true,
        14: true,
        15: true,
        16: true,
        17: true,
        18: true,
        19: true,
        20: true,
        21: true,
        22: true,
        23: true
      }),
          s = Object(a.a)(c, 2),
          o = s[0],
          i = s[1],
          m = function (e) {
        i(function (t) {
          return Object(u.a)(Object(u.a)({}, t), {}, Object(l.a)({}, e.target.name, e.target.checked));
        });
      },
          p = function (e) {
        var t = e.target,
            a = t.name,
            r = t.value;
        n(function (e) {
          return Object(u.a)(Object(u.a)({}, e), {}, Object(l.a)({}, a, r));
        });
      },
          x = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var n,
              a,
              r,
              c = arguments;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = c.length > 0 && undefined !== c[0] && c[0], a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    setAll: n,
                    account: t.wax,
                    actions: o
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Pe("/working", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            return t(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "Succeed Setup";
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "Failed Setup";
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          O = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var n,
              a,
              r,
              c = arguments;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = c.length > 0 && undefined !== c[0] && c[0], a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    setAll: n,
                    account: t.wax,
                    actions: {
                      mine_bucket: {
                        status: t.status,
                        tlm: t.mine_bucket,
                        time_out: t.time_out
                      }
                    }
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Pe("/mine_bucket", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            return t(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "Succeed Setup";
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "Failed Setup";
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          v = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var n,
              a,
              r,
              c = arguments;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = c.length > 0 && undefined !== c[0] && c[0], a = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-type": "application/json",
                    Accept: "application/json"
                  },
                  body: JSON.stringify({
                    setAll: n,
                    account: t.wax,
                    actions: {
                      mine_delay: {
                        status: t.statusDelay,
                        time: t.timeDelay
                      }
                    }
                  })
                }, r = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(t, n) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, Pe("/mine_delay", a).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            return t(e);
                          }).catch(function (e) {
                            return n(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(r, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "Succeed Setup";
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "Failed Setup";
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          y = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Pe("/mine_bucket/".concat(t), {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.mine_bucket && n(function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      mine_bucket: e.mine_bucket.tlm,
                      status: e.mine_bucket.status,
                      time_out: e.mine_bucket.time_out
                    });
                  });
                }).catch(function (e) {
                  return console.error(e.message);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          k = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Pe("/mine_delay/".concat(t), {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.mine_delay && n(function (t) {
                    return Object(u.a)(Object(u.a)({}, t), {}, {
                      statusDelay: e.mine_delay.status,
                      timeDelay: e.mine_delay.time
                    });
                  });
                }).catch(function (e) {
                  return console.error(e.message);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          N = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Pe("/working/".concat(t), {
                  method: "GET",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                  }
                }).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  e.working && (e.working.start > -1 ? console.log("working old data !!!") : i(e.working));
                }).catch(function (e) {
                  return console.error(e.message);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }();

      return Object(r.useEffect)(function () {
        t.show && (y(t.wax), N(t.wax), k(t.wax));
      }, [t.show]), Object(E.jsx)(E.Fragment, {
        children: Object(E.jsx)(j.a, {
          open: t.show,
          onClose: function () {
            return n(Object(u.a)(Object(u.a)({}, t), {}, {
              show: !t.show
            }));
          },
          closeAfterTransition: true,
          BackdropComponent: g.a,
          BackdropProps: {
            timeout: 500
          },
          children: Object(E.jsx)(f.a, {
            sx: Me,
            className: "text-gray-darker dark:text-gray-light bg-gray-lighter dark:bg-gray-darker outline-none p-3 rounded-xl font-semibold w-full md:w-auto overflow-auto",
            children: Object(E.jsx)("div", {
              className: "relative justify-center items-center",
              children: Object(E.jsxs)("div", {
                className: "flex flex-col w-full rounded-lg bg-green mt-2 p-2 space-y-2",
                children: [Object(E.jsx)("p", {
                  className: "text-left text-lg text-gray-darker",
                  children: "Setup Mining"
                }), Object(E.jsxs)("div", {
                  className: "flex flex-col w-full rounded-lg border-2 border-green bg-gray-lighter dark:bg-gray-darker p-2 space-y-2",
                  children: [Object(E.jsxs)("div", {
                    className: "grid grid-cols-3 m-0 space-x-0 md:flex md:flex-col md:space-y-3",
                    children: [Object(E.jsxs)("div", {
                      className: "flex flex-col md:flex-row md:justify-center md:items-center md:space-x-0.5 space-y-0.5 order-1 md:order-none",
                      style: {
                        margin: 0
                      },
                      children: [Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "0",
                          checked: o[0],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "00:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "1",
                          checked: o[1],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "01:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "2",
                          checked: o[2],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "02:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "3",
                          checked: o[3],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "03:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "4",
                          checked: o[4],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "04:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "5",
                          checked: o[5],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "05:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "6",
                          checked: o[6],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "06:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "7",
                          checked: o[7],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "07:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      })]
                    }), Object(E.jsxs)("div", {
                      className: "flex flex-col md:flex-row md:justify-center md:items-center md:space-x-0.5 space-y-0.5 order-2 md:order-none",
                      style: {
                        margin: 0
                      },
                      children: [Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "8",
                          checked: o[8],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "08:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "9",
                          checked: o[9],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "09:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "10",
                          checked: o[10],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "10:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "11",
                          checked: o[11],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "11:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "12",
                          checked: o[12],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "12:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "13",
                          checked: o[13],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "13:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "14",
                          checked: o[14],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "14:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "15",
                          checked: o[15],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "15:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      })]
                    }), Object(E.jsxs)("div", {
                      className: "flex flex-col md:flex-row md:justify-center md:items-center md:space-x-0.5 space-y-0.5 order-3 md:order-none",
                      style: {
                        margin: 0
                      },
                      children: [Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "16",
                          checked: o[16],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "16:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "17",
                          checked: o[17],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "17:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "18",
                          checked: o[18],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "18:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "19",
                          checked: o[19],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "19:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "20",
                          checked: o[20],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "20:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "21",
                          checked: o[21],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "21:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "22",
                          checked: o[22],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "22:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      }), Object(E.jsx)(Te.a, {
                        control: Object(E.jsx)(T.a, {
                          name: "23",
                          checked: o[23],
                          onChange: m,
                          sx: {
                            "& .MuiSvgIcon-root": {
                              fontSize: 14
                            }
                          }
                        }),
                        label: Object(E.jsx)(f.a, {
                          component: "div",
                          fontSize: 12,
                          children: "23:00"
                        }),
                        sx: {
                          m: 0
                        },
                        labelPlacement: "end"
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: " flex flex-row w-full space-x-2",
                    children: [Object(E.jsx)("button", {
                      className: "font-bold h-10 outline-none w-full uppercase rounded-lg py-1.5 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return x();
                      },
                      children: "Save"
                    }), Object(E.jsx)("button", {
                      className: "font-bold outline-none uppercase w-full rounded-lg h-10 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return x(true);
                      },
                      children: "Save All Account"
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "text-center font-light",
                    style: {
                      fontSize: 10
                    },
                    children: ["Set the time according to the time zone. Asia/Bangkok [ ", new Date().toLocaleString("en-US", {
                      timeZoneName: "short",
                      timeZone: "Asia/Ho_Chi_Minh",
                      hour12: false
                    }), " ] "]
                  })]
                }), Object(E.jsxs)("div", {
                  className: "flex flex-col w-full rounded-lg border-2 border-green bg-gray-lighter dark:bg-gray-darker p-2 space-y-2",
                  children: [Object(E.jsx)("div", {
                    className: "flex flex-row -mt-2 ",
                    children: Object(E.jsx)(Te.a, {
                      control: Object(E.jsx)(T.a, {
                        name: "status",
                        checked: t.status,
                        onChange: function (e) {
                          var t = e.target,
                              a = t.name,
                              r = t.value;
                          n(function (t) {
                            var n;
                            return Object(u.a)(Object(u.a)({}, t), {}, (n = {}, Object(l.a)(n, a, r), Object(l.a)(n, "status", e.target.checked), n));
                          });
                        },
                        sx: {
                          "& .MuiSvgIcon-root": {
                            fontSize: 28
                          }
                        }
                      }),
                      label: "Mine Bucket",
                      labelPlacement: "end"
                    })
                  }), Object(E.jsxs)("div", {
                    className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                    style: {
                      marginTop: 3
                    },
                    children: [Object(E.jsx)(w.a, {
                      label: "Setup mine bucket / TLM",
                      type: "number",
                      InputLabelProps: {
                        shrink: true
                      },
                      variant: "outlined",
                      fullWidth: true,
                      size: "small",
                      name: "mine_bucket",
                      value: t.mine_bucket,
                      onChange: function (e) {
                        var t = e.target.value;
                        /^\d+(\.\d{0,4})?$/.test(t) && p({
                          target: {
                            name: "mine_bucket",
                            value: t
                          }
                        });
                      },
                      InputProps: {
                        inputProps: {
                          min: "0",
                          max: "10",
                          step: "0.05"
                        }
                      }
                    }), Object(E.jsx)(w.a, {
                      label: "Setup time out / Sec.",
                      type: "number",
                      InputLabelProps: {
                        shrink: true
                      },
                      variant: "outlined",
                      fullWidth: true,
                      size: "small",
                      name: "time_out",
                      defaultValue: 0,
                      value: t.time_out,
                      onChange: p,
                      InputProps: {
                        inputProps: {
                          min: "0",
                          max: "1800",
                          step: "60",
                          lang: "en-US"
                        }
                      }
                    })]
                  }), Object(E.jsxs)("div", {
                    className: " flex flex-row w-full space-x-2",
                    children: [Object(E.jsx)("button", {
                      className: "font-bold h-10 outline-none w-full uppercase rounded-lg py-1.5 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return O();
                      },
                      children: "Save"
                    }), Object(E.jsx)("button", {
                      className: "font-bold outline-none uppercase w-full rounded-lg h-10 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return O(true);
                      },
                      children: "Save All Account"
                    })]
                  }), Object(E.jsx)("div", {
                    className: "flex flex-row -mt-2 ",
                    children: Object(E.jsx)(Te.a, {
                      control: Object(E.jsx)(T.a, {
                        name: "statusDelay",
                        checked: t.statusDelay,
                        onChange: function (e) {
                          var t = e.target,
                              a = t.name,
                              r = t.value;
                          n(function (t) {
                            var n;
                            return Object(u.a)(Object(u.a)({}, t), {}, (n = {}, Object(l.a)(n, a, r), Object(l.a)(n, "statusDelay", e.target.checked), n));
                          });
                        },
                        sx: {
                          "& .MuiSvgIcon-root": {
                            fontSize: 28
                          }
                        }
                      }),
                      label: "Manual Delay Mine",
                      labelPlacement: "end"
                    })
                  }), Object(E.jsxs)("div", {
                    className: "flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0",
                    style: {
                      marginTop: 3
                    },
                    children: [Object(E.jsx)(w.a, {
                      label: "Setup / Min.",
                      type: "number",
                      InputLabelProps: {
                        shrink: true
                      },
                      variant: "outlined",
                      fullWidth: true,
                      size: "small",
                      name: "timeDelay",
                      defaultValue: 0,
                      value: t.timeDelay,
                      onChange: p,
                      InputProps: {
                        inputProps: {
                          min: "0",
                          max: "1440",
                          step: "30",
                          lang: "en-US"
                        }
                      }
                    }), Object(E.jsx)("button", {
                      className: "font-bold outline-none uppercase w-full rounded-lg h-10 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return v();
                      },
                      children: "Save"
                    }), Object(E.jsx)("button", {
                      className: "font-bold outline-none uppercase w-full rounded-lg h-10 px-6 text-xs text-white bg-green hover:text-gray-darker",
                      onClick: function () {
                        return v(true);
                      },
                      children: "Save All Account"
                    })]
                  })]
                })]
              })
            })
          })
        })
      });
    }

    var Fe = c.a.createContext(),
        We = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "3px solid #D72D2D",
      width: 300,
      height: 260
    };

    var Ie = function () {
      var e = Object(r.useContext)(Xe),
          t = e.response,
          c = (e.setResponse, e.TLMUSDT),
          s = Object(r.useState)(false),
          o = Object(a.a)(s, 2),
          i = o[0],
          l = o[1],
          u = {
        1: "Novice",
        2: "Initiate",
        3: "Associate",
        4: "Peacekeeper",
        5: "Expert",
        6: "SkyRider",
        7: "Master",
        8: "Champion",
        9: "Grand Master",
        10: "Oshi Initiate",
        11: "Infinity"
      },
          m = function () {
        var e = Object(d.a)(h.a.mark(function e(t) {
          var n;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                T({
                  show: false,
                  wax: "xxxxx.wam"
                }), n = new Promise(function () {
                  var e = Object(d.a)(h.a.mark(function e(n, a) {
                    return h.a.wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.next = 2, fetch("/accounts/".concat(t), {
                            method: "DELETE",
                            headers: {
                              Authorization: "Bearer " + localStorage.getItem("token")
                            }
                          }).then(function (e) {
                            return e.json();
                          }).then(function (e) {
                            return n(e);
                          }).catch(function (e) {
                            return a(e);
                          });

                        case 2:
                        case "end":
                          return e.stop();
                      }
                    }, e);
                  }));
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                }()), b.b.promise(n, {
                  pending: "Promise is pending",
                  success: {
                    render: function (e) {
                      e.data;
                      return "Succeed : ".concat(t);
                    }
                  },
                  error: {
                    render: function (e) {
                      e.data;
                      return "Failed : ".concat(t);
                    }
                  }
                }, {
                  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                });

              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }(),
          p = Object(r.useState)({
        show: false,
        wax: "xxxxx.wam"
      }),
          x = Object(a.a)(p, 2),
          w = x[0],
          O = x[1],
          v = Object(r.useState)({
        show: false,
        wax: "xxxxx.wam"
      }),
          y = Object(a.a)(v, 2),
          k = y[0],
          N = y[1],
          S = Object(r.useState)({
        show: false,
        wax: "xxxxx.wam"
      }),
          A = Object(a.a)(S, 2),
          C = A[0],
          T = A[1],
          P = Object(r.useState)({
        show: false,
        wax: "xxxxx.wam"
      }),
          M = Object(a.a)(P, 2),
          z = M[0],
          F = M[1],
          W = Object(r.useState)({
        show: false,
        wax: "xxxxx.wam"
      }),
          I = Object(a.a)(W, 2),
          _ = I[0],
          L = I[1],
          D = Object(r.useState)([]),
          R = Object(a.a)(D, 2),
          X = R[0],
          J = R[1],
          B = Object(r.useState)({
        tlm: 0,
        wax: 0
      }),
          H = Object(a.a)(B, 2),
          q = H[0],
          Y = H[1],
          U = Object(r.useState)({
        bytes: 0,
        wax: 0
      }),
          G = Object(a.a)(U, 2),
          K = G[0],
          Z = G[1],
          Q = Object(r.useState)(0),
          se = Object(a.a)(Q, 2),
          oe = se[0],
          ie = se[1],
          le = Object(r.useMemo)(function () {
        return Object(E.jsx)(E.Fragment, {
          children: Object(E.jsx)(j.a, {
            open: C.show,
            onClose: function () {
              return T({
                show: false,
                wax: "xxxxx.wam"
              });
            },
            closeAfterTransition: true,
            BackdropComponent: g.a,
            BackdropProps: {
              timeout: 500
            },
            children: Object(E.jsx)(f.a, {
              sx: We,
              className: "text-gray-darker bg-gray-lighter  rounded-xl font-semibold mx-auto outline-none p-3",
              children: Object(E.jsxs)("div", {
                className: "text-center p-5 flex-auto justify-center",
                children: [Object(E.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "w-16 h-16 flex items-center text-red-500 mx-auto",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: Object(E.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                    clipRule: "evenodd"
                  })
                }), Object(E.jsx)("h2", {
                  className: "text-xl font-bold py-4 ",
                  children: "Are you sure?"
                }), Object(E.jsx)("p", {
                  className: "text-sm text-gray-dark px-2",
                  children: C.wax
                }), Object(E.jsxs)("div", {
                  className: "p-3  mt-2 text-center space-x-4 md:block",
                  children: [Object(E.jsx)("button", {
                    className: "mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-dark rounded-full hover:shadow-lg hover:bg-gray-lightest",
                    onClick: function () {
                      return T({
                        show: false,
                        wax: "xxxxx.wam"
                      });
                    },
                    children: "Cancel"
                  }), Object(E.jsx)("button", {
                    className: "mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",
                    onClick: function () {
                      return m(C.wax);
                    },
                    children: "Delete"
                  })]
                })]
              })
            })
          })
        });
      }, [C]);

      return Object(E.jsxs)("div", {
        children: [Object(E.jsxs)(Fe.Provider, {
          value: {
            response: t,
            swapPrice: q,
            setSwapPrice: Y,
            waxPriceRam: K,
            setWaxPriceRam: Z,
            data24Hr: X,
            setData24Hr: J,
            pushTrx: _,
            setPushTrx: L,
            TLMUSDT: c,
            showModalGetHistory: k,
            setShowModalGetHistory: N,
            showModalSetTime: w,
            setShowModalSetTime: O,
            showModalMiningTools: z,
            setShowModalMiningTools: F
          },
          children: [Object(E.jsx)(Ne, {}), Object(E.jsx)(be, {
            account: k.wax
          }), Object(E.jsx)(Ce, {}), Object(E.jsx)(ze, {})]
        }), le, Object(E.jsx)("div", {
          className: "flex flex-col",
          children: Object(E.jsx)("div", {
            className: "overflow-x-auto sm:-mx-6 lg:-mx-8",
            children: Object(E.jsx)("div", {
              className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
              children: Object(E.jsx)("div", {
                className: "shadow border-2 border-gray-200 rounded-lg",
                children: Object(E.jsxs)("table", {
                  className: "min-w-full table-fixed divide-y-2 border-collapse divide-current text-center",
                  children: [Object(E.jsx)("thead", {
                    className: "bg-gray-darker dark:bg-gray-light text-gray-light dark:text-gray-darkest uppercase",
                    children: Object(E.jsxs)("tr", {
                      children: [Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-center text-xs font-bold tracking-wider",
                        children: "No."
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-xs font-bold tracking-wider whitespace-nowrap cursor-pointer",
                        onClick: function () {
                          return l(!i);
                        },
                        children: " Account "
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-2/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "Resource"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "Land"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 py-3 text-xs font-bold tracking-wider",
                        children: "Last mine"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-1/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "Wallet"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "border-r-2 w-11/12 px-1 py-3 text-xs font-bold tracking-wider",
                        children: "Status"
                      }), Object(E.jsx)("th", {
                        scope: "col",
                        className: "px-1 py-3 w-12/12 text-xs font-bold tracking-wider",
                        children: "Action"
                      })]
                    })
                  }), Object(E.jsx)("tbody", {
                    className: "bg-white  dark:bg-black divide-y-2 divide-current text-gray-darkest dark:text-gray-lightest",
                    children: t.map(function (e, t) {
                      var a = Number.parseFloat(e.last_mine.bounty).toFixed(4),
                          r = a > 5e-4 ? "bg-green" : "bg-danger",
                          c = [Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)("div", {
                          className: "w-full bg-gray-light rounded text-left",
                          children: Object(E.jsx)("div", {
                            className: "".concat(Math.round(e.resources.cpu_limit.used / e.resources.cpu_limit.max * 100) > 75 ? Math.round(e.resources.cpu_limit.used / e.resources.cpu_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                            style: {
                              width: Math.round(e.resources.cpu_limit.used / e.resources.cpu_limit.max * 100) + "%",
                              maxWidth: "100%",
                              fontSize: 10
                            },
                            children: Object(E.jsxs)("span", {
                              className: "px-1",
                              children: ["CPU ", Math.round(e.resources.cpu_limit.used / e.resources.cpu_limit.max * 100), "% ( ", Number(e.resources.cpu_limit.used / 1e3).toFixed(1), " ms / ", Number(e.resources.cpu_limit.max / 1e3).toFixed(1), " ms )"]
                            })
                          })
                        }), Object(E.jsxs)("span", {
                          className: "text-gray-darkest dark:text-gray-lighter",
                          style: {
                            fontSize: 10
                          },
                          children: ["Stake : ", e.resources.total_resources.cpu_weight]
                        })]
                      }), Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)("div", {
                          className: "w-full bg-gray-light rounded text-left",
                          children: Object(E.jsx)("div", {
                            className: "".concat(Math.round(e.resources.ram_limit.used / e.resources.ram_limit.max * 100) > 75 ? Math.round(e.resources.ram_limit.used / e.resources.ram_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                            style: {
                              width: Math.round(e.resources.ram_limit.used / e.resources.ram_limit.max * 100) + "%",
                              maxWidth: "100%",
                              fontSize: 10
                            },
                            children: Object(E.jsxs)("span", {
                              className: "px-1",
                              children: ["RAM ", Math.round(e.resources.ram_limit.used / e.resources.ram_limit.max * 100), "% ( ", Number(e.resources.ram_limit.used / 1e3).toFixed(1), " KB / ", Number(e.resources.ram_limit.max / 1e3).toFixed(1), " KB )"]
                            })
                          })
                        }), Object(E.jsxs)("span", {
                          className: "text-gray-darkest dark:text-gray-lighter",
                          style: {
                            fontSize: 10
                          },
                          children: ["Stake : ", e.resources.total_resources.ram_bytes, " Bytes"]
                        })]
                      }), Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)("div", {
                          className: "w-full bg-gray-light rounded text-left",
                          children: Object(E.jsx)("div", {
                            className: "".concat(Math.round(e.resources.net_limit.used / e.resources.net_limit.max * 100) > 75 ? Math.round(e.resources.net_limit.used / e.resources.net_limit.max * 100) > 90 ? "bg-danger" : "bg-warning" : "bg-green", " rounded "),
                            style: {
                              width: Math.round(e.resources.net_limit.used / e.resources.net_limit.max * 100) + "%",
                              maxWidth: "100%",
                              fontSize: 10
                            },
                            children: Object(E.jsxs)("span", {
                              className: "px-1",
                              children: ["NET ", Math.round(e.resources.net_limit.used / e.resources.net_limit.max * 100), "% ( ", Number(e.resources.net_limit.used / 1e3).toFixed(1), " KB / ", Number(e.resources.net_limit.max / 1e3).toFixed(1), " KB )"]
                            })
                          })
                        }), Object(E.jsxs)("span", {
                          className: "text-gray-darkest dark:text-gray-lighter m-0",
                          style: {
                            fontSize: 10
                          },
                          children: ["Stake : ", e.resources.total_resources.net_weight]
                        })]
                      }), Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)("div", {
                          className: "w-full bg-gray-light rounded text-left",
                          children: Object(E.jsx)("div", {
                            className: " bg-indigo-500 rounded",
                            style: {
                              width: Math.round(e.total_points.points / e.total_points.next_level_points * 100) + "%",
                              maxWidth: "100%",
                              fontSize: 10
                            },
                            children: Object(E.jsxs)("span", {
                              className: "px-1",
                              children: ["Point NFT ", Math.round(e.total_points.points / e.total_points.next_level_points * 100), "% ( ", Number(e.total_points.points / 10).toFixed(1), " / ", Number(e.total_points.next_level_points / 10).toFixed(1), " )"]
                            })
                          })
                        }), Object(E.jsxs)("span", {
                          className: "text-gray-darkest dark:text-gray-lighter m-0",
                          style: {
                            fontSize: 10
                          },
                          children: ["Next Rank : ", u[e.total_points.class], " → ", u[e.total_points.class + 1]]
                        })]
                      })];
                      return Object(E.jsxs)("tr", {
                        children: [Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-gray-darkest dark:border-white text-xs font-semibold ",
                          children: t + 1
                        }), Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-gray-darkest dark:border-white text-xs font-semibold ",
                          children: Object(E.jsx)("a", {
                            href: "https://wax.bloks.io/account/".concat(e.account),
                            target: "_blank",
                            rel: "noreferrer",
                            children: false === i ? "".concat(e.account.substring(0, e.account.search("wam") - 3), "***.wam") : e.account
                          })
                        }), Object(E.jsx)("td", {
                          className: "whitespace-nowrap p-1 border-r-2 border-gray-darkest dark:border-white text-xs text-gray-darkest font-semibold ",
                          children: Object(E.jsx)("div", {
                            className: "flex flex-col items-center justify-center space-y-0.5 cursor-pointer",
                            onClick: function () {
                              ie(oe + 1);
                            },
                            children: c[oe % c.length]
                          })
                        }), Object(E.jsxs)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 font-semibold border-gray-darkest dark:border-white text-xs flex-col -space-y-1.5",
                          children: [Object(E.jsxs)("div", {
                            className: "break-all",
                            style: {
                              fontSize: "10px"
                            },
                            children: [Object(E.jsx)("font", {
                              className: "dark:text-green",
                              children: "ID :"
                            }), " ", e.land.id]
                          }), Object(E.jsxs)("div", {
                            className: "break-all",
                            style: {
                              fontSize: "8px"
                            },
                            children: [Object(E.jsx)("font", {
                              className: "dark:text-green",
                              children: "Commission : "
                            }), parseFloat(e.land.commission / 100).toFixed(2), "%"]
                          }), Object(E.jsxs)("div", {
                            className: "flex flex-row space-x-2 justify-center items-center",
                            children: [Object(E.jsxs)("div", {
                              className: "break-all",
                              style: {
                                fontSize: "8px",
                                color: "#d9a555"
                              },
                              children: [parseInt(e.land.bucket_total), " TLM"]
                            }), Object(E.jsxs)("div", {
                              className: "break-all",
                              style: {
                                fontSize: "8px",
                                color: "#0ed4a8"
                              },
                              children: [parseFloat(e.land.fill_rate / 1e4).toFixed(4), " TLM/s"]
                            })]
                          })]
                        }), Object(E.jsxs)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-gray-darkest dark:border-white justify-center items-center",
                          children: [Object(E.jsxs)("a", {
                            href: "https://wax.bloks.io/transaction/".concat(e.last_mine.trx),
                            target: "_blank",
                            rel: "noreferrer",
                            className: "".concat(r, " flex w-full text-gray-darkest rounded py-0.5 px-2 font-extrabold text-xs"),
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              textAlign: "center"
                            },
                            children: [a, " TLM"]
                          }), Object(E.jsx)("p", {
                            style: {
                              fontSize: 10
                            },
                            children: V.utc(e.last_mine.timestamp).local().format("YYYY-MM-DD HH:mm:ss")
                          })]
                        }), Object(E.jsxs)("td", {
                          className: "whitespace-nowrap p-1 border-r-2 border-gray-darkest dark:border-white text-xs",
                          children: [Object(E.jsxs)("div", {
                            className: "flex w-full text-xs",
                            children: [Object(E.jsx)("div", {
                              className: " text-right dark:text-warning-light font-bold",
                              children: "WAX"
                            }), Object(E.jsx)("div", {
                              className: "flex-1 text-right ml-1 font-semibold",
                              children: Number.parseFloat(e.wax).toFixed(8)
                            })]
                          }), Object(E.jsxs)("div", {
                            className: "flex w-full text-xs",
                            children: [Object(E.jsx)("div", {
                              className: "text-right dark:text-success font-bold",
                              children: "TLM"
                            }), Object(E.jsx)("div", {
                              className: "flex-1 text-right ml-1 font-semibold",
                              children: Number.parseFloat(e.tlm).toFixed(4)
                            })]
                          })]
                        }), Object(E.jsx)("td", {
                          className: "whitespace-nowrap px-1 border-r-2 border-gray-darkest dark:border-white text-xs",
                          children: Object(E.jsx)("p", {
                            className: "uppercase truncate px-2 font-semibold",
                            children: e.status_worker
                          })
                        }), Object(E.jsx)("td", {
                          className: "px-1 border-r-2 border-gray-darkest dark:border-white text-xs space-y-1",
                          children: Object(E.jsxs)("div", {
                            className: "flex flex-row justify-center items-center space-x-1 px-2",
                            children: [Object(E.jsx)(ce.a, {
                              title: "History Mined",
                              placement: "top",
                              arrow: true,
                              children: Object(E.jsx)("button", {
                                className: "text-purple-500 bg-transparent border-2 border-solid rounded-md border-purple-500  ",
                                type: "button",
                                onClick: function () {
                                  return N({
                                    show: !k.show,
                                    wax: e.account
                                  });
                                },
                                children: Object(E.jsx)(ee.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                })
                              })
                            }), Object(E.jsx)(ce.a, {
                              title: "Swap | Transfer | Stake | Setup Tools",
                              placement: "top",
                              arrow: true,
                              children: Object(E.jsx)("button", {
                                className: "text-purple-500 bg-transparent border-2 border-solid rounded-md border-purple-500 ",
                                type: "button",
                                onClick: function () {
                                  return L({
                                    show: !_.show,
                                    account: e.account,
                                    tlm: e.tlm,
                                    wax: e.wax
                                  });
                                },
                                children: Object(E.jsx)(te.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                })
                              })
                            }), Object(E.jsx)(ce.a, {
                              title: "Set Mining",
                              placement: "top",
                              arrow: true,
                              children: Object(E.jsx)("img", {
                                className: "bg-transparent border-2 border-solid rounded-md border-purple-500 cursor-pointer",
                                src: n(344).default,
                                alt: "mining",
                                type: "button",
                                style: {
                                  width: "1.5rem",
                                  height: "1.5rem"
                                },
                                onClick: function () {
                                  return F({
                                    show: !z.show,
                                    wax: e.account,
                                    resourcesType: "userResources",
                                    mine_bucket: "0.0000",
                                    status: false,
                                    time_out: 120,
                                    statusDelay: false,
                                    timeDelay: 30
                                  });
                                }
                              })
                            }), Object(E.jsx)(ce.a, {
                              title: "Play | Pause Script",
                              placement: "top",
                              arrow: true,
                              children: Object(E.jsx)("button", {
                                className: "text-purple-500 bg-transparent border-2 border-solid rounded-md border-purple-500 ",
                                type: "button",
                                onClick: function () {
                                  return t = e.account, new Promise(function () {
                                    var e = Object(d.a)(h.a.mark(function e(n, a) {
                                      var r, c;
                                      return h.a.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.prev = 0, e.next = 3, $("/status_account/".concat(t), {
                                              method: "GET",
                                              headers: {
                                                Authorization: "Bearer " + localStorage.getItem("token")
                                              }
                                            });

                                          case 3:
                                            return r = e.sent, e.next = 6, r.json();

                                          case 6:
                                            if (c = e.sent, 200 !== r.status) {
                                              e.next = 10;
                                              break;
                                            }

                                            return n(c), e.abrupt("return");

                                          case 10:
                                            e.next = 15;
                                            break;

                                          case 12:
                                            e.prev = 12, e.t0 = e.catch(0), console.error("error:" + e.t0);

                                          case 15:
                                          case "end":
                                            return e.stop();
                                        }
                                      }, e, null, [[0, 12]]);
                                    }));
                                    return function (t, n) {
                                      return e.apply(this, arguments);
                                    };
                                  }());
                                  var t;
                                },
                                children: e.status_login ? Object(E.jsx)(ne.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                }) : Object(E.jsx)(ae.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                })
                              })
                            }), Object(E.jsx)(ce.a, {
                              title: "Delete Account Wax",
                              placement: "top",
                              arrow: true,
                              children: Object(E.jsx)("button", {
                                className: "text-purple-500 bg-transparent border-2 border-solid rounded-md border-purple-500 ",
                                type: "button",
                                onClick: function () {
                                  return T({
                                    show: true,
                                    wax: e.account
                                  });
                                },
                                children: Object(E.jsx)(re.a, {
                                  size: "20",
                                  className: "cursor-pointer"
                                })
                              })
                            })]
                          })
                        })]
                      }, t);
                    })
                  })]
                })
              })
            })
          })
        })]
      });
    },
        _e = n(72);

    function Le() {
      var e = Object(r.useContext)(Je),
          t = e.popAddAccount,
          c = e.setPopAddAccount,
          s = e.popMemberShipAW,
          o = e.setPopMemberShipAW,
          i = e.masterKey,
          l = e.setMasterKey,
          u = e.setResponse,
          m = e.totalTlm,
          p = e.totalWax,
          x = e.totalRewards,
          b = e.TLMUSDT,
          f = e.setTLMUSDT,
          j = e.WAXPUSDT,
          g = e.setWAXPUSDT,
          w = e.setLogin,
          O = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _e("https://api.binance.com/api/v3/ticker/price?symbol=WAXPUSDT").then(function (e) {
                  return e.json();
                }).then(function (e) {
                  g(e.price);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          v = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _e("https://api.binance.com/api/v3/ticker/price?symbol=TLMUSDT").then(function (e) {
                  return e.json();
                }).then(function (e) {
                  f(e.price);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          y = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          k = Object(a.a)(y, 2),
          N = k[0],
          S = k[1],
          A = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "eyeke.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  S(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          C = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          T = Object(a.a)(C, 2),
          P = T[0],
          M = T[1],
          z = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "kavian.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  M(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          F = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          W = Object(a.a)(F, 2),
          I = W[0],
          _ = W[1],
          L = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "magor.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  _(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          D = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          R = Object(a.a)(D, 2),
          X = R[0],
          J = R[1],
          H = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "naron.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  J(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          q = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          Y = Object(a.a)(q, 2),
          U = Y[0],
          G = Y[1],
          K = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "neri.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  G(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          Z = Object(r.useState)({
        rows: [{
          last_fill_time: "2022-01-10T12:16:18.000",
          fill_rate: "0",
          bucket_total: "0.0000 TLM",
          mine_bucket: "0.0000 TLM"
        }]
      }),
          Q = Object(a.a)(Z, 2),
          V = Q[0],
          $ = Q[1],
          ee = function () {
        var e = Object(d.a)(h.a.mark(function e() {
          var t;
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return "https://wax.pink.gg/v1/chain/get_table_rows", t = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    json: true,
                    code: "m.federation",
                    scope: "veles.world",
                    table: "state3",
                    reverse: false,
                    show_payer: false
                  })
                }, e.next = 4, _e("https://wax.pink.gg/v1/chain/get_table_rows", t).then(function (e) {
                  return e.json();
                }).then(function (e) {
                  $(e);
                }).catch(function (e) {
                  return console.error("error:" + e);
                });

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }(),
          te = function (e) {
        return function () {
          window.open(e);
        };
      };

      Object(r.useEffect)(function () {
        if (window.location.href.includes("localhost")) {
          var e = n(345);
          l({
            master_key: "G0CCU8EPGV",
            coin: 0
          }), u(e), w(false);
        } else {
          var t = Object(B.a)(window.location.href);
          t.on("MasterKey", function (e) {
            l(e);
          }), t.on("FromAPI", function (e) {
            u(e);
          });
        }

        O(), v(), A(), z(), L(), H(), K(), ee(), setInterval(Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, O();

              case 2:
                return e.next = 4, v();

              case 4:
              case "end":
                return e.stop();
            }
          }, e);
        })), 6e4), setInterval(Object(d.a)(h.a.mark(function e() {
          return h.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                A(), z(), L(), H(), K(), ee();

              case 6:
              case "end":
                return e.stop();
            }
          }, e);
        })), 3e4);
      }, []);
      var ne = Object(r.useState)(function () {
        return new Date().getFullYear();
      }),
          ae = Object(a.a)(ne, 1)[0];
      return Object(E.jsx)("div", {
        children: Object(E.jsx)("section", {
          className: "relative min-h-screen py-3  bg-gray-lighter text-black dark:bg-gray-darkest dark:text-white",
          children: Object(E.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [Object(E.jsxs)("div", {
              className: "relative flex flex-col items-end justify-end text-gray-darker dark:text-gray-light",
              children: [Object(E.jsxs)("div", {
                className: "font-semibold",
                style: {
                  fontSize: 13.5,
                  marginTop: -6
                },
                children: ["Version : ", "7b6342751bc6424f67d56822e4a243666c3c6d39".substr(0, 12).toUpperCase(), " "]
              }), Object(E.jsxs)("div", {
                className: "font-semibold",
                style: {
                  fontSize: 9,
                  marginTop: -6
                },
                children: ["Build Date: ", "Tue, 20 Dec 2022 13:45:21 GMT"]
              })]
            }), Object(E.jsx)("div", {
              className: "relative flex flex-col min-w-0 break-words  bg-gray-lighter text-black dark:bg-gray-darkest dark:text-white w-full mb-6 shadow-xl rounded-lg mt-4",
              children: Object(E.jsx)("div", {
                className: "p-6 text-right ",
                children: Object(E.jsxs)("div", {
                  className: "flex flex-wrap justify-center",
                  children: [Object(E.jsx)("div", {
                    className: "w-full flex justify-center",
                    children: Object(E.jsx)("div", {
                      className: "relative ",
                      children: Object(E.jsx)("img", {
                        alt: "logo",
                        src: n(346).default,
                        className: "h-auto ",
                        style: {
                          maxWidth: "300px"
                        }
                      })
                    })
                  }), Object(E.jsxs)("div", {
                    className: "flex w-full flex-col justify-items-end sm:flex-row sm:mt-6 sm:space-x-3.5 sm:justify-center sm:items-center",
                    children: [Object(E.jsxs)("div", {
                      className: "flex flex-nowrap items-center space-x-2",
                      children: [Object(E.jsx)("img", {
                        className: "h-4 sm:h-10",
                        src: n(200).default,
                        alt: "TLM"
                      }), Object(E.jsxs)("div", {
                        className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                        children: [Object(E.jsxs)("strong", {
                          className: "whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light",
                          children: [Number.parseFloat(m).toFixed(4), " TLM"]
                        }), Object(E.jsxs)("span", {
                          className: "-mt-2 whitespace-nowrap flex-grow text-sm sm:text-xs text-gray-darker dark:text-gray-light font-semibold",
                          children: ["REWARDS : ", Number.parseFloat(x).toFixed(4), " TLM"]
                        }), Object(E.jsxs)("span", {
                          style: {
                            fontSize: 8
                          },
                          className: "invisible md:visible -mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                          children: ["1 TLM : ", Number.parseFloat(b).toFixed(3), " USDT"]
                        })]
                      })]
                    }), Object(E.jsxs)("div", {
                      className: "flex items-center space-x-2",
                      children: [Object(E.jsx)("img", {
                        className: "h-4 sm:h-10",
                        src: n(199).default,
                        alt: "WAX"
                      }), Object(E.jsxs)("div", {
                        className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                        children: [Object(E.jsxs)("strong", {
                          className: "whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light",
                          children: [Number.parseFloat(p).toFixed(8), " WAX"]
                        }), Object(E.jsxs)("span", {
                          style: {
                            fontSize: 8
                          },
                          className: "invisible md:visible -mt-4 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                          children: ["1 WAX : ", Number.parseFloat(j).toFixed(3), " USDT"]
                        })]
                      })]
                    }), Object(E.jsxs)("div", {
                      className: "flex flex-nowrap items-center space-x-2",
                      children: [Object(E.jsx)("img", {
                        className: "h-4 sm:h-10",
                        src: n(347).default,
                        alt: "USDT"
                      }), Object(E.jsx)("div", {
                        className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                        children: Object(E.jsxs)("strong", {
                          className: "whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light",
                          children: [Number(Number.parseFloat(m) * Number.parseFloat(b) + Number.parseFloat(p) * Number.parseFloat(j)).toFixed(3), " USDT"]
                        })
                      })]
                    }), Object(E.jsxs)("div", {
                      className: "flex flex-nowrap items-center space-x-2",
                      children: [Object(E.jsx)("img", {
                        className: "h-4 sm:h-10",
                        src: n(144).default,
                        alt: "USDT"
                      }), Object(E.jsx)("div", {
                        className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                        children: Object(E.jsxs)("strong", {
                          className: "whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light",
                          children: [Number(i.coin).toFixed(4), " COIN"]
                        })
                      })]
                    })]
                  })]
                })
              })
            }), Object(E.jsxs)("div", {
              children: [Object(E.jsxs)("div", {
                className: "grid grid-cols-none md:grid-cols-2 items-center align-middle",
                children: [Object(E.jsxs)("div", {
                  className: "flex justify-center md:justify-start space-x-2",
                  children: [Object(E.jsx)("button", {
                    className: "text-purple-500 border-2 border-solid rounded-xl border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    onClick: function () {
                      return o(!s);
                    },
                    children: "Member Ship"
                  }), Object(E.jsx)("button", {
                    className: "text-purple-500 border-2 border-solid rounded-xl border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    onClick: function () {
                      return c(!t);
                    },
                    children: "+ Account"
                  })]
                }), Object(E.jsxs)("div", {
                  className: "flex justify-center md:justify-end space-x-2",
                  children: [Object(E.jsx)("button", {
                    className: "text-purple-500 border-2 border-solid rounded-xl border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    onClick: Object(d.a)(h.a.mark(function e() {
                      return h.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _e("/start", {
                              method: "GET",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                              }
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })),
                    children: "Start All"
                  }), Object(E.jsx)("button", {
                    className: "text-purple-500 border-2 border-solid rounded-xl border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    onClick: Object(d.a)(h.a.mark(function e() {
                      return h.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _e("/stop", {
                              method: "GET",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                              }
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })),
                    children: "Stop All"
                  }), Object(E.jsx)("button", {
                    className: "text-purple-500 border-2 border-solid rounded-xl border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150",
                    type: "button",
                    onClick: Object(d.a)(h.a.mark(function e() {
                      return h.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, _e("/delete", {
                              method: "GET",
                              headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                              }
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    })),
                    children: "Delete All"
                  })]
                })]
              }), Object(E.jsx)("div", {
                className: "block mt-3",
                children: Object(E.jsx)(Ie, {})
              }), Object(E.jsx)("div", {
                className: "md:transform hover:scale-110 md:duration-500",
                children: Object(E.jsxs)("div", {
                  className: "flex flex-col w-full space-y-2 md:flex-row md:items-center md:justify-center md:space-x-4 md:mt-2",
                  children: [Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/eyeke"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(348).default,
                      alt: "eyeke"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Eyeke"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", N.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(N.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", N.rows[0].mine_bucket]
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/kavian"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(349).default,
                      alt: "kavian"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Kavian"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", P.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(P.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", P.rows[0].mine_bucket]
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/magor"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(350).default,
                      alt: "magor"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Magor"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", I.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(I.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", I.rows[0].mine_bucket]
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/naron"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(351).default,
                      alt: "naron"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Naron"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", X.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(X.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", X.rows[0].mine_bucket]
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/neri"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(352).default,
                      alt: "neri"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Neri"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", U.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(U.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", U.rows[0].mine_bucket]
                      })]
                    })]
                  }), Object(E.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    onClick: te("http://www.awstats.io/land/planet/veles"),
                    children: [Object(E.jsx)("img", {
                      className: "h-6 sm:h-12",
                      src: n(353).default,
                      alt: "veles"
                    }), Object(E.jsxs)("div", {
                      className: "sm:flex sm:w-full sm:flex-col sm:justify-start space-x-2 md:space-x-0",
                      children: [Object(E.jsx)("strong", {
                        className: "whitespace-nowrap flex-grow text-sm sm:text-md text-gray-darker dark:text-white",
                        children: "Veles"
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-3 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Bucket Total : ", V.rows[0].bucket_total]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold hidden md:block",
                        children: ["Fill Rate : ", parseFloat(V.rows[0].fill_rate / 1e4).toFixed(4), " TLM/Sec."]
                      }), Object(E.jsxs)("span", {
                        style: {
                          fontSize: 8
                        },
                        className: "-mt-5 whitespace-nowrap flex-grow text-sm sm:text-xl text-gray-darker dark:text-gray-light font-semibold",
                        children: ["Mine Bucket : ", V.rows[0].mine_bucket]
                      })]
                    })]
                  })]
                })
              }), Object(E.jsx)("div", {
                className: "flex items-center justify-center mt-2",
                children: Object(E.jsx)("div", {
                  className: "flex flex-col",
                  children: Object(E.jsx)("div", {
                    className: "text-sm text-center text-gray-lighter font-semibold py-1",
                    children: Object(E.jsxs)("a", {
                      href: "https://www.facebook.com/alienscriptbot",
                      className: " text-gray-darkest",
                      children: ["Copyright © ", ae, " ", Object(E.jsx)("br", {}), " facebook:alien-script.com"]
                    })
                  })
                })
              })]
            })]
          })
        })
      });
    }

    var Ee = n(222),
        De = c.a.createContext(),
        Re = c.a.createContext(),
        Xe = c.a.createContext(),
        Je = c.a.createContext();

    t.e = function () {
      var e = Object(s.a)("(prefers-color-scheme: dark)"),
          t = c.a.useMemo(function () {
        return Object(o.a)({
          palette: {
            mode: e ? "dark" : "light"
          }
        });
      }, [e]),
          n = Object(r.useState)(false),
          l = Object(a.a)(n, 2),
          u = l[0],
          d = l[1],
          m = Object(r.useState)(false),
          p = Object(a.a)(m, 2),
          x = p[0],
          h = p[1],
          b = Object(r.useState)([]),
          f = Object(a.a)(b, 2),
          j = f[0],
          g = f[1],
          w = Object(r.useState)([]),
          O = Object(a.a)(w, 2),
          v = O[0],
          y = O[1],
          k = Object(r.useState)(0),
          N = Object(a.a)(k, 2),
          S = N[0],
          A = N[1],
          C = Object(r.useState)(0),
          T = Object(a.a)(C, 2),
          P = T[0],
          M = T[1],
          z = Object(r.useState)(0),
          F = Object(a.a)(z, 2),
          W = F[0],
          I = F[1],
          _ = Object(r.useState)(false),
          L = Object(a.a)(_, 2),
          D = L[0],
          R = L[1],
          B = Object(r.useState)(0),
          H = Object(a.a)(B, 2),
          q = H[0],
          Y = H[1],
          U = Object(r.useState)(0),
          G = Object(a.a)(U, 2),
          K = G[0],
          Z = G[1],
          Q = Object(r.useState)({
        status: false,
        masterKey: "XXXXXXXXXX",
        coin: 0,
        created_at: "",
        trx: ""
      }),
          V = Object(a.a)(Q, 2),
          $ = V[0],
          ee = V[1];

      return Object(r.useEffect)(function () {
        var e = [],
            t = [],
            n = [];
        j.map(function (a) {
          return e.push(parseFloat(a.tlm)), t.push(parseFloat(a.wax)), n.push(parseFloat(a.rewards)), a;
        }), A(e.reduce(function (e, t) {
          return e + t;
        }, 0)), I(n.reduce(function (e, t) {
          return e + t;
        }, 0)), M(t.reduce(function (e, t) {
          return e + t;
        }, 0));
      }, [j]), Object(E.jsx)("main", {
        children: Object(E.jsx)(i.a, {
          theme: t,
          children: true === D ? Object(E.jsxs)(Xe.Provider, {
            value: {
              response: j,
              TLMUSDT: K,
              setLogin: R
            },
            children: [Object(E.jsx)(Re.Provider, {
              value: {
                popAddAccount: u,
                setPopAddAccount: d
              },
              children: Object(E.jsx)(X, {})
            }), Object(E.jsx)(De.Provider, {
              value: {
                popMemberShipAW: x,
                setPopMemberShipAW: h,
                masterKey: v,
                setMasterKey: y,
                valueKey: $,
                setValueKey: ee
              },
              children: Object(E.jsx)(J.a, {})
            }), Object(E.jsx)(Je.Provider, {
              value: {
                popAddAccount: u,
                setPopAddAccount: d,
                popMemberShipAW: x,
                setPopMemberShipAW: h,
                masterKey: v,
                setMasterKey: y,
                setResponse: g,
                totalTlm: S,
                totalWax: P,
                totalRewards: W,
                TLMUSDT: K,
                setTLMUSDT: Z,
                WAXPUSDT: q,
                setWAXPUSDT: Y,
                setLogin: R
              },
              children: Object(E.jsx)(Le, {})
            })]
          }) : Object(E.jsx)(Xe.Provider, {
            value: {
              setLogin: R
            },
            children: Object(E.jsx)(Ee.a, {})
          })
        })
      });
    };
  }
}, [[356, 1, 2]]]); //# sourceMappingURL=main.5b20ca64.chunk.js.map