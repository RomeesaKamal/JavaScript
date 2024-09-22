// let marks = [87, 86, 27, 94, 50, 88, 27];
// console.log(marks)
// marks[3] = 96;
// console.log(marks.length);

// let Fibonaccisequence = [0,1,1,2,3,5,8,13,21,34,55,89,144];
// console.log(Fibonaccisequence); 

// let friends = ["Saba", "Shanza", "Umama", "Urooj", "Rooha", "Romeesa"];
 
// for (idx = 0; idx < friends.length; idx++){
//     console.log(friends[idx])
// };

// for (let el of friends){
    // console.log(el)
// };

// let cities = ["Swabi","Karachi", "Islamabad", "Peshawar", "Mardan", "Taxila"];

// for (let city of cities){
//     console.log(city.toUpperCase())
// }

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for (let val of marks) {
//     sum += val;

// }
// let avg = sum / marks.length

// console.log(`avg marks of the class =  ${avg}`);

// let items = [250, 645, 900, 50, 300];

// let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer ${items[i]}`)
// i++;
// }

// for (i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

// let foodItems = ["Noodels", "Potato", "Fish", "Chips"];

// foodItems.push("Egg", "Meat", "Rice");

//  foodItems.pop();

//  let delItem = foodItems.pop();

// console.log(delItem)

// let marks = [23, 35, 67,]
// console.log(marks.toString())

// let mathTeacher = ['Ahmad', 'Imad', 'Riyaz', 'Zubair', 'Kashif', 'Ayaz','Fawad']
// let phyTeacher = ['Safeer', 'Lintha', 'Didaar', 'Shahimulk', 'Jafer']
// let engTeacher = ['Ijaz','Mashkoor', 'Farooq']
// engTeacher.unshift("Amna")
// engTeacher.shift("Amna")
// let teacher = mathTeacher.concat(phyTeacher, engTeacher);


// console.log(mathTeacher.slice(0, 4));

// let num = [1, 2, 3, 4, 5, 6, 7];
// num.splice(2, 2, 101, 102);
// console.log(num)

// Add element
// num.splice(3, 0, 86)

// Delete element
// num.splice(4,2)

//Replace element
// num.splice(3, 1, 99)

let comp = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"]
comp.shift();
comp.splice(2,1, "Ola");
comp.push("Amazon")

console.log(comp)


