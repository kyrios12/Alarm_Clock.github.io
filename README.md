# Rick And Morty Themed Alarm Clock

Simple alarm clock project for front end practise. Enjoy and interact with proximity hover effect based animations and try the alarm to wake up early.

## Features

- Proximity Hover Animation based.
- Real time based alarm clock with accurate reading.

## Getting Started

1. Clone the repository: (https://github.com/kyrios12/Alarm_Clock.github.io)
2. Project live Demo: (http://localhost:4200/](https://kyrios12.github.io/Alarm_Clock.github.io/).
## High-Level Design

### Product Module

- **Product Component**: Allows browsing the product catalog, searching, and filtering products.
- **Product Card Component**: Displays product details and allows adding products to the cart.

### Cart Module

- **Cart Component**: Displays the items in the cart and cart summary.
- **Cart Item Component**: Allows increasing/decreasing quantity and deleting items from the cart.
- **Cart Summary Component**: Shows the total number of items and total amount in the cart.

### Shared Components

- **Header Component**: Displays company logo and navigation links.
- **Filter Component**: Allows applying filter values for attributes like color, gender, price range, and type.
- **Search Component**: Enables searching for products using free text.

## Screenshots

### Product Page

![Product Page](screenshots/product-page.png)

### Cart Page

![Cart Page](screenshots/cart-page.png)

### Product Page Mobile

![Product Page Mobile](screenshots/product-page-mobile.png)

### Cart Page Mobile

![Cart Page Mobile](screenshots/cart-page-mobile.png)

## Exception Handling

Exceptions are handled for scenarios like:
- When no cart items are present.
- When the searched/filtered product is not available.
- When product fetching API fails.
