console.log("hello welcome to conditional statements cheking class")
//first program
// let month=prompt("Enter the month name here...!")
// if (month=="janauary")
// {
// console.log("january contain 31 days")
// }
// else if(month=="march")
// {
//     console.log("march contain 31 days")  
// }
// else
// {
//     console.log("April contain 30 days")
// }

// 

// program for grading system
// let geography=Number(prompt("Pleace Enter the marks in geography subject"))
// let science=Number(prompt("Pleace Enter the marks in science subject"))
// let maths=Number(prompt("Pleace Enter the marks in maths subject"))
// let social=Number(prompt("Pleace Enter the marks in social subject"))
// let english=Number(prompt("Pleace Enter the marks in english subject"))

// if (geography>40 && science>40 && maths>40 && social>40 && english>40)
// {
//     let percentage=((geography+science+maths+social+english)/500)*100
//     if (percentage>60)
//     console.log("A+ grade")
//     else if(percentage>40 && percentage<60)
//     console.log("B+ grade")
//     else
//     console.log("C+ grade")
// }
// else
// {
//     console.log("Fail")
// }


// // program for Swap two numbers with third variable
// let a=Number(prompt("Enter a value"))
// let b=Number(prompt("Enter a value"))
// console.log(`The value of a=${a} and value of b=${b}`)
// let temp=a
// a=b
// b=temp
// console.log(`The value of a=${a} and value of b=${b}`)

// // program for Swap two numbers without third variable
// let a=Number(prompt("Enter a value"))
// let b=Number(prompt("Enter a value"))
// console.log(`The value of a=${a} and value of b=${b}`)
// // a=a+b
// // b=a-b
// // a=a-b
// // other method
// a=a*b
// b=a/b
// a=a/b
// console.log(`The value of a=${a} and value of b=${b}`)


//program for to check giver year is leap year or not
// let year=Number(prompt("Enter the year"))
// if ((year%4==0 && year%100!=0) ||(year%400==0 ))
// {
//     console.log(`Given year ${year} is a leap year`)
// }
// else{
//     console.log(`Given Year ${year} is not a leap`)
// }

//program for currancy checking
// let ammount=Number(prompt("Enter the ammount"))
// console.log(`given ammount is ${ammount}`)

// if (ammount%500==0)
// {
//     let two_thousend_notes=ammount/2000
//     let remainder_2k=ammount%2000
//     let one_thousend_notes=remainder_2k/1000
//     let remainder_1k=remainder_2k%1000
//     let five_hundred_notes=remainder_1k/500
//     let final_remainder=ammount%500

//     console.log(`Number of 2k notes required is ${Math.floor(two_thousend_notes)}`)
//     console.log(`Number of 1k notes required is ${Math.floor(one_thousend_notes)}`)
//     console.log(`Number of 500 notes required is ${Math.floor(five_hundred_notes)}`)
//     console.log(`Remaining ammount is ${final_remainder}`)
// }
// else{
//     let two_thousend_notes=ammount/2000
//     let remainder_2k=ammount%2000
//     let thousend_notes=remainder_2k/100
//     let remainder_100=remainder_2k%100
//     let fifty_notes=remainder_100/50
//     let final_remainder=ammount%50

//     console.log(`Number of 2k notes required is ${Math.floor(two_thousend_notes)}`)
//     console.log(`Number of 100 notes required is ${Math.floor(thousend_notes)}`)
//     console.log(`Number of 50 notes required is ${Math.floor(fifty_notes)}`)
//     console.log(`Remaining ammount is ${final_remainder}`)

// }




// program for switch case
let a=Number(prompt("Enter the first value"))
let operator=prompt("Enter the operarator")
let b=Number(prompt("Enter the second value"))
switch(operator)
{
    case "+":
        console.log(`Addition of a+b=${a+b}`)
        break
    case "-":
        console.log(`Subtraction of a-b=${a-b}`)
        break
    case "*" || "x":
        console.log(`Multiplication of a*b=${a*b}`)
        break
    case "/":
        console.log(`Division of a/b=${a/b}`)
        break
    default:
        console.log("Invalid option entered")
}


