const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/',(req,res)=>{
    let data = [
        {
          title: "World of Warships",
          imgsrc:
            "https://prs.sftcdn.net/softoniccom/0dc7f3ab-ca81-4e51-9beb-03f65f867680_WoWs_Softonic_banners_bis_282x388.jpg?auto=compress,format",
          goto: "https://track.wg-aff.com/click?pid=339&offer_id=54&sub1=card_homepage",
        },
       
        {
          title: "Game of Thrones - Winter is coming",
          imgsrc:
            "https://prs.sftcdn.net/softoniccom/846b5ae9-f3d6-4d44-84ab-61f9f9eda6a7_EN_282x388_got_01.jpg?auto=compress,format",
          goto: "  https://www.ostlon.com/cmp/2ZT4148/DMH3BM/?sub1=card_homepage",
        },
        {
          title: "GTA V Premium Edition",
          imgsrc:
            "https://prs.sftcdn.net/softoniccom/e587fd0e-3ec4-4a7b-a6e2-4e65379d7909_GTA+V.jpg?auto=compress,format",
          goto: "https://www.eneba.com/rockstar_social_club-grand-theft-auto-v-premium-online-edition-rockstar-social-club-key-global?af_id=SFT_HP",
        },
        {
          title: "Left to Survive",
          imgsrc:
            "https://prs.sftcdn.net/softoniccom/a2ef560b-f57c-4402-afb8-0c98ef681ffa_lefttosurvive.jpeg?auto=compress,format",
          goto: "https://gamesvid.go2cloud.org/aff_c?offer_id=3300&aff_id=1432&url_id=9794&aff_sub=card_homepage",
        },
      ];
      res.send(data);   
})

app.listen(PORT,()=>{
    console.log(PORT);
})