const omikuji = ["大吉", "中吉", "小吉", "吉", "末吉"];

const daikichiMessages = [
    "化粧水は手のひらでなじませて、優しくハンドプレスして浸透させましょう🤲",
    "鏡を見て「今日もいい感じ💓」と思えたら、それだけで大吉⭐️",
    "朝は一杯の白湯で、眠っていた体を優しく目覚めさせましょう🍵",
    "乾燥する季節は、こまめな水分補給で喉をいたわって🫗",
    "熱いお湯での洗顔は必要な皮脂まで奪うので、ぬるめのお湯で洗顔を💦",
    "根菜類や生姜、ネギなど体を温める旬の食材を積極的に取り入れて🍲",
    "今日は美容をお休みしても大丈夫❗️昨日までの自分に感謝して、のんびりしよう☕️",
    "今日は何を食べてもおいしい日😀カロリー計算は明日の自分にお任せ🍦"
];

const chukichiMessages = [
    "甘いものが食べたい❓たまにはいいじゃない😊おいしく食べたら満足🍰",
    "首・手首・足首「3つの首」は冷えやすいから、しっかり防寒で寒さ対策を👆",
    "ハンドクリームは指先や爪の周りまで丁寧に塗り込んで、ささくれ防止して💅",
    "シャワーだけにせず、心地よい温度、無理のない時間湯船に浸かって芯から温まろう🛀",
    "肌のターンオーバーを促すには、自分に合った睡眠時間を大切に🛌",
    "顔色がくすみがちな日には、蒸しタオルでお顔を温めてからのスキンケアを🧴",
    "一年中紫外線対策しているあなた🫵最強で、最高🌟",
    "予定通りにいかなくても大丈夫。予定を立て直すのも立派な予定📅"
];

const shoukichiMessages = [
    "頭皮の乾燥はフケや抜け毛の原因。頭皮用ローションも使ってみて🧴",
    "週に一度はシートマスクやクリームパックで、スペシャル保湿ケアを💆",
    "寒さで肩がすくみやすい季節😨こまめに肩甲骨を動かして肩周りをほぐしてね☺️",
    "温かい飲み物を選ぶときは、カフェインの少ないハーブティーや番茶がおすすめ🫖",
    "高級美容液もいいけれど、今日はたっぷり眠ることに投資してみよう💤",
    "笑顔になることを一つ見つけてみよう、心も体も温まる❤️",
    "良質なタンパク質とビタミンA・C・Eを摂って、内側から輝く肌を作ろう✨",
    "鏡を見て自分に一言「悪くないじゃん💕」これで美容運アップ☝️"
];

const kichiMessages = [
    "静電気は髪のキューティクルを傷める原因。ヘアオイルでしっかり保護して💇‍♀️",
    "乾燥による小じわ対策には、美容液、クリームを目元・口元に重ね塗りして🫙",
    "腸内環境を整える発酵食品を毎日取り入れて、寒さに負けない免疫力をつけよう🧀",
    "摩擦は乾燥肌の大敵❗️タオルで顔を拭くときは、優しくポンポンと☺️",
    "寒い日こそ軽いストレッチやウォーキングで、筋肉を動かして温まろう🚶‍♂️‍➡️",
    "美容も大事だけど、好きなことを楽しむ時間も忘れずに🎵",
    "腹巻を活用してお腹周りを温めて、内臓の働きを助けてあげましょう💓",
    "今日のラッキーアイテムはクッション。座ったついでにゴロゴロしちゃえ🛋️"
];

const suekitiMessages = [
    "朝日を浴びて体内時計をリセットすると、夜の睡眠の質がグッと高まるよ🛌",
    "暖房の風が直接当たらないように、エアコンの風向きも注意して🌬️",
    "寝る1時間前にはスマホを置いて📱脳と目をリラックスさせて深い眠りへ💤",
    "外出時はマフラーや手袋を活用し、冷たい外気から体を守ろう🧣",
    "帰宅後の手洗い、うがいは基本の「キ」指の間や手首まで丁寧に洗おう🤲",
    "ストレスは自律神経を乱しがち😖深呼吸で心を落ち着けて🌿",
    "三日坊主でも大丈夫🙆また、四日目から始めればいいんです🌱",
    "やる気が出ない❓本日充電中ということで🪫"
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

