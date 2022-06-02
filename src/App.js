import './App.css';
import SelectionPage from './component/SelectionPage';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Table from './component/Table';

function App() {
  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element={ <SelectionPage />} />
          <Route path="/table" element={<Table />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
