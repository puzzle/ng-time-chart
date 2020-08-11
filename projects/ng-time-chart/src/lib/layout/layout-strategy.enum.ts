export enum LayoutStrategy {
  /**
   * Stack items one on top of the other
   */
  Stacked = 0,
  /**
   * Try to tile items if their start and end dates do not overlap
   */
  Tiled = 1
}
