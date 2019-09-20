//This challenge came from this reddit post:
//https://www.reddit.com/r/dailyprogrammer/comments/aphavc/20190211_challenge_375_easy_print_a_new_number_by/

function addOne(number){
	
	let last_digit;
	let number_array = [];
	let string = ""
	
	while(number > 0){
		last_digit = number%10;
		
		number = Math.floor(number/10);
	
		last_digit++;
		
		string = last_digit + string;
		
	}
	
	console.log(string);

}

addOne(998);