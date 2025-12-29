
import './App.css'
import lepord from './assets/lepord.jpg';
import OIP from './assets/OIP.jpeg';
import tiger from './assets/tiger.jpg';

function App() {
 

  return (
    <>
      <div className="nav">
        <h1>Logo</h1>
<ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        </ul>
      </div>
      <div className="section">
        <img src={lepord} alt="nan" />
        <img src={OIP} alt="" />
        <img src={tiger} alt="" />
      </div>
     <footer>
      <h1>This is footer</h1>
     </footer>
    </>
  )
}

export default App
