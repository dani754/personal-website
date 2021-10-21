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
      letterSpacing: '0.1em',
      lineHeight: '1.8em',
      fontSize: 16,
      h3: {
        color: 'primary',
        textDecoration: 'underline',
        letterSpacing: '0.1em',
        fontWeight: 'bolder',
      },
      a: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 12,
      },
    },
  },
  buttons: {
    primary: {
      padding: '0.4em',
      margin: '1em',
      color: 'background',
      letterSpacing: '0.1em',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      }
    },
  },
}
