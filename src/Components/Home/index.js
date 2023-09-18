import { useState, useEffect } from "react";
import './index.css'

const Home = () => {
    const [list, setList] = useState([]);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    useEffect(() => {
        const getDetails = async () => {
            const response = await fetch("https://00lohit.com/api/interview");
            const data = await response.json();
            setList(data.data)
            console.log(list);


        }
        getDetails();
    }, []);

    return (
        <div className="main-container">
            <div className="app-container">
                <div>
                    <form id="addUserForm" className="form">
                        
                        <p className='left'>Name</p>
                        <input type="text" name="" id="name" value={name} className="input" placeholder="Ente Your Name" onChange={e=>setName(e.target.value)} />

                        <p className='left'>Password</p>
                        <input type="password" name="" id="PWD" value={email}  className="input" placeholder="Email" onChange={e=>setEmail(e.target.value)} required />
                        <p id="emailErrMsg"></p>


                        <div className="button-container">
                            <button className="button" type='submit' >submit</button>
                        </div>

                    </form>
                </div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className="image-container">
                {list.map((each, index) => {
                    return <img src={each.url} className="img" key={index} alt={each.url}/>
                })}
            </div>
            
        </div>
    )

}
export default Home;