// This challenge comes from this reddit post:
// https://www.reddit.com/r/dailyprogrammer/comments/cmd1hb/20190805_challenge_380_easy_smooshed_morse_code_1/


const alphabet = "abcdefghijklmnopqrstuvwxyz";
const morseAlphabet = ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..";

const morseAlphabetArray = morseAlphabet.split(" ");
const alphabetArray = alphabet.split("");

function smorse(word){
	
	let morseWord = "";
	
	for(let i = 0; i < word.length; i++){
		
		let letter = word.charAt(i);
		
		let letterIndex = alphabetArray.findIndex((arrayLetter) => arrayLetter == letter);
		
		morseWord = morseWord + morseAlphabetArray[letterIndex];
		
	}
	
	return morseWord;
}

console.log("The word 'sos' is " + smorse("sos"));