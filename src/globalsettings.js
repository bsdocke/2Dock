/**
 * This file parses the settings.xml and sets the global variables used
 * by the framework.
 * @author Brandon Dockery
 */
var canvas_width;
var canvas_height;
var fps;

function initializeEnvironment(path) {
	var doc = loadXML(path);
	createStage(doc);
	
	return setGlobals(doc);
}

function loadXML(filePath) {
	var xmlRequest;
	var xmlDocument;
	if(window.XMLHttpRequest) {
		xmlRequest = new XMLHttpRequest();
	} else {
		alert("Your browser does not support this application.");
	}
	xmlRequest.open("GET", filePath, false);
	xmlRequest.send();
	xmlDocument = xmlRequest.responseXML;

	return xmlDocument;
}

function createStage(xmlDoc) {
	var stageAttrs = xmlDoc.getElementsByTagName("stage")[0];
	var id = stageAttrs.getAttribute("id");
	var canvasElement = document.createElement("canvas");
	
	canvas_width = stageAttrs.getAttribute("width");
	canvas_height = stageAttrs.getAttribute("height");
	
	canvasElement.setAttribute("id", id);
	canvasElement.setAttribute("width", canvas_width);
	canvasElement.setAttribute("height", canvas_height);
	document.getElementsByTagName("body")[0].appendChild(canvasElement);
}

function setGlobals(xmlDoc) {
	var stageAttrs = xmlDoc.getElementsByTagName("fps")[0].childNodes[0];
	var playerColor = xmlDoc.getElementsByTagName("player"[0].childNodes[0]);
	fps = stageAttrs.nodeValue;

	var settingsObj = {
		playerCol : playerColor,
		mainfps : fps
	};

	return settingsObj;
}