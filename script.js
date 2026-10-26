const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉"];

const daikichiMessages = [
    "乾燥しやすい秋の肌、いつもより高保湿なアイテムで丁寧にケア💧",
    "乾燥しがちな髪と頭皮のために、頭皮の保湿エッセンスもプラス💇‍♀️",
    "一度は行ってみよう🩵プロによるメイクレッスン🌡️",
    "秋色メイク、新しいカラーを検討してみましょう💄",
    "耳をマッサージしてみて❓自律神経を整える一つの手段🦻",
    "デスクワークの合間に肩を大きく回し、コリをこまめに解消しよう🧘‍♂️",
    "今日は贅沢なデパ地下スイーツを、罪悪感ゼロで楽しんで🍰",
];

const chukichiMessages = [
    "寝る前のスマホは控えめに。心身を深くリラックスさせましょう📱",
    "今日はプロの手のマッサージで、全身の疲れを取りませんか❓",
    "夏の疲れが出やすい季節。無理せずこまめな休息を心がけて🛌",
    "大好きなアロマの香りに包まれて、ストレッチで癒しの時間を⌛️",
    "日常の中に軽い運動を取り入れて、健やかな心身をキープ🚶",
    "朝晩の冷え込みに備えて、首元を温めるアイテムを取り入れて☺️",
    "一年中紫外線対策しているあなた🫵最強で、最高🌟",
];

const shoukichiMessages = [
    "カロリーを気にせず、大好きなスイーツを心ゆくまで堪能してみて🍮",
    "今夜はいつもより長めに湯船に浸かり、体を芯から温めて♨️",
    "お風呂上がりは水分が蒸発しやすい💨数分以内の素早い保湿を❗️",
    "クレンジングは肌をこすらないよう丁寧に。一日の汚れをしっかりオフ🧴",
    "気温低下で巡りが滞る秋は、ゆっくり湯船に浸かって巡りをよくしよう🛁",
    "発酵食品や食物繊維を毎日の食事にたっぷり取り入れて🥦",
    "ネイルオイルを塗って、指先からおしゃれを楽しんで💅",
];

const kichiMessages = [
    "正しい姿勢を意識するだけで、インナーマッスルが鍛えられスタイルスッキリ✨",
    "旬の根菜や秋の味覚を食卓に取り入れ、体の芯から温まるヘルシーな食事を🍲",
    "スキンケアは贅沢なご褒美マスクで、至福の潤い時間を満喫して💆",
    "歯を白くする。その笑顔が武器になる🦷",
    "コップ一杯の水から一日の代謝をスタート❗️体内の巡りをスムーズに。",
    "睡眠負債はホルモンにも影響が...良質な睡眠が取れる環境を💤",
    "タンパク質、ビタミン、ミネラルをバランスよく。内側から美を育もう🥗",
];

const suekitiMessages = [
    "読みたかった本を片手に、一日中パジャマのままでゴロゴロ休日も素敵📖",
    "夕食の支度はお休みしてデリバリーにして、ノンビリ過ごす夜もアリ🚚",
    "表情筋を動かしましょう、無表情は損😔",
    "たまには夜更かしして、お気に入りの映画やドラマ鑑賞でリラックス📺",
    "髪に極上のトリートメント、ツヤは品になる💇‍♀️",
    "朝はアラームをかけず、目覚めるまで心ゆくまで睡眠を楽しみましょう⏰",
    "季節の変わり目のゆらぎ肌には、シンプルで優しいスキンケアを✨",
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

