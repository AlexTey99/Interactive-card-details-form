// Declaracion de variables
let verificateCardHordel = false;
let verificateCardNumber = false;
let verificateMM = false;
let verificateYY = false;
let verificateAG = false;

// Funcion para ajuster el formato correcto del nombre de la tarjeta en tiempo real
const inputCard = document.getElementById("inputCardHolder");
  inputCard.addEventListener("input", (event) => {
    CardHolder();//Funcion para comprobar si el nombre de la tarjeta es correcto
    if (inputCard.value == "") {
      document.getElementById("userNamer").innerHTML = "userNamer"
    }
  })

// Funcion para ajustar el formato correcto de el numero de la tarjeta en tiempo real
const inputNumber = document.getElementById("inputCadNumber");
inputNumber.addEventListener("input", (event)=> {
  inputNumber.value = event.target.value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim(); // Aplica la expresion regular para formatear de manera correcta el numero de la tarjeta
  document.getElementById("leftNumberTarget").innerHTML = inputNumber.value;
  CardNumber(); // Funcion que comprueba si el formato del input (numero de tarjeta) es correcto
  if(inputNumber.value == "") {
    document.getElementById("leftNumberTarget").innerHTML = "0000 0000 0000 0000"
  }
})

// Funcion para ajustar el formato correcto de el (mes) de la tarjeta en tiempo real
const inputMM = document.getElementById("inputMM");
  inputMM.addEventListener("input", () => {
    MM();
    if (inputMM.value == "") {
      document.getElementById("month").innerHTML = "00"
    }
})



// Funcion para ajustar el formato correcto de el (Year) de la tarjeta en tiempo real
const inputYY = document.getElementById("inputYY");
inputYY.addEventListener("input", () => {
  YY()
  if(inputYY.value == "") {
    document.getElementById("year").innerHTML = "00"
  }
}) 
// Funcion para ajustar el formato correcto de el (CVC) de la tarjeta en tiempo real
const inputAG = document.getElementById("inputAG123");
inputAG.addEventListener("input", () => {
  document.getElementById("leftParagraphBottom").innerHTML = "000";
  AG();
})

// Funcion para comprobar si el input (nombre de la tarjeta) es correcto
const CardHolder = () => {
  const inputCard = document.getElementById("inputCardHolder");
  const resultCard = inputCard.value;
  if (/^[a-zA-Z\s]+$/.test(resultCard) == true && resultCard != "") {
    document.getElementById("userNamer").innerHTML = resultCard;
    document.getElementById("notBlankCard").style.display = "none";
    document.getElementById("notBlankCardHolder").style.display ="none";
    document.getElementById("inputCardHolder").style.borderColor = "";
    verificateCardHordel=true;
  } else if (isNaN(resultCard) == false && resultCard != ""){
    document.getElementById("notBlankCard").style.display = "flex";
    document.getElementById("notBlankCardHolder").style.display ="none";
    document.getElementById("inputCardHolder").style.borderColor = "red";
    verificateCardHordel=false;
  } else if (resultCard == "") {
    document.getElementById("notBlankCardHolder").style.display ="flex"; 
    document.getElementById("notBlankCard").style.display = "none";
    document.getElementById("inputCardHolder").style.borderColor = "red";
    verificateCardHordel=false;
  } 
  else {
    document.getElementById("notBlankCard").style.display ="flex"; 
    document.getElementById("notBlankCardHolder").style.display ="none"; 
    document.getElementById("inputCardHolder").style.borderColor = "red";
    verificateCardHordel=false;
  }
};

