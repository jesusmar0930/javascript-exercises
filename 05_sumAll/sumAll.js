const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (num1 > num2){
        [num1, num2] = [num2, num1];
    }
    else if (num1 < 0  || num2 < 0){return "ERROR"} 
    else if (typeof num1 !== "number"  || typeof num2 !== "number" ){return "ERROR"} 



    for (let i = num1; i <= num2; i++){
        finalSum += i
    }
    return finalSum;
 
};

// Do not edit below this line
module.exports = sumAll;
/*
('sums numbers within the range', () => {
    expect(sumAll(1, 4)).toEqual(10);

    
*/