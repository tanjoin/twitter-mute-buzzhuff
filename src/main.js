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
  if (muteCounter % 10 !== 0) {
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
    if (settings.auto_scroll_by_1) {
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  } catch (e) {
    console.error(e);
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

chrome.storage.sync.get({
  mute_list: ["BuzzFeed", "バズフィード", "ハフポスト"],
  auto_scroll_by_1: false,
  mute_level_hard: false
}, (data) => settings = Object.assign(settings, data));