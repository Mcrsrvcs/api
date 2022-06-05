const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const gplay = require('google-play-scraper');
let data = []

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
let Array = [
 ,"com.adobe.lrmobile"
 ,"com.adobe.psmobile"
 ,"com.adsk.sketchbook"
 ,"com.arusaquotes"
 ,"com.baiwang.styleinstaboxsnap"
 ,"com.bereal.ft"
 ,"com.canva.editor"
 ,"com.instagram.lite"
 ,"org.thunderdog.challegram"
 ,"com.google.android.apps.blogger"
 ,"org.thoughtcrime.securesms"
 ,"com.kutumb.android"
 ,"com.reddit.frontpage"
 ,"com.cardfeed.video_public"
]

for(i=0;i<Array.length;i++){
gplay.app({appId : Array[i]})
  .then((value)=>{
    data.push(value);
    console.log(data);
  })
}
app.get('/',(req,res)=>{
  // data = [];
      res.send(data);  
})

app.listen(PORT,()=>{
    console.log(PORT);
})