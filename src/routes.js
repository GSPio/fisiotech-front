import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = { <Home/> } />
                <Route path = '/paciente/:id' />
                <Route path = '/origem/:id' />
                <Route path = '/patologia/:id' />
                <Route path = '/usuario/:id' />
                <Route path = '*' element = { <Error/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp