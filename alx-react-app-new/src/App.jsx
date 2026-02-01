import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />

      <UserProfile
        name="Hildah"
        age={24}
        bio="Frontend developer learning React."
      />

      <MainContent />

      <Counter />

      <Footer />
    </>
  );
}

export default App;
