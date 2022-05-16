/**
 * Asynchronously load images using outside resources.
 * The loadImage() fn creates an image object and returns a promise. The promise
 * is resolved when the image loads successfully or otherwise rejected.
 *
 * This allows you to load an image and only continue when the image is loaded.
 * I use this function to make sure the image is loaded before rendering other
 * elements to the DOM. Otherwise, my other elements show up in the DOM and a
 * few seconds (maybe milliseconds) later, the image shows up. It doesn't look
 * nice when that happens.
 */
export function loadImage(src) {
  return new Promise(function (resolve, reject) {
    // Create the new image object.
    var image = new Image();

    /**
     * Add two listeners on the image.
     *
     * load() will be called if the image successfully loads.
     * load() will call the resolve cb, with the image.
     *
     * error() will be called if the image cannot load.
     * error() will call the reject cb, with a message.
     */
    image.addEventListener(
      "load",
      function () {
        resolve(image);
      },
      false
    );
    image.addEventListener(
      "error",
      function () {
        reject(new Error("Cannot load image"));
      },
      false
    );

    /**
     * Set the src of the image. This is done AFTER the load/error event
     * listeners are created.
     */
    image.src = src;
  });
}
