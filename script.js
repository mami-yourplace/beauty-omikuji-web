const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉"];

const daikichiMessages = [
    "今日は新しいケアやイメチェンにトライしてみましょう💇",
    "努力が実り、肌も髪も最高のコンディションに輝く日✨",
    "毎日の保湿が透明感につながってます🩵鏡を見てみて〜",
    "秋色メイク、新しいカラーを検討してみましょう💄",
    "朝に体内時計を整えて、今日一日を元気に過ごしましょう⏰",
    "小さな体の変化を褒めてみて❓その変化が美ボディへの第一歩🚶‍♂️‍➡️",
    "今日はデパ地下高級スイーツを、罪悪感ゼロで楽しんで🍰"
];

const chukichiMessages = [
    "今夜はスマホを早めに置いて、極上の睡眠対策を🛌",
    "今日はプロの手のマッサージで、全身の疲れを取りませんか❓",
    "腸内環境を整える発酵食品や食物繊維を意識して🥦",
    "大好きなアロマの香りに包まれて、ストレッチで癒しの時間を⌛️",
    "体を支えてくれている「足裏」「ふくらはぎ」の念入りケアを🦶",
    "多雨疲労解消には、規則正しい生活習慣が一番。長雨に負けるな〜☔️",
    "忙しくて、できなかった週1ケアを今夜こそ🧴",
];

const shoukichiMessages = [
    "コンビニ「糖質オフ高級スイーツ」で自分へのご褒美を🍮",
    "今夜はいつもより長めに湯船に浸かり、体を芯から温めて♨️",
    "猛暑疲れの体を休めて、明日から元気に過ごしましょう😃",
    "甘い物が無性に食べたくなったら、旬のフルーツを🌰",
    "スポーツの秋、まずはストレッチで動かせる体づくりから🧘",
    "いつものダイエットメニューに飽きてきたら、器を変えてみては🍽️",
    "ネイルオイルを塗って、指先からおしゃれを楽しんで💅",
];

const kichiMessages = [
    "姿勢を整えると、雰囲気が一気に変わる❗️",
    "バラエティのある食事、まずは色合いを意識して🍱",
    "深みのあるウッディやスモーキーな香水で、秋を楽しんで🧴",
    "歯を白くする。笑顔が武器になる🦷",
    "いつも自分を写す鏡をピカピカに磨きましょう🪞",
    "睡眠負債はホルモンにも影響が...寝室の環境を見直してみませんか❓💡",
    "そろそろ体の中から温かくなるメニューを考えてみましょう🍲",
];

const suekitiMessages = [
    "じっくり、しっかり保湿して、これからの季節の乾燥対策を💧",
    "何となく口寂しい日は、具沢山のスープでお腹も心も満たして🍲",
    "表情筋を動かしましょう、無表情は損😔",
    "お部屋に小さめでおしゃれな照明を取り入れて雰囲気を変えてみて💡",
    "髪に極上のトリートメント、ツヤは品になる💇‍♀️",
    "湯船にお気に入りの入浴剤を入れて、リラックスしましょう🛀",
    "「私は最強！」明日からも頑張るぞ💪",
];

const button = document.getElementById("omikujiButton");

button.addEventListener("click", function() {
    const result = omikuji[Math.floor(Math.random() * omikuji.length)];

    document.getElementById("result").textContent = result;

    if (result === "大吉") {
        const message = daikichiMessages[Math.floor(Math.random() * daikichiMessages.length)];
        document.getElementById("message").textContent = message;
    }

    else if (result === "中吉") {
        const message = chukichiMessages[Math.floor(Math.random() * chukichiMessages.length)];
        document.getElementById("message").textContent = message;   
    }

    else if (result === "小吉") {
        const message = shoukichiMessages[Math.floor(Math.random() * shoukichiMessages.length)];
        document.getElementById("message").textContent = message;
    }

    else if (result === "吉") {
        const message = kichiMessages[Math.floor(Math.random() * kichiMessages.length)];
        document.getElementById("message").textContent = message;    
    }

    else {
        const message = suekitiMessages[Math.floor(Math.random() * suekitiMessages.length)];
        document.getElementById("message").textContent = message;
    }




});

