function fadeInit() {
	document.getElementbyID("open").style.opacity=0.2; // initialise
}

function fadeIn() {

	var bodyStyle=document.getElementbyID("open").style;

		if ( bodyStyle.opacity < 1) {
			bodyStyle.opacity=((bodyStyle.opacity*10)+1)/10; //Add 0.1
			setTimeout('fadeIn();',100)
		}

}