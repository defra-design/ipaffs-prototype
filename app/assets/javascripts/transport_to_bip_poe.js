/* global $, accessibleAutocomplete */
$(document).ready(function () {
  const select = document.querySelector('[data-typeahead-field="bcp"]')
  if (!select) {
    return
  }
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: select,
    tNoResults: () => 'No port of entry found',
    defaultValue: '',
    minLength: 2
  })

  const buttons = [
    document.querySelector('#button-save-and-continue'),
    document.querySelector('#save-and-return-button'),
    document.querySelector('#save-and-review-button')
  ]

  buttons.filter(button => button).forEach(button => button.addEventListener('click', handleBlankPoe))
})

const handleBlankPoe = () => {
  if (document.querySelector('#bcp').value.length === 0) {
    document.querySelector('#bcp-select').value = ''
  }
}
