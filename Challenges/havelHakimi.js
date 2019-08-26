// This challenge came from this reddit post:
//https://www.reddit.com/r/dailyprogrammer/comments/bqy1cf/20190520_challenge_378_easy_the_havelhakimi/


function removeZeroes(array){
	
	for(let i = 0; i < array.length; i++){
		
		if(array[i] == 0){
			let tempArray = array.slice(0,i);
			let tempArray2 = array.slice((i+1), array.length);
			array = tempArray.concat(tempArray2);
			
			i--;
		}
		
		
		
	}
	
	return array;
}

function descSort(array){
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < (array.length - i); j++){
			
			if(i < (array.length - 1)){
				if(array[j] < array[j+1]){
					let temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
					
					
					
				}
			}
			
			
		}
	}
	
	return array;
	
}


function lenCheck(number, array){
	if (number > array.length){
		return true;
	} else{
		return false;
	}
	
}

function frontElimination(number, array){
	for(let i = 0; i < number; i++){
		array[i] = array[i] - 1;
	}
	
	return array;
}

function havelHakimi(array){

	array = removeZeroes(array);
	

	if(array.length == 0){
		
		return true;
	}
	

	
	array = descSort(array);
	

	
	let largestNumber = array.shift();

	if(lenCheck(largestNumber, array) == true){
		
		return false;
	}

	
	array = frontElimination(largestNumber, array);
	

	
	let bool = havelHakimi(array);
	
	if(bool == true){
		return true;
	} else{
		return false;
	}
	

	
}

let testArray =[15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3];

console.log(havelHakimi(testArray));