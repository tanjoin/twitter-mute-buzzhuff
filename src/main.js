function muteMedia() {
  [...document.querySelectorAll('#react-root > section > div > div > div')].filter((e) => e.innerText.includes('BuzzFeed')).forEach((e) => e.style.display = 'none');[...document.querySelectorAll('section > div > div > div')].filter((e) => e.innerText.includes('BuzzFeed') || e.innerText.includes('ハフポスト')).forEach((e) => e.style.display = 'none');
}

function main() {
  muteMedia();
}

main();