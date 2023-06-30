
import ReactDOM from 'react-dom/client';
import App from './components/App'
import ShopProvider from './components/Contexts/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopProvider>
        <App/>
    </ShopProvider>
    
);


