/* Variable declaration statement. All the parameters that can be
adjusted on the right side can be adjusted in the following statement. */

// The melody_notes corresponds to the piano's 88 keys, it is an int array of length 32,
// you can change the number to any number between 0-88 (0 means silent)
// The melody_play is an object, it represents a more suitable format for machine playback,
// and we init it here as an empty array
var melody_notes = [49, 0, 51, 0, 52, 52, 0, 51, 0, 52, 52, 0, 54, 54, 0, 51,
	51, 0, 0, 44, 0, 44, 0, 49, 49, 0, 47, 0, 49, 49, 0, 52];
var melody_play = [];


// Convert melody_notes to melody_play format
if(melody_notes.length === 0){
	alert('You have not input any melody!')
}
else {
	for(let i = 0; i < melody_notes.length; ){
		if(melody_notes[i] !== 0){
			let melodyobj = {};
			melodyobj.pitch = melody_notes[i] + 20;
			melodyobj.quantizedStartStep = i;
			let count = 1;
			for(let j = i + 1; j < melody_notes.length; j++){
				if(melody_notes[j] === melody_notes[i]){
					count++;
				}
				else {
					break;
				}
			}
			i = count + i;
			melodyobj.quantizedEndStep = melodyobj.quantizedStartStep + count;
			melody_play.push(melodyobj);
		}
		else{
			i++;
		}
	}
}


// Now that the MELODY1 has been changed and interpolated,
// you can also replace it with the MELODY2.
MELODY1 = {notes:melody_play};
interpolateMelodies();