//This challenge came from this reddit post:
// https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/


function balanced(string){
	let x_count = 0;
	let y_count = 0;
	
	for(let i = 0; i < string.length; i++){
		if (string.charAt(i) == 'x'){
			x_count++;
		} else if(string.charAt(i) == 'y'){
			y_count++;
		}
	}
	
	if(x_count == y_count){
		return true;
	} else{
		return false;
	}
}

console.log('balanced("xxxyyy"): ', balanced("xxxyyy"));
console.log('balanced("yyyxxx"): ', balanced("yyyxxx"));
console.log('balanced("xxxyyyy"): ', balanced("xxxyyyy"));
console.log('balanced("yyxyxxyxxyyyyxxxyxyx"): ', balanced("yyxyxxyxxyyyyxxxyxyx"));
console.log('balanced("xyxxxxyyyxyxxyxxyy"): ', balanced("xyxxxxyyyxyxxyxxyy"));
console.log('balanced(""): ', balanced(""));
console.log('balanced("x"): ', balanced("x"));