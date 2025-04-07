const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lFM3F5THRtV3RhNUVuZlJ1TjRQdTlKNDgzWFBkVHNHbmsxaE9wQ3gzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1prNTJQMjl0c1RISGRnREpZNHhPWUtrWTZobCs1REkrYjhtcThTRHJHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TUVoNUtWbVV3aC9XYzhlTWx6RWZTN2xjUy9UUlpRRUsza1lVNmMwSWtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBY2NQbThBaGY5dmF6NDVuU2tBRjRVbW5sN01mRWQwYjhSSld0c0tIenpJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFSVlqQlN2a0w0Q3N1b3E5N1FmVE5FMFNtRTdndkhaNVVibE1DQWFMRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ValNSelljMXNhem0xSHh5UFprSEJ0UUMyNmo0WkQ3TG1sZVBtSlJKbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hpN0RldkJKTHlYSzVuNEFmdGh4Qm1jdUErM0hmNmg5TDJkN0RQSGkxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjEyWTZDMk45clh5RTdwYVB5QUhNOHJ1eWhTc09rRVdCL0NneE5PUjNHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd4STR5Z2ZxcXNYV09WamZQSVkxa1IyUFhxRGNnRkpTQTE3WWpISlNRRlZ5ZVR5b2V6YUJXTEdQVElOa3RVVDVLUDlLVGdHZTRaL2NNRVZzK0loOGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJxTUE2MjdqYWhzSytIWVM1YjJuamhadjQwUlhiT085dy8zdDJjZFc0dXc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHSFE4SHM4d1R2Q3BVamtyYklnUmVBIiwicGhvbmVJZCI6IjlhZTJmODc2LTg4NmQtNDViMC04YmJkLTVkMzYxNDFmNDY1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1emlsU2RVeDlNL0Vib0ZJUTVyeXIxNEI3Mms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJDbjNFRGhoUmF5a3FoODQ1blc1dXhiWXB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJBM0pTMzlSIiwibWUiOnsiaWQiOiIyNDE2MDE3MTM4Njo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmTyarJtOOFpOG0mOG0gMm04bSHyp8gRVhPRFVTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTEp2SjRERU4vUnpyOEdHQ0FnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYWjZlNGwzUjhUQ0lLc1NoeEc4bURYYXJhUXNhTEt1QUxnbDZIOWhFd0VvPSIsImFjY291bnRTaWduYXR1cmUiOiJpWHB0ZDE1YnY3UDRHWkRKSDBPWkNjOVRvaE9HUU9MYWVTcGJZVGcwaGZ0N05xQXNJd1hHandHRGE5UWY5T0hZYlVjT3ZWUlpNRzUwbC9iRWF4MU5CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL2FuaGdxQ2lUVzQ1NlJVamE1UmhvK0dlbktLZDIrS1dvcGpWK0NYQnB3cDNvakxRWGhORzZQRDBIZGlNRFJHRVR6MGlYK2s4Y1lUQU43UGVBQ3g3akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDE2MDE3MTM4Njo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMmVudUpkMGZFd2lDckVvY1J2SmcxMnEya0xHaXlyZ0M0SmVoL1lSTUJLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0MDIxNzQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8wbCJ9", 
MONGODB: process.env.MONGODB || "mongodb+srv://raizen:darki123@cluster0.utsln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //ne pas changer
};
