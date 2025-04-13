// 假名資料結構和關卡設計
export type KanaItem = {
  kana: string;
  romaji: string;
  sound: string;
};

export type KanaGroup = {
  id: string;
  name: string;
  description: string;
  items: KanaItem[];
};

// 平假名 - 基本母音（あいうえお）
export const hiraganaBasicVowels: KanaGroup = {
  id: 'hiragana-vowels',
  name: '平假名 - 基本母音',
  description: '最基本的五個平假名母音（あいうえお）',
  items: [
    { kana: 'あ', romaji: 'a', sound: '/sounds/hiragana/a.mp3' },
    { kana: 'い', romaji: 'i', sound: '/sounds/hiragana/i.mp3' },
    { kana: 'う', romaji: 'u', sound: '/sounds/hiragana/u.mp3' },
    { kana: 'え', romaji: 'e', sound: '/sounds/hiragana/e.mp3' },
    { kana: 'お', romaji: 'o', sound: '/sounds/hiragana/o.mp3' },
  ],
};

// 平假名 - K 行（かきくけこ）
export const hiraganaKGroup: KanaGroup = {
  id: 'hiragana-k',
  name: '平假名 - K 行',
  description: 'K 行平假名：か (ka)、き (ki)、く (ku)、け (ke)、こ (ko)',
  items: [
    { kana: 'か', romaji: 'ka', sound: '/sounds/hiragana/ka.mp3' },
    { kana: 'き', romaji: 'ki', sound: '/sounds/hiragana/ki.mp3' },
    { kana: 'く', romaji: 'ku', sound: '/sounds/hiragana/ku.mp3' },
    { kana: 'け', romaji: 'ke', sound: '/sounds/hiragana/ke.mp3' },
    { kana: 'こ', romaji: 'ko', sound: '/sounds/hiragana/ko.mp3' },
  ],
};

// 平假名 - S 行（さしすせそ）
export const hiraganaSGroup: KanaGroup = {
  id: 'hiragana-s',
  name: '平假名 - S 行',
  description: 'S 行平假名：さ (sa)、し (shi)、す (su)、せ (se)、そ (so)',
  items: [
    { kana: 'さ', romaji: 'sa', sound: '/sounds/hiragana/sa.mp3' },
    { kana: 'し', romaji: 'shi', sound: '/sounds/hiragana/shi.mp3' },
    { kana: 'す', romaji: 'su', sound: '/sounds/hiragana/su.mp3' },
    { kana: 'せ', romaji: 'se', sound: '/sounds/hiragana/se.mp3' },
    { kana: 'そ', romaji: 'so', sound: '/sounds/hiragana/so.mp3' },
  ],
};

// 平假名 - T 行（たちつてと）
export const hiraganaTGroup: KanaGroup = {
  id: 'hiragana-t',
  name: '平假名 - T 行',
  description: 'T 行平假名：た (ta)、ち (chi)、つ (tsu)、て (te)、と (to)',
  items: [
    { kana: 'た', romaji: 'ta', sound: '/sounds/hiragana/ta.mp3' },
    { kana: 'ち', romaji: 'chi', sound: '/sounds/hiragana/chi.mp3' },
    { kana: 'つ', romaji: 'tsu', sound: '/sounds/hiragana/tsu.mp3' },
    { kana: 'て', romaji: 'te', sound: '/sounds/hiragana/te.mp3' },
    { kana: 'と', romaji: 'to', sound: '/sounds/hiragana/to.mp3' },
  ],
};

// 平假名 - N 行（なにぬねの）
export const hiraganaNGroup: KanaGroup = {
  id: 'hiragana-n',
  name: '平假名 - N 行',
  description: 'N 行平假名：な (na)、に (ni)、ぬ (nu)、ね (ne)、の (no)',
  items: [
    { kana: 'な', romaji: 'na', sound: '/sounds/hiragana/na.mp3' },
    { kana: 'に', romaji: 'ni', sound: '/sounds/hiragana/ni.mp3' },
    { kana: 'ぬ', romaji: 'nu', sound: '/sounds/hiragana/nu.mp3' },
    { kana: 'ね', romaji: 'ne', sound: '/sounds/hiragana/ne.mp3' },
    { kana: 'の', romaji: 'no', sound: '/sounds/hiragana/no.mp3' },
  ],
};

