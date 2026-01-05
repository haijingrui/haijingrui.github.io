(function() {
  const container = document.querySelector('.zhihu-container');
  if (!container) return;

  // 判断是否为线上环境（根据域名识别，可自行修改）
  const isOnline = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
  
  // 模拟热榜数据（本地开发用）
  const mockHotList = [
    { title: '为什么现在的年轻人越来越不愿意加班了？', hot: 623.5 },
    { title: '如何评价2025年的科技行业发展趋势？', hot: 489.2 },
    { title: '普通人如何通过理财实现财富增值？', hot: 356.8 },
    { title: '人工智能会取代哪些职业？', hot: 298.1 },
    { title: '长期坚持运动对身体的改变有多大？', hot: 215.7 }
  ];

  // 渲染数据的通用函数
  function renderHotList(list) {
    let html = '<div class="zhihu-list">';
    list.forEach((item, index) => {
      html += `
        <div class="zhihu-list-item">
          <span class="zhihu-hotness">${index + 1}</span>
          <a href="${item.url || 'https://www.zhihu.com'}" target="_blank" class="zhihu-title">${item.title}</a>
          <span class="zhihu-count">${item.hot}万</span>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // 线上环境：请求真实API
  if (isOnline) {
    const apiUrl = 'http://api.btstu.cn/zhihu/api.php?format=json';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error('API请求失败');
        return response.json();
      })
      .then(data => {
        if (data.list && data.list.length) {
          renderHotList(data.list);
        } else {
          renderHotList(mockHotList); // API无数据时降级显示模拟数据
        }
      })
      .catch(() => {
        renderHotList(mockHotList); // 请求失败时降级显示模拟数据
      });
  } else {
    // 本地环境：直接渲染模拟数据
    renderHotList(mockHotList);
  }
})();