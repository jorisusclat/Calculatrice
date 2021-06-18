//Calculatrice

const calculatrice = (event) =>{
  const value = event.target.value;
  let screen = document.getElementById('screen');

  switch (value){
    case "RESET":
      screen.value = "";
    break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      screen.value += value;
    break;
    case "=":
      const equal = eval(document.getElementById('screen').value);
      if(equal === undefined){
        screen.value = "Please type a valid operation";
      } else{
        screen.value = equal;
      };
    break;
    default:
      return;
  };
};

const btn = document.querySelectorAll('button');

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', calculatrice);
};