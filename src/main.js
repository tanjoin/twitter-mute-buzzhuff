const observer = new MutationObserver((mutations) => {
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
const config = { attributes: true, childList: true, characterData: true, subtree: true };
observer.observe(document.body, config);
