import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
