// 要素を非表示にする関数
function hideElement(selector) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function(element) {
    element.style.display = 'none';
  });
}

// 非表示にしたい要素のセレクターを指定して、hideElement関数を呼び出す
// 例: クラス名が「ad」の要素を非表示にする
hideElement('.ad');

// 例: idが「banner」の要素を非表示にする
hideElement('#reveal-ad');