// 平假名 - H 行（はひふへほ）
export const hiraganaHGroup: KanaGroup = {
  id: 'hiragana-h',
  name: '平假名 - H 行',
  description: 'H 行平假名：は (ha)、ひ (hi)、ふ (fu)、へ (he)、ほ (ho)',
  items: [
    { kana: 'は', romaji: 'ha', sound: '/sounds/hiragana/ha.mp3' },
    { kana: 'ひ', romaji: 'hi', sound: '/sounds/hiragana/hi.mp3' },
    { kana: 'ふ', romaji: 'fu', sound: '/sounds/hiragana/fu.mp3' },
    { kana: 'へ', romaji: 'he', sound: '/sounds/hiragana/he.mp3' },
    { kana: 'ほ', romaji: 'ho', sound: '/sounds/hiragana/ho.mp3' },
  ],
};

// 平假名 - M 行（まみむめも）
export const hiraganaMGroup: KanaGroup = {
  id: 'hiragana-m',
  name: '平假名 - M 行',
  description: 'M 行平假名：ま (ma)、み (mi)、む (mu)、め (me)、も (mo)',
  items: [
    { kana: 'ま', romaji: 'ma', sound: '/sounds/hiragana/ma.mp3' },
    { kana: 'み', romaji: 'mi', sound: '/sounds/hiragana/mi.mp3' },
    { kana: 'む', romaji: 'mu', sound: '/sounds/hiragana/mu.mp3' },
    { kana: 'め', romaji: 'me', sound: '/sounds/hiragana/me.mp3' },
    { kana: 'も', romaji: 'mo', sound: '/sounds/hiragana/mo.mp3' },
  ],
};

// 平假名 - Y 行（やゆよ）
export const hiraganaYGroup: KanaGroup = {
  id: 'hiragana-y',
  name: '平假名 - Y 行',
  description: 'Y 行平假名：や (ya)、ゆ (yu)、よ (yo)',
  items: [
    { kana: 'や', romaji: 'ya', sound: '/sounds/hiragana/ya.mp3' },
    { kana: 'ゆ', romaji: 'yu', sound: '/sounds/hiragana/yu.mp3' },
    { kana: 'よ', romaji: 'yo', sound: '/sounds/hiragana/yo.mp3' },
  ],
};

// 平假名 - R 行（らりるれろ）
export const hiraganaRGroup: KanaGroup = {
  id: 'hiragana-r',
  name: '平假名 - R 行',
  description: 'R 行平假名：ら (ra)、り (ri)、る (ru)、れ (re)、ろ (ro)',
  items: [
    { kana: 'ら', romaji: 'ra', sound: '/sounds/hiragana/ra.mp3' },
    { kana: 'り', romaji: 'ri', sound: '/sounds/hiragana/ri.mp3' },
    { kana: 'る', romaji: 'ru', sound: '/sounds/hiragana/ru.mp3' },
    { kana: 'れ', romaji: 're', sound: '/sounds/hiragana/re.mp3' },
    { kana: 'ろ', romaji: 'ro', sound: '/sounds/hiragana/ro.mp3' },
  ],
};

// 平假名 - W 行（わを）與 N（ん）
export const hiraganaWNGroup: KanaGroup = {
  id: 'hiragana-wn',
  name: '平假名 - W 行與 ん',
  description: 'W 行平假名：わ (wa)、を (wo) 以及 ん (n)',
  items: [
    { kana: 'わ', romaji: 'wa', sound: '/sounds/hiragana/wa.mp3' },
    { kana: 'を', romaji: 'wo', sound: '/sounds/hiragana/wo.mp3' },
    { kana: 'ん', romaji: 'n', sound: '/sounds/hiragana/n.mp3' },
  ],
};

// 平假名 - 濁音 G 行（がぎぐげご）
export const hiraganaGGroup: KanaGroup = {
  id: 'hiragana-g',
  name: '平假名 - G 行（濁音）',
  description: '濁音 G 行平假名：が (ga)、ぎ (gi)、ぐ (gu)、げ (ge)、ご (go)',
  items: [
    { kana: 'が', romaji: 'ga', sound: '/sounds/hiragana/ga.mp3' },
    { kana: 'ぎ', romaji: 'gi', sound: '/sounds/hiragana/gi.mp3' },
    { kana: 'ぐ', romaji: 'gu', sound: '/sounds/hiragana/gu.mp3' },
    { kana: 'げ', romaji: 'ge', sound: '/sounds/hiragana/ge.mp3' },
    { kana: 'ご', romaji: 'go', sound: '/sounds/hiragana/go.mp3' },
  ],
};

