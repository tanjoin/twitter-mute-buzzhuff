let muteCounter = 0;
let twitterMute = {
  BIJapan: false,
  GINZA_magazine: false,
  Kstyle_news: false,
  Newsweek_JAPAN: false,
  WomanExcite: false,
  asahicom: false,
  auto_scroll_by_1: false,
  bizble_asahi: false,
  bunshun: false,
  buzzfeed: true,
  cosmopolitanjp: false,
  crea_web: false,
  fnn: false,
  frau_tw: false,
  gekisaka: false,
  gendai_biz: false,
  hst_tvasahi: false,
  huffpost: true,
  iVoCE: false,
  japanacademy: false,
  jijicom: false,
  jijimedical: false,
  ld_blogos: false,
  mamadaystv: false,
  mimollet2015: false,
  modelpress: false,
  mute_level_hard: false,
  news24ntv: false,
  news_mynavi_jp: false,
  nhk_news: false,
  ntvnewszero: false,
  numberweb: false,
  oricon: false,
  sankeibiz: false,
  shin_R25: false,
  tastyjapan: false,
  toyokeizai: false,
  trend_covid19: false,
  trend_kpop: false,
  trend_seiji: false,
  word_BTS: false,
  word_birthday: false,
  word_china: false,
  word_korea: false
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
    result = e.innerText.includes('朝日新聞') || e.innerText.includes('AREA') || result;
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
  if (twitterMute.bizble_asahi) {
    result = e.innerText.includes('bizble') || e.innerText.includes('ビズブル') || result;
  }
  if (twitterMute.cosmopolitanjp) {
    result = e.innerText.includes('Cosmopolitan') || e.innerText.includes('コスモポリタン') || result;
  }
  if (twitterMute.Kstyle_news) {
    result = e.innerText.includes('Kstyle') || result;
  }
  if (twitterMute.iVoCE) {
    result = e.innerText.includes('VOCE') || e.innerText.includes('ヴォーチェ') || result;
  }
  if (twitterMute.WomanExcite) {
    result = e.innerText.includes('ウーマンエキサイト編集部') || result;
  }
  if (twitterMute.Newsweek_JAPAN) {
    result = e.innerText.includes('ニューズウィーク') || result;
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

chrome.storage.sync.get(twitterMute, (items) => twitterMute = Object.assign(twitterMute, items));

