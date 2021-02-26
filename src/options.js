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
    sankeibiz: document.getElementById('sankeibiz').checked
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
    sankeibiz: false
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
    const status = document.getElementById('status');
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);