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
    trend_kpop: document.getElementById('trend_kpop').checked
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
    trend_kpop: false
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
    const status = document.getElementById('status');
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);