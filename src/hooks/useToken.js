import { useEffect, useState } from "react";

const useToken = user => {
    const[token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currenrUser = {email: email}
        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method:"PUT",
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log('insert token',data);
                const token = data?.token;
                localStorage.setItem('token', token)
                setToken(token);
            })
        }

    },[user]);
    return [token];
};
export default useToken;