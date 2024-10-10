// const employee = {
//     calcText () {
//         console.log("tax rate is 10%");
//     },       
         
// };
// const romeesaKamal = {
//     sallery: 50000,
//     calcText () {
//         console.log("tax rate is 20%");
//     }, 
// };
// romeesaKamal.__proto__ = employee;

// class ToyotaCar {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop")
//     }
//     setBrand(brand){
//        this.brand = brand;
//     }
// };
//     let fortune = new ToyotaCar();
//     fortune.setBrand("fortune");
//     let lexus = new ToyotaCar();
//     lexus.setBrand("fortune");

//     class person {
//         eat(){
//             console.log("eat")
//         }
//         sleep(){
//             console.log("sleep")
//         }
//     };
//     class engineer extends person{
//         work(){

//         }
//     };

//     let data = "secret information"
//     class User{
//         constructor(name, email){
//             this.name = name;
//             this.email = email;
//         }
//         viewData (){
//             console.log("data =", data);
//         }
//     };
//     class Admin extends User{
//         constructor(name, email){
//            super(name, email)
//         }
//         editData(){
//             data = "some new value"
//         }
//     };
//     let student1 = new User("Rome", "abc@email.com");
//     let student2 = new User("Rooha", "def@email.com");
//     let admin1 = new Admin("admin", "admin@email.com");



//     try{
//         console.log(c)//error
//     }catch(err){
//        console.log(err)
// //     }


// function sum (a, b){
//     console.log(a+b)
// };
// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b);
// };
// calculator(1, 2, sum);

// const hello = () => {
//     console.log("Hello")
// };
// setTimeout(hello, 3000);


// // Nesting
// let age = 19;
// if(age>=18){
//     if(age>60){
//         console.log("senior")
//     } else{
//         console.log("middle")
//     }
// }else{
//     console.log("chils")
// }

// for (let i=0; i<=5; i++){
//    for(let j=0; j<=5; j++){
//     console.log('j')
//    }
//    console.log('i')
// // }

function getData(dataId, getNextData){
   return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("data =", dataId)
      resolve("success");
        // reject("error");
    }, 2000);
   }); 
}

//Asyn-await

async  function getAllData(){
   await getData(1);
   await getData(2);
   await getData(3);
}
//IFFE
(async  function getAllData(){
   await getData(1);
   await getData(2);
   await getData(3);
})();


//Promise Chain

// getData(1)
// .then((res) =>{
//   return getData(2)
// })
// .then ((res)=>{
// return getData(3)
// })
// .then ((res)=>{
//   console.log(res);
// });


// //Call back hell
// getData(1, () =>{
//     getData(2, ()=>{
//         getData(3)
//     })
// });

// const getPromise = () => {
// return new Promise((resolve, reject)=>{
//    console.log("I am a promise");
//    // resolve(4356);
//    resolve("Success");
//    // reject("some error occured");
// });
// }

// let promise = getPromise();
// promise.then((res) =>{
//    console.log("promise fullfilled", res);
// })
// promise.catch((err)=>{
//    console.log("rejected", err);
// });

//  function asyncFunc1(){
//    return new Promise((resolve, reject) => {
//      setTimeout(() =>{
//        console.log("data 1");
//        resolve("success");
//      }, 4000)
//    });
//  }
//  function asyncFunc2(){
//    return new Promise((resolve, reject) => {
//      setTimeout(() =>{
//        console.log("data 2");
//        resolve("success");
//      }, 8000)
//    });
//  }
//  console.log("fatching data1....")
// asyncFunc1().then((res)=>{
//   console.log("fatching data2.....")
// asyncFunc2().then((res)=>{});
//  });

// async function hello() {
//   console.log("hello")
// }
//  function api(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log("weather data");
//     resolve(200)
//   }, 2000)
//   })
//  }
// async function getWeatherData() {
//   await api();
//   await api();
// }
