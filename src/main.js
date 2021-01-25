let muteCounter = 0;
let twitterMute = {
  buzzfeed: true,
  huffpost: true,
  bunshun: false,
  fnn: false,
  toyokeizai: false  
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
  if (twitterMute.bunshun) {
    result = e.innerText.includes('FNN') || result;
  }
  if (twitterMute.bunshun) {
    result = e.innerText.includes('東洋経済') || result;
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
  bunshun: false
}, (items) => {
  twitterMute.buzzfeed = items.buzzfeed;
  twitterMute.huffpost = items.huffpost;
  twitterMute.bunshun = items.bunshun;      
});