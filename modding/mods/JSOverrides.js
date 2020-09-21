// modes available: div, iframe, external, editor 

console.log("we're in H5P iFrame mode!");

//$("[name='h5peditor-library']").val('H5P.ENACT 2.0');

// (function ( $ ) {
//     console.log('self-calling function running');
//     $("[name='h5peditor-library']").val('H5P.ENACT 2.0');
// }( H5P.jQuery ))();

//H5P.jQuery("[name='h5peditor-library']").val('H5P.ENACT 2.0');

// H5P.jQuery('iframe').load(function() {
//     alert('iframe load function triggered');
//     H5P.jQuery("[name='h5peditor-library']").val('H5P.ENACT 2.0');
// });

// H5P.jQuery('iframe.overlay-active').load(function() {
//     alert('iframe.overlay-active load function triggered');
//     H5P.jQuery("[name='h5peditor-library']").val('H5P.ENACT 2.0');
// });



if (H5P.jQuery(".h5p-editor-iframe")[0]){
    // Do something if class exists
    console.log('from iframe mode: found an item with h5p-editor class which I think is within the iframe')
} else {
    // Do something if class does not exist
    console.log("from iframe mode: searched for h5p-editor-iframe but found nothing")
    //start timer to look for this
}


