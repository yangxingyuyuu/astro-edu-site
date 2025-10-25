const langBtn = document.getElementById('lang-btn');
let currentLang = 'zh'; // 默认中文

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';

  // 遍历所有带 data-zh 的元素
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.textContent = currentLang === 'zh' ? el.dataset.zh : el.dataset.en;
  });

  // 切换按钮显示文字
  langBtn.textContent = currentLang === 'zh' ? 'EN' : '中';
});
