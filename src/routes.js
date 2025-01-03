const { default: Inicio } = require("pages/inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                {/* // <Route path='/home' element={<Home />} />
                // <Route path='/nuevovideo' element={<Nuevovideo />} />
                // <Route path='/EditarVideo' element={<EditarVideo />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes