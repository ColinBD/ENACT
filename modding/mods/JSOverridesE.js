alert("we're in H5P editing mode!")

if (H5P.jQuery(".h5p-editor-iframe")[0]){
    // Do something if class exists
    console.log('from editor mode: found an item with h5p-editor class which I think is within the iframe')
} else {
    // Do something if class does not exist
    console.log("from editor mode: searched for h5p-editor-iframe but found nothing")
    //start timer to look for this
}