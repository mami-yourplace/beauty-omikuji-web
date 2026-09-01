const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉"];

const daikichiMessages = [
    "今日は新しいケアやイメチェンをしてみましょう💇",
    "努力が実り、肌も髪も最高のコンディションに輝く日✨",
    "毎日の保湿が透明感につながってます🩵鏡を見てみて〜",
    "そろそろ秋色メイク、新しいカラーを検討してみては💄",
    "運動や食事管理が「楽しい」を感じられる日に😀",
    "鏡の前で自分の体を褒めてみて❓美ボディへの第一歩🚶‍♂️‍➡️",
    "今日は大好きなスイーツを、罪悪感ゼロで楽しんで🍰"
];

const chukichiMessages = [
    "今夜はスマホを置いて、極上の睡眠を🛌",
    "今日はプロの手のマッサージで、夏の疲れを取りましょう💆‍♀️",
    "腸内環境を整える発酵食品やオーガニック野菜を🥦",
    "大好きなアロマの香りに包まれて、ストレッチで癒しの時間を⌛️",
    "体を支えてくれている「足裏」「ふくらはぎ」の念入りケアを🦶",
    "秋の始まり、癒される場所に行く予定を立ててみませんか🗓️",
    "忙しくて、忘れてた週1ケアを今夜こそ🧴",
];

const shoukichiMessages = [
    "コンビニ「糖質オフ高級スイーツ」で自分へのご褒美を🍮",
    "今夜はいつもより長めに湯船に浸かり、体を芯から温めて♨️",
    "まだまだ紫外線対策は忘れないで🌞",
    "甘い物が無性に食べたくなったら、旬のフルーツを🌰",
    "筋トレ頑張りすぎて硬くなった体を、今日は念入りストレッチ🧘",
    "いつものダイエットメニューに飽きてきたら、器を変えてみては🍽️",
    "ネイルオイルを塗って、指先ピカピカにして、美意識再点火💅",
];

const kichiMessages = [
    "姿勢を整えると、雰囲気が一気に変わる❗️",
    "食事制限が退屈になってきたかも...スパイスやハーブを取り入れて🌿",
    "新発売の香水を試してみて、モチベーションアップになるかも⤴️",
    "歯を白くする。笑顔が武器になる🦷",
    "いつも自分を写す鏡を磨いてみませんか🪞",
    "寝室の環境を見直してみませんか❓枕の高さや照明を変えてみて💡",
    "そろそろ体の中から温かくなる食べ物を🍲",
];

const suekitiMessages = [
    "じっくり、しっかり保湿して、秋の乾燥対策を💧",
    "何となく口寂しい日は、具沢山のスープでお腹も心も満たして🍲",
    "表情筋を動かしましょう、無表情は損😔",
    "お部屋をリフレッシュ✨一輪だけでも好きなお花を飾ってみては🌷",
    "髪に極上のトリートメント、ツヤは品になる💇‍♀️",
    "湯船にお気に入りのアロマオイルを1滴、リラックスしましょう😌",
    "寝る前に「今日も私えらい」と言いましょう🛏️明日からも頑張るぞ💪",
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

