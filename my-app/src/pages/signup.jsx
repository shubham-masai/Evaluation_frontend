import { useState } from "react";
import axios from "axios"
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");
    const [msg, setMsg] = useState("");
    const handleLogin = async () => {
        const paylaod = { email, password,password,name,age,city };
        console.log(paylaod);
        try {
            const response = axios.post("https://troubled-pear-crocodile.cyclic.app/users/register", paylaod);
            if (response.status == 200) {
                console.log("Account created");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <input type="text" placeholder="name"
                value={name} onChange={(e) => { setName(e.target.value) }} />

            <input type="text" placeholder="city"
                value={city} onChange={(e) => { setCity(e.target.value) }} />

            <input type="text" placeholder="age"
                value={age} onChange={(e) => { setAge(e.target.value) }} />

            <input type="email" placeholder="email"
                value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <input type="password" placeholder="password"
                value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleLogin}>login</button>
        </div>
    )
}
export { SignUp };