module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    Add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'
  ------------------------------------------------------------------ */

  // Add your twoDaysFromNow filter here
  filters.mrnTime = function() {
    try {
      const today = new Date();
      // Add 2 days to the current date
      const twoDaysLater = new Date(today.setDate(today.getDate() - 1));
      // Subtract 3 hours from the current time
      twoDaysLater.setHours(twoDaysLater.getHours() - 2);

      // Format the date
      const formattedDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(twoDaysLater);
      // Format the time
      const formattedTime = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(twoDaysLater);

      // Combine date and time with a comma
      return `${formattedDate}, ${formattedTime}`;
    } catch (error) {
      return error.message.split(':')[0];
    }
  };
  filters.chedTime = function() {
    try {
      const today = new Date();
      // Add 2 days to the current date
      const twoDaysLater = new Date(today.setDate(today.getDate() - 2));
      // Subtract 3 hours from the current time
      twoDaysLater.setHours(twoDaysLater.getHours() - 3);

      // Format the date
      const formattedDate = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }).format(twoDaysLater);
      // Format the time
      const formattedTime = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(twoDaysLater);

      // Combine date and time with a comma
      return `${formattedDate}, ${formattedTime}`;
    } catch (error) {
      return error.message.split(':')[0];
    }
  };
  /* ------------------------------------------------------------------
    Keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters;
}
