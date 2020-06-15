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
  C.prototype.attach = function ($container) {
    // Set class on container to identify it as a option1
    // container.  Allows for styling later.
    $container.addClass("h5p-option1");
    // Add intro message
    if (this.options.activity) {
      $container.append('<div class="option1-text">' + this.options.introMsg + this.options.activity + '</div>');
    } else {
      $container.append('<div class="option1-text">Click the + symbols on the image below to learn more.</div>');
    }
    
    // Add hotspots
    $container.append('<div class="hotspots-text"></div>');
    //Add pre-task activity external library
    if (this.hotspots) {
      console.log("we have hotspots")
      // Create a container for the task
      var $hotspotsHolder = $('<div>');
      // Attach the task to the container
      this.hotspots.attach($hotspotsHolder);
      // Append the task container to our content types container
      $container.append($hotspotsHolder);
      console.log("hotspots should now appear in the DOM");
    } else {
      console.log("there is no hotspots")
    }
    // Add slides
    $container.append('<div class="slides-text">The following slides should help you learn how the activity is done.</div>');
    if (this.slides) {
      console.log("we have slides")
      // Create a container for the task
      var $slidesHolder = $('<div>');
      // Attach the task to the container
      this.slides.attach($slidesHolder);
      // Append the task container to our content types container
      $container.append($slidesHolder);
      console.log("slides should now appear in the DOM");
    } else {
      console.log("there is no slides")
    }
  };

  return C;
})(H5P.jQuery);
