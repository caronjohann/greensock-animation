// using TweenMax to fade initial elements onto screen
TweenMax.from(".heading", 0.5, { y: 20, opacity: 0, delay: 0.5 });
TweenMax.from(".button", 0.5, { y: -20, opacity: 0, delay: 0.5 });
TweenMax.from(".banner", 0.5, { opacity: 0, height: 0 });

// using TweenMax to bounce square into view
TweenMax.from(".square", 1.5, {
  opacity: 0,
  scale: 0,
  ease: Elastic.easeOut,
  delay: 0.8
});

// using TweenMax to slide circle into view
TweenMax.from(".circle", 1.5, {
  opacity: 0,
  x: 50,
  ease: Elastic.easeOut,
  delay: 1.6
});
