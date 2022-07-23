import { Routes, Route, Navigate } from 'react-router-dom';
import { ProjetcPage } from '../portfolio/components/ProjetcPage';


import { HomePage, FrontendPage, BackendPage } from '../portfolio/pages';


export const PortfolioRouter = () => {
    return (
        <>

            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="frontend" element={<FrontendPage />} />
                <Route path="backend" element={<BackendPage />} />

                {/* Ruta de los proyectos de manera individual */}

                <Route path="projetc/:projetcId" element={<ProjetcPage />} />


                {/* Comodin para que navegue a alguna pagina por defecto */}

                <Route path="/" element={ <Navigate to={'/home'} /> } />


            </Routes>

        </>
    )
}
