export class Log {
  /**
   * Logs a success message in the console.
   * @param {string} msg - The message to be logged
   *
   * @example
   * // Example usage
   * Log.success("Operation Successful")
   */
  static success(msg: string) {
    console.log(`%c${msg}`, "color: green");
  }

  /**
   * Logs a danger message in the console.
   * @param {string} msg - The message to be logged
   *
   * @example
   * // Example usage
   * Log.danger("Danger!!!")
   */
  static danger(msg: string) {
    console.log(`%c${msg}`, "color: red");
  }

  /**
   * Logs a success message in the console.
   * @param {string} msg - The message to be logged
   *
   * @example
   * // Example usage
   * Log.info("Some info")
   */
  static info(msg: string) {
    console.log(`%c${msg}`, "color: #40d3dc");
  }

  /**
   * Logs a success message in the console.
   * @param {string} msg - The message to be logged
   *
   * @example
   * // Example usage
   * Log.warning("Some warning")
   */
  static warning(msg: string) {
    console.log(`%c${msg}`, "color: yellow");
  }

  /**
   * Logs a success message in the console.
   * @param {string} msg - The message to be logged
   * @param {string} color - Custom color of the message
   *
   * @example
   * // Example usage
   * Log.color("Log with custom color")
   */
  static color(msg: string, color: string) {
    console.log(`%c${msg}`, `color: ${color}`);
  }

  /**
   * Logs a success message in the console.
   * @param {string} msg - The message to be logged
   * @param {string} background - Custom background of the message
   * @param {string} [color] - Custom color of the message
   *
   * @example
   * // Example usage
   * Log.background("Operation Successful", "#0000FF", "$FFFFFF")
   */
  static background(msg: string, background: string, color: string = "white") {
    console.log(`%c${msg}`, `background: ${background};color: ${color}`);
  }
}
