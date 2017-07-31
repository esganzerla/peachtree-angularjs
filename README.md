## Framework
For this project I decided to use version 1.5(.9) of AngularJS. This is a a framework I had not paied much attention in the past and that is precisely why Adriaan recommended me to use and I took the challange.
It was a fun experience, which led me to understand a different structure than the ones I am used to.

## Linting
I used eslinter to improve quality and consistency of the code.

## What I have done
### Images
- **Resized logo image.** I decided to resize (and compressed) the logo image considering it was a bit smaller in the design I received and for this project it would not reflect badly in other parts.
- **Compressed background image.** This image had 1.1mb and now it has only 300kb, thanks to https://tinyjpg.com. (NOTE: The imagem in the design I received had a different framing, but it still looks good though.)
- **Cropped icons from design.** The icons to use in the panels titles did not have a transparent background, to make it better I cropped the icons from the design. (This should probably be updated to a transparent one.)
- **Unrecognized merchant.** For those merchants not in the transactions mock I have set a simple image with a "person" icon. For other merchants it should retrieve the right image.
- **Favicon.** I cropped the Peach from the logo and included the favicon and theme informations. 

### Font
- **Kanit is default** after loaded. I did use a library called FontFaceOnLoad (https://github.com/zachleat/fontfaceonload) to prevent FOUT (Flash Of Unstyled Content).

### Layout modifications
- **Search field resized** to fit better on the screen. Something I would like to discuss with the designer on a real situation.
- **Merchant image hidden** on very small screens, so the content of each transaction would be better to read.

### Points to improve
- **Currency Mask.** Also due time restrictions and wanting to improve my AngularJS skills I created my own currency mask for input. This works, although it could be better, working for longer time on it.
- **Alert messages.** Due some time restriction I have at the moment I decided to include some messages just using alerts. I believe there are much better ways to do it. Also something I would like discuss with the project designer to find the best way.
- **Validation abstraction.** Considering there were just 2 field with simple validations in the same component I have done the validation in the `addTransaction` component. For better use of this functions it would be better on a service.

### Possible design differences
- **Panel title colors:** Considering I did not know the precise font color for the box titles, I applied the default opacity for the main text from Material Design Guidelines (https://material.io/guidelines/style/color.html#color-usability).
- **Box Shadow:** Considering I did not know the precise specifications for the box shadows, I applied also here Material Design specifications for a level that seemd like the ones in the layout (https://material.io/guidelines/resources/shadows.html).

### ScreenShots
![large screen](https://github.com/esganzerla/peachtree-angularjs/blob/master/screenshots/large-screen.png "Large Screen")
![medium screen](https://github.com/esganzerla/peachtree-angularjs/blob/master/screenshots/medium-screen.png "Medium Screen") 
![small screen](https://github.com/esganzerla/peachtree-angularjs/blob/master/screenshots/small-screen.png "Small Screen") 
