(function() {
  const container = document.querySelector('.weibo-container');
  if (!container) return;

  // 判断线上/本地环境
  const isOnline = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  // 模拟微博热搜数据（本地开发用）
  const mockWeiboList = [
    { title: '某明星官宣结婚', hot: 458632 },
    { title: '高考成绩查询时间公布', hot: 421106 },
    { title: '新能源汽车补贴新政出台', hot: 315866 },
    { title: '夏季养生小常识', hot: 275989 },
    { title: '世界杯预选赛赛程公布', hot: 216500 }
  ];

  // 渲染数据的通用函数
  function renderWeiboList(list) {
    let html = '<div class="weibo-list">';
    list.forEach((item, index) => {
      html += `
        <div class="weibo-list-item">
          <span class="weibo-hotness">${index + 1}</span>
          <a href="https://s.weibo.com/weibo?q=${encodeURIComponent(item.title)}" target="_blank" class="weibo-title">${item.title}</a>
          <span class="weibo-count">${item.hot}</span>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // 线上环境：请求真实微博热搜API
  if (isOnline) {
    // 国内稳定的微博热搜API
    const apiUrl = 'http://api.btstu.cn/weibo/api.php?format=json';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error('API请求失败');
        return response.json();
      })
      .then(data => {
        if (data.list && data.list.length) {
          renderWeiboList(data.list);
        } else {
          renderWeiboList(mockWeiboList); // API无数据时降级显示模拟数据
        }
      })
      .catch(() => {
        renderWeiboList(mockWeiboList); // 请求失败时降级显示模拟数据
      });
  } else {
    // 本地环境：直接渲染模拟数据
    renderWeiboList(mockWeiboList);
  }
})();