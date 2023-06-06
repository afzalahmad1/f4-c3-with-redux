import React, {useState} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../redux/actions/userActions'
import {useNavigate} from 'react-router-dom'


const Signup = () => {
   let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')
   
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const handleSubmit = (e) => {
            e.preventDefault()

            if(!name || !email || !password || !confirmPassword){
               return setError('All fields are required')
            }
            if(password !== confirmPassword){
               return setError('Password do not match')
            }
     
            setSuccess('Signup successfull')


            const user ={
                name:name,email:email, password:password
            }
            const accessToken = uuidv4()

            // save to local storage 
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem('accessToken', accessToken)

            // save to redux store
            dispatch(setCurrentUser({
                user, accessToken
            }))

            // redirect to profile page
            navigate('/profile')

    }



    return(
        <div>
           {/* Create a form name, email, password, confirm password */}
         <form onSubmit={handleSubmit}>
            <input type="text"  placeholder='name'
            value={name} onChange={e => setName(e.target.value)} />

            <input type="text"  placeholder='email' 
            value={email} onChange={e => setEmail(e.target.value)} />

            <input type="password"  placeholder='password' 
            onChange={e => setPassword(e.target.value)} 
            value={password} />
            
            <input type="password"  placeholder='confirm password'
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword} />
            <button type='submit'>SignUp</button>

          </form>
            

            
            
        </div>
    )
}

export default Signup;





// function generateAccessToken(){
//      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&%$#@!*"
//       let token = ""
//      for(let i = 0; i<16; i++){
//             let randomIndex = Math.floor(Math.random() * letters.length)
//             token += letters[randomIndex]
//      }

// }