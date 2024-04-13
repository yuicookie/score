function calc(lastscore, level) {
  oku1 = 0; man2 = 0; num2 = 0;
  oku = lastscore;
  man = lastscore;
  num = lastscore;
  lastscore_value = 0;
  if (oku.includes('億')) {
    oku1 = oku.substr(0, oku.indexOf('億'));
    oku1 = oku1 * 100000000;
    num1 = num.substr(num.indexOf('億') + 1)
    num2 = num1 * 1;
    lastscore_value = oku1 + man2 + num2;
  }

  if (man.includes('万')) {
    man1 = man;
    if (man.includes('億')) {
    man1 = man.substr(man.indexOf('億') + 1)
    }
    man2 = man1.substr(0, man1.indexOf('万'));
    man2 = man2 * 10000;
    num1 = num.substr(num.indexOf('万') + 1)
    num2 = num1 * 1;
    lastscore_value = oku1 + man2 + num2;
  }

  bonus = 1.54;
  level_save = level;
  switch (level) {
    case '100':
    level = 1.54;
      break;
    case '99':
    level = 1.539;
      break;
    case '98':
    level = 1.538;
      break;
    case '97':
    level = 1.537;
      break;
    case '96':
    level = 1.536;
      break;
    case '95':
    level = 1.535;
      break;
    case '94':
    level = 1.534;
      break;
    case '93':
    level = 1.533;
      break;
    case '92':
    level = 1.532;
      break;
    case '91':
    level = 1.531;
      break;
    case '90':
    level = 1.53;
      break;
    case '89':
    level = 1.529;
      break;
    case '88':
    level = 1.528;
      break;
    case '87':
    level = 1.527;
      break;
    case '86':
    level = 1.526;
      break;
    case '85':
    level = 1.525;
      break;
    case '84':
    level = 1.524;
      break;
    case '83':
    level = 1.523;
      break;
    case '82':
    level = 1.522;
      break;
    case '81':
    level = 1.521;
      break;
    case '80':
    level = 1.52;
      break;
    case '79':
    level = 1.519;
      break;
    case '78':
    level = 1.518;
      break;
    case '77':
    level = 1.517;
      break;
    case '76':
    level = 1.516;
      break;
    case '75':
    level = 1.515;
      break;
    case '74':
    level = 1.514;
      break;
    case '73':
    level = 1.513;
      break;
    case '72':
    level = 1.512;
      break;
    case '71':
    level = 1.511;
      break;
    case '70':
    level = 1.51;
      break;
    case '69':
    level = 1.509;
      break;
    case '68':
    level = 1.508;
      break;
    case '67':
    level = 1.507;
      break;
    case '66':
    level = 1.506;
      break;
    case '65':
    level = 1.505;
      break;
    case '64':
    level = 1.504;
      break;
    case '63':
    level = 1.503;
      break;
    case '62':
    level = 1.502;
      break;
    case '61':
    level = 1.501;
      break;
    case '60':
    level = 1.5;
      break;
    case '59':
    level = 1.499;
      break;
    case '58':
    level = 1.498;
      break;
    case '57':
    level = 1.497;
      break;
    case '56':
    level = 1.496;
      break;
    case '55':
    level = 1.495;
      break;
    case '54':
    level = 1.494;
      break;
    case '53':
    level = 1.493;
      break;
    case '52':
    level = 1.492;
      break;
    case '51':
    level = 1.491;
      break;
    case '50':
    level = 1.49;
      break;
    case '49':
    level = 1.48;
      break;
    case '48':
    level = 1.47;
      break;
    case '47':
    level = 1.46;
      break;
    case '46':
    level = 1.45;
      break;
    case '45':
    level = 1.44;
      break;
    case '44':
    level = 1.43;
      break;
    case '42':
    level = 1.41;
      break;
    case '41':
    level = 1.4;
      break;
    case '40':
    level = 1.39;
      break;
    case '39':
    level = 1.38;
      break;
    case '38':
    level = 1.37;
      break;
    case '37':
    level = 1.36;
      break;
    case '36':
    level = 1.35;
      break;
    case '35':
    level = 1.34;
      break;
    case '34':
    level = 1.33;
      break;
    case '33':
    level = 1.32;
      break;
    case '32':
    level = 1.31;
      break;
    case '31':
    level = 1.3;
      break;
    case '30':
    level = 1.29;
      break;
    case '29':
    level = 1.28;
      break;
    case '28':
    level = 1.27;
      break;
    case '27':
    level = 1.26;
      break;
    case '26':
    level = 1.25;
      break;
    case '25':
    level = 1.24;
      break;
    case '24':
    level = 1.23;
      break;
    case '23':
    level = 1.22;
      break;
    case '22':
    level = 1.21;
      break;
    case '21':
    level = 1.2;
      break;
    case '20':
    level = 1.19;
      break;
    case '19':
    level = 1.18;
      break;
    case '18':
    level = 1.17;
      break;
    case '17':
    level = 1.16;
      break;
    case '16':
    level = 1.15;
      break;
    case '15':
    level = 1.14;
      break;
    case '14':
    level = 1.13;
      break;
    case '13':
    level = 1.12;
      break;
    case '12':
    level = 1.11;
      break;
    case '11':
    level = 1.1;
      break;
    case '10':
    level = 1.09;
      break;
    case '9':
    level = 1.08;
      break;
    case '8':
    level = 1.07;
      break;
    case '7':
    level = 1.06;
      break;
    case '6':
    level = 1.05;
      break;
    case '5':
    level = 1.04;
      break;
    case '4':
    level = 1.03;
      break;
    case '3':
    level = 1.02;
      break;
    case '2':
    level = 1.1;
      break;
    case '1':
    level = 1;
      break;
    default:
    level = 0;
  }
    //計算
    let fastscore_value =  Math.ceil(lastscore_value / level);
    let scorebonus_value = Math.ceil(fastscore_value / 1.15);
    let level100_value = Math.floor(fastscore_value * bonus);
    //カンマ区切り
    fastscore_value = Number(fastscore_value).toLocaleString();
    scorebonus_value = Number(scorebonus_value).toLocaleString();
    level100_value = Number(level100_value).toLocaleString();
    //表示
    document.getElementById('fastscore').value = fastscore_value;
    document.getElementById('scorebonus').value = scorebonus_value;
    document.getElementById('level100').value = level100_value;

    //Cookie保存
    // document.cookie = "lastscore=" + encodeURIComponent(lastscore);
    // document.cookie = "level=" + encodeURIComponent(level_save);
    // console.log(document.cookie);
    
    setCookie("lastscore", encodeURIComponent(lastscore), 365); // 1年間有効なCookie
    setCookie("level", encodeURIComponent(level_save), 365); // 1年間有効なCookie
}

//Cookieに値を設定する関数
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 365 * 24 * 60 * 60 * 1000)); // 1年間のミリ秒数
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

//読み込み時に実行する
window.onload = loadFormData;
function loadFormData() {
  var cookies = document.cookie.split(';');
  var formData = {};

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim().split('=');
    formData[cookie[0]] = decodeURIComponent(cookie[1]);
  }

  //フォームにデータをセットする
  if (formData.lastscore) {
    document.getElementById('score').value = formData.lastscore;
  }
  if (formData.level) {
    document.getElementById('level').value = formData.level;
  }
}
