import { useEffect, useState } from "react"
import API from "../services/api"
import AdminLogin from "../components/AdminLogin"
import logo from "../assets/speakers/logos.png"

const AdminDashboard = () => {

const [users,setUsers] = useState([])
const [password,setPassword] = useState("")

useEffect(()=>{

if(password){
fetchUsers()
}

},[password])


const fetchUsers = async()=>{

const res = await API.get(
"/admin/registrations",
{
headers:{password}
}
)

setUsers(res.data)

}


const deleteUser = async(id)=>{

await API.delete(
`/admin/registrations/${id}`,
{
headers:{password}
}
)

fetchUsers()

}

if(!password){
return <AdminLogin setPassword={setPassword}/>
}

return(

<div className="min-h-screen bg-gray-100">

{/* Header */}

<div className="bg-white shadow-sm px-10 py-4 flex justify-between items-center">

<div className="flex items-center gap-3">


<h1 className="text-xl font-bold text-blue-900">
Webinar Admin
</h1>

</div>

<button
onClick={()=>setPassword("")}
className="text-red-500 hover:text-red-700 font-semibold"
>
Logout
</button>

</div>


{/* Dashboard Content */}

<div className="p-10">

<h2 className="text-3xl font-bold mb-6 text-gray-800">
Dashboard
</h2>


{/* Stats Card */}

<div className="bg-blue-600 text-white p-6 rounded-xl w-64 mb-10 shadow-lg">

<h3 className="text-lg">
Total Registrations
</h3>

<p className="text-4xl font-bold mt-2">
{users.length}
</p>

</div>


{/* Table */}

<div className="bg-white rounded-xl shadow-md overflow-x-auto">

<table className="w-full text-left">

<thead>

<tr className="bg-gray-100 text-gray-700">

<th className="p-4">Email</th>
<th className="p-4">Name</th>
<th className="p-4">Level</th>
<th className="p-4">Expectations</th>
<th className="p-4">Questions</th>
<th className="p-4">Actions</th>

</tr>

</thead>

<tbody>

{users.map((user)=> (

<tr key={user._id} className="border-t hover:bg-gray-50">

<td className="p-4 text-sm">{user.email}</td>

<td className="p-4">{user.name}</td>

<td className="p-4">{user.level}</td>

<td className="p-4 max-w-[200px] text-sm text-gray-600">
{user.expectations}
</td>

<td className="p-4 max-w-[200px] text-sm text-gray-600">
{user.questions}
</td>

<td className="p-4">

<button
onClick={()=>deleteUser(user._id)}
className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default AdminDashboard