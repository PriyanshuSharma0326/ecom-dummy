import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard.Page';
import Login from "./Pages/Login/Login.Page";
import Register from "./Pages/Register/Register.Page";
import SharedLayout from "./Routes/SharedLayout/SharedLayout";
import ProductsListing from "./Pages/ProductsListing/ProductsListing.Page";
import Product from "./Pages/Product/Product.Page";
import Cart from "./Pages/Cart/Cart.Page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Dashboard />} />
                
                    <Route path='products/*'>
                        <Route index element={<ProductsListing />} />

                        <Route path=':productId' element={<Product />} />
                    </Route>

                    <Route path='cart' element={<Cart />} />

                    <Route path='auth/*'>
                        <Route index element={<Navigate to=".." replace />} />

                        <Route path='login' element={<Login />} />

                        <Route path='register' element={<Register />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
