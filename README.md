# ENACT OPTIONS

This repository houses prototype H5P libraries and content

## Contents
Each 'option' folder has the following structure:
* A file with '.h5p' extension which is the HTML5 package, ready for upload to your favourite H5P host CMS. The naming convention is H5P.LibraryName.h5p
* A folder containing the package files in uncompressed form. These files will consist of content (text, images etc.), the main library and its dependency chain. 
* A folder containing the files that constitute this library. The naming convention is H5P.LibraryName  
* A folder named 'modding' which contains a css file and a folder.  


## How to Use
Clone or download this repository, open an option folder (e.g. option 1), locate the .h5p file and upload this using the H5P tools within your chosen CMS (WordPress, Drupal or Moodle). Note: You must have the H5P plugin installed within your CMS for this to work. 

From here you can use the H5P plugin's editing tools (accessible through the CMS) to author content. Bigger changes will require modifying the library itself, which is achieved by editing the contents of the library folder as described below.

Locate the .css file within the 'modding' folder. Place this within WordPress at the path wp-content > uploads > h5p 

You must also add a second H5P plugin from the repository called 'h5pmods-wordpress-plugin-master'. Locate this folder, zip it up and then upload it to WordPress as a plugin. The purpose of this plugin is to modify the authoring tools form, and we use this to insert instructions to guide content authors. 

### Notes on editing the library files
An .h5p library is created when the library folder is recursively zipped and the .zip extension renamed to .h5p. On a Mac this can be performed at a command line by navigating to the parent directory then running the command:

```bash
zip -r <output_file> <folder_name>
```

* In the above command <output_file> would be the name you want to give your library e.g. H5P.option1.h5p 
* <folder_name> must match the name of the folder where your library files are stored

During the course of development you may want to reupload your modified library to your CMS. Updating usually require you to increment the patch number (or major/minor version numbers as appropriate) which is found within the library.json file, otherwise upload may not be succesful.

## License
[MIT](https://choosealicense.com/licenses/mit/)