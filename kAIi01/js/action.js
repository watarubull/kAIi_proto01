
$(".kaii-obj .walk").on("click",function(){
  $(this).next().fadeToggle(200);
});

$(".close").on("click",function(){
  $(".kaii-info").fadeToggle(200);
});

$(".add-btn,.close-btn").on("click",function(){
  $(".post-area").toggleClass("open");
});

function postEpisode(){
  $(".result-post-area").fadeIn(400);
}

$(".result-post-area").on("click",function(){
  $(".result-post-area").fadeOut(400);
  $(".post-area").toggleClass("open");
  $(".kaii-obj").fadeIn(200);
});