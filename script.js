const myProblem = () => {
    var answ = document.getElementById("in1").value;
    if (answ == "x^2 + 12x + 35") {
        return "Good Job!";
    }   else
        return "x^2 + 12x + 35";
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var answ = document.getElementById("in2").value;
    if (answ == "x^2 + 12x + 20") {
        return "Good Job!";
    }   else
        return "x^2 + 12x + 20";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var answ = document.getElementById("in3").value;
    if (answ == "x^2 - 5x - 24") {
        return "Good Job!";
    }   else
        return "x^2 - 5x - 24";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    var answ = document.getElementById("in4").value;
    if (answ == "x^2 - 12x + 20") {
        return "Good Job!";
    }   else
        return "x^2 - 12x + 20";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}
