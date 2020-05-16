var H5P = H5P || {};

H5P.hotspotsAndSlides = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      image: null
    }, options);
    // Keep provided id.
    this.id = id;

    // initialise the external libraries
    if (this.options.hotspots) {
      // Initialize task
      this.hotspots = H5P.newRunnable(this.options.hotspots, this.id);
     
      // Trigger resize events on the task:
      this.on('resize', function (event) {
        this.hotspots.trigger('resize', event);
      });
    }
    if (this.options.slides) {
      // Initialize task
      this.slides = H5P.newRunnable(this.options.slides, this.id);
     
      // Trigger resize events on the task:
      this.on('resize', function (event) {
        this.slides.trigger('resize', event);
      });
    }

  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */


  return C;
})(H5P.jQuery);
