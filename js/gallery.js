// this sheet is just for the gallery
photos =  new Array();

photos[0]="/web/image/bookshelf12202014.jpg";
photos[1]="/web/image/bookshelf12202014_2.jpg";
photos[2]="/web/image/bookshelf12202014_3.jpg";
photos[3]="/web/image/bookshelf12202014_4.jpg";
photos[4]="/web/image/engraving.jpg";
photos[5]="/web/image/jackplane.jpg";
photos[6]="/web/image/picnictable.jpg";
photos[7]="/web/image/picnictable2.jpg";
photos[8]="/web/image/picnictable3.jpg";
photos[9]="/web/image/picnictable4.jpg";

function printAllImg() {
	var i;
	for (i=0;i<photos.length;i++) {
		imgString = "<a href=\"" + photos[i] + "\"><img src=\"" + photos[i] + "\" /></a>";
		document.write(imgString);
	}
}

