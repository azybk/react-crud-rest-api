import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import CheckoutPage from "./pages/checkout"
import DetailPage from "./pages/detail"
import ProducListPage from "./pages/productList"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <ProducListPage />,
                index: true
            },
            {
                path: "/detail",
                element: <DetailPage />
            },
            {
                path: "/checkout",
                element: <CheckoutPage />
            }
        ]
    }
])

const MateriREST = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default MateriREST