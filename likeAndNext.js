// likeAndNext.js

async function likeAndNext100Times() {
    for (let i = 0; i < 100; i++) {
      // Click the like button
      const likeButton = document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--segmented-start');
      if (likeButton) {
        likeButton.click();
      } else {
        console.log('Like button not found.');
        break;
      }
  
      // Wait for a moment before moving to the next video
      await delayFor(2000); // Adjust the delay time to your liking
  
      // Go to the next video
      const nextButton = document.querySelector('.ytp-next-button.ytp-button');
      if (nextButton) {
        nextButton.click();
      } else {
        console.log('Next button not found.');
        break;
      }
  
      // Wait for a moment before the next iteration
      await delayFor(1000); // Adjust the delay time to your liking
    }
  }
  
  function delayFor(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  likeAndNext100Times();
  