/* let readline = require('readline-sync');

let joke =readline.question("Tell me a joke.")
let money= readline.question("How much money is on your bank account")

if (money > 20000) {
    let money_status = "rich"}
    else {money_status = "poor"}

console.log(`A ${money_status} person like to tell this joke: ${joke}`)
*/
/*const student = {
    name: "Chris",
    age: 27,
    subjects: ['math', 'english', 'sience'],
    grades: {math: 'A', english: 'B', science: 'A'}
}

console.log(student.name, student.age)
console.log(student.subjects)
console.log(student.grades)
student.grades['english'] = 'A'
console.log(student.grades)
//student.subjects.push('sport')
student.grades['sport']=('A')
console.log(student.grades)
*/
let numbers = [2, 4, 5, 1, 6, 9, 20 ,100, 51, 61, 7];

/* function avaerage(nums) {
    total = 0
    for (let num of nums){
        total += num}
    ava = total / nums.length
    return ava
    }
console.log(avaerage(numbers))
*/
/* function maxmin(nums) {
        min = nums[0]
        max = nums[0]
        for (let num of nums){
            if (num < min) {
                min = num
            };
            if (num > max) {
                max = num
            }
        result = [max, min]
        
    }
    return result
}
console.log(maxmin(numbers))

function extract(nums, value) {return nums.filter(item => item != value)}



console.log(extract(numbers, 2))

let evenNumbers = numbers.filter(number => number % 2 == 0);*/

/*const book = {
    title: "my book",
    author: "Chris",
    year: 2025
}

const bookJson = JSON.stringify(book, null, 2)

var fs = require('fs')

try {
    fs.writeFileSync('book.json', bookJson)
        console.log('Saved!');
    } catch (err) {
        console.error("Error during saving.")
    }


let data = fs.readFileSync('book.json', 'utf8')
console.log(data)

let book2 = JSON.parse(data)
console.log(book2.title, book2.author)

book2.year= 2024
const updateJson = JSON.stringify(book2, null, 2)
fs.writeFileSync('book.json', updateJson)
console.log("Updated")
*/


