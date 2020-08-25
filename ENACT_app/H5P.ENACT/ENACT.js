var H5P = H5P || {};
 
H5P.ENACT = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id, contentId) {
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      //introMsg: 'On this page you will learn about ',
      preTaskMsg1: 'First, we need to give you an idea of what this activity is all about.',
      preTaskMsg2: "Now we'll teach you some of the key vocabulary relating to this activity.",
      mainTaskMsg: "Now we'll show you how to do the activity." ,
      postTaskMsg: "Let's see how much you remember about this activity...",
      image: null
    }, options);
    // console.log("here comes the contentId");
    // console.log(contentId.metadata.title);
    // console.log("here comes the ID");
    // console.log(id);
    // console.log("here come the options");
    // console.log(this.options);
    // Keep provided id.
    this.id = id;
    this.activityName = contentId.metadata.title;

    // initialise the external libraries
    if (this.options.preTask1) {
        // Initialize task
        this.preTask1 = H5P.newRunnable(this.options.preTask1, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.preTask1.trigger('resize', event);
        });
      }
      if (this.options.preTask2) {
        // Initialize task
        this.preTask2 = H5P.newRunnable(this.options.preTask2, this.id);
       
        // Trigger resize events on the task:
        this.on('resize', function (event) {
          this.preTask2.trigger('resize', event);
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
    // Set class on container to identify it as a option1
    // container.  Allows for styling later.
    $container.addClass("h5p-option1");
    // Add intro message
    // if (this.activityName) {
    //   $container.append('<div class="option1-text">' + this.options.introMsg + this.activityName + '.<br></div>');
    // } else {
    //   $container.append('<div class="option1-text">On this page you will learn about a cultural activity</div>');
    // }
    
    // Add pre-task 1 message
    $container.append('<div class="preTask1-text">' + this.options.preTaskMsg1 + '<br></div>');
    //Add pre-task activity external library
    if (this.preTask1) {
      console.log("we have preTask1")
      // Create a container for the task
      var $preTask1Holder = $('<div>');
      // Attach the task to the container
      this.preTask1.attach($preTask1Holder);
      // Append the task container to our content types container
      $container.append($preTask1Holder);
      console.log("preTask1 should now appear in the DOM");
    } else {
      console.log("there is no preTask1")
    }
    // Add pre-task 2 message
    $container.append('<div class="preTask2-text">' + this.options.preTaskMsg2 + '<br></div>');
    //Add pre-task activity external library
    if (this.preTask2) {
      console.log("we have preTask1")
      // Create a container for the task
      var $preTask2Holder = $('<div>');
      // Attach the task to the container
      this.preTask2.attach($preTask2Holder);
      // Append the task container to our content types container
      $container.append($preTask2Holder);
      console.log("preTask2 should now appear in the DOM");
    } else {
      console.log("there is no preTask2")
    }
    // Add main task message
    $container.append('<div class="mainTask-text">' + this.options.mainTaskMsg + '</div>');
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
    
    // Add post-task reflection message
    $container.append('<div class="postTask-text">' + this.options.postTaskMsg + '</div>');
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