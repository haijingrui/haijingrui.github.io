var posts=["posts/df31.html","posts/ec81.html","posts/d7be.html","posts/78ed.html","posts/fb4c.html","posts/ab5b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };