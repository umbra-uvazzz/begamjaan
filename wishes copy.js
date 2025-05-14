const wishes = [
`My love, how’s the royal throne today? Still ruling my heart like a tyrant? 👑❤️`,

`Begum Jaan, should I send your daily dose of attention or are you still mad at your darling? 😌📦`,

`How’s my favorite brat doing today? Still cute? Still dangerous? 😈💕`,

`Happy Birthday, sohneyoooo! Don’t worry, I’ve already alerted the world that royalty was born today. 👑🎉`,

`Another year older, but don’t worry - you’ll always be my favorite little drama queen. 🎭💕`,

`Love, your birthday is the only day I’ll admit - life would be boring without you. 🥹🎊`,

`My Darling Begum Jaan, Queen of Chaos, Ruler of Hearts, CEO of Stubbornness, and the Only One Who Makes My World Spin Without Trying. 💋👑💫`,

`Happy Birthday, My Love, My Darling, My Begum Jaan 💋👑

Today’s not just any day - it’s the day the universe got a little more dangerous… because you were born. And ever since, hearts haven’t been safe. Especially mine.

You walk around like a storm wrapped in sunshine - soft eyes, killer smile, and that attitude that makes me want to both fight you and write poetry about you. It’s infuriatingly attractive. And I swear, you’re the only person who can make me smile just by rolling your eyes at me.

On your birthday, I should be giving you the world - but somehow, you’ve already become mine. You’re the chaos I never knew I needed, the peace I never expected, and the reason I randomly smile like a fool.

So today, I raise a toast -
To your laugh that melts my stubbornness,
To your eyes that make the stars jealous,
And to you… the only person I’d ever call Begum Jaan and actually mean it.

Now be ready - your darling plans to annoy you even more this year. But with extra love. And maybe a kiss or two if you don’t look away this time. 😘

Yours - always teasing, always adoring.`,

`Happy Birthday, My Love -
Meri Jaan,  Habibti,  Mi Amor,  Mon Amour,  Amore Mio,  Meine Liebe,  Itoshii Hito,  Nae Sarang,  Zemra Ime,  Sevgilim,  Moya Lyubov’,  Wǒ de Ài,  Meu Amor,  Agápi Mou,  Mpenzi Wangu,  Eshgham,  Iubirea Mea,  Aşkım,  Ahovati,  Cintaku,  Szerelmem,  Rakkaani,  Min Elskede,  Tình Yêu Của Anh,  Mahal Ko,  Moja Ljubavi,  Moja Láska,  Mijn Liefje,  Meri Mohabbat,  Amar Bhalobasha,  Majha Prem,  Maari Mohabbat,  Mage Adarei,  Mero Maya,  Nanna Prītiyavaru,  Ente Snehām,  En Kaadhali,  Nā Prema,  Minii Khair,  Mana Mīlestība,  Moje Kochanie,  Tîi-rák Khǎng Chǎn,  Anh yêu em,  Min Älskling,  Ahovi,  Cinta Saya,  Mohabbatimsan...

You are the Begum Jaan of all languages, the empress of every heart, the global queen of chaos and cuteness.
If every word for “my love” had a heartbeat, they'd all beat for you. 💘`,

`Hamne to pada tha aapki akhiyon ko
tarash aapne hamara ye dil jo
fir puchne lage, "aap kahan kho gaye ho"
ham zawab denge, "ushi jannah mein,
jo aapne dikhayi thi.
khwabon mein,
jahan sirf aap ho, mohabbat ho, aapka pyaar ho,
aur ham vo bepannah jo,
khoye aapki chahat mein.
aapki mojudgi hame rahat de,
aapke pyaar me aap kahein to duniya jeet lein,
ye bhi koi baat h, aap kahein to khud ko bhi kurban kar dein`,

`I love you pooks. 💕`
  ];
  
  const columns = [col1, col2, col3, col4]; // Assuming col1, col2, col3, col4 are already defined in your HTML
  
  wishes.forEach((wish, i) => {
    const div = document.createElement("div");
    div.className = "wish";
    div.innerText = wish;
  
    // Click-to-expand
    div.addEventListener("click", () => expandWish(div));
  
    columns[i % 4].appendChild(div);
  });
  
  function expandWish(elem) {
    // Remove any already expanded wishes
    const existing = document.getElementById("expandedWish");
    if (existing) existing.remove();
  
    // Clone and expand
    const clone = elem.cloneNode(true);
    clone.className = "wish expanded";
    clone.id = "expandedWish";
    document.body.appendChild(clone);
  }
  
  // Close expanded wish on outside click
  document.addEventListener("click", (e) => {
    const expanded = document.getElementById("expandedWish");
    if (
      expanded &&
      !expanded.contains(e.target) &&
      !e.target.classList.contains("wish")
    ) {
      expanded.remove();
    }
  });
  