import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';
function App() {
  return (
    <>
    <div>
      <WelcomeMessage />
    </div>
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    </>
  );
}

export default App;
