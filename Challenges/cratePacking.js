//This challenge came from this reddit post:
//https://www.reddit.com/r/dailyprogrammer/comments/bazy5j/20190408_challenge_377_easy_axisaligned_crate/

function fit1(X, Y, x, y){
	let xDimensionFit = Math.floor(X/x);
	let yDimensionFit = Math.floor(Y/y);
	
	return xDimensionFit * yDimensionFit;
	
}

console.log("fit1(25, 18, 6, 5) => ", fit1(25, 18, 6, 5));
console.log("fit1(10, 10, 1, 1) => ", fit1(10, 10, 1, 1));
console.log("fit1(12, 34, 5, 6) => ", fit1(12, 34, 5, 6));
console.log("fit1(12345, 678910, 1112, 1314) => ", fit1(12345, 678910, 1112, 1314));
console.log("fit1(5, 100, 6, 1) => ", fit1(5, 100, 6, 1));

function fit2(X,Y,x,y){
	let tempx = y;
	let tempy = x;
	
	let firstFit = fit1(X,Y,x,y);
	let turnedFit = fit1(X,Y,tempx,tempy);
	
	
	if(firstFit > turnedFit){
		return firstFit;
	} else{
		return turnedFit;
	}
}

console.log();
console.log("fit2(25, 18, 6, 5) => ", fit2(25, 18, 6, 5));
console.log("fit2(12, 34, 5, 6) => ", fit2(12, 34, 5, 6));
console.log("fit2(12345, 678910, 1112, 1314) => ", fit2(12345, 678910, 1112, 1314));
console.log("fit2(5, 5, 3, 2) => ", fit2(5, 5, 3, 2));
console.log("fit2(5, 100, 6, 1) => ", fit2(5, 100, 6, 1));
console.log("fit2(5, 5, 6, 1) => ", fit2(5, 5, 6, 1));