// 平假名 - 濁音 Z 行（ざじずぜぞ）
export const hiraganaZGroup: KanaGroup = {
  id: 'hiragana-z',
  name: '平假名 - Z 行（濁音）',
  description: '濁音 Z 行平假名：ざ (za)、じ (ji)、ず (zu)、ぜ (ze)、ぞ (zo)',
  items: [
    { kana: 'ざ', romaji: 'za', sound: '/sounds/hiragana/za.mp3' },
    { kana: 'じ', romaji: 'ji', sound: '/sounds/hiragana/ji.mp3' },
    { kana: 'ず', romaji: 'zu', sound: '/sounds/hiragana/zu.mp3' },
    { kana: 'ぜ', romaji: 'ze', sound: '/sounds/hiragana/ze.mp3' },
    { kana: 'ぞ', romaji: 'zo', sound: '/sounds/hiragana/zo.mp3' },
  ],
};

// 平假名 - 濁音 D 行（だぢづでど）
export const hiraganaDGroup: KanaGroup = {
  id: 'hiragana-d',
  name: '平假名 - D 行（濁音）',
  description: '濁音 D 行平假名：だ (da)、ぢ (ji)、づ (zu)、で (de)、ど (do)',
  items: [
    { kana: 'だ', romaji: 'da', sound: '/sounds/hiragana/da.mp3' },
    { kana: 'ぢ', romaji: 'ji', sound: '/sounds/hiragana/ji2.mp3' },
    { kana: 'づ', romaji: 'zu', sound: '/sounds/hiragana/zu2.mp3' },
    { kana: 'で', romaji: 'de', sound: '/sounds/hiragana/de.mp3' },
    { kana: 'ど', romaji: 'do', sound: '/sounds/hiragana/do.mp3' },
  ],
};

// 平假名 - 濁音 B 行（ばびぶべぼ）
export const hiraganaBGroup: KanaGroup = {
  id: 'hiragana-b',
  name: '平假名 - B 行（濁音）',
  description: '濁音 B 行平假名：ば (ba)、び (bi)、ぶ (bu)、べ (be)、ぼ (bo)',
  items: [
    { kana: 'ば', romaji: 'ba', sound: '/sounds/hiragana/ba.mp3' },
    { kana: 'び', romaji: 'bi', sound: '/sounds/hiragana/bi.mp3' },
    { kana: 'ぶ', romaji: 'bu', sound: '/sounds/hiragana/bu.mp3' },
    { kana: 'べ', romaji: 'be', sound: '/sounds/hiragana/be.mp3' },
    { kana: 'ぼ', romaji: 'bo', sound: '/sounds/hiragana/bo.mp3' },
  ],
};

// 平假名 - 半濁音 P 行（ぱぴぷぺぽ）
export const hiraganaPGroup: KanaGroup = {
  id: 'hiragana-p',
  name: '平假名 - P 行（半濁音）',
  description: '半濁音 P 行平假名：ぱ (pa)、ぴ (pi)、ぷ (pu)、ぺ (pe)、ぽ (po)',
  items: [
    { kana: 'ぱ', romaji: 'pa', sound: '/sounds/hiragana/pa.mp3' },
    { kana: 'ぴ', romaji: 'pi', sound: '/sounds/hiragana/pi.mp3' },
    { kana: 'ぷ', romaji: 'pu', sound: '/sounds/hiragana/pu.mp3' },
    { kana: 'ぺ', romaji: 'pe', sound: '/sounds/hiragana/pe.mp3' },
    { kana: 'ぽ', romaji: 'po', sound: '/sounds/hiragana/po.mp3' },
  ],
};

// 片假名 - 基本母音（アイウエオ）
export const katakanaBasicVowels: KanaGroup = {
  id: 'katakana-vowels',
  name: '片假名 - 基本母音',
  description: '最基本的五個片假名母音（アイウエオ）',
  items: [
    { kana: 'ア', romaji: 'a', sound: '/sounds/katakana/a.mp3' },
    { kana: 'イ', romaji: 'i', sound: '/sounds/katakana/i.mp3' },
    { kana: 'ウ', romaji: 'u', sound: '/sounds/katakana/u.mp3' },
    { kana: 'エ', romaji: 'e', sound: '/sounds/katakana/e.mp3' },
    { kana: 'オ', romaji: 'o', sound: '/sounds/katakana/o.mp3' },
  ],
};

