export default {
  colors: {
    text: '#353745',
    background: '#BFD9D7',
    primary: '#AE9152',
    secondary: '#DDBB4D',
  },
  WebkitTextStroke: 'white',
  WebkitTextFillColor: 'transparent',
  breakpoints: ["768px", "1025px", "1290px"],
  links: {
    nav: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      width: '100%',
      color: 'primary',
      padding: '1.5em',
      textDecoration: 'underline',
      textUnderlineOffset: '0.5em',
    },
    current: {
      color: 'secondary',
    },
  },
  cards: {
    primary: {
      padding: 2,
      margin: '3em',
      borderRadius: 10,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      border: '1px solid',
      borderColor: 'white',
      alignItems: 'center',
      textAlign: 'center',
      h3: {
        color: 'primary',
      },
      a: {
        color: 'primary',
      },
    },
  },
}
