import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import CheckoutPage from "./pages/checkout"
import DetailPage from "./pages/detail"
import ProducListPage from "./pages/productList"
import { Provider } from "react-redux/"
import store from './store'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <ProducListPage />,
                index: true,
            },
            {
                path: "/detail/:id",
                element: <DetailPage />,
            },
            {
                path: "/checkout",
                element: <CheckoutPage />,
            }
        ]
    }
])

const MateriREST = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default MateriREST;