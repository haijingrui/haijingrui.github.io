var posts=["posts/ec81.html","posts/d1d.html","posts/d7be.html","posts/a07c.html","posts/b26f.html","posts/ab5b.html","posts/fb4c.html","posts/78ed.html","posts/cf95.html","posts/df31.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };