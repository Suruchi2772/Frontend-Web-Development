calculate = () => {
    let inputWeight = document.getElementById("weight");
    let inputHeight = document.getElementById("height");
    height = inputHeight.value;
    weight = inputWeight.value;
    let heightInMeter = (height/ 100);
    let heightSqr = heightInMeter ** 2;
    heightSqr = heightSqr.toFixed(2);
    let result = (weight / heightSqr).toFixed(2);
    let resultValue = document.getElementById("resultValue");
    resultValue.innerText = result;
    let calculatorbody = document.getElementById("calculatorbody");
    calculatorbody.style.display = "none";
    let resultPage = document.getElementById("resultPage");
    resultPage.style.display = "block";
    let resultcategory = document.getElementById("resultcategory");
    

    if (result < 18.5) {
        resultcategory.innerText = "UnderWeight 🍌🥛"; 
        resultcategory.style.color = "rgb(105, 188, 223)";
    }else if (result >= 18.5 && result < 25) {
        resultcategory.innerText = "Normal 😃"; 
        resultcategory.style.color = "green";
    } else if (result >= 25 && result < 30) {
        resultcategory.innerText = "Overweight 🏃🏼‍♂️‍➡️"; 
        resultcategory.style.color = "rgb(223, 199, 14)";
    } else if (result >= 30 && result < 40) {
        resultcategory.innerText = "Obese ❌🍕🍔🍟❌"; 
        resultcategory.style.color = "rgb(198, 130, 4)";
    } else if (result >= 40) {
        resultcategory.innerText = "Severly Obese ❌🍕🍔🍟❌"; 
        resultcategory.style.color = "red(223, 199, 14)";
    } else{
        resultValue.innerText = "⚠️ Please make correct input!!!";
        resultValue.style.color = "red";
        resultValue.style.fontWeight = "500";
        let resultStatus = document.getElementById("resultStatus");
        resultStatus.style.display = "none";
    }

}

