// initialize the counter and the array
var versionNum = 0.05;
compileDate = new Date("12,29,2014");

function printFooter() {
	document.write("<footer><p style=\"float:right\"><strong>AJ Handmade Furniture</strong> &copy 2014</p>" +
			"<p style=\"text-align:left\"><strong>V " + versionNum + "</strong> Compiled " + 
			(compileDate.getMonth()+1) + "-" + compileDate.getDate() + "-" + compileDate.getFullYear() + "</p></footer>");
}

function printLastModifiedDate() {
	var lastDate = new Date(document.lastModified);
	var stringDate = (lastDate.getMonth()+1) + "-" + lastDate.getDate() + "-" + lastDate.getFullYear() + " " + lastDate.getHours() + ":" + lastDate.getMinutes();
	document.write("Page last modified " + stringDate);
}