const { useState, useEffect } = require("react")

const useToken = email => {
    const [token, setToken] = useState('')

    

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email]);
    return [token]
}

export default useToken