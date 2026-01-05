// 替换为稳定的IP查询API（原API可能失效）
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const location = data.region_name ? `${data.country_name}${data.region_name}${data.city}` : '未知地区';
    const ip = data.ip || '未知IP';
    const html = `
      <div class="visitor">欢迎来自 <span class="visitor-location" style="color: #dc4444; font-weight: bold;">${location}</span> 的小伙伴！</div>
      <div class="visitor-ip">访问IP：<span style="color: #666;">${ip}</span></div>
    `;
    document.getElementById('visitor-container').innerHTML = html;
  })
  .catch(error => {
    document.getElementById('visitor-container').innerHTML = '<div class="visitor">获取访客信息失败</div>';
    console.error('访客API请求失败：', error);
  });