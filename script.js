//
let people = [
    { name: "Andrey", age: 10, budget: 20 },
    { name: "Ilya", age: 15, budget: 20000 },
    { name: "Sherik", age: 5, budget: 2000 },
    { name: "Ahmad", age: 20, budget: 200 },
]
//1
let sum = 0
for (const element of people ) {
    sum = sum + element.budget
}
console.log(sum);
//2
let min = people[0]
for (const item of people) {
    if (item.age < min.age) {
        min = item
    }
}
console.log(min.name);
//3
let max = people[0]
for (const item of people) {
    if (item.age > max.age) {
        max = item
    }
}
console.log(max.age);
//4
console.log(min.age);
//5
let amount = people.reduce ((a,b) => {
   if (a.budget && b.budget < 5000) {
    return a
   }else{
    return b
   }
})
console.log(amount.budget);
//6
for (const item of people) {
    if (item.budget > 1000) {
        console.log(item);
    } 
}
//7 
let keys = 0
for (const key in people) {
    if (people[key].age < 15) {
        keys++
        
    }
}
console.log(keys);
//8
let personAge = 0
for (const key in people) {
    if (people[key].age >= 10) {
        personAge++
        
    }
}
console.log(personAge);
