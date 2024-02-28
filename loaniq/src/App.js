import './App.css';
import Footer from './Footer';
import Header from './Header';
import Chat from './components/Chat';
function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <Header />
      <Footer />
      <style jsx>{`
      body {
        background-color: #f7f3e8;
      }
      `}
      </style>
      <Chat/>
    </div>
  );
}

export default App;
