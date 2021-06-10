const MUTE_LIST = [
  {
    "id": "WomanExcite",
    "default_value": false,
    "name": "ウーマンエキサイト編集部",
    "section": 1
  },
  {
    "id": "iVoCE",
    "default_value": false,
    "name" : "iVoCE",
    "section": 1
  },
  {
    "id": "Kstyle_news",
    "default_value": false,
    "name": "Kstyle",
    "section": 1
  },
  {
    "id": "cosmopolitanjp",
    "default_value": false,
    "name": "Cosmopolitan／コスモポリタン",
    "section": 1
  },
  {
    "id": "bizble_asahi",
    "default_value": false,
    "name": "bizble（ビズブル）",
    "section": 1
  },
  {
    "id": "mimollet2015",
    "default_value": false,
    "name": "mi-mollet/ミモレ",
    "section": 1
  },
  {
    "id": "news_mynavi_jp",
    "default_value": false,
    "name": "マイナビニュース",
    "section": 1
  },
  {
    "id": "trend_covid19",
    "default_value": false,
    "name": "COVID-19",
    "section": 2
  },
  {
    "id": "oricon",
    "default_value": false,
    "name": "ORICON NEWS（オリコンニュース）",
    "section": 1
  },
  {
    "id": "modelpress",
    "default_value": false,
    "name": "モデルプレス",
    "section": 1
  },
  {
    "id": "ld_blogos",
    "default_value": false,
    "name": "BLOGOS",
    "section": 1
  },
  {
    "id": "japanacademy",
    "default_value": false,
    "name": "日本アカデミー賞協会",
    "section": 1
  },
  {
    "id": "ntvnewszero",
    "default_value": false,
    "name": "news zero",
    "section": 1
  },
  {
    "id": "mamadaystv",
    "default_value": false,
    "name": "MAMADAYS｜ママデイズ",
    "section": 1
  },
  {
    "id": "BIJapan",
    "default_value": false,
    "name": "Business Insider Japan",
    "section": 1
  },
  {
    "id": "GINZA_magazine",
    "default_value": false,
    "name": "GINZA",
    "section": 1
  },
  {
    "id": "auto_scroll_by_1",
    "default_value": false,
    "name": "",
    "section": 4
  },
  {
    "id": "word_birthday",
    "default_value": false,
    "name": "誕生日",
    "section": 3
  },
  {
    "id": "mute_level_hard",
    "default_value": false,
    "name": "",
    "section": 4
  },
  {
    "id": "sankeibiz",
    "default_value": false,
    "name": "SankeiBiz",
    "section": 1
  },
  {
    "id": "nhk_news",
    "default_value": false,
    "name": "NHKニュース",
    "section": 1
  },
  {
    "id": "word_china",
    "default_value": false,
    "name": "中国",
    "section": 3
  },
  {
    "id": "word_korea",
    "default_value": false,
    "name": "韓国",
    "section": 3
  },
  {
    "id": "tastyjapan",
    "default_value": false,
    "name": "Tasty Japan",
    "section": 1
  },
  {
    "id": "frau_tw",
    "default_value": false,
    "name": "FRaU（フラウ）",
    "section": 1
  },
  {
    "id": "gekisaka",
    "default_value": false,
    "name": "ゲキサカ",
    "section": 1
  },
  {
    "id": "gendai_biz",
    "default_value": false,
    "name": "現代ビジネス",
    "section": 1
  },
  {
    "id": "word_BTS",
    "default_value": false,
    "name": "BTS",
    "section": 3
  },
  {
    "id": "shin_R25",
    "default_value": false,
    "name": "新R25編集部",
    "section": 1
  },
  {
    "id": "crea_web",
    "default_value": false,
    "name": "CREA",
    "section": 1
  },
  {
    "id": "hst_tvasahi",
    "default_value": false,
    "name": "報道ステーション＋土日ステ",
    "section": 1
  },
  {
    "id": "news24ntv",
    "default_value": false,
    "name": "日テレNEWS / 日本テレビのニュース・速報",
    "section": 1
  },
  {
    "id": "jijicom",
    "default_value": false,
    "name": "時事ドットコム（時事通信ニュース）",
    "section": 1
  },
  {
    "id": "trend_kpop",
    "default_value": false,
    "name": "K-POP",
    "section": 2
  },
  {
    "id": "trend_seiji",
    "default_value": false,
    "name": "政治",
    "section": 2
  },
  {
    "id": "jijimedical",
    "default_value": false,
    "name": "時事メディカル",
    "section": 1
  },
  {
    "id": "numberweb",
    "default_value": false,
    "name": "Number編集部",
    "section": 1
  },
  {
    "id": "asahicom",
    "default_value": false,
    "name": "朝日新聞",
    "section": 1
  },
  {
    "id": "toyokeizai",
    "default_value": false,
    "name": "東洋経済",
    "section": 1
  },
  {
    "id": "fnn",
    "default_value": false,
    "name": "FNN",
    "section": 1
  },
  {
    "id": "bunshun",
    "default_value": false,
    "name": "文春",
    "section": 1
  },
  {
    "id": "huffpost",
    "default_value": true,
    "name": "ハフポスト",
    "section": 1
  },
  {
    "id": "buzzfeed",
    "default_value": true,
    "name": "BuzzFeed",
    "section": 1
  }
];

function generateCheckboxes(data) {
  var formCheck = document.createElement('div');
  formCheck.classList.add('form-check');
  var input = document.createElement('input');
  input.classList.add('form-check-input');
  input.type = "checkbox";
  input.name = data.id;
  input.id = data.id;
  formCheck.appendChild(input);
  var label = document.createElement('label');
  label.classList.add('form-check-label');
  label.for = data.id;
  label.textContent = data.name;
  formCheck.appendChild(label);

  if (data.section === 1) {
    document.getElementById('section1').insertAdjacentElement('afterend', formCheck);
  } else if (data.section === 2) {
    document.getElementById('section2').insertAdjacentElement('afterend', formCheck);
  } else if (data.section === 3) {
    document.getElementById('section3').insertAdjacentElement('afterend', formCheck);
  }
}

function saveOptions() {
  const syncData = MUTE_LIST.reduce((result, current) => {
    let checkbox = document.getElementById(current.id);
    if (checkbox) {
      result[current.id] = checkbox.checked;
    }
    return result;
  }, {});
  console.log(syncData);
  chrome.storage.sync.set(syncData, () => {
    const status = document.getElementById('status');
    status.textContent = '保存しました！';
    setTimeout(() => {
      status.textContent = '';
    }, 1750);
  });
}

function restoreOptions() {
  MUTE_LIST.forEach((data) => {
    generateCheckboxes(data);
  });
  var defaultValues = MUTE_LIST.reduce((result, current) => {
    result[current.id] = current.default_value;
    return result;
  }, {});
  chrome.storage.sync.get(defaultValues, (items) => {
    MUTE_LIST.forEach((current) => {
      let checkbox = document.getElementById(current.id);
      if (checkbox) {
        checkbox.checked = items[current.id];
      }
    });
  });
}

function addAllCheck() {
  [...document.querySelectorAll('input[type="checkbox"]')].forEach((e) => e.checked = true);
}

function removeAllCheck() {
  [...document.querySelectorAll('input[type="checkbox"]')].forEach((e) => e.checked = false);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('add_all_check').addEventListener('click', addAllCheck);
document.getElementById('remove_all_check').addEventListener('click', removeAllCheck);