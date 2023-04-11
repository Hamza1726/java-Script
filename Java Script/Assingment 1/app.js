alert("Task 1");
console.log("Task 1")
let num1 = Number((prompt("Enter First Number")));


let num2 = Number((prompt("Enter Second Number")));
if (num1 > num2) {
    console.log(`The larger number ${num1}`);
} else if (num1 < num2) {
    console.log(`The larger number ${num2}`);
};

alert("Task 2");
console.log("Task 2")
let number = Number((prompt("Enter a Number to find the sign of a number.")));
if (number > 0) {
    alert("The sign is +");

}
else {
    alert("The sign is -");
};

alert("Task 3");
console.log("Task 3")
let a = Number((prompt("Enter First Number")));
let b = Number((prompt("Enter Second Number")));
let c = Number((prompt("Enter Third Number")));
let d = Number((prompt("Enter Fourth Number")));
let f = Number((prompt("Enter Five Number")));

if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log(d);
}
else {
    console.log(f);
}

alert("Task 4");
console.log("Task 4")
for (c = 0; c <= 5; c++) {
    if (c % 2 === 0) {
        console.log(`${c} is even`);
    } else {
        console.log(`${c} is odd`);
    }

}
alert("Task 5");
console.log("Task 5")
avgMarks = Number(prompt("Enter Average Marks"));
if(avgMarks===100){
     console.log("Grade is A+");
    }else if(avgMarks>=90){
        console.log("Grade is A");
    }else if(avgMarks>=80){
        console.log("Grade is B");
    }else if(avgMarks>=70){
        console.log("Grade is C");
    }else if(avgMarks>=60){
        console.log("Grade is D");
 }else{
     console.log("Grade is F");
    }


    alert("Task6");
    console.log("Task 6")
    var num=prompt("enter num");
    {
        if(num%3===0 && num%5===0){
            console.log(`${num} is fizzbuzz`);
     }else if(num %3  === 0)
     {
         console.log(`${num} is fizz`);
        }else if(num %5  === 0)
        {
            console.log(`---->${num} is buzz`);
        }
     else{
         console.log(num);
        }
    }


alert("Task 7");
console.log("Task 7");
for (var row = 1; row <= 5; row++) {
    for (var col = 1; col <= row; col++) {

        document.getElementById("p1").innerHTML += "*";
    }
    document.getElementById("p1").innerHTML += "<br>";
}













