import { useState } from "react"
import Hero from "../components/Hero"
import Speakers from "../components/Speakers"
import EventDetails from "../components/EventDetails"
import RegisterPopup from "../components/RegisterPopup"

const Input = () => {

const [openForm,setOpenForm] = useState(false)

return (
<div>

<Hero openForm={()=>setOpenForm(true)} />

<Speakers/>

<EventDetails openForm={()=>setOpenForm(true)} />

{openForm && <RegisterPopup closeForm={()=>setOpenForm(false)}/>}

</div>
)
}

export default Input