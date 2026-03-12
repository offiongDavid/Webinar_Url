import { useState } from "react"
import axios from "axios"

const RegisterPopup = ({closeForm}) => {

const [form,setForm] = useState({
email:"",
name:"",
level:"",
expectations:"",
questions:""
})

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}

const handleSubmit = async(e)=>{
e.preventDefault()

await axios.post(
"/api/register",
{
    email: form.email,
    name: form.name,
    level: form.level,
    expectations: form.expectations,
    questions: form.questions
  }
)

alert("Registration Successful")

closeForm()
}

return(

<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

<div className="bg-white p-10 rounded-lg w-[500px]">

<h2 className="text-2xl font-bold mb-6">
Webinar Registration
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="email"
name="email"
placeholder="Email"
required
className="w-full border p-2"
onChange={handleChange}
/>

<input
type="text"
name="name"
placeholder="Name"
required
className="w-full border p-2"
onChange={handleChange}
/>

<select
name="level"
className="w-full border p-2"
onChange={handleChange}
>

<option>Select your level</option>
<option>New to creative writing</option>
<option>Have some experience in creative writing</option>
<option>An expert in creative writing</option>
<option>I don't even know where I belong</option>

</select>

<textarea
  name="expectations"
  placeholder="What are your expectations?"
  className="w-full border p-2 truncate"
  value={form.expectations}
  onChange={handleChange}
/>

<textarea
  name="questions"
  placeholder="Questions about creative writing"
  className="w-full border p-2 truncate"
  value={form.questions}
  onChange={handleChange}
/>
<button
className="bg-blue-600 text-white px-6 py-2 rounded"
>
Submit
</button>

</form>

<button
onClick={closeForm}
className="mt-4 text-red-500"
>
Close
</button>

</div>

</div>

)
}

export default RegisterPopup    