// 片假名 - K 行（カキクケコ）
export const katakanaKGroup: KanaGroup = {
  id: 'katakana-k',
  name: '片假名 - K 行',
  description: 'K 行片假名：カ (ka)、キ (ki)、ク (ku)、ケ (ke)、コ (ko)',
  items: [
    { kana: 'カ', romaji: 'ka', sound: '/sounds/katakana/ka.mp3' },
    { kana: 'キ', romaji: 'ki', sound: '/sounds/katakana/ki.mp3' },
    { kana: 'ク', romaji: 'ku', sound: '/sounds/katakana/ku.mp3' },
    { kana: 'ケ', romaji: 'ke', sound: '/sounds/katakana/ke.mp3' },
    { kana: 'コ', romaji: 'ko', sound: '/sounds/katakana/ko.mp3' },
  ],
};

// 片假名 - S 行（サシスセソ）
export const katakanaSGroup: KanaGroup = {
  id: 'katakana-s',
  name: '片假名 - S 行',
  description: 'S 行片假名：サ (sa)、シ (shi)、ス (su)、セ (se)、ソ (so)',
  items: [
    { kana: 'サ', romaji: 'sa', sound: '/sounds/katakana/sa.mp3' },
    { kana: 'シ', romaji: 'shi', sound: '/sounds/katakana/shi.mp3' },
    { kana: 'ス', romaji: 'su', sound: '/sounds/katakana/su.mp3' },
    { kana: 'セ', romaji: 'se', sound: '/sounds/katakana/se.mp3' },
    { kana: 'ソ', romaji: 'so', sound: '/sounds/katakana/so.mp3' },
  ],
};

// 片假名 - T 行（タチツテト）
export const katakanaTGroup: KanaGroup = {
  id: 'katakana-t',
  name: '片假名 - T 行',
  description: 'T 行片假名：タ (ta)、チ (chi)、ツ (tsu)、テ (te)、ト (to)',
  items: [
    { kana: 'タ', romaji: 'ta', sound: '/sounds/katakana/ta.mp3' },
    { kana: 'チ', romaji: 'chi', sound: '/sounds/katakana/chi.mp3' },
    { kana: 'ツ', romaji: 'tsu', sound: '/sounds/katakana/tsu.mp3' },
    { kana: 'テ', romaji: 'te', sound: '/sounds/katakana/te.mp3' },
    { kana: 'ト', romaji: 'to', sound: '/sounds/katakana/to.mp3' },
  ],
};

// 片假名 - N 行（ナニヌネノ）
export const katakanaNGroup: KanaGroup = {
  id: 'katakana-n',
  name: '片假名 - N 行',
  description: 'N 行片假名：ナ (na)、ニ (ni)、ヌ (nu)、ネ (ne)、ノ (no)',
  items: [
    { kana: 'ナ', romaji: 'na', sound: '/sounds/katakana/na.mp3' },
    { kana: 'ニ', romaji: 'ni', sound: '/sounds/katakana/ni.mp3' },
    { kana: 'ヌ', romaji: 'nu', sound: '/sounds/katakana/nu.mp3' },
    { kana: 'ネ', romaji: 'ne', sound: '/sounds/katakana/ne.mp3' },
    { kana: 'ノ', romaji: 'no', sound: '/sounds/katakana/no.mp3' },
  ],
};

// 片假名 - H 行（ハヒフヘホ）
export const katakanaHGroup: KanaGroup = {
  id: 'katakana-h',
  name: '片假名 - H 行',
  description: 'H 行片假名：ハ (ha)、ヒ (hi)、フ (fu)、ヘ (he)、ホ (ho)',
  items: [
    { kana: 'ハ', romaji: 'ha', sound: '/sounds/katakana/ha.mp3' },
    { kana: 'ヒ', romaji: 'hi', sound: '/sounds/katakana/hi.mp3' },
    { kana: 'フ', romaji: 'fu', sound: '/sounds/katakana/fu.mp3' },
    { kana: 'ヘ', romaji: 'he', sound: '/sounds/katakana/he.mp3' },
    { kana: 'ホ', romaji: 'ho', sound: '/sounds/katakana/ho.mp3' },
  ],
};

