//This challenge comes from this reddit post:
//https://www.reddit.com/r/dailyprogrammer/comments/cdieag/20190715_challenge_379_easy_progressive_taxation/


const taxBrackets = [10000, 30000, 100000];
const taxRates = [0, .1, .25, .4];

function tax(money){
	
	let taxTotal = 0;
	let alreadyTaxedMoney = 0;
	let theoreticalMoney = money;
	
	for(let i = 0; i < taxBrackets.length; i++){
		if(money > taxBrackets[i]){
			
			taxTotal += (taxBrackets[i] - alreadyTaxedMoney) * taxRates[i];
			theoreticalMoney -= (taxBrackets[i] - alreadyTaxedMoney);
			alreadyTaxedMoney += (taxBrackets[i] - alreadyTaxedMoney);
			
			
		} else{
			
			taxTotal += theoreticalMoney * taxRates[i]
			theoreticalMoney = 0;	
			break;	
			
		}
	}
	
	if (theoreticalMoney != 0){
		
		taxTotal += theoreticalMoney * taxRates.pop();
	}

	return Math.floor(taxTotal);
}

console.log("the tax on $5 is ", tax(5));
console.log("the tax on $10,005 is ", tax(10005));
console.log("the tax on $20,000 is ", tax(20000));
console.log("the tax on $56789 is ", tax(56789));
console.log("the tax on $1234567 is ", tax(1234567));