const wishes = [
    `Happy Birthday! 🎉
  Wishing you a day full of love, laughter, and joy.
  May your dreams come true and your smile never fade.`,
  
    `You're one of a kind!
  Hope your birthday is as unforgettable as you are.
  Here's to another year of wonderful memories.`,
  
    `Happy Birthday to someone special!
  Let the cake be sweet and your heart even sweeter.
  Celebrate like there's no tomorrow.`,
  
    `You light up the lives of everyone around you.
  Wishing you a birthday full of blessings and surprises.
  Stay awesome!`,
  
    `Another year older, another year bolder!
  Keep chasing your dreams and spreading happiness.
  Have an epic birthday.`,
  
    `On your special day, may all the stars align.
  Hope today marks the beginning of a great new chapter.
  Happy Birthday!`,
  
    `May your smile shine brighter than candles today.
  Wishing you hugs, happiness, and heaps of cake!
  Cheers to your journey.`,
  
    `Celebrate yourself today — you deserve it.
  Thanks for being such a wonderful presence in this world.
  Happy Birthday!`,
  
    `To the birthday legend:
  You make every moment magical and memorable.
  Here's to you and everything you are.`,
  
    `Let this year be the one where all your wishes come true.
  You're not aging, you're leveling up!
  Have an amazing birthday.`,
  
    `You're like a fine wine — better with time.
  Celebrate with style, laughter, and love.
  Happy Birthday! 🥳`
  ];
  
  const columns = [col1, col2, col3, col4];
  
  wishes.forEach((wish, i) => {
    const div = document.createElement("div");
    div.className = "wish";
    div.innerText = wish;
  
    div.addEventListener("mouseenter", () => expandWish(div));
    div.addEventListener("mouseleave", collapseWish);
  
    columns[i % 4].appendChild(div);
  });
  
  function expandWish(elem) {
    const clone = elem.cloneNode(true);
    clone.className = "wish expanded";
    clone.id = "expandedWish";
    document.body.appendChild(clone);
  }
  
  function collapseWish() {
    const expanded = document.getElementById("expandedWish");
    if (expanded) expanded.remove();
  }
  