var siteNavigation = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.site-navigation__toggle');

siteNavigation.classList.remove('site-navigation--nojs');

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (siteNavigation.classList.contains('site-navigation--closed')) {
    siteNavigation.classList.remove('site-navigation--closed');
    siteNavigation.classList.add('site-navigation--opened');
  } else {
    siteNavigation.classList.add('site-navigation--closed');
    siteNavigation.classList.remove('site-navigation--opened');
  }
});
