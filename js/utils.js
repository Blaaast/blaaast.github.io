/**
 * Get closest parent matching the selector
 *
 * Example:
 *  var el = document.querySelector('#some-element');
 *  var closest = getClosest(el, '.some-class');
 *  var closestExcludingElement = getClosest(el.parentNode, '.some-class');
 *
 * @param {DOMnode} el
 * @param {querySelector} selector
 * @return {DOMnode}
 */
export function closest(el, selector) {

  var firstChar = selector.charAt(0);

  // Get closest match
  for ( ; el && el !== document; el = el.parentNode ) {

    // If selector is a class
    if ( firstChar === '.' ) {
      if ( el.classList.contains( selector.substr(1) ) ) {
        return el;
      }
    }

    // If selector is an ID
    if ( firstChar === '#' ) {
      if ( el.id === selector.substr(1) ) {
        return el;
      }
    }

    // If selector is a data attribute
    if ( firstChar === '[' ) {
      if ( el.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
        return el;
      }
    }

    // If selector is a tag
    if ( el.tagName.toLowerCase() === selector ) {
      return el;
    }

  }

  return false;

}
