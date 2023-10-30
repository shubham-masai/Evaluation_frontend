import { useState } from "react";
import axios from "axios"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("");
    const handleLogin = async () => {
        const paylaod = { email, password };
        try {
            const response = axios.post("https://troubled-pear-crocodile.cyclic.app/users/login", paylaod);
            if (response.status == 200) {
                localStorage.setItem("token", response.data.token);
                console.log("login successfull");
            }
        } catch (error) {
            console.log(response.error);
        }
    }
    return (
        <div>
            <input type="email" placeholder="email"
                value={email} onChange={(e) => { setEmail(e.target.value) }} />

            <input type="password" placeholder="password"
                value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={handleLogin}>login</button>
            {msg && <p>{msg}</p>}
        </div>
    )
}
export { Login };