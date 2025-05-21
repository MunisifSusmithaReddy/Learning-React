
import React from 'react';
import ReactDOM from 'react-dom/client';

/**<div>
 * <div id='parent'>
 *   <div id='child'>
 *    <h1>Hello from inner child</h1>
 * </div>
 * </div>
 *  <div id='parent'>
 *   <div id='child'>
 *    <h1>Hello from inner child</h1>
 * </div>
 * </div>
 *  <div id='parent'>
 *   <div id='child'>
 *    <h1>Hello from inner child</h1>
 * </div>
 * </div>
 *  <div id='parent'>
 *   <div id='child'>
 *    <h1>Hello from inner child</h1>
 * </div>
 * </div>
 *  <div id='parent'>
 *   <div id='child'>
 *    <h1>Hello from inner child</h1>
 * </div>
 * </div>
 * </div>
 */

const heading = React.createElement("div", {
    id: 'parent',
}, React.createElement('div', {
    id: 'child'
}, React.createElement('h1', {}, 'Hello ff')));

// JSX

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);