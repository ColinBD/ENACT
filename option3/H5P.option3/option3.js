var H5P = H5P || {};
 
H5P.option3 = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
        activityName: 'activity 3',
      introMsg: 'On this page you will learn about ',
      preTaskMsg: 'First, we need to give you an idea of what this activity is all about. Have a look at this video.',
      mainTaskp1Msg: "Now have a look at the image and click on the hotspots to learn about the resources required" ,
      mainTaskp2Msg: "Here is how you use those resources during the activity" ,
      postTaskMsg: "Let's see how much you remember about this activity",
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
      if (this.options.mainTaskpart1) {
        // Initialize task
        this.mainTaskpart1 = H5P.newRunnable(this.options.mainTaskpart1, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.mainTaskpart1.trigger('resize', event);
        });
      }
      if (this.options.mainTaskpart2) {
        // Initialize task
        this.mainTaskpart2 = H5P.newRunnable(this.options.mainTaskpart2, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.mainTaskpart2.trigger('resize', event);
        });
      }
      if (this.options.postTask) {
        // Initialize task
        this.postTask = H5P.newRunnable(this.options.postTask, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.postTask.trigger('resize', event);
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
    // Set class on container to identify it as a option3
    // container.  Allows for styling later.
    $container.addClass("h5p-option3");
    // Add intro message
    if (this.options.activity) {
      $container.append('<div class="option3-text">' + this.options.introMsg + this.options.activity + '</div>');
    } else {
      $container.append('<div class="option3-text">On this page you will learn about a cultural activity</div>');
    }
    
    // Add pre-task message
    $container.append('<div class="option3-text">' + this.options.preTaskMsg + '</div>');
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
    // Add main task part 1 message
    $container.append('<div class="option3-text">' + this.options.mainTaskp1Msg + '</div>');
    if (this.mainTaskpart1) {
      console.log("we have mainTaskpart1")
      // Create a container for the task
      var $mainTaskpart1Holder = $('<div>');
      // Attach the task to the container
      this.mainTaskpart1.attach($mainTaskpart1Holder);
      // Append the task container to our content types container
      $container.append($mainTaskpart1Holder);
      console.log("mainTask p1 should now appear in the DOM");
    } else {
      console.log("there is no mainTask p1")
    }
    // Add main task part 2 message
    $container.append('<div class="option3-text">' + this.options.mainTaskp2Msg + '</div>');
    if (this.mainTaskpart2) {
      console.log("we have mainTask p2")
      // Create a container for the task
      var $mainTaskpart2Holder = $('<div>');
      // Attach the task to the container
      this.mainTaskpart2.attach($mainTaskpart2Holder);
      // Append the task container to our content types container
      $container.append($mainTaskpart2Holder);
      console.log("mainTask p2 should now appear in the DOM");
    } else {
      console.log("there is no mainTask part 2")
    }
    
    // Add post-task reflection message
    $container.append('<div class="option3-text">' + this.options.postTaskMsg + '</div>');
    //Add post-task activity external library to the DOM
    if (this.postTask) {
      console.log("we have postTask")
      // Create a container for the task
      var $postTaskHolder = $('<div>');
      // Attach the task to the container
      this.postTask.attach($postTaskHolder);
      // Append the task container to our content types container
      $container.append($postTaskHolder);
      console.log("postTask should now appear in the DOM");
  } else {
    console.log("there is no postTask")
  }

    
  };
 
  return C;
})(H5P.jQuery);