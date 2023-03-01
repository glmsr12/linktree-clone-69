const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

// This function prevents share buttons going to the websites
async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    // show alert when click the share button
    alert('Copied the text : ' + link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener('click', copyText)
);
