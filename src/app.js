/*
 * File: app.js
 * Author: Tálas Ádám
 * Copyright: 2022, Tálas Ádám
 * Group: Szoft I/2/E
 * Date: 2022-04-10
 * Github: https://github.com/AdamTalas7/kszukcal
 */

const testZsirElem = document.querySelector("#testZsir");
const testTomegElem = document.querySelector("#testTomeg");
const result = document.querySelector("#result");
const szamitGomb = document.querySelector("#btnSzamit");

szamitGomb.addEventListener("click", () => {
  let testZsirErtek = Number(testZsirElem.value);
  let testTomegErtek = Number(testTomegElem.value);

  let eredmeny = kaloriaSzamitas(testZsirErtek, testTomegErtek);
  
  result.value = eredmeny;
});

function kaloriaSzamitas(testZsir, testTomeg) {
  if(testZsir != 0 && testTomeg != 0) {
    return 370 + 21.6 + Math.abs(1 - testZsir) * testTomeg;
  } else {
    alert("Kérem adjon meg értékeket!!")
    return 0;
  }
}

