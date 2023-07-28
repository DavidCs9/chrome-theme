# ChromeTheme 

## Introduction

ChromeTheme allows you to change the colors of your website, based on a single image. It leverages the `color.js` library to calculate the prominent and average colors of an image and applies these colors as background colors to specified HTML elements. The package also determines suitable text colors for better readability by calculating the YIQ color contrast.

## Installation

You can install the `chrome-theme` package using npm or yarn. Make sure you have Node.js and npm (or yarn) installed on your machine.

Using npm:
``` 
npm install chrome-theme
```

Using yarn:
``` 
yarn add chrome-theme
```

## Usage
To use ChromeTheme, first, import the package in your project:
``` 
import { ChromeTheme } from 'chrome-theme';
```

### Creating a ChromeTheme instance
You can create an instance of the ChromeTheme class and configure it with an image source and a collection of HTML elements that you want to apply the theme to:
``` 
const theme = new ChromeTheme();
theme.setImg('path/to/image.jpg');
theme.setElements('your-element-class'); // Use the class name of your HTML elements
```

### Applying the most prominent color
Alternatively, you can apply the average color from the image to the specified elements by calling the getAverageColor() method:
``` 
theme.getAverageColor();
```

### Result
The ChromeTheme class will apply the chosen color (either the most prominent or the average color) as the background color to the specified HTML elements and choose an appropriate text color (either black or white) based on the YIQ color contrast.

## Example
Here's a simple example of how you can use the chrome-theme package:
``` 
import { ChromeTheme } from 'chrome-theme';

const theme = new ChromeTheme();
theme.setImg('path/to/image.jpg');
theme.setElements('your-element-class');

theme.getMainColor(); // Apply the most prominent color to the elements
// OR
theme.getAverageColor(); // Apply the average color to the elements

```

## Compatibiity
The chrome-theme package works in modern browsers that support ES6+ features.

## License
This package is provided under the ISC License. You can find the license information in the "LICENSE" file included with the package.

## Contribution
If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository of the package.

