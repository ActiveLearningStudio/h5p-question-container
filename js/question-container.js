var H5P = H5P || {};

/**
 * Will render several content pages with multiple content instances on each page
 *
 * @param {Array} content
 * @param {int} contentId
 * @returns {H5P.SmartBook} Instance
 */
H5P.QuestionContainer = (function ($) {
        
  function C (content, contentId) {
    var children = [];
    // Instantiate children
    for (var i = 0; i < content.children.length; i++) {
      children.push(H5P.newRunnable(params.pages[i], contentId));
    }
  }

  C.prototype.showSolutions = function () {
    for (var i = 0; i < children.length; i++) {
      this.children[i].showSolutions();
    }
  };

  // Get total score for children.
  C.prototype.getScore = function () {
    var score = 0;
    for (var i = 0; i < this.children.length; i++) {
      score += this.children[i].getScore();
    }
    return score;
  };

  // Get the total possible score for all children.
  C.prototype.getMaxScore = function () {
    var score = 0;
    for (var i = 0; i < this.children.length; i++) {
      score += this.children[i].getMaxScore();
    }
    return score;
  };
  return C;
})(H5P.jQuery);
