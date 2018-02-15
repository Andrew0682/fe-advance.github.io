let sharm   = 15;
let hurgada = 25;
let taba    = 6;
let tabaOk, sharmOk, hurgadaOk;
let user = prompt('Число участников');

if(user > 0 && user <= taba) {
  tabaOk = confirm('Есть места в группе taba');
} 
if(tabaOk) {
  taba = taba - user;
} else {
  if(user > 0 && user <= sharm) {
    sharmOk = confirm('Есть места в группе sharm');
  }
  if(sharmOk) {
    sharm = sharm - user;
  } else {
    if(user > 0 && user <= hurgada) {
      hurgadaOk = confirm('Есть места в группе hurgada');
    }
    if(hurgadaOk) {
      hurgada = hurgada - user;
    } else {
      alert('Мест нет!');
    }
  }
}


let sharm   = 1;
let hurgada = 2;
let taba    = 3;

let user = prompt('Выберете отель:\n 1)sharm\n2)hurgada\n3)taba');

if (user <= 1) {
  sharm = confirm('вы в отеле sharm');
} 
else {
  if(user == 2) {
    hurgada = confirm('вы в отеле hurgada');
  }
   if(user == 3) {
      taba = confirm('вы в отеле taba');
    }
    else {
      alert('Таких отелей нет');
    }
  }
