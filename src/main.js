let muteCounter = 0;
const observer = new MutationObserver((mutations) => {
  // mutations.forEach((mutation) => {
  //   console.log(`${mutation.type} - ${mutation.target.outerHTML} - ${mutation.oldValue}`);
  // });
  if (muteCounter % 5 !== 0) {
    return;
  }
  console.debug('mute!');
  muteCounter++;
  try {
    [...document.querySelectorAll('div[aria-label="タイムライン: トレンド"] > div > div')]
      .filter((e) => e.innerText.includes('BuzzFeed') || e.innerText.includes('ハフポスト'))
      .forEach((e) => e.style.display = 'none');
    [...document.querySelectorAll('div[aria-label="タイムライン: 話題を検索"] > div > div')]
      .filter((e) => e.innerText.includes('BuzzFeed') || e.innerText.includes('ハフポスト'))
      .forEach((e) => e.style.display = 'none');
  } catch (e) {
    console.error(e);
  }
});
const config = { attributes: false, childList: true, characterData: false, subtree: true };
observer.observe(document.body, config);
