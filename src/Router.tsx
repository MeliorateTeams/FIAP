import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layaout from './layouts/Layaout'


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layaout />}>
                    <Route path='/' element={<IndexPage />} index />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}