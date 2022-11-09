import { toast } from "react-toastify"


export const jwtToken=(email,navigation,loading)=>{
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
        if(loading){
           return <div className="min-h-screen flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
           </div>
        }
        return  navigation()
    })
    .catch(error=>toast.error(error.message,{autoClose:1000}))
}