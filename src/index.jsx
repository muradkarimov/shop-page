
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { ShopContext } from './components/Contexts/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContext>
        <App/>
    </ShopContext>
    
);


