// Prime number or not
let test_prime=(number)=>
{
    for(let i = 2; i < number; i++)
    {
      if(number % i === 0)
      {
        return 'not a prime number';
      }
    }
    return 'prime number';  
  }
console.log(test_prime(20))


// Convert first letter to uppercase
const str = 'john';
const newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
console.log( newStr);


// Print the second largest number

findSecondLargestElem=(arr)=>{
    let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);