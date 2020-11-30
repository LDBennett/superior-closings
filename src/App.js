import './Styles/main.scss';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import Summary from './Components/Sections/Summary'
import WhoWeAre from './Components/Sections/WhoWeAre'
import Services from './Components/Sections/Services'
import About from './Components/Sections/About'
import Footer from './Components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDoorOpen, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDoorOpen, faLock, faCheckCircle)

function App() {
  return (
    <div className="main">
      <Header />
      <Container fluid>
        <Summary/>
        <WhoWeAre/>
        <Services/>
        <About/>
      </Container>
      <Footer/>
    </div>
  )
}

export default App;
