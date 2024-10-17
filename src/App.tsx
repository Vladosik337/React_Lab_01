import './styles/style.scss';
import Keyboard from "./components/Keyboard.tsx";


function App() {
    const handleKeyPress = (key) => {
        console.log('Натиснута клавіша:', key);
    };

  return (
    <div className="min-h-full flex flex-col items-center justify-center overflow-clip h-screen">
        <h1>Віртуальна клавіатура</h1>
        <Keyboard onKeyPress={handleKeyPress}/>
    </div>
  );
}

export default App;
