function hideAds() {
  var adClasses = ['.adsbygoogle', '.css-1dbjc4n r-1awozwy r-18u37iz r-16y2uox r-1wtj0ep r-mk0yit', '.ad-banner', '.cat032Wrap', '.m2a8e1__content', '.m2a8e1__module', '.c-sub-content-block', '.mab9d4__anchor', '.pcBanner spNone', '#mailmagazine_banner']; // 非表示にしたい広告要素のクラス名リスト

  // 各クラス名に対して広告要素を非表示にする
  for (var i = 0; i < adClasses.length; i++) {
    var ads = document.querySelectorAll(adClasses[i]);
    for (var j = 0; j < ads.length; j++) {
      ads[j].style.display = 'none';
    }
  }
}

window.addEventListener('load', hideAds);
