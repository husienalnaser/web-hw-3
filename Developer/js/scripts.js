

// let launguges=["python","javascrpt","html","css"]

// function task(){
//     let name= prompt("ما اسمك؟");
//     let age = parseInt(prompt("كم عمرك؟"));
//     let experience=parseInt(prompt("كم عدد سنوات الخبرة لديك؟"));








//     console.log("1- "+ launguges[0])
//     console.log("2- "+ launguges[1])
//     console.log("3- "+ launguges[2])
//     console.log("4- "+ launguges[3])

//     let laung1= prompt("حدد رقم اللغة");
//     let laung2= prompt("حدد رقم اللغة");

//     if(age>25 && age<40 && experience>3 && laung1=="2" || laung2=="2" ){
//        console.log("congrats "+name+" you got accepted")

//     }else{
//         console.log("sorry "+name+" you didnt get accepted")
//     }



// }



// task();



// temp = [32, 90, 120, 80]
// console.log(temp);
// let cels = []
// function turn() {


//     let temp = [32, 90, 120, 80]

//     for (tempr of temp) {
//         let cels1 = (tempr - 32) * (5 / 9)

//         cels.push(cels1);
//     }
//     console.log(cels);
// }




// turn(temp);

// function celss() {

//     const min = 27
//     let celsbig = []

//     for (celsy of cels) {
//         if (celsy > min) {
//             celsbig.push(celsy);
//         }
//     }
//     console.log(celsbig);


// }

// celss();



let ferinhite=[100,90,150,50,40,75]
console.log(ferinhite);
function big(){
    const min1= 60
    let big=[]
    let temprrar=[]
    for(temprr of ferinhite){
        if(temprr > min1){
            big.push(temprr);
        }
        }
    console.log(big);
    for(Num of big){
        temprrar.push((Num-32)*(5/9))
    }
    console.log(temprrar);
    
 

}

big();
















// function grade() {
//     let quizes = document.getElementById("quiz").value;
//     let mid = document.getElementById("mid").value;
//     let final = document.getElementById("final").value;
//     let oral = document.getElementById("oral").value;

//     let hun = quizes * 1
//     let hun1 = mid * 1
//     let hun3 = final * 1
//     let hun4 = oral * 1


//     let grades = hun + hun1 + hun3 + hun4



//     if (grades > 89 && grades < 101) {
//         document.getElementById("head2").innerHTML = "A"
//     }
//     if (grades > 79 && grades < 90) {
//         document.getElementById("head2").innerHTML = "B"
//     }
//     if (grades > 69 && grades < 80) {
//         document.getElementById("head2").innerHTML = "C"
//     }
//     if (grades > 59 && grades < 70) {
//         document.getElementById("head2").innerHTML = "D"
//     }
//     if (grades < 60) {
//         document.getElementById("head2").innerHTML = "F"
//     }

//     document.getElementById("title").innerHTML = grades
//     if (grades > 100) {
//         document.getElementById("title").innerHTML = "error"
//         document.getElementById("head2").innerHTML = "error"
//     }




// }

