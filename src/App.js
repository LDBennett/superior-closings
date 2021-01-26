import './Styles/main.scss';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import Summary from './Components/Sections/Summary'
import WhoWeAre from './Components/Sections/WhoWeAre'
import Services from './Components/Sections/Services'
import About from './Components/Sections/About'
import Footer from './Components/Footer'
import CovidUpdate from './Components/CovidUpdate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDoorOpen, faLock, faCheckCircle, faCircle, faDisease, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faDoorOpen, faLock, faCheckCircle, faCircle, faDisease, faPhone, faEnvelope)

function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Summary/>
        <WhoWeAre/>
        <Services/>
        <About/>
      </Container>
      <Footer/>
      <CovidUpdate/>
    </>
  )
}

export default App;
