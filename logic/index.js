const boxes = document.querySelectorAll('.box');
    let images = [
      './images/img-1.JPG',
      './images/img-2.JPG',
      './images/img-3.JPG',
      './images/img-4.JPG',
      './images/img-5.JPG',
      './images/img-6.JPG',
      './images/img-7.JPG',
      './images/img-8.JPG',
      // Add more image paths as needed
    ];
    const interval = 3000; // Change image every 3 seconds

    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      images.splice(randomIndex, 1); // Remove selected image from the array
      return selectedImage;
    }

    function fadeOutImage(box) {
      box.style.transition = 'opacity .3s'; // Set the transition property for the fading effect
      box.style.opacity = '0.7'; // Fade out the box
    }

    function fadeInImage(box, newImage) {
      box.style.transition = 'opacity .3s'; // Set the transition property for the fading effect
      box.style.backgroundImage = `url(${newImage})`;
      box.style.opacity = '1'; // Fade in the new image
    }

    function changeBackgroundImage(box) {
      const newImage = getRandomImage();
      fadeOutImage(box);
      setTimeout(() => {
        fadeInImage(box, newImage);
      }, Math.random() * 2000 + 1000); // Random delay between 1s and 3s for each box
    }

    function rotateBackgroundImages() {
      boxes.forEach((box) => {
        setInterval(() => {
          if (images.length === 0) {
            // Reset the images array if all images have been used
            images = [
              './images/img-1.JPG',
              './images/img-2.JPG',
              './images/img-3.JPG',
              './images/img-4.JPG',
              './images/img-5.JPG',
              './images/img-6.JPG',
              './images/img-7.JPG',
              './images/img-8.JPG',
              // Add more image paths as needed
            ];
          }
          changeBackgroundImage(box);
        }, interval);
      });
    }

    rotateBackgroundImages();