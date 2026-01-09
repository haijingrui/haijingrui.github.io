var posts=["posts/df31.html","posts/ec81.html","posts/d7be.html","posts/337a.html","posts/2d63.html","posts/78ed.html","posts/970f.html","posts/ab5b.html","posts/ba7e.html","posts/fb4c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };