// ひらがなのみの正規表現
const hiragana = new RegExp('^[ぁ-ん]+$');
console.log(hiragana.test('ひらがな')); // true

// カタカナのみの正規表現
const katakana = new RegExp('^[ァ-ヶ]+$');
console.log(katakana.test('カタカナ')); // true

// ひらがなとカタカナのみの正規表現
const hiraganaKatakana = new RegExp('^[ぁ-んァ-ヶ]+$');
console.log(hiraganaKatakana.test('ひらがなカタカナ')); // true

// 半角数字のみの正規表現
const number = new RegExp('^[0-9]+$');
console.log(number.test('1234567890')); // true

// 半角英字のみの正規表現
const alphabet = new RegExp('^[a-zA-Z]+$');
console.log(alphabet.test('alphabet')); // true

// 半角英数字のみの正規表現
const alphabetNumber = new RegExp('^[0-9a-zA-Z]+$');
console.log(alphabetNumber.test('alphabet123')); // true

// 半角英数字と記号のみの正規表現
const alphabetNumberSymbol = new RegExp('^[0-9a-zA-Z!-/:-@[-`{-~]+$');
console.log(alphabetNumberSymbol.test('alphabet123!@#')); // true