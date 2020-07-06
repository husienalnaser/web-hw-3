

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



















function grade(){
    let quizes = document.getElementById("quiz").value;
let mid = document.getElementById("mid").value;
let final = document.getElementById("final").value;
let oral = document.getElementById("oral").value;

let hun= quizes*1
let hun1=mid*1
let hun3=final*1
let hun4=oral*1


let grades=hun+hun1+hun3+hun4



if(grades>89&&grades<101){
    document.getElementById("head2").innerHTML="A"
}
if(grades>79&&grades<90){
    document.getElementById("head2").innerHTML="B"
}
if(grades>69&&grades<80){
    document.getElementById("head2").innerHTML="C"
}
if(grades>59&&grades<70){
    document.getElementById("head2").innerHTML="D"
}
if(grades<60){
    document.getElementById("head2").innerHTML="F"
}

document.getElementById("title").innerHTML=grades




}

