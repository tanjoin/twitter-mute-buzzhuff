const MUTE_LIST = [
  "buzzfeed",
  "huffpost",
  "bunshun",
  "fnn",
  "toyokeizai",
  "asahicom",
  "numberweb",
  "jijimedical",
  "trend_seiji",
  "trend_kpop",
  "jijicom",
  "news24ntv",
  "hst_tvasahi",
  "crea_web",
  "shin_R25",
  "word_BTS",
  "gendai_biz",
  "gekisaka",
  "frau_tw",
  "tastyjapan",
  "word_korea",
  "word_china",
  "nhk_news",
  "sankeibiz",
  "mute_level_hard",
  "word_birthday",
  "auto_scroll_by_1",
  "GINZA_magazine",
  "BIJapan",
  "mamadaystv",
  "ntvnewszero",
  "japanacademy",
  "ld_blogos",
  "modelpress",
  "oricon",
  "trend_covid19",
  "news_mynavi_jp",
  "mimollet2015",
  "bizble_asahi",
  "cosmopolitanjp"
];

function saveOptions() {
  const syncData = MUTE_LIST.reduce((result, current) => {
    let checkbox = document.getElementById(current);
    if (checkbox) {
      result[current] = checkbox.checked;
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
  var defaultValues = MUTE_LIST.reduce((result, current) => {
    result[current] = false;
    return result;
  }, {});
  defaultValues = Object.assign(defaultValues, {
    buzzfeed: true,
    huffpost: true
  });
  chrome.storage.sync.get(defaultValues, (items) => {
    console.log(items);
    MUTE_LIST.forEach((current) => {
      let checkbox = document.getElementById(current);
      if (checkbox) {
        checkbox.checked = items[current];
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