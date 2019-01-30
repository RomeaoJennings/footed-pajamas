export class WindowProvider {
  getWindow(): Window {
    if (window !== undefined) {
      return window;
    } else {
      throw new Error('Window object not available in this environment.');
    }
  }
}
