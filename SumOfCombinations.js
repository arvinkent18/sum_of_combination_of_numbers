function sumOfCombinations(numbers, sum) {
     const sortedNumbers = numbers.sort(function(a,b) {
        return a-b;
     });

     let index = 0;
     let length = sortedNumbers.length - 1;
     
     while (index < length) {
        if (sortedNumbers[index] + sortedNumbers[length] == sum) {
            return 1;
        }
        else if (sortedNumbers[index] + sortedNumbers[length] < sum) {
            index++;
        }
        else {
            length--;
        }
     }
     return 0;
}

const numbers = [7,2,4,6,7];
const sum = 8;

if (sumOfCombinations(numbers, sum)) {
    console.log('Yes');
}
else {
    console.log('No');
}