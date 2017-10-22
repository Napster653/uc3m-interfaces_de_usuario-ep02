function addLike()
{
	++document.getElementById("LikeCounter").value;
}
function addShare()
{
	++document.getElementById("ShareCounter").value;
}
function displayInfo(str)
{
	document.getElementById("modalVideoInfo").style.display = "block";
	var vidName = document.getElementById(str).innerHTML;

	document.getElementById("modalTitle").innerHTML = window[vidName].title;
	document.getElementById("modalDesc1").innerHTML = window[vidName].desc1;
	document.getElementById("modalDesc2").innerHTML = window[vidName].desc2;
}

window.onclick = function(event)
{
	var myModal = document.getElementById("modalVideoInfo");

	if (event.target == myModal)
	{
		myModal.style.display = "none";
	}
}

function allowDrop(ev)
{
	ev.preventDefault();
}
var videoBeingDragged;
var videoBeingDisplayed;
var swapBuffer;
var draggedFrom;

function drag(ev, str)
{
	videoBeingDragged = document.getElementById(str).innerHTML;
	console.log(videoBeingDragged);
	draggedFrom = str.charAt(3).toLowerCase();
	ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev)
{
	ev.preventDefault();
	swapBuffer = videoBeingDisplayed;
	displayVideo(videoBeingDragged);
	displayInGallery(swapBuffer, draggedFrom);
}

var vid001 = new Object();
vid001.title = "Wolves VS Knights";
vid001.desc1 = "Conferencia Centro - Grupo B";
vid001.desc2 = "Vive la segunda temporada de la competición nacional universitaria donde 32 universidades públicas de España se ven las caras en busca de proclamarse el campeón.";
vid001.link = "https://www.youtube.com/embed/ZApPTn05czw";
vid001.thumb = "http://img.youtube.com/vi/ZApPTn05czw/maxresdefault.jpg"

var vid002 = new Object();
vid002.title = "Bulls VS Bobcats";
vid002.desc1 = "Conferencia Centro - Grupo B";
vid002.desc2 = "Vive la segunda temporada de la competición nacional universitaria donde 32 universidades públicas de España se ven las caras en busca de proclamarse el campeón.";
vid002.link = "https://www.youtube.com/embed/uwNMVzBgXcc";
vid002.thumb = "http://img.youtube.com/vi/uwNMVzBgXcc/maxresdefault.jpg"

var vid003 = new Object();
vid003.title = "Falcons VS Hurricanes";
vid003.desc1 = "Conferencia Sur - Grupo B";
vid003.desc2 = "Vive la segunda temporada de la competición nacional universitaria donde 32 universidades públicas de España se ven las caras en busca de proclamarse el campeón.";
vid003.link = "https://www.youtube.com/embed/Fv6rmgbmCBU";
vid003.thumb = "http://img.youtube.com/vi/Fv6rmgbmCBU/maxresdefault.jpg"

var vid004 = new Object();
vid004.title = "Lions VS Sharks";
vid004.desc1 = "Conferencia Sur - Grupo B";
vid004.desc2 = "Vive la segunda temporada de la competición nacional universitaria donde 32 universidades públicas de España se ven las caras en busca de proclamarse el campeón.";
vid004.link = "https://www.youtube.com/embed/qsnzJnb-ZbQ";
vid004.thumb = "http://img.youtube.com/vi/qsnzJnb-ZbQ/maxresdefault.jpg"

window.onload = function()
{
	displayVideo("vid001");
	displayInGallery("vid002", "a");
	displayInGallery("vid003", "b");
	displayInGallery("vid004", "c");
};

function displayVideo(str)
{
	document.getElementById("jsTitle").innerHTML = window[str].title;
	document.getElementById("jsDesc1").innerHTML = window[str].desc1;
	document.getElementById("jsDesc2").innerHTML = window[str].desc2;
	document.getElementById("jsLink").src = window[str].link;
	videoBeingDisplayed = str;
}

function displayInGallery(vid, gal)/*Vid=vid###, gal=a||b||c*/
{
	console.log("displayInGallery(",vid,",",gal,")");
	document.getElementById("vid"+gal.toUpperCase()).innerHTML = vid;
	document.getElementById(gal+"_title").innerHTML = window[vid].title;
	document.getElementById(gal+"_thumb").src = window[vid].thumb;
}

function checkEmail()
{
	var data = getCookie(document.getElementById("emailModal").value);
	if (data != "")
	{
		document.getElementById("myModalLogin").style.display = "none";
		var parsedData = JSON.parse(data);
		document.getElementById("userName").innerHTML = parsedData.Jusername;
	}
	else
	{
		window.location.href = "../ej01/ej01.html";
	}
}
function getCookie(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}