//Funcion comprobar si el input (numero de la tarjeta) es correcto
const CardNumber = () => {
  const inputNumber = document.getElementById("inputCadNumber");
  const resultNumber = inputNumber.value;
  if ( /^[0-9\s]+$/.test(resultNumber) && resultNumber != "" && resultNumber.length === 19) {  // exprecion regular que solo permita introducir numeros y espacios
    document.getElementById("leftNumberTarget").innerHTML = resultNumber;
    document.getElementById("errorCardNumber").style.display = "none";
    document.getElementById("notBlankNumber").style.display = "none";
    document.getElementById("inputCadNumber").style.borderColor = "";
    verificateCardNumber = true;
  } else if(/^[0-9\s]+$/.test(resultNumber) && resultNumber != "" && resultNumber.length != 19){
    document.getElementById("notBlankNumber").style.display = "flex"
    document.getElementById("errorCardNumber").style.display = "none"
    verificateCardNumber = false;
  } else if (isNaN(resultNumber) == true && resultNumber != "") {
    document.getElementById("errorCardNumber").style.display = "flex";
    document.getElementById("notBlankNumber").style.display = "none";
    document.getElementById("inputCadNumber").style.borderColor = "red";
    verificateCardNumber = false;
  } else {
    document.getElementById("notBlankNumber").style.display = "flex";
    document.getElementById("errorCardNumber").style.display = "none";
    document.getElementById("inputCadNumber").style.borderColor = "red";
    verificateCardNumber = false;
  }
};
0
// Funcion comprobar el input (mes) de la tarjeta
const MM = () => {
  const inputMM = document.getElementById("inputMM");
  const resultMM = inputMM.value;
  if(resultMM != "" && resultMM <= 12){
    document.getElementById("month").innerHTML = resultMM;
    document.getElementById("notBlank1").style.display = "none";
    document.getElementById("inputMM").style.borderColor = "";
    document.getElementById("monthIncorrect").style.display = "none"
    verificateMM = true;
  } else if (resultMM > 12 || /^[a-zA-Z\s]+$/ && resultMM != "") {
    document.getElementById("monthIncorrect").style.display = "flex"
    document.getElementById("notBlank1").style.display = "none";
    verificateMM = false;
  } else {
    document.getElementById("notBlank1").style.display = "flex";
    document.getElementById("inputMM").style.borderColor = "red"
    document.getElementById("monthIncorrect").style.display = "none"
    verificateMM = false;
  }
};

//Funcion para comprobar el input (año) de la tarjeta
const YY = () => {
  const inputYY = document.getElementById("inputYY");
  const resultYY = inputYY.value;
  if (isNaN(resultYY) == false && resultYY != "") {
    document.getElementById("year").innerHTML = resultYY;
    document.getElementById("notBlank1").style.display = "none";
    document.getElementById("inputYY").style.borderColor = "";
    document.getElementById("monthIncorrect").style.display = "none"
    verificateYY = true;
  }  else if (isNaN(resultYY)) {
    document.getElementById("monthIncorrect").style.display = "flex"
    verificateMM = false;
  } else {
    document.getElementById("notBlank1").style.display = "flex";
    document.getElementById("inputYY").style.borderColor = "red";
    document.getElementById("monthIncorrect").style.display = "none"
    verificateYY = false;
  }
} 

//Funcion para comprobar el input (cvc) de la tarjeta
const AG = () => {
  const inputAG = document.getElementById("inputAG123");
  const resultAG = inputAG.value;
  if(isNaN(resultAG) == false && resultAG != "") {
    document.getElementById("leftParagraphBottom").innerHTML = resultAG;
    document.getElementById("notBlank2").style.display = "none";
    document.getElementById("inputAG123").style.borderColor = "";
    document.getElementById("errorAG").style.display = "none"
    verificateAG = true;
  }  else if (isNaN(resultAG)) {
    document.getElementById("errorAG").style.display = "flex"
    document.getElementById("notBlank2").style.display = "none"
    verificateMM = false;
  } else {
    document.getElementById("leftParagraphBottom").innerHTML = "000";
    document.getElementById("notBlank2").style.display = "flex";
    document.getElementById("inputAG123").style.borderColor = "red";
    document.getElementById("errorAG").style.display = "none"
    verificateAG = false;
  }
};

//Funcion para comprobar que todos los campos inputs son correcto
const validateAllInput = () => {
  if (verificateCardHordel && verificateCardNumber && verificateMM && verificateYY && verificateAG) {
    document.getElementById("rightContainer").style.display = "none"
    document.getElementById("otherContainer").style.display = "flex"
  }
}