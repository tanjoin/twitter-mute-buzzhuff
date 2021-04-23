function saveOptions() {
  chrome.storage.sync.set({
    buzzfeed: document.getElementById('buzzfeed').checked,
    huffpost: document.getElementById('huffpost').checked,
    bunshun: document.getElementById('bunshun').checked,
    fnn: document.getElementById('fnn').checked,
    toyokeizai: document.getElementById('toyokeizai').checked,
    asahicom: document.getElementById('asahicom').checked,
    numberweb: document.getElementById('numberweb').checked,
    jijimedical: document.getElementById('jijimedical').checked,
    trend_seiji: document.getElementById('trend_seiji').checked,
    trend_kpop: document.getElementById('trend_kpop').checked,
    jijicom: document.getElementById('jijicom').checked,
    news24ntv: document.getElementById('news24ntv').checked,
    hst_tvasahi: document.getElementById('hst_tvasahi').checked,
    crea_web: document.getElementById('crea_web').checked,
    shin_R25: document.getElementById('shin_R25').checked,
    word_BTS: document.getElementById('word_BTS').checked,
    gendai_biz: document.getElementById('gendai_biz').checked,
    gekisaka: document.getElementById('gekisaka').checked,
    frau_tw: document.getElementById('frau_tw').checked,
    tastyjapan: document.getElementById('tastyjapan').checked,
    word_korea: document.getElementById('word_korea').checked,
    word_china: document.getElementById('word_china').checked,
    nhk_news: document.getElementById('nhk_news').checked,
    sankeibiz: document.getElementById('sankeibiz').checked,
    mute_level_hard: document.getElementById('mute_level_hard').checked,
    word_birthday: document.getElementById('word_birthday').checked,
    auto_scroll_by_1: document.getElementById('auto_scroll_by_1').checked,
    GINZA_magazine: document.getElementById('GINZA_magazine').checked,
    BIJapan: document.getElementById('BIJapan').checked,
    mamadaystv: document.getElementById('mamadaystv').checked,
    ntvnewszero: document.getElementById('ntvnewszero').checked,
    japanacademy: document.getElementById('japanacademy').checked,
    ld_blogos: document.getElementById('ld_blogos').checked,
    modelpress: document.getElementById('modelpress').checked,
    oricon: document.getElementById('oricon').checked,
    trend_covid19: document.getElementById('trend_covid19').checked
  }, () => {
    const status = document.getElementById('status');
    status.textContent = '保存しました！';
    setTimeout(() => {
      status.textContent = '';
    }, 1750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    buzzfeed: true,
    huffpost: true,
    bunshun: false,
    fnn: false,
    toyokeizai: false,
    asahicom: false,
    numberweb: false,
    jijimedical: false,
    trend_seiji: false,
    trend_kpop: false,
    jijicom: false,
    news24ntv: false,
    hst_tvasahi: false,
    crea_web: false,
    shin_R25: false,
    word_BTS: false,
    gendai_biz: false,
    gekisaka: false,
    frau_tw: false,
    tastyjapan: false,
    word_korea: false,
    word_china: false,
    nhk_news: false,
    sankeibiz: false,
    mute_level_hard: false,
    word_birthday: false,
    auto_scroll_by_1: false,
    GINZA_magazine: false,
    BIJapan: false,
    mamadaystv: false,
    ntvnewszero: false,
    japanacademy: false,
    ld_blogos: false,
    modelpress: false,
    oricon: false,
    trend_covid19: false
  }, (items) => {
    document.getElementById('buzzfeed').checked = items.buzzfeed;
    document.getElementById('huffpost').checked = items.huffpost;
    document.getElementById('bunshun').checked = items.bunshun;
    document.getElementById('fnn').checked = items.fnn;
    document.getElementById('toyokeizai').checked = items.toyokeizai;
    document.getElementById('asahicom').checked = items.asahicom;
    document.getElementById('numberweb').checked = items.numberweb;
    document.getElementById('jijimedical').checked = items.jijimedical;
    document.getElementById('trend_seiji').checked = items.trend_seiji;
    document.getElementById('trend_kpop').checked = items.trend_kpop;
    document.getElementById('jijicom').checked = items.jijicom;
    document.getElementById('news24ntv').checked = items.news24ntv;
    document.getElementById('hst_tvasahi').checked = items.hst_tvasahi;
    document.getElementById('crea_web').checked = items.crea_web;
    document.getElementById('shin_R25').checked = items.shin_R25;
    document.getElementById('word_BTS').checked = items.word_BTS;
    document.getElementById('gendai_biz').checked = items.gendai_biz;
    document.getElementById('gekisaka').checked = items.gekisaka;
    document.getElementById('frau_tw').checked = items.frau_tw;
    document.getElementById('tastyjapan').checked = items.tastyjapan;
    document.getElementById('word_korea').checked = items.word_korea;
    document.getElementById('word_china').checked = items.word_china;
    document.getElementById('nhk_news').checked = items.nhk_news;
    document.getElementById('sankeibiz').checked = items.sankeibiz;
    document.getElementById('mute_level_hard').checked = items.mute_level_hard;
    document.getElementById('word_birthday').checked = items.word_birthday;
    document.getElementById('auto_scroll_by_1').checked = items.auto_scroll_by_1;
    document.getElementById('GINZA_magazine').checked = items.GINZA_magazine;
    document.getElementById('BIJapan').checked = items.BIJapan;
    document.getElementById('mamadaystv').checked = items.mamadaystv;
    document.getElementById('ntvnewszero').checked = items.ntvnewszero;
    document.getElementById('japanacademy').checked = items.japanacademy;
    document.getElementById('ld_blogos').checked = items.ld_blogos;
    document.getElementById('modelpress').checked = items.modelpress;
    document.getElementById('oricon').checked = items.oricon;
    document.getElementById('trend_covid19').checked = items.trend_covid19;
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