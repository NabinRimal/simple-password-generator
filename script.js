//targeting the elements
let textblock_wk = document.getElementsByClassName("textblock")[0];
let textblock_st = document.getElementsByClassName("textblock")[1];
let weak_button = document.getElementsByClassName("btn")[0];
let strong_button = document.getElementsByClassName("btn")[1];
let clearAll = document.getElementsByClassName("btn")[2];

//random numbers generate

//to generate weak passwords

const weak_pass = () => {
  //lowercase
  let ran_Lcase_char = Math.random() * (arr_lowercase.length - 1);
  ran_Lcase_char = Math.round(ran_Lcase_char);

  //random number
  let ran_num = Math.random() * 200;
  ran_num = Math.round(ran_num);
  //random number2
  let ran_num2 = Math.random() * 200;
  ran_num2 = Math.round(ran_num2);
  //random number3
  let ran_num3 = Math.random() * 200;
  ran_num3 = Math.round(ran_num3);

  //final password
  let _weak_pass = `${arr_lowercase[ran_Lcase_char]}${ran_num}${ran_num2}${ran_num3}`;

  textblock_wk.innerHTML = _weak_pass;
  localStorage.setItem("Weak", _weak_pass);
};

//to generate strong passwords
const strong_pass = () => {
  //uppercase
  let ran_Ucase_char = Math.random() * (arr_uppercase.length - 1);
  ran_Ucase_char = Math.round(ran_Ucase_char);
  //uppercase2
  let ran_Ucase_char2 = Math.random() * (arr_uppercase2.length - 1);
  ran_Ucase_char2 = Math.round(ran_Ucase_char2);
  //uppercase3
  let ran_Ucase_char3 = Math.random() * (arr_uppercase3.length - 1);
  ran_Ucase_char3 = Math.round(ran_Ucase_char3);

  //lowercase
  let ran_Lcase_char = Math.random() * (arr_lowercase.length - 1);
  ran_Lcase_char = Math.round(ran_Lcase_char);
  //lowercase2
  let ran_Lcase_char2 = Math.random() * (arr_lowercase2.length - 1);
  ran_Lcase_char2 = Math.round(ran_Lcase_char2);
  //lowercase3
  let ran_Lcase_char3 = Math.random() * (arr_lowercase3.length - 1);
  ran_Lcase_char3 = Math.round(ran_Lcase_char3);

  //special character
  let ran_spc_char = Math.random() * (arr_special_char.length - 1);
  ran_spc_char = Math.round(ran_spc_char);
  //special character2
  let ran_spc_char2 = Math.random() * (arr_special_char2.length - 1);
  ran_spc_char2 = Math.round(ran_spc_char2);
  //special character3
  let ran_spc_char3 = Math.random() * (arr_special_char3.length - 1);
  ran_spc_char3 = Math.round(ran_spc_char3);

  //random number1
  let ran_num1 = Math.random() * 90;
  ran_num1 = Math.round(ran_num1);
  //random number2
  let ran_num2 = Math.random() * 150;
  ran_num2 = Math.round(ran_num2);
  //random number3
  let ran_num3 = Math.random() * 50;
  ran_num3 = Math.round(ran_num3);

  //final password
  let _strong_pass = `${arr_uppercase[ran_Ucase_char]}${arr_special_char3[ran_spc_char3]}${ran_num3}${arr_lowercase3[ran_Lcase_char3]}${arr_special_char2[ran_spc_char2]}${arr_lowercase[ran_Lcase_char]}${arr_special_char[ran_spc_char]}${ran_num1}${arr_uppercase2[ran_Ucase_char2]}${arr_lowercase2[ran_Lcase_char2]}${ran_num2}${arr_uppercase3[ran_Ucase_char3]}`;
  textblock_st.innerHTML = _strong_pass;
  localStorage.setItem("Strong", _strong_pass);
};

//to clear all  passwords
const clear_pass = () => {
  textblock_st.innerHTML = "";
  textblock_wk.innerHTML = "";
  localStorage.clear();
};

// button event listeners
weak_button.addEventListener("click", weak_pass);
strong_button.addEventListener("click", strong_pass);
clearAll.addEventListener("click", clear_pass);

//to stay visible the passwords even the page reloaded
if (localStorage.Weak != undefined || localStorage.Strong != undefined) {
  window.onload = () => {
    if (localStorage.Strong != undefined) {
      textblock_st.innerHTML = localStorage.Strong;
    }
    if (localStorage.Weak != undefined) {
      textblock_wk.innerHTML = localStorage.Weak;
    }
  };
}
