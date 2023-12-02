# 1-Page Website with JavaScript Interaction

## Overview

This project is a simple 1-page website that incorporates JavaScript interaction to handle form submission and display a custom dialog. The purpose of the interaction is to collect user input from a form, process it, and provide feedback to the user through a custom dialog overlay.

## JavaScript Functions

### `submitForm()`

This function is called when the user submits the form. It retrieves data from the form fields (name, amount deducted, start date, end date) and dynamically updates a custom dialog message with the collected information. The `on()` function is then called to display the overlay.

### `on()`

This function displays an overlay, providing a visual indication to the user that the form submission is being processed.

### `off()`

This function hides the overlay, indicating the end of the form submission process.

## HTML Structure

The HTML file contains a form with input fields for name, amount deducted, start date, and end date. It also includes a custom dialog overlay that is initially hidden.

## CSS Styles

The CSS file styles the form and overlay for a visually appealing and responsive layout.

## Usage

1. Open the HTML file in a web browser.
2. Fill out the form with the required information.
3. Click the submit button.
4. The overlay will be displayed, and the custom dialog will show the submitted information.
5. The overlay will be hidden after a brief moment.

##Reference
1. https://www.vecteezy.com/vector-art/2995824-donation-and-charity-poster-event