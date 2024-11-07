/*practice 1
. Given an array of numbers const ages = [21,18,45,30], write code to;
.check if all ages are greater than or equal to 18 using every().
.check if any age is below 20 using some().
*/

// solution
const Ages = [21, 18, 45, 30];//Array of numbers
// check if all ages arre greater than or equal to 18  
const Adults = Ages.every(Ages=> Ages>=18); 
console.log(Adults);
// check if any age is below 20
const notAdults = Ages.some(Ages=> Ages < 20);
console.log(notAdults);

/*practce 2
.Define const name = "Javascript". write a code snippet that uses template literals
 to generate the following message:
 ."the length of the word 'javascript' is 10 characters"
 */

//  solution

const name ="Javascript";  //initializing const name 
console.log(`the length of the word javascript is 10 characters`); //printing the message


/*practice 3
Create an array const scores = [10, 15, 20, 25].
write a function using the reduce() method to calculate thee total score
 */
// solution
const scores = [10, 15, 20, 25]; // initializing const scores
function calTotal (scores){
    return scores.reduce((total, scores) => total + scores, 0);
}// using the reduce() method to calculate total score
const total = calTotal(scores);
console.log(total);//printing the new array 


    

/*practice 4
. Define a string const message "welcome to javascript ES6!". wite code to:
. convert to lowercase
.find the position of the word "javascript"
.replace "javascript" with "ES6"
 */

// solution
const message = "welcome to javascript ES6!";//initializing const message  

console.log(message.toLowerCase());//converting to lowercase 

console.log(message.indexOf("javascript"));// finding position of javasxript

console.log(message.replace("javascript", "ES6"));//using the replace method 


/*practice 5
Given the array const items =["Apple", "Banana" "cherry"],
 use the map function to return a new array in which each item is capitalizes
 */
// solution
const items = ["Apple", "Banana", "Cherry"];//initializing the const items 
const newItems = items.map((items) => {
    console.log(items.toUpperCase()); // returning a new array capitalized  
});

/*practice 6
Given an array of objects const products = [{id: 1, name:"laptop"},
 {id: 2, name:"phone"}, {id: 3, name:"tablet"}], write code to:
 .find the product with the name "phone" using the find() method
 . Get the index of the product with id equal to 3 using findIndex().
 */

//  solution
const products = [
    {id: 1, name:"laptop"},
    {id: 2, name:"phone"},
    {id: 3, name:"tablet"}];//initializing the const products 
    const product = products.find(product => product.name==="phone");
    console.log(product);//using the find() method to get a product with name "phone" 

const proIndex = products.findIndex(proIndex =>proIndex.id===3);
    console.log(proIndex);// using the findIndex() method to get of the product with  id: 3

/*practice 7
Create an array const numbers=[3, 6, 9, 12, 15, 18, 21] use an arrow
function with the filter() method to create a new array with only numbers greater than 10
 */

// solution
const numbers = [3, 6, 9, 12, 15, 18, 21];//initializing the const numbers 

const new_numbers = numbers.filter(new_numbers => new_numbers > 10);//using the
//  filter () method to create arrays of num >10
console.log(new_numbers);// printing the result


  
  
/*practice 8
. Define a string const message "welcome to javascript ES6!". wite code to:
. convert to lowercase
.find the position of the word "javascript"
.replace "javascript" with "ES6"
 */

// solution
const messge = "welcome to javascript ES6!";//initializing const message  

console.log(messge.toLowerCase());//converting to lowercase 

console.log(messge.indexOf("javascript"));// finding position of javasxript

console.log(messge.replace("javascript", "ES6"));//using the replace method 

/* practice 9
create two arrays const arr1 =[1, 2, 3] and const arr2 = [4, 5, 6]
use the spread operator to merge them into a single array and
log the result
 */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];//initializing the two arrays arr1 and arr2 

const new_arr = [...arr1, ...arr2];//using the spread operator to merge them into a single array 
console.log(new_arr);//printing the resilt 

/*practice 10
.Create a function greet that takes a name parameter with
default value of "friend". the function should return a greeting message like, "Hello [Name]!"
 */
// solution
let greet = function greet(name="friend") {
    return`Hello ${name}`;
    
}//declaring a function greet that holds a parameter name with a value "friend" 
console.log(greet());//printing the result 











 


