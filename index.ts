import { prominent, average } from 'color.js'

class ChromeTheme {
  img: string
  elements: HTMLCollectionOf<Element>
  constructor(img: string, elements: string) {
    this.img = img
    this.elements = document.getElementsByClassName(elements)
  }

  setImg(src: string) {
    this.img = src
  }

  setElements(elements: string) {
    this.elements = document.getElementsByClassName(elements)
  }

  async getMainColor() {
    const color: any = await prominent(this.img)
    let mostColorful: number[] = color[0]
    let maxSum = mostColorful.reduce((acc, val) => acc + val, 0)

    // Find the index of the white color in the array of colors.
    const whiteIndex: number = color.findIndex(
      (color: number[]) => color[0] === 255 && color[1] === 255 && color[2] === 255
    )

    /**
     * If the image has a white color, remove it from the array of colors and update the most colorful pixel.
     * @param {number} whiteIndex - The index of the white color in the array of colors.
     * @param {Array} colores - An array of color values in RGB format.
     * @param {Array} mostColorful - An array of the most colorful pixel in RGB format.
     * @param {number} maxSum - The sum of RGB values for the most colorful pixel.
     */
    if (whiteIndex !== -1) {
      color.splice(whiteIndex, 1)
      mostColorful = color[0]
      maxSum = mostColorful.reduce((acc, val) => acc + val, 0)
    }

    /**
     * Find the most colorful pixel in the image by calculating the sum of RGB values for each pixel.
     * @param {Array} colores - An array of color values in RGB format.
     * @returns {Array} An array of the most colorful pixel in RGB format.
     */
    for (let i = 1; i < color.length; i++) {
      const sum: number = color[i].reduce((acc: any, val: any) => acc + val, 0)
      if (sum > maxSum) {
        mostColorful = color[i]
        maxSum = sum
      }
    }

    /**
     * Calculate the YIQ color contrast of the most colorful pixel and determine the text color to use.
     * @param {Array} mostColorful - An array of the most colorful pixel in RGB format.
     * @returns {string} The color to use for the text, either "black" or "white".
     */
    const r = mostColorful[0]
    const g = mostColorful[1]
    const b = mostColorful[2]
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    const textColor = yiq >= 128 ? 'black' : 'white'

    /**
     * Update the background color of each element with the most colorful pixel and add transition effect.
     * Add event listeners for mouseenter and mouseleave to change the opacity of the background color.
     * @param {Array} elements - An array of HTML elements to update the background color.
     * @param {Array} mostColorful - An array of the most colorful pixel in RGB format.
     */
    Array.from(this.elements).forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = `rgb(${mostColorful[0]}, ${mostColorful[1]}, ${mostColorful[2]})`
        element.style.color = textColor
        element.style.transition = 'background-color 0.3s ease' // add transition effect
        element.addEventListener('mouseenter', () => {
          // add event listener for mouseenter
          element.style.backgroundColor = `rgb(${mostColorful[0]}, ${mostColorful[1]}, ${mostColorful[2]}, 0.7)`
        })
        element.addEventListener('mouseleave', () => {
          // add event listener for mouseleave
          element.style.backgroundColor = `rgb(${mostColorful[0]}, ${mostColorful[1]}, ${mostColorful[2]})`
        })
      }
    })
  }

  async getAverageColor() {
    const color: any = await average(this.img)

    /**
     * Calculate the YIQ color contrast of the most colorful pixel and determine the text color to use.
     * @param {Array} color - An array of the average color in RGB format.
     * @returns {string} The color to use for the text, either "black" or "white".
     */
    const r = color[0]
    const g = color[1]
    const b = color[2]
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    const textColor = yiq >= 128 ? 'black' : 'white'

    /**
     * Update the background color of each element with the most colorful pixel and add transition effect.
     * Add event listeners for mouseenter and mouseleave to change the opacity of the background color.
     * @param {Array} elements - An array of HTML elements to update the background color.
     * @param {Array} color - An array of the most colorful pixel in RGB format.
     */
    Array.from(this.elements).forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        element.style.color = textColor
        element.style.transition = 'background-color 0.3s ease' // add transition effect
        element.addEventListener('mouseenter', () => {
          // add event listener for mouseenter
          element.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`
        })
        element.addEventListener('mouseleave', () => {
          // add event listener for mouseleave
          element.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        })
      }
    })
  }
}

export default ChromeTheme
