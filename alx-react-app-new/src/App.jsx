// App.jsx
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys painting and cycling" 
      />
    </div>
  );
}

export default App;
