const contentEl = document.getElementById('content');
const btnEl = document.getElementById('btn');

const contentList = [
  {
    title: '🕊 小鳥的故事',
    text: `
    很久很久以前，
    有一隻非常喜歡唱歌的小鳥，
    每天都會在森林中自由自在地飛翔，
    它美妙的聲音讓整個森林充滿了生氣和活力。

    有一天，
    小鳥發現自己的聲音似乎越來越少被聽到，
    似乎其他動物對它的歌聲漸漸失去了興趣。
    它感到沮喪，
    小鳥思考自己的聲音到底出了什麼問題。`
  },
  {
    title: '🕊 小鳥的故事', text: `
    小鳥仔細地觀察周圍的動物，
    發現彼此之間的溝通方式都不一樣，
    每個動物都有自己的習慣和經歷。
    小鳥覺得這讓傳達之間就像是填補一個缺少資訊的畫面，
    只有當所有的信息都被補全後，
    才能夠真正地理解彼此。` },
  {
    title: '🕊 小鳥的故事', text: `
    小鳥繼續歌唱，
    希望能夠找到一種傳達的方式，
    讓它的歌聲被理解和欣賞。
    
    但是傳達之間的空隙仍然存在，
    它仍然無法完美地傳達自己的意識所趨。
    它擔心自己已經錯過美好的事情了，
    一生中可能只有一次的機會，
    而它可能不知道自己已經錯過了。
    這讓小鳥感到孤單和被遺忘，，也讓它更加努力。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    樹下一隻熊也正在為自己努力找到一個安全的洞穴，
    它走遍了整個森林，仔細地搜尋每個可能的地方，
    以確保自己能夠安全地度過冬天。

    小鳥這時浮現了一個念頭：
    它無法完美地傳達自己的意識所趨，
    隨著時間的變化，
    其他動物對於歌聲的聆聽方式也在逐漸改變，
    信息也許永遠都無法補全，
    傳達之間的空隙始終存在。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    仍然會歌唱的小鳥熟悉了絕望，
    最終它仍然無法完全地融入森林的生活，
    它覺得自己已經被遺忘，
    習慣孤獨地徘徊在森林的邊緣。

    最後的歌聲在森林中回響，
    小鳥一直在努力，
    不了解如何真正地理解彼此，
    始終無法理解自己的歌聲所代表的意義，
    不理解自己為什麼要花那麼多時間去思考傳達的方式。` 
  },
  {
    title: '🕊 小鳥的故事', text: `
    在這段旅程中，
    小鳥的歌聲充滿著困惑，
    但它的歌聲仍成為森林中一道永恆的風景，
    所有動物都感受到了和諧的存在，
    也讓森林擁有它的完整。

    小鳥的歌聲漸漸消逝，
    最終在森林與新的記憶中消失無蹤。
    整個森林要如何因為小鳥的離去而有所改變，
    這一生帶給森林的完整是誰都沒有理解的意義。` 
  },
];

let currentIndex = 0;

function renderContent() {
  const currentContent = contentList[currentIndex];
  document.getElementById('title').textContent = currentContent.title;
  document.getElementById('currentIndex-container').textContent = `${currentIndex + 1}`;

  // Fade out the current content before fading in the new content
  contentEl.style.opacity = 0;

  // Wait for the fade out animation to finish before updating the text content
  setTimeout(() => {
    document.getElementById('text').textContent = currentContent.text;
    
    // Fade in the new content
    contentEl.style.opacity = 1;
  }, 500);
}



renderContent();

btnEl.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contentList.length;
  renderContent();
});
