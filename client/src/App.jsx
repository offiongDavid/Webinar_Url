import { BrowserRouter, Routes, Route } from "react-router-dom"

import Input from "./pages/Input"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Input />} />

<Route path="/admin-panel" element={<AdminDashboard />} />

</Routes>

</BrowserRouter>

)

}

export default App