let muteCounter = 0;
let settings = {
  mute_list: []
};
const filterFunc = (e) => {
  if (settings.mute_list) {
    return settings.mute_list.some((keyword) => e.innerText.includes(keyword));
  }
  return false;
}
const observer = new MutationObserver((mutations) => {
  muteCounter++;
  if (muteCounter % 3 !== 0) {
    return;
  }
  console.log(settings);
  try {
    [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');
    [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');

    if (settings.move_hard_translate_y) {
      [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = undefined);
      [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = undefined);
      [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = 'none');
      [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = 'none');    }
    if (settings.auto_scroll_by_1) {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  } catch (e) {
    console.error(e);
  }
  if (settings.mode_overseas) {
    try {
      [...document.querySelectorAll('section[aria-labelledby|="accessible-list"] > div > div > div[class]')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = 'none');
      [...document.querySelectorAll('div > div:nth-child(2) > div > div > section[aria-labelledby^="accessible-list"] > div > div > div')]
        .filter(filterFunc)
        .forEach((e) => e.style.display = 'none');
      if (settings.auto_scroll_by_1) {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (settings.mute_level_hard) {
    setTimeout(() => {
      try {
        [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
          .filter(filterFunc)
          .forEach((e) => e.style.display = 'none');
        [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
          .filter(filterFunc)
          .forEach((e) => e.style.display = 'none');
        if (settings.auto_scroll_by_1) {
          window.scrollBy(0, 1);
          window.scrollBy(0, -1);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  }
});
const config = { attributes: false, childList: true, characterData: false, subtree: true };
observer.observe(document.body, config);

chrome.storage.sync.get(Object.assign({
  mute_list: ["BuzzFeed", "バズフィード", "ハフポスト"],
  auto_scroll_by_1: false,
  mute_level_hard: false,
  mode_overseas: false,
  move_hard_translate_y: false,
  apply_new_mute_list: false
}, MUTE_LIST.reduce((a, c) => {
  a[c.id] = c.default_value;
  return a;  
}, {})), (data) => {

  if (!data.apply_new_mute_list) {
    var mute_list = data.mute_list.concat(MUTE_LIST.reduce((a, c) => {
      if (data[c.id]) {
        a = a.concat(c.mute_word);
      }
      return a;
    }, []));
    settings.mute_list = mute_list;
    // options
    settings.auto_scroll_by_1 = data.auto_scroll_by_1;
    settings.mute_level_hard = data.mute_level_hard;
    settings.mode_overseas = data.mode_overseas;
    settings.move_hard_translate_y = data.move_hard_translate_y;
    settings.apply_new_mute_list = data.apply_new_mute_list;
  } else {
    settings = Object.assign(settings, data);
  }
});

const MUTE_LIST = [
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
    "id": "mute_level_hard",
    "default_value": false,
    "name": "",
    "section": 4,
    "mute_word": []
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
    "id": "move_hard_translate_y_help",
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