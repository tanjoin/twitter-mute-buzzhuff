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
    word_BTS: document.getElementById('word_BTS').checked
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
    word_BTS: false
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
    const status = document.getElementById('status');
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);