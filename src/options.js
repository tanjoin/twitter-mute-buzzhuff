const MUTE_LIST = [
  {
    "id": "tv_asahi_news",
    "default_value": false,
    "name": "テレ朝",
    "section": 1,
    "mute_word": ["テレ朝"]
  },
  {
    "id": "feminism",
    "default_value": false,
    "name": "フェミニスト",
    "section": 3,
    "mute_word": ["性的搾取", "フェミニスト", "性的消費", "ツイフェミ"]
  },
  {
    "id": "takapon_jp",
    "default_value": false,
    "name": "ホリエモン",
    "section": 3,
    "mute_word": ["ホリエモン", "堀江貴文", "堀江 貴文", "Takafumi Horie"]
  },
  {
    "id": "hirox246",
    "default_value": false,
    "name": "ひろゆき",
    "section": 3,
    "mute_word": ["hirox246", "ひろゆき", "Hiroyuki Nishimura", "西村博之", "西村 博之"]
  },
  {
    "id": "afpbbcom",
    "default_value": false,
    "name": "AFPBB",
    "section": 1,
    "mute_word": ["AFPBB"]
  },
  {
    "id": "mainichijpnews",
    "default_value": false,
    "name": "毎日新聞",
    "section": 1,
    "mute_word": ["毎日新聞"]
  },
  {
    "id": "tokyonewsroom",
    "default_value": false,
    "name": "東京新聞",
    "section": 1,
    "mute_word": ["東京新聞"]
  },
  {
    "id": "natalie",
    "default_value": false,
    "name": "ナタリー",
    "section": 1,
    "mute_word": ["ナタリー"]
  },
  {
    "id": "DIGIDAYJAPAN",
    "default_value": false,
    "name": "DIGIDAY［日本版］",
    "section": 1,
    "mute_word": ["DIGIDAY"]
  },
  {
    "id": "bengo4topics",
    "default_value": false,
    "name": "弁護士ドットコムニュース",
    "section": 1,
    "mute_word": ["弁護士ドットコムニュース"]
  },
  {
    "id": "dol_editors",
    "default_value": false,
    "name": "ダイヤモンド・オンライン",
    "section": 1,
    "mute_word": ["ダイヤモンド・オンライン"]
  },
  {
    "id": "weekly_SPA",
    "default_value": false,
    "name": "週刊SPA!・日刊SPA!",
    "section": 1,
    "mute_word": ["SPA!"]
  },
  {
    "id": "asahi_globe",
    "default_value": false,
    "name": "The Asahi Shimbun GLOBE+",
    "section": 1,
    "mute_word": ["The Asahi Shimbun GLOBE+"]
  },
  {
    "id": "itm_nlab",
    "default_value": false,
    "name": "ねとらぼ",
    "section": 1,
    "mute_word": ["ねとらぼ"]
  },
  {
    "id": "ABEMATIMES",
    "default_value": false,
    "name": "ABEMA TIMES",
    "section": 1,
    "mute_word": ["ABEMA TIMES"]
  },
  {
    "id": "kyodo_official",
    "default_value": false,
    "name": "共同通信公式",
    "section": 1,
    "mute_word": ["共同通信"]
  },
  {
    "id" : "Newsweek_JAPAN",
    "default_value": false,
    "name" : "ニューズウィーク日本版",
    "section": 1,
    "mute_word": ["ニューズウィーク"]
  },
  {
    "id": "WomanExcite",
    "default_value": false,
    "name": "ウーマンエキサイト編集部",
    "section": 1,
    "mute_word": ["ウーマンエキサイト編集部"]
  },
  {
    "id": "iVoCE",
    "default_value": false,
    "name" : "iVoCE",
    "section": 1,
    "mute_word": ["VOCE", "ヴォーチェ"]
  },
  {
    "id": "Kstyle_news",
    "default_value": false,
    "name": "Kstyle",
    "section": 1,
    "mute_word": ["Kstyle"]
  },
  {
    "id": "cosmopolitanjp",
    "default_value": false,
    "name": "Cosmopolitan／コスモポリタン",
    "section": 1,
    "mute_word": ["Cosmopolitan", "コスモポリタン"]
  },
  {
    "id": "bizble_asahi",
    "default_value": false,
    "name": "bizble（ビズブル）",
    "section": 1,
    "mute_word": ["bizble", "ビズブル"]
  },
  {
    "id": "mimollet2015",
    "default_value": false,
    "name": "mi-mollet/ミモレ",
    "section": 1,
    "mute_word": ["mi-mollet", "ミモレ"]
  },
  {
    "id": "news_mynavi_jp",
    "default_value": false,
    "name": "マイナビニュース",
    "section": 1,
    "mute_word": ["マイナビニュース"]
  },
  {
    "id": "trend_covid19",
    "default_value": false,
    "name": "COVID-19",
    "section": 2,
    "mute_word": ["COVID-19"]
  },
  {
    "id": "oricon",
    "default_value": false,
    "name": "ORICON NEWS（オリコンニュース）",
    "section": 1,
    "mute_word": ["ORICON NEWS"]
  },
  {
    "id": "modelpress",
    "default_value": false,
    "name": "モデルプレス",
    "section": 1,
    "mute_word": ["モデルプレス"]
  },
  {
    "id": "ld_blogos",
    "default_value": false,
    "name": "BLOGOS",
    "section": 1,
    "mute_word": ["BLOGOS"]
  },
  {
    "id": "japanacademy",
    "default_value": false,
    "name": "日本アカデミー賞協会",
    "section": 1,
    "mute_word": ["日本アカデミー賞協会"]
  },
  {
    "id": "ntvnewszero",
    "default_value": false,
    "name": "news zero",
    "section": 1,
    "mute_word": ["news zero"]
  },
  {
    "id": "mamadaystv",
    "default_value": false,
    "name": "MAMADAYS｜ママデイズ",
    "section": 1,
    "mute_word": ["MAMADAYS", "ママデイズ"]
  },
  {
    "id": "BIJapan",
    "default_value": false,
    "name": "Business Insider Japan",
    "section": 1,
    "mute_word": ["Business Insider Japan"]
  },
  {
    "id": "GINZA_magazine",
    "default_value": false,
    "name": "GINZA",
    "section": 1,
    "mute_word": ["GINZA"]
  },
  {
    "id": "auto_scroll_by_1",
    "default_value": false,
    "name": "",
    "section": 4,
    "mute_word": []
  },
  {
    "id": "word_birthday",
    "default_value": false,
    "name": "誕生日",
    "section": 3,
    "mute_word": ["誕生日"]
  },
  {
    "id": "sankeibiz",
    "default_value": false,
    "name": "SankeiBiz",
    "section": 1,
    "mute_word": ["SankeiBiz"]
  },
  {
    "id": "nhk_news",
    "default_value": false,
    "name": "NHKニュース",
    "section": 1,
    "mute_word": ["NHKニュース", "NHK NEWS"]
  },
  {
    "id": "word_china",
    "default_value": false,
    "name": "中国",
    "section": 3,
    "mute_word": ["中国"]
  },
  {
    "id": "word_korea",
    "default_value": false,
    "name": "韓国",
    "section": 3,
    "mute_word": ["韓国"]
  },
  {
    "id": "tastyjapan",
    "default_value": false,
    "name": "Tasty Japan",
    "section": 1,
    "mute_word": ["Tasty Japan"]
  },
  {
    "id": "frau_tw",
    "default_value": false,
    "name": "FRaU（フラウ）",
    "section": 1,
    "mute_word": ["FRaU"]
  },
  {
    "id": "gekisaka",
    "default_value": false,
    "name": "ゲキサカ",
    "section": 1,
    "mute_word": ["ゲキサカ"]
  },
  {
    "id": "gendai_biz",
    "default_value": false,
    "name": "現代ビジネス",
    "section": 1,
    "mute_word": ["現代ビジネス"]
  },
  {
    "id": "word_BTS",
    "default_value": false,
    "name": "BTS",
    "section": 3,
    "mute_word": ["BTS"]
  },
  {
    "id": "shin_R25",
    "default_value": false,
    "name": "新R25編集部",
    "section": 1,
    "mute_word": ["新R25編集部"]
  },
  {
    "id": "crea_web",
    "default_value": false,
    "name": "CREA",
    "section": 1,
    "mute_word": ["CREA"]
  },
  {
    "id": "hst_tvasahi",
    "default_value": false,
    "name": "報道ステーション＋土日ステ",
    "section": 1,
    "mute_word": ["報道ステーション"]
  },
  {
    "id": "news24ntv",
    "default_value": false,
    "name": "日テレNEWS / 日本テレビのニュース・速報",
    "section": 1,
    "mute_word": ["日テレNEWS"]
  },
  {
    "id": "jijicom",
    "default_value": false,
    "name": "時事ドットコム（時事通信ニュース）",
    "section": 1,
    "mute_word": ["時事ドットコム"]
  },
  {
    "id": "trend_kpop",
    "default_value": false,
    "name": "K-POP",
    "section": 2,
    "mute_word": ["K-POP · トレンド"]
  },
  {
    "id": "trend_seiji",
    "default_value": false,
    "name": "政治",
    "section": 2,
    "mute_word": ["政治 · トレンド"]
  },
  {
    "id": "jijimedical",
    "default_value": false,
    "name": "時事メディカル",
    "section": 1,
    "mute_word": ["時事メディカル"]
  },
  {
    "id": "numberweb",
    "default_value": false,
    "name": "Number編集部",
    "section": 1,
    "mute_word": ["Number編集部"]
  },
  {
    "id": "asahicom",
    "default_value": false,
    "name": "朝日新聞",
    "section": 1,
    "mute_word": ["朝日新聞", "AREA"]
  },
  {
    "id": "toyokeizai",
    "default_value": false,
    "name": "東洋経済",
    "section": 1,
    "mute_word": ["東洋経済"]
  },
  {
    "id": "fnn",
    "default_value": false,
    "name": "FNN",
    "section": 1,
    "mute_word": ["FNN"]
  },
  {
    "id": "bunshun",
    "default_value": false,
    "name": "文春",
    "section": 1,
    "mute_word": ["文春"]
  },
  {
    "id": "huffpost",
    "default_value": true,
    "name": "ハフポスト",
    "section": 1,
    "mute_word": ["ハフポスト"]
  },
  {
    "id": "buzzfeed",
    "default_value": true,
    "name": "BuzzFeed",
    "section": 1,
    "mute_word": ["BuzzFeed", "バズフィード"]
  },
  {
    "id": "mode_overseas",
    "default_value": false,
    "name": "",
    "section": 4,
    "mute_word": []
  },
  {
    "id": "apply_new_mute_list",
    "default_value": false,
    "name": "",
    "section": 4,
    "mute_word": []
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
      if (checkbox.checked) {
        result.mute_list = result.mute_list.concat(current.mute_word);
      }
    }
    return result;
  }, { mute_list: [], apply_new_mute_list: true });

  let freeword = document.getElementById('freeword_area').value;
  if (freeword && freeword.length > 0) {
    syncData.freeword = freeword.split('\n');
    syncData.mute_list = syncData.mute_list.concat(syncData.freeword);
  } else {
    syncData.freeword = [];
  }

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
  }, { freeword: [] });
  chrome.storage.sync.get(defaultValues, (data) => {
    MUTE_LIST.forEach((current) => {
      let checkbox = document.getElementById(current.id);
      if (checkbox) {
        checkbox.checked = data[current.id];
      }
    });
    
    let freeword = document.getElementById('freeword_area');
    if (freeword) {
      freeword.value = data.freeword.join('\n');
    }
  });
}

function flexibleTextarea(e) {
  console.log('OK');
  [...document.querySelectorAll('.flexible')].forEach((textarea) => {
    textarea.setAttribute('default_height', textarea.clientHeight);
    textarea.addEventListener('input', (e) => {
      textarea.style.height = textarea.getAttribute('default_height') + 'px';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  });
}

function addAllCheck() {
  [...document.querySelectorAll('input[type="checkbox"]')]
    .filter((e) => e.id !== "mode_overseas")
    .forEach((e) => e.checked = true);
}

function removeAllCheck() {
  [...document.querySelectorAll('input[type="checkbox"]')].forEach((e) => e.checked = false);
}

window.addEventListener('load', flexibleTextarea);
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('add_all_check').addEventListener('click', addAllCheck);
document.getElementById('remove_all_check').addEventListener('click', removeAllCheck);