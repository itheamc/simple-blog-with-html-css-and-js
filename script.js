const nav_bar = document.getElementById("blog-nav-div");

let nav_bar_topOffset = nav_bar.offsetTop;

window.onscroll = () => {
    console.log(nav_bar_topOffset);
    if (window.pageYOffset >= nav_bar_topOffset) {
        nav_bar.classList.remove("blog-nav-div");
        nav_bar.classList.add("fixed-nav-bar");
      } else {
        nav_bar.classList.remove("fixed-nav-bar");
        nav_bar.classList.add("blog-nav-div");
      }
}
