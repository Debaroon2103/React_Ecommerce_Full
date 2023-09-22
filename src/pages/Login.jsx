import React from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { addUser, removeUser } from '../Redux/bazarslice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider).then((result) => {
            const user = result.user
            dispatch(addUser({
                id: user.uid,
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,

            }))

            setTimeout(()=>{
                navigate("/")
            },1500)


        }).catch((error) => {
            console.log(error)
        })
    }

    const signOutBtn = () => {
        signOut(auth).then(() => {
            toast.success("Logged Out Succesfully")
            dispatch(removeUser())

            setTimeout(()=>{
                navigate("/")
            },1500)

        }).catch((e) => (
            console.log(e)
        ))
    }






    return (
        <div className='w-full flex flex-row items-center justify-center gap-10 py-20'>
            <div className='w-full flex flex-row items-center justify-center gap-5 ' >


                <div className='border-[1px] flex flex-row items-center gap-6 py-5 px-5 hover:cursor-pointer' onClick={handleGoogleLogin}>
                    <BsGoogle /><h3>Sign Up With Google</h3>
                </div>

                <button onClick={signOutBtn} className='bg-black text-white py-3 px-6 active:bg-gray-800 absolute mt-36'>Sign Out</button>
            </div>
            <ToastContainer position='top-left' autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />

        </div>
    )
}

export default Login