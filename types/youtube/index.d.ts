declare namespace youtube {
  export type VideoQuality =
    | VideoQualityAuto
    | VideoQuality144p
    | VideoQuality240p
    | VideoQuality360p
    | VideoQuality480p
    | VideoQualityHD720
    | VideoQualityHD1080
    | VideoQualityHD1440
    | VideoQuality4K2160;

  /**
   * Automatic video quality chosen by YouTube.
   */
  export type VideoQualityAuto = "auto";

  /**
   * 144p video quality
   */
  export type VideoQualityTiny = "tiny";

  /**
   * 240p video quality
   */
  export type VideoQualitySmall = "small";

  /**
   * 360p video quality.
   */
  export type VideoQualityMedium = "medium";

  /**
   * 480p video quality.
   */
  export type VideoQualityLarge = "large";

  /**
   * 720p video quality.
   */
  export type VideoQualityHD720 = "hd720";

  /**
   * 1080p video quality.
   */
  export type VideoQualityHD1080 = "hd1080";

  /**
   * 1440p video quality.
   */
  export type VideoQualityHD1440 = "hd1440";

  /**
   * 2160p video quality.
   */
  export type VideoQuality4K2160 = "hd2160";

  export class Player {
    /**
     * @returns Quality formats in which the current video is available.
     */
    getAvailableQualityLevels(): SuggestedVideoQuality[];

    /**
     * Sets the suggested video quality range for the current video.
     *
     * @param low  from.
     * @param high to.
     */
    setPlaybackQualityRange(
      low: SuggestedVideoQuality,
      high: SuggestedVideoQuality
    ): void;
  }
}
