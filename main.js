const shareTabOpen = document.querySelector('.information');
const shareTabClosed = document.querySelector('.share-items');

const desktopShare = document.querySelector('.desktop-share');
const shareIcon = document.querySelector('.share');
const closeIcon = document.querySelector('.share-closed');




shareTabOpen.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    shareTabOpen.style.display = 'none';
    shareTabClosed.style.display = 'flex';
  }
});

shareTabClosed.addEventListener('click', function () {
  if (window.innerWidth < 768) {
    shareTabClosed.style.display = 'none';
    shareTabOpen.style.display = 'flex';
  }
});



shareIcon.addEventListener('click', function (e) {
  //esktopShare.style.display = 'flex';
  if (e.target.classList.contains('share-icon')) {
    console.log('anchor')
  }


});
