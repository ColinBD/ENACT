console.log("we're in H5P iFrame mode!");

if (H5P.jQuery(".h5p-editor")[0]){
    // Do something if class exists
    alert('found an item with h5p-editor class which I think is within the iframe')
} else {
    // Do something if class does not exist
    console.log("searched for h5p-editor but found nothing")
}

if (H5P.jQuery(".h5peditor")[0]){
    // Do something if class exists
    alert('found an item with h5peditor class which I think is within the iframe')
} else {
    // Do something if class does not exist
    console.log("searched for h5peditor but found nothing")
}

if (H5P.jQuery(".edit-h5p-editor")[0]){
    // Do something if class exists
    alert('found an item with edit-h5p-editor class which I think is outwith the iframe')
} else {
    // Do something if class does not exist
    console.log("searched for edit-h5p-editor but found nothing")
}

