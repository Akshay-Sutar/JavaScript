
function evenOdd(x){
	if (x%2 == 0) {
	console.log(x+' is even');
	} else {
	console.log(x+' is odd');
	}	
}

function timeElapsed(a) {
	switch (a) {
		case 1 :
			console.log('ichi byo keka!');
			break;
		case 2 :
			console.log('ni byo keka!');
			break;
		default :
			console.log('Roada rolla da!');
	}
}

evenOdd(2);
evenOdd(3);
timeElapsed(1);
timeElapsed(2);
timeElapsed();

// no exceptions
try {
	let x = 'a_b';
	x.split('_');
} catch (e) {
	console.log('Error caught',e);
}

// this will throw exception
try {
	let x ;
	x.split('_');
} catch (e) {
	console.log('Error caught',e);
}

// finally
try {
	throw 'boolsheet';
} catch (e) {
	console.log('caught some ',e);
} finally {
	console.log('I can rest now!.');
}
