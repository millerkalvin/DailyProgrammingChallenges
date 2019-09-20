//This challenge came from this reddit post:
//https://www.reddit.com/r/dailyprogrammer/comments/akv6z4/20190128_challenge_374_easy_additive_persistence/

function checkOneDigit(number){
	number = Math.floor(number/10);
	if (number == 0){
		return true;
	} else{
		return false;
	}
}

function sumOfDigits(number){
	let sum = 0;
	let last_digit;
	
	while (number > 0){
		last_digit = number % 10;
		sum = sum + last_digit;
		number = Math.floor(number/10);


		
	}

	return sum;
}

function additivePersistence(number, count){
	
	if(checkOneDigit(number)){
		return count;
	}
	
	let new_number = sumOfDigits(number);
	
	count++;
	
	return(additivePersistence(new_number,count))
	

	
	
}

console.log("additivePersistence(9876,0): ", additivePersistence(9876,0));
console.log("additivePersistence(1234,0): ", additivePersistence(1234,0));
console.log("additivePersistence(199,0): ", additivePersistence(199,0));
console.log("additivePersistence(12345678,0): ", additivePersistence(12345678,0));