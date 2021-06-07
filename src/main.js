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
  trend_covid19: false,
  news_mynavi_jp: false
};
const filterFunc = (e) => {
  var result = false;
  if (twitterMute.buzzfeed) {
    result = e.innerText.includes('BuzzFeed') || e.innerText.includes('バズフィード') || result;
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
  if (twitterMute.frau_tw) {
    result = e.innerText.includes('FRaU') || result;
  }
  if (twitterMute.tastyjapan) {
    result = e.innerText.includes('Tasty Japan') || result;
  }
  if (twitterMute.word_korea) {
    result = e.innerText.includes('韓国') || result;
  }
  if (twitterMute.word_china) {
    result = e.innerText.includes('中国') || result;
  }
  if (twitterMute.nhk_news) {
    result = e.innerText.includes('NHKニュース') || e.innerText.includes('NHK NEWS') || result;
  }
  if (twitterMute.sankeibiz) {
    result = e.innerText.includes('SankeiBiz') || result;
  }
  if (twitterMute.word_birthday) {
    result = e.innerText.includes('誕生日') || result;
  }
  if (twitterMute.GINZA_magazine) {
    result = e.innerText.includes('GINZA') || result;
  }
  if (twitterMute.BIJapan) {
    result = e.innerText.includes('Business Insider Japan') || result;
  }
  if (twitterMute.mamadaystv) {
    result = e.innerText.includes('MAMADAYS') || e.innerText.includes('ママデイズ') || result;
  }
  if (twitterMute.ntvnewszero) {
    result = e.innerText.includes('news zero') || result;
  }
  if (twitterMute.japanacademy) {
    result = e.innerText.includes('日本アカデミー賞協会') || result;
  }
  if (twitterMute.ld_blogos) {
    result = e.innerText.includes('BLOGOS') || result;
  }
  if (twitterMute.modelpress) {
    result = e.innerText.includes('モデルプレス') || result;
  }
  if (twitterMute.oricon) {
    result = e.innerText.includes('ORICON NEWS') || result;
  }
  if (twitterMute.trend_covid19) {
    result = e.innerText.includes('COVID-19') || result;
  }
  if (twitterMute.news_mynavi_jp) {
    result = e.innerText.includes('マイナビニュース') || result;
  }
  if (twitterMute.mimollet2015) {
    result = e.innerText.includes('mi-mollet') || e.innerText.includes('ミモレ') || result;
  }
  return result;
}
const observer = new MutationObserver((mutations) => {
  muteCounter++;
  if (muteCounter % 10 !== 0) {
    return;
  }
  try {
    [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');
    [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
      .filter(filterFunc)
      .forEach((e) => e.style.display = 'none');
    if (twitterMute.auto_scroll_by_1) {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  } catch (e) {
    console.error(e);
  }
  if (twitterMute.mute_level_hard) {
    setTimeout(() => {
      try {
        [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
          .filter(filterFunc)
          .forEach((e) => e.style.display = 'none');
        [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
          .filter(filterFunc)
          .forEach((e) => e.style.display = 'none');
        if (twitterMute.auto_scroll_by_1) {
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
  trend_covid19: false,
  news_mynavi_jp: false,
  mimollet2015: false
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
  twitterMute.frau_tw = items.frau_tw;
  twitterMute.tastyjapan = items.tastyjapan;
  twitterMute.word_korea = items.word_korea;
  twitterMute.word_china = items.word_china;
  twitterMute.nhk_news = items.nhk_news;
  twitterMute.sankeibiz = items.sankeibiz;
  twitterMute.mute_level_hard = items.mute_level_hard;
  twitterMute.word_birthday = items.word_birthday;
  twitterMute.auto_scroll_by_1 = items.auto_scroll_by_1;
  twitterMute.GINZA_magazine = items.GINZA_magazine;
  twitterMute.BIJapan = items.BIJapan;
  twitterMute.mamadaystv = items.mamadaystv;
  twitterMute.ntvnewszero = items.ntvnewszero;
  twitterMute.japanacademy = items.japanacademy;
  twitterMute.ld_blogos = items.ld_blogos;
  twitterMute.modelpress = items.modelpress;
  twitterMute.oricon = items.oricon;
  twitterMute.trend_covid19 = items.trend_covid19;
  twitterMute.news_mynavi_jp = items.news_mynavi_jp;
  twitterMute.mimollet2015 = items.mimollet2015;
});

