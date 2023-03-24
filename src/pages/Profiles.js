import { useParams } from "react-router-dom";

const data ={
    p1:{
        name: "person1",
        description: "person1 description"
    },
    P2:{
        name: "person2",
        description:"person2 description"
    }
}

function Profile(){
    const params = useParams()
    const profile = data[params.username]
    return(
        <div>
            <h1>user profile</h1>
            {
                profile ? (<div><h2>{profile.name}</h2><p>{}</p></div>):(<p></p>)
            }
        </div>
    )
}