var H5P = H5P || {};
 
H5P.option2 = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
        activityName: 'activity 2',
      introMsg: 'On this page you will learn about ',
      preTaskMsg: 'First, we need to give you an idea of what this activity is all about. Have a look at this video',
      mainTaskMsg: "Now watch our interactive video and we'll show you what resources and steps go into doing the activity" ,
      image: null
    }, options);
    console.log("here come the options");
    console.log(this.options);
    // Keep provided id.
    this.id = id;

    // initialise the external libraries
    if (this.options.preTask) {
        // Initialize task
        this.preTask = H5P.newRunnable(this.options.preTask, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.preTask.trigger('resize', event);
        });
      }
      if (this.options.mainTask) {
        // Initialize task
        this.mainTask = H5P.newRunnable(this.options.mainTask, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.mainTask.trigger('resize', event);
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
    // Set class on container to identify it as a option2
    // container.  Allows for styling later.
    $container.addClass("h5p-option2");
    // Add intro message
    if (this.options.activity) {
      $container.append('<div class="option2-text">' + this.options.introMsg + this.options.activity + '</div>');
    } else {
      $container.append('<div class="option2-text">On this page you will learn about a cultural activity</div>');
    }
    
    // Add pre-task message
    $container.append('<div class="option2-text">' + this.options.preTaskMsg + '</div>');
    //Add pre-task activity external library
    if (this.preTask) {
      console.log("we have preTask")
      // Create a container for the task
      var $preTaskHolder = $('<div>');
      // Attach the task to the container
      this.preTask.attach($preTaskHolder);
      // Append the task container to our content types container
      $container.append($preTaskHolder);
      console.log("preTask should now appear in the DOM");
    } else {
      console.log("there is no preTask")
    }
    // Add main task message
    $container.append('<div class="option2-text">' + this.options.mainTaskMsg + '</div>');
    if (this.mainTask) {
      console.log("we have mainTask")
      // Create a container for the task
      var $mainTaskHolder = $('<div>');
      // Attach the task to the container
      this.mainTask.attach($mainTaskHolder);
      // Append the task container to our content types container
      $container.append($mainTaskHolder);
      console.log("mainTask should now appear in the DOM");
    } else {
      console.log("there is no mainTask")
    }
    
  };
 
  return C;
})(H5P.jQuery);