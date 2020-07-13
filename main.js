const shareTabOpen = document.querySelector('.information');
const shareTabClosed = document.querySelector('.share-items');



shareTabOpen.addEventListener('click', function () {
  shareTabClosed.style.display = 'flex';
  shareTabOpen.style.display = 'none';
});

shareTabClosed.addEventListener('click', function () {
  shareTabClosed.style.display = 'none';
  shareTabOpen.style.display = 'flex';
});
