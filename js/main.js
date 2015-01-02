// initialize the counter and the array
var versionNum = 0.06;
compileDate = "1-2-2015";

function printFooter() {
	document.write("<footer><p style=\"float:right\"><strong>AJ Handmade Furniture</strong> &copy 2015</p>" + "<p style=\"text-align:left\"><strong>V " + versionNum + "</strong> Compiled " + compileDate + "</p></footer>");
}

function printLastModifiedDate() {
	var lastDate = new Date(document.lastModified);
	var minutes = lastDate.getMinutes();
	var hours = lastDate.getHours();
	if (hours > 12) {
		hours = hours - 12;
		varTimeOfDay = "PM";
	} else {
		varTimeOfDay = "AM";
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	var stringDate = (lastDate.getMonth()+1) + "-" + lastDate.getDate() + "-" + lastDate.getFullYear() + " " + hours + ":" + minutes + " " + varTimeOfDay;
	document.write("Page last modified " + stringDate);
}