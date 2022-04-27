import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Footer from './components/pages/Footer';
import Navbar from './components/layout/Navbar';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Navbar />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
