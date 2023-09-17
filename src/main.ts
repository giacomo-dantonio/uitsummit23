import 'reveal.js/dist/reveal.css'
import './themes/robot-lung.css'
import './style.css'

import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes'

import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

const deck = new Reveal()
deck.initialize({
  hash: true,
  slideNumber: true,
  margin: 0.2,
  plugins: [ RevealNotes ]
})
