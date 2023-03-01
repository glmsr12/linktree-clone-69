const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

// This function prevents share buttons going to the websites
function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');
  console.log(link);
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener('click', copyText)
);
