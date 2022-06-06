/**
 * 1 1-5
 * 2 1-5
 * 3 1-4
 * 4 1-6
 * 5 1-5
 * 6 1-6
 * 7 1-8
 * 8 1-7
 * 9 1-6 
 */

let TRL = 0
let CRL = 0
let PI = 0
let MRL = 0

let questions = {
}

function changeStatus(event) {
  const e = event.srcElement;
  questions = {
    ...questions,
    [e.id]: e.checked
  }
  calculateValues()
}
const trlLabel = document.getElementById('trl-span')
const mrlLabel = document.getElementById('mrl-span')
const piLabel = document.getElementById('pi-span')
const crlLabel = document.getElementById('crl-span')

const checks = document.querySelectorAll('input[type="checkbox"]');
checks.forEach(check => {
  questions = {
    ...questions,
    [check.id]: false
  }
  check.checked = false;
  check.onclick = changeStatus;
})

function calculateValues() {
  calculateTRL()
  calculateMRL()
  calculateCRL()
  calculatePI()
}

function calculateTRL() {
  TRL = 0
  MRL = 0
  if (questions.c11 + questions.c12 + questions.c13 >= 2) {
    TRL = 1
    MRL = 1
  }
  if (questions.c21 + questions.c22 + questions.c23 >= 2) {
    TRL = 2
    MRL = 2
  }
  if (questions.c31 + questions.c32 >= 1) {
    TRL = 3
    MRL = 3
  }
  if (questions.c41 + questions.c42 + questions.c43 + questions.c44 >= 2) {
    TRL = 4
    MRL = 4
  }
  if (questions.c51 + questions.c52 + questions.c53 >= 2) {
    TRL = 5
  }
  if (questions.c61 + questions.c62 + questions.c63 >= 2) {
    TRL = 6
  }
  if (questions.c71 + questions.c72 + questions.c73 >= 2) {
    TRL = 7
  }
  if (questions.c81 + questions.c82 + questions.c83 >= 2) {
    TRL = 8
  }
  if (questions.c91 + questions.c92 >= 1) {
    TRL = 9
  }
  trlLabel.innerText = TRL
}

function calculateCRL() {
  CRL = 0
  if (questions.c14) {
    CRL = 1
  }
  if (questions.c24) {
    CRL = 2
  }
  if (questions.c24) {
    CRL = 2
  }
  if (questions.c33) {
    CRL = 3
  }
  if (questions.c45) {
    CRL = 4
  }
  if (questions.c54) {
    CRL = 5
  }
  if (questions.c65) {
    CRL = 6
  }
  if (questions.c75 + questions.c76 + questions.c77 >= 2) {
    CRL = 7
  }
  if (questions.c85 + questions.c86 + questions.c87 >= 1) {
    CRL = 8
  }
  if (questions.c94) {
    CRL = 9
  }
  crlLabel.innerText = CRL
}

function calculatePI() {
  //TRL 1
  PI = 0
  if (questions.c15) {
    PI = 1
  }
  if (questions.c25) {
    PI = 2
  }
  if (questions.c34) {
    PI = 3
  }
  if (questions.c46) {
    PI = 6
  }
  if (questions.c55) {
    PI = 5
  }
  if (questions.c66) {
    PI = 6
  }
  if (questions.c78) {
    PI = 7
  }
  if (questions.c84) {
    PI = 8
  }
  if (questions.c95 + questions.c96 >= 1) {
    PI = 9
  }
  piLabel.innerText = PI
}

function calculateMRL() {
  //Aditional MRL
  if (questions.c64) {
    MRL = 6
  }
  if (questions.c74) {
    MRL = 7
  }
  if (questions.c84) {
    MRL = 8
  }
  if (questions.c93) {
    MRL = 9
  }
  mrlLabel.innerText = MRL
}

function reset() {
  checks.forEach(check => {
    check.checked = false;
    questions = {
      ...questions,
      [check.id]: false
    }
  })
  piLabel.innerText = ''
  mrlLabel.innerText = ''
  crlLabel.innerText = ''
  trlLabel.innerText = ''
}