// 片假名 - M 行（マミムメモ）
export const katakanaMGroup: KanaGroup = {
  id: 'katakana-m',
  name: '片假名 - M 行',
  description: 'M 行片假名：マ (ma)、ミ (mi)、ム (mu)、メ (me)、モ (mo)',
  items: [
    { kana: 'マ', romaji: 'ma', sound: '/sounds/katakana/ma.mp3' },
    { kana: 'ミ', romaji: 'mi', sound: '/sounds/katakana/mi.mp3' },
    { kana: 'ム', romaji: 'mu', sound: '/sounds/katakana/mu.mp3' },
    { kana: 'メ', romaji: 'me', sound: '/sounds/katakana/me.mp3' },
    { kana: 'モ', romaji: 'mo', sound: '/sounds/katakana/mo.mp3' },
  ],
};

// 片假名 - Y 行（ヤユヨ）
export const katakanaYGroup: KanaGroup = {
  id: 'katakana-y',
  name: '片假名 - Y 行',
  description: 'Y 行片假名：ヤ (ya)、ユ (yu)、ヨ (yo)',
  items: [
    { kana: 'ヤ', romaji: 'ya', sound: '/sounds/katakana/ya.mp3' },
    { kana: 'ユ', romaji: 'yu', sound: '/sounds/katakana/yu.mp3' },
    { kana: 'ヨ', romaji: 'yo', sound: '/sounds/katakana/yo.mp3' },
  ],
};

// 片假名 - R 行（ラリルレロ）
export const katakanaRGroup: KanaGroup = {
  id: 'katakana-r',
  name: '片假名 - R 行',
  description: 'R 行片假名：ラ (ra)、リ (ri)、ル (ru)、レ (re)、ロ (ro)',
  items: [
    { kana: 'ラ', romaji: 'ra', sound: '/sounds/katakana/ra.mp3' },
    { kana: 'リ', romaji: 'ri', sound: '/sounds/katakana/ri.mp3' },
    { kana: 'ル', romaji: 'ru', sound: '/sounds/katakana/ru.mp3' },
    { kana: 'レ', romaji: 're', sound: '/sounds/katakana/re.mp3' },
    { kana: 'ロ', romaji: 'ro', sound: '/sounds/katakana/ro.mp3' },
  ],
};

// 片假名 - W 行（ワヲ）與 N（ン）
export const katakanaWNGroup: KanaGroup = {
  id: 'katakana-wn',
  name: '片假名 - W 行與 ン',
  description: 'W 行片假名：ワ (wa)、ヲ (wo) 以及 ン (n)',
  items: [
    { kana: 'ワ', romaji: 'wa', sound: '/sounds/katakana/wa.mp3' },
    { kana: 'ヲ', romaji: 'wo', sound: '/sounds/katakana/wo.mp3' },
    { kana: 'ン', romaji: 'n', sound: '/sounds/katakana/n.mp3' },
  ],
};

// 片假名 - 濁音 G 行（ガギグゲゴ）
export const katakanaGGroup: KanaGroup = {
  id: 'katakana-g',
  name: '片假名 - G 行（濁音）',
  description: '濁音 G 行片假名：ガ (ga)、ギ (gi)、グ (gu)、ゲ (ge)、ゴ (go)',
  items: [
    { kana: 'ガ', romaji: 'ga', sound: '/sounds/katakana/ga.mp3' },
    { kana: 'ギ', romaji: 'gi', sound: '/sounds/katakana/gi.mp3' },
    { kana: 'グ', romaji: 'gu', sound: '/sounds/katakana/gu.mp3' },
    { kana: 'ゲ', romaji: 'ge', sound: '/sounds/katakana/ge.mp3' },
    { kana: 'ゴ', romaji: 'go', sound: '/sounds/katakana/go.mp3' },
  ],
};

// 片假名 - 濁音 Z 行（ザジズゼゾ）
export const katakanaZGroup: KanaGroup = {
  id: 'katakana-z',
  name: '片假名 - Z 行（濁音）',
  description: '濁音 Z 行片假名：ザ (za)、ジ (ji)、ズ (zu)、ゼ (ze)、ゾ (zo)',
  items: [
    { kana: 'ザ', romaji: 'za', sound: '/sounds/katakana/za.mp3' },
    { kana: 'ジ', romaji: 'ji', sound: '/sounds/katakana/ji.mp3' },
    { kana: 'ズ', romaji: 'zu', sound: '/sounds/katakana/zu.mp3' },
    { kana: 'ゼ', romaji: 'ze', sound: '/sounds/katakana/ze.mp3' },
    { kana: 'ゾ', romaji: 'zo', sound: '/sounds/katakana/zo.mp3' },
  ],
};

