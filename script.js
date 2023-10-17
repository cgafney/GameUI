
//		ALL GENRE GAMES

const Action = ["Elden Ring","Dishonored"];
const Adventure = ["Elden Ring","Dishonored","Octopath Traveler","Hollow Knight"];
const BattleRoyale = ["Apex Legends"];
const BeatEmUp = [undefined];
const Casual = [undefined];
const Fighting = [undefined];
const FPS = ["Apex Legends"];
const Horror = [undefined];
const Management = [undefined];
const Metroidvania = ["Hollow Knight"];
const MOBA = [undefined];
const MMO = [undefined];
const Multiplayer = ["Elden Ring","Apex Legends","Splatoon 2"];
const OpenWorld = ["Elden Ring"];
const Party = [undefined];
const Platformer = ["Hollow Knight"];
const Puzzle = [undefined];
const Racing = [undefined];
const Rhythm = [undefined];
const Rougelike = [undefined];
const RPG = ["Persona 5 Royal","Elden Ring","Octopath Traveler"];
const RTS = [undefined];
const Sandbox = [undefined];
const Simulation = [undefined];
const Shooter = ["Apex Legends","Splatoon 2"];
const Sport = [undefined];
const Strategy = [undefined];
const Stealth = ["Dishonored"];
const Survival = [undefined];
const VisualNovel = [undefined];
const Other = [undefined];

//		COLLECTION OF GENRE LIST

const Genre=[Action,Adventure,BattleRoyale,BeatEmUp,Casual,Fighting,FPS,Horror,Management,Metroidvania,MOBA,MMO,Multiplayer,OpenWorld,Party,Platformer,Puzzle,Racing,Rhythm,Rougelike,RPG,RTS,Sandbox,Simulation,Shooter,Sport,Strategy,Stealth,Survival,VisualNovel,Other]

//		ALL PLATFORM GAMES

const PC = ["Persona 5 Royal","Elden Ring","Apex Legends","Dishonored","Octopath Traveler"];
const Arcade = [undefined];
const Atari = [undefined];
const SNES = [undefined];
const GameCube = [undefined];
const DS = [undefined];
const Wii = [undefined];
const Switch = ["Persona 5 Royal","Apex Legends","Splatoon 2","Octopath Traveler","Hollow Knight"];
const PS3 = ["Persona 5 Royal","Dishonored"];
const PS4 = ["Persona 5 Royal","Elden Ring","Apex Legends","Dishonored","Hollow Knight"];
const PS5 = ["Persona 5 Royal","Elden Ring","Apex Legends"];
const XBox = [undefined];
const XBox360 = ["Dishonored"];
const XBoxOne = ["Elden Ring","Apex Legends","Dishonored","Octopath Traveler","Hollow Knight"];
const XBoxXS = ["Persona 5 Royal","Elden Ring","Apex Legends"];

//		COLLECTION OF PLATFORM LIST

const Platform=[PC,Arcade,Atari,SNES,GameCube,DS,Wii,Switch,PS3,PS4,PS5,XBox,XBox360,XBoxOne,XBoxXS]

//		OTHER VARIABLES

let GenrePass=[],GenreComplete,PlatformPass=[],PlatformComplete;
let Answer,Score,TotalScore;

/*
	ALL GAMES MUST BE ORDERED IN CONSTANT VARIABLE ABOVE (GENRE/PLATFORM) AS IS SHOW IN INDEX.HTML OR ELSE IT WILL NOT BE RELATED TO WHAT BUTTONS YOU PRESSED
*/

//		GAME START
function GameMain(){
	sessionStorage.setItem("RanGame",1)
	let GameLoad = JSON.parse(sessionStorage.getItem("Random"));
	if(GameLoad.length == 0||sessionStorage.getItem("GamesDone") == sessionStorage.getItem("TotalGamesDoing")){
		GameEnd();
	}else{
		let GamesDone = sessionStorage.getItem("GamesDone");
		GamesDone++;
		sessionStorage.setItem("GamesDone",GamesDone);
		let RandomOutput = (GameLoad[(Math.floor(Math.random() * GameLoad.length))]);
		console.log(GamesDone);
		console.log(RandomOutput);
		console.log(GameLoad);
		if(RandomOutput == "Persona 5 Royal"){
			Persona5RoyalLoad();
		}
		if(RandomOutput == "Elden Ring"){
			EldenRingLoad();
		}
		if(RandomOutput == "Octopath Traveler"){
			OctopathTravelerLoad();
		}
		if(RandomOutput == "Apex Legends"){
			ApexLegendsLoad();
		}
		if(RandomOutput == "Splatoon 2"){
			Splatoon2Load();
		}
		if(RandomOutput == "Dishonored"){
			DishonoredLoad();
		}
		if(RandomOutput == "Hollow Knight"){
			HollowKnightLoad();
		}
	}
}

//		GAME 1 / PERSONA 5 ROYAL

function Persona5RoyalLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Persona 5 Royal");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Persona 5 Royal");
	window.location.replace("Game1.html");
}

//		GAME 2 / ELDEN RING

function EldenRingLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Elden Ring");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Elden Ring");
	window.location.replace("Game2.html");
}

//		GAME 3 / OCTOPATH TRAVELER

function OctopathTravelerLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Octopath Traveler");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Octopath Traveler");
	window.location.replace("Game3.html");
}

//		GAME 4 / APEX LEGENDS

function ApexLegendsLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Apex Legends");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Apex Legends");
	window.location.replace("Game4.html");
}

//		GAME 5 / SPLATOON 2

function Splatoon2Load(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Splatoon 2");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Splatoon 2");
	window.location.replace("Game5.html");
}

//		GAME 6 / DISHONORED

function DishonoredLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Dishonored");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Dishonored");
	window.location.replace("Game6.html");
}

//		GAME 7 / HOLLOW KNIGHT

function HollowKnightLoad(){
	let array = JSON.parse(sessionStorage.getItem("Random"));
	let index = array.indexOf("Hollow Knight");
	if (index > -1){
		array.splice(index,1);
	}
	sessionStorage.setItem("Random",JSON.stringify(array));
	sessionStorage.setItem("CurrentGame","Hollow Knight");
	window.location.replace("Game7.html");
}

//		GAME END

function GameEnd(){
	window.location.replace("index.html");
}
