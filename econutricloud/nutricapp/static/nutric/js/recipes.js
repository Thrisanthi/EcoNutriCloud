document.querySelectorAll(".video-card video").forEach(video => {
      video.addEventListener("mouseenter", () => video.play());
      video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // reset to start
      });

      // For mobile (touch)
      video.addEventListener("touchstart", () => video.play());
      video.addEventListener("touchend", () => {
        video.pause();
        video.currentTime = 0;
      });
    });