// 片假名 - 濁音 D 行（ダヂヅデド）
export const katakanaDGroup: KanaGroup = {
  id: 'katakana-d',
  name: '片假名 - D 行（濁音）',
  description: '濁音 D 行片假名：ダ (da)、ヂ (ji)、ヅ (zu)、デ (de)、ド (do)',
  items: [
    { kana: 'ダ', romaji: 'da', sound: '/sounds/katakana/da.mp3' },
    { kana: 'ヂ', romaji: 'ji', sound: '/sounds/katakana/ji2.mp3' },
    { kana: 'ヅ', romaji: 'zu', sound: '/sounds/katakana/zu2.mp3' },
    { kana: 'デ', romaji: 'de', sound: '/sounds/katakana/de.mp3' },
    { kana: 'ド', romaji: 'do', sound: '/sounds/katakana/do.mp3' },
  ],
};

// 片假名 - 濁音 B 行（バビブベボ）
export const katakanaBGroup: KanaGroup = {
  id: 'katakana-b',
  name: '片假名 - B 行（濁音）',
  description: '濁音 B 行片假名：バ (ba)、ビ (bi)、ブ (bu)、ベ (be)、ボ (bo)',
  items: [
    { kana: 'バ', romaji: 'ba', sound: '/sounds/katakana/ba.mp3' },
    { kana: 'ビ', romaji: 'bi', sound: '/sounds/katakana/bi.mp3' },
    { kana: 'ブ', romaji: 'bu', sound: '/sounds/katakana/bu.mp3' },
    { kana: 'ベ', romaji: 'be', sound: '/sounds/katakana/be.mp3' },
    { kana: 'ボ', romaji: 'bo', sound: '/sounds/katakana/bo.mp3' },
  ],
};

// 片假名 - 半濁音 P 行（パピプペポ）
export const katakanaPGroup: KanaGroup = {
  id: 'katakana-p',
  name: '片假名 - P 行（半濁音）',
  description: '半濁音 P 行片假名：パ (pa)、ピ (pi)、プ (pu)、ペ (pe)、ポ (po)',
  items: [
    { kana: 'パ', romaji: 'pa', sound: '/sounds/katakana/pa.mp3' },
    { kana: 'ピ', romaji: 'pi', sound: '/sounds/katakana/pi.mp3' },
    { kana: 'プ', romaji: 'pu', sound: '/sounds/katakana/pu.mp3' },
    { kana: 'ペ', romaji: 'pe', sound: '/sounds/katakana/pe.mp3' },
    { kana: 'ポ', romaji: 'po', sound: '/sounds/katakana/po.mp3' },
  ],
};

