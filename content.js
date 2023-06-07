// 広告要素を非表示にする関数
function hideAd() {
  // 広告要素を特定するためのセレクターを使用して要素を取得
  var adElement = document.querySelector('.adsbygoogle'); // クラス名が「ad」の要素を取得する例

  // 要素が存在する場合は非表示にする
  if (adElement) {
    adElement.style.display = 'none';
  }
}

// 広告を非表示にするための関数を呼び出す
hideAd();
