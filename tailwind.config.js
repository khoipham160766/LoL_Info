module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        'name': 'rgba(0, 0, 0, 0.6);',
        'info-champ': 'rgba(255, 0, 0, 0.4)'
      },
      height:
      {
        'screen-content': 'calc(100vh - 5rem)'
      }
    },
  },
  plugins: [],
}