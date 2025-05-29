# Learning-React
Learning React from basics

#npm-init
Created a package.json file using npm init

#Install dependency
Bundler(Parcel, Webpack) - Parcel
-> Dev Dependencies
-> Depenencies


# parcel
Dev Build
Local Server
HRM(Hot Module Replacement)
Bundling
Compress
Differential Bundling(Open in any browser) - To support older browsers
Diagnostic
Error Handling
To host on https
Tree Shaking - remove unused code

# App Structure
/**
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - Restarant Container
 *   - Restaurant Cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # Two types of exports
 1. Default Export
 2. Named Export

 # React Hooks
 1. useState()
 2. useEffect()


# Reconciliation Algorithm (React Fiber)

DOM(Restaurant Container 20 nodes) => After Filter => 17 nodes

This is happening because of Virtual DOM.

By deafult on page load we have a Real DOM -> Is divs
-> React creates a virtual DOM(A representation of a Real/Actual DOM) - > Virtual DOM is a object

# Diff Algorithm
Finds the difference between updated virtual DOM and real Virtual DOM

Old     New
 20      17  -> 20-17 = 3