(() => {
  const controlVideoQuality = () => {
    if (!location.pathname.startsWith("/watch")) {
      return;
    }
    const quality =
      (window.localStorage.getItem("quality") as youtube.VideoQuality) ||
      ("auto" as youtube.VideoQuality);
    // video element on youtube has id movie_player
    const videoPlayer = window.document.getElementById(
      "movie_player"
    ) as unknown as youtube.Player;

    const availableQualityLevels = videoPlayer.getAvailableQualityLevels();

    availableQualityLevels.includes(quality)
      ? // Setting playback quality range between the same value forces it to that value.
        videoPlayer.setPlaybackQualityRange(quality, quality)
      : videoPlayer.setPlaybackQualityRange(
          // Highest available quality is located at index 0
          availableQualityLevels[0],
          availableQualityLevels[0]
        );
    console.log(availableQualityLevels);
  };
  window.addEventListener("yt-navigate-finish", controlVideoQuality, false);
  // see content.ts for qualityChanged event.
  window.addEventListener("qualityChanged", controlVideoQuality);
})();
