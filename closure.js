function Gun(bulletType){
	/* do shoot is using bulletTypes from enclosing class */
	/* it has a closure over Gun */
	/* it will continue to refer that particluar Gun's scope */
	function doShoot(direction){
		console.log("shooting " + bulletType + " to " + direction);
	}
	var gunApi = {
		shoot: doShoot
	}

	return gunApi;
}

var gun1 = new Gun('7mm caliber');
var gun2 = new Gun('.75 ACP');

gun1.shoot('west');
gun2.shoot('east');
gun1.shoot('south');
gun2.shoot('south');