// 遊戲關卡設計
export type GameLevel = {
  id: string;
  name: string;
  description: string;
  groups: KanaGroup[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
};

// 定義遊戲關卡
export const gameLevels: GameLevel[] = [
  {
    id: 'level-1',
    name: '入門：平假名母音',
    description: '學習五個基本平假名母音',
    groups: [hiraganaBasicVowels],
    difficulty: 'beginner',
  },
  {
    id: 'level-2',
    name: '入門：平假名 K 行',
    description: '學習平假名 K 行字符',
    groups: [hiraganaKGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-3',
    name: '入門：平假名 S 行',
    description: '學習平假名 S 行字符',
    groups: [hiraganaSGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-4',
    name: '入門：平假名 T 行',
    description: '學習平假名 T 行字符 (た、ち、つ、て、と)',
    groups: [hiraganaTGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-5',
    name: '入門：平假名 N 行',
    description: '學習平假名 N 行字符',
    groups: [hiraganaNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-6',
    name: '入門：平假名 H 行',
    description: '學習平假名 H 行字符',
    groups: [hiraganaHGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-7',
    name: '入門：平假名 M 行',
    description: '學習平假名 M 行字符',
    groups: [hiraganaMGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-8',
    name: '入門：平假名 Y 行',
    description: '學習平假名 Y 行字符',
    groups: [hiraganaYGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-9',
    name: '入門：平假名 R 行',
    description: '學習平假名 R 行字符',
    groups: [hiraganaRGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-10',
    name: '入門：平假名 W 行與 ん',
    description: '學習平假名 W 行與 ん 字符',
    groups: [hiraganaWNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-11',
    name: '入門：片假名母音',
    description: '學習五個基本片假名母音',
    groups: [katakanaBasicVowels],
    difficulty: 'beginner',
  },
  {
    id: 'level-12',
    name: '入門：片假名 K 行',
    description: '學習片假名 K 行字符',
    groups: [katakanaKGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-13',
    name: '入門：片假名 S 行',
    description: '學習片假名 S 行字符',
    groups: [katakanaSGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-14',
    name: '入門：片假名 T 行',
    description: '學習片假名 T 行字符 (タ、チ、ツ、テ、ト)',
    groups: [katakanaTGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-15',
    name: '入門：片假名 N 行',
    description: '學習片假名 N 行字符',
    groups: [katakanaNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-16',
    name: '入門：片假名 H 行',
    description: '學習片假名 H 行字符',
    groups: [katakanaHGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-17',
    name: '入門：片假名 M 行',
    description: '學習片假名 M 行字符',
    groups: [katakanaMGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-18',
    name: '入門：片假名 Y 行',
    description: '學習片假名 Y 行字符',
    groups: [katakanaYGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-19',
    name: '入門：片假名 R 行',
    description: '學習片假名 R 行字符',
    groups: [katakanaRGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-20',
    name: '入門：片假名 W 行與 ン',
    description: '學習片假名 W 行與 ン 字符',
    groups: [katakanaWNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-21',
    name: '混合：平假名和片假名母音',
    description: '同時練習平假名和片假名的基本母音',
    groups: [hiraganaBasicVowels, katakanaBasicVowels],
    difficulty: 'intermediate',
  },
  {
    id: 'level-22',
    name: '初級：平假名子音 KSTN',
    description: '學習平假名 K、S、T、N 行',
    groups: [hiraganaKGroup, hiraganaSGroup, hiraganaTGroup, hiraganaNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-23',
    name: '初級：平假名子音 HMYR',
    description: '學習平假名 H、M、Y、R 行',
    groups: [hiraganaHGroup, hiraganaMGroup, hiraganaYGroup, hiraganaRGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-24',
    name: '初級：片假名子音 KSTN',
    description: '學習片假名 K、S、T、N 行',
    groups: [katakanaKGroup, katakanaSGroup, katakanaTGroup, katakanaNGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-25',
    name: '初級：片假名子音 HMYR',
    description: '學習片假名 H、M、Y、R 行',
    groups: [katakanaHGroup, katakanaMGroup, katakanaYGroup, katakanaRGroup],
    difficulty: 'beginner',
  },
  {
    id: 'level-26',
    name: '中級：平假名濁音 G 行',
    description: '學習平假名濁音 G 行',
    groups: [hiraganaGGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-27',
    name: '中級：平假名濁音 Z 行',
    description: '學習平假名濁音 Z 行',
    groups: [hiraganaZGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-28',
    name: '中級：平假名濁音 D 行',
    description: '學習平假名濁音 D 行',
    groups: [hiraganaDGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-29',
    name: '中級：平假名濁音 B 行',
    description: '學習平假名濁音 B 行',
    groups: [hiraganaBGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-30',
    name: '中級：平假名半濁音 P 行',
    description: '學習平假名半濁音 P 行',
    groups: [hiraganaPGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-31',
    name: '中級：片假名濁音 G 行',
    description: '學習片假名濁音 G 行',
    groups: [katakanaGGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-32',
    name: '中級：片假名濁音 Z 行',
    description: '學習片假名濁音 Z 行',
    groups: [katakanaZGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-33',
    name: '中級：片假名濁音 D 行',
    description: '學習片假名濁音 D 行',
    groups: [katakanaDGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-34',
    name: '中級：片假名濁音 B 行',
    description: '學習片假名濁音 B 行',
    groups: [katakanaBGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-35',
    name: '中級：片假名半濁音 P 行',
    description: '學習片假名半濁音 P 行',
    groups: [katakanaPGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-36',
    name: '中級：平假名濁音全部',
    description: '學習平假名濁音 G、Z、D、B 行',
    groups: [hiraganaGGroup, hiraganaZGroup, hiraganaDGroup, hiraganaBGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-37',
    name: '中級：片假名濁音全部',
    description: '學習片假名濁音 G、Z、D、B 行',
    groups: [katakanaGGroup, katakanaZGroup, katakanaDGroup, katakanaBGroup],
    difficulty: 'intermediate',
  },
  {
    id: 'level-38',
    name: '高級：平假名綜合測驗',
    description: '測試全部平假名的掌握程度',
    groups: [
      hiraganaBasicVowels, hiraganaKGroup, hiraganaSGroup, 
      hiraganaTGroup, hiraganaNGroup, hiraganaHGroup, 
      hiraganaMGroup, hiraganaYGroup, hiraganaRGroup, hiraganaWNGroup,
      hiraganaGGroup, hiraganaZGroup, hiraganaDGroup, 
      hiraganaBGroup, hiraganaPGroup
    ],
    difficulty: 'advanced',
  },
  {
    id: 'level-39',
    name: '高級：片假名綜合測驗',
    description: '測試全部片假名的掌握程度',
    groups: [
      katakanaBasicVowels, katakanaKGroup, katakanaSGroup, 
      katakanaTGroup, katakanaNGroup, katakanaHGroup, 
      katakanaMGroup, katakanaYGroup, katakanaRGroup, katakanaWNGroup,
      katakanaGGroup, katakanaZGroup, katakanaDGroup, 
      katakanaBGroup, katakanaPGroup
    ],
    difficulty: 'advanced',
  },
  {
    id: 'level-40',
    name: '終極挑戰：全部假名測驗',
    description: '測試全部平假名與片假名的掌握程度',
    groups: [
      hiraganaBasicVowels, hiraganaKGroup, hiraganaSGroup, 
      hiraganaTGroup, hiraganaNGroup, hiraganaHGroup, 
      hiraganaMGroup, hiraganaYGroup, hiraganaRGroup, hiraganaWNGroup,
      hiraganaGGroup, hiraganaZGroup, hiraganaDGroup, 
      hiraganaBGroup, hiraganaPGroup,
      katakanaBasicVowels, katakanaKGroup, katakanaSGroup, 
      katakanaTGroup, katakanaNGroup, katakanaHGroup, 
      katakanaMGroup, katakanaYGroup, katakanaRGroup, katakanaWNGroup,
      katakanaGGroup, katakanaZGroup, katakanaDGroup, 
      katakanaBGroup, katakanaPGroup
    ],
    difficulty: 'advanced',
  },
];

// 輔助函數：從關卡中獲取所有假名項目
export function getKanaItemsFromLevel(levelId: string): KanaItem[] {
  const level = gameLevels.find(level => level.id === levelId);
  if (!level) return [];
  
  // 合併該關卡所有分組的假名
  return level.groups.reduce<KanaItem[]>((allItems, group) => {
    return [...allItems, ...group.items];
  }, []);
}

// 獲取所有可用的假名分組
export function getAllKanaGroups(): KanaGroup[] {
  return [
    hiraganaBasicVowels,
    hiraganaKGroup,
    hiraganaSGroup,
    hiraganaTGroup,
    hiraganaNGroup,
    hiraganaHGroup,
    hiraganaMGroup,
    hiraganaYGroup,
    hiraganaRGroup,
    hiraganaWNGroup,
    hiraganaGGroup,
    hiraganaZGroup,
    hiraganaDGroup,
    hiraganaBGroup,
    hiraganaPGroup,
    katakanaBasicVowels,
    katakanaKGroup,
    katakanaSGroup,
    katakanaTGroup,
    katakanaNGroup,
    katakanaHGroup,
    katakanaMGroup,
    katakanaYGroup,
    katakanaRGroup,
    katakanaWNGroup,
    katakanaGGroup,
    katakanaZGroup,
    katakanaDGroup,
    katakanaBGroup,
    katakanaPGroup,
  ];
}

// 默認匯出所有資料
const kanaData = {
  // 平假名
  hiraganaBasicVowels,
  hiraganaKGroup,
  hiraganaSGroup,
  hiraganaTGroup,
  hiraganaNGroup,
  hiraganaHGroup,
  hiraganaMGroup,
  hiraganaYGroup,
  hiraganaRGroup,
  hiraganaWNGroup,
  hiraganaGGroup,
  hiraganaZGroup,
  hiraganaDGroup,
  hiraganaBGroup,
  hiraganaPGroup,
  // 片假名
  katakanaBasicVowels,
  katakanaKGroup,
  katakanaSGroup,
  katakanaTGroup,
  katakanaNGroup,
  katakanaHGroup,
  katakanaMGroup,
  katakanaYGroup,
  katakanaRGroup,
  katakanaWNGroup,
  katakanaGGroup,
  katakanaZGroup,
  katakanaDGroup,
  katakanaBGroup,
  katakanaPGroup,
  // 遊戲關卡與輔助函數
  gameLevels,
  getKanaItemsFromLevel,
  getAllKanaGroups,
};

export default kanaData;