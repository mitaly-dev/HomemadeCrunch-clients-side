import { toast } from "react-toastify"


export const jwtToken=(email,navigation)=>{
    fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email})
    })
    .then((res=>res.json()))
    .then(data=>{
        localStorage.setItem('HomemadeCrunch-Token',data.token)
        return  navigation()
    })
    .catch(error=>toast.error(error.message,{autoClose:1000}))
}