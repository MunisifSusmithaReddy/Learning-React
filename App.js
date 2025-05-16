
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
}, React.createElement('h1', {}, 'Hello from inner child')));

// JSX

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);