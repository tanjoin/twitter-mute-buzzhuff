let muteCounter = 0;
let twitterMute = {
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
  gekisaka: false
};
const filterFunc = (e) => {
  var result = false;
  if (twitterMute.buzzfeed) {
    result = e.innerText.includes('BuzzFeed') || result;
  }
  if (twitterMute.huffpost) {
    result = e.innerText.includes('ハフポスト') || result;
  }
  if (twitterMute.bunshun) {
    result = e.innerText.includes('文春') || result;
  }
  if (twitterMute.fnn) {
    result = e.innerText.includes('FNN') || result;
  }
  if (twitterMute.toyokeizai) {
    result = e.innerText.includes('東洋経済') || result;
  }
  if (twitterMute.asahicom) {
    result = e.innerText.includes('朝日新聞') || result;
  }
  if (twitterMute.numberweb) {
    result = e.innerText.includes('Number編集部') || result;
  }
  if (twitterMute.jijimedical) {
    result = e.innerText.includes('時事メディカル') || result;
  }
  if (twitterMute.trend_seiji) {
    result = e.innerText.includes('政治 · トレンド') || result;
  }
  if (twitterMute.trend_kpop) {
    result = e.innerText.includes('K-POP · トレンド') || result;
  }
  if (twitterMute.jijicom) {
    result = e.innerText.includes('時事ドットコム') || result;
  }
  if (twitterMute.news24ntv) {
    result = e.innerText.includes('日テレNEWS') || result;
  }
  if (twitterMute.hst_tvasahi) {
    result = e.innerText.includes('報道ステーション') || result;
  }
  if (twitterMute.crea_web) {
    result = e.innerText.includes('CREA') || result;
  }
  if (twitterMute.shin_R25) {
    result = e.innerText.includes('新R25編集部') || result;
  }
  if (twitterMute.word_BTS) {
    result = e.innerText.includes('BTS') || result;
  }
  if (twitterMute.gendai_biz) {
    result = e.innerText.includes('現代ビジネス') || result;
  }
  if (twitterMute.gekisaka) {
    result = e.innerText.includes('ゲキサカ') || result;
  }
  return result;
}
const observer = new MutationObserver((mutations) => {
  muteCounter++;
  if (muteCounter % 3 !== 0) {
    return;
  }
  try {
    [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');
    [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');
  } catch (e) {
    console.error(e);
  }
});
const config = { attributes: false, childList: true, characterData: false, subtree: true };
observer.observe(document.body, config);

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
  gekisaka: false
}, (items) => {
  twitterMute.buzzfeed = items.buzzfeed;
  twitterMute.huffpost = items.huffpost;
  twitterMute.bunshun = items.bunshun;      
  twitterMute.fnn = items.fnn;      
  twitterMute.toyokeizai = items.toyokeizai;     
  twitterMute.asahicom = items.asahicom;
  twitterMute.numberweb = items.numberweb;
  twitterMute.jijimedical = items.jijimedical;
  twitterMute.trend_seiji = items.trend_seiji;
  twitterMute.trend_kpop = items.trend_kpop;
  twitterMute.jijicom = items.jijicom;
  twitterMute.news24ntv = items.news24ntv;
  twitterMute.hst_tvasahi = items.hst_tvasahi;
  twitterMute.crea_web = items.crea_web;
  twitterMute.shin_R25 = items.shin_R25;
  twitterMute.word_BTS = items.word_BTS;
  twitterMute.gendai_biz = items.gendai_biz;
  twitterMute.gekisaka = items.gekisaka;
});

