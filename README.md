# SpaceImagesGallery

## What requirements did I achieve
- I implemented a flexible web layout using Flexbox so that elements on the webpage still maintain the desired layout while respecting screen size.
- I used media queries to alter the look of the web page when viewing on a smartphone, this was mainly by adjusting the size of the thumbnails and selected image to fill the screen a bit more. I also included a check on the orientation of the device to make the webpage even more responsive.
- I included alt text with each of the images that are loaded in to make it possible for those that require screen readers to understand the content of the page.
- I included buttons to each side of the page to make it possible to switch between images in the gallery, furthermore it is also possible to select a thumbnail from the gallery to jump straight to that image.
- I attached aria labels to my buttons to be more descriptive with a screen reader.
- I hooked up keyboard input so that it is possible for the user to switch between images with the arrow keys.

## Were there any requirements or goals that I was unable to achieve?
- Although I had initally planned to include srcset and more efficiently load images, I ran out of time to implement this. This means that those with poor broadband speed will run into issues loading the images on the page.

## Extra reflection
- Looking back I don't think this web page has been designed perfectly, for instance my sample size is only 3 images, however the thumbnail section hasn't been designed to hold x amount of images, so users may run into a problem where the thumbnails overflow the page. In future, I would have spent more time with the thumbnail section to account for this and make it more flexible.
- I ran into an issue with Windows screen reader where it wouldn't recognise the images and therefore it wouldn't read the alt text. I debugged and confirmed that the image tags had a valid alt text attribute, so in theory the screen reader should have recognised this and read out loud the alt text. I tried to test this in a separate project which just displays a linked image and I again ran into the issue, so my verdict is it might be an issue with Windows screen reader but I have to investigate this in the future.
