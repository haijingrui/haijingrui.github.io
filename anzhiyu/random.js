var posts=["posts/df31.html","posts/ec81.html","posts/d7be.html","posts/ab5b.html","posts/78ed.html","posts/fb4c.html","posts/970f.html","posts/337a.html","posts/ba7e.html","posts/2d63.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };