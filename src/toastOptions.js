const getOptions = (emoji) => {
  return {
    duration: 2000,
    position: 'top-center',
    // Styling
    style: {},
    className: 'toast',
    // Custom Icon
    icon: emoji,
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    }
  }
}

module.exports = {
  getOptions
}