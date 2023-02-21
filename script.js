let firstButton = document.querySelector(".option-one");
let secondButton = document.querySelector(".option-two");
let thirdButton;
let firstScreen = document.querySelector(".option-one-screen");
let secondScreen = document.querySelector(".option-two-screen");
let thirdScreen = document.querySelector(".option-three-screen");
firstButton.onclick = function() {
    firstScreen.style.display = "block";
    firstScreen.style.display = "block";
    
    thirdButton = document.querySelector(".option-three");
    console.log(thirdButton);
/*
    thirdButton.onclick = function() {
        thirdScreen.style.display = "block";
    };
    */
};
secondButton.onclick = function() {
    secondScreen.style.display = "block";
    secondScreen.style.display = "block";
};





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/