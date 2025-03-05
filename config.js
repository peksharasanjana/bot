const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "SUHAIL_11_41_03_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImR6YjF4d3k4MklUSnFvWHBvUXJtelVpTmhHSzJXMW0zL2xObHNzTzBVclU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFJWjVTeEZZUkZlMjROVld1TmcxZndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTJhZmIwOWUtMjc2Zi00ZTY5LWI3YmYtZjg0Y2JlOTE1NTVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA4MSxcbiAgICAgIDI0LFxuICAgICAgNTgsXG4gICAgICAxMCxcbiAgICAgIDEyMyxcbiAgICAgIDE1NixcbiAgICAgIDY2LFxuICAgICAgMzcsXG4gICAgICA5MSxcbiAgICAgIDI0NCxcbiAgICAgIDI0MyxcbiAgICAgIDkxLFxuICAgICAgMTczLFxuICAgICAgMjUyLFxuICAgICAgMjIwLFxuICAgICAgMTcwLFxuICAgICAgMTA0LFxuICAgICAgMTksXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA1OCxcbiAgICAgIDE0NyxcbiAgICAgIDE3LFxuICAgICAgMTQyLFxuICAgICAgNDMsXG4gICAgICAxNjMsXG4gICAgICAxNDcsXG4gICAgICA3OSxcbiAgICAgIDE2LFxuICAgICAgMjUyLFxuICAgICAgMTUsXG4gICAgICAyMDgsXG4gICAgICA4MyxcbiAgICAgIDk1LFxuICAgICAgMTA0LFxuICAgICAgNTYsXG4gICAgICAxNjQsXG4gICAgICAxMTgsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNDZDVzVDQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDA3MDcxNTc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDk1NzMxMjI3ODYzMToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL1ZtZzhReHZDZ3ZnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8xdkdhOXBwc3BkUi9MWkhEUmM2VGZVZFcvcjQ0M1k2a2YydysvWUtqQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibzUwY1RicUNPd3BzYStLKzNtYXdISlFBL3ZwSFFmU3FTZFFiWkZld0NobXh1cVoyYnMvZG5ndXUvZWRFK2h3Q3NMclRFMmF0eUhHSXByS0NaVlFaQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXNVbmpzQTZLd1h0U1RFM0dscVBlTzZSQm8rN3lEanJvU213ZStLWFlySlFzcTEyTm0rQWhKdDUzZE4rYWRnZFd5U2F4ZkRTNDRKQTVqS3EwUWRIaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDA3MDcxNTc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDExNzQ4NTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKdHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp0di5qc29uIjogIntcImtleURhdGFcIjpcIlNlM2MybDcyZnJIV0l4VmJRM1pxdW5jNUJZQXFVYjk0cGRjNHJOV0tMdHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE4OTQxNzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
