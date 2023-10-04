import './Auth.css'
const Auth=()=>{
    return(<>
    <div className="Container-Auth">
        <form className="Main-form">
            <div className="Name">
                <label>Email</label>
                <input type='Email' className='Input_email'/>
               

            </div>
            <div className="Password">
                <label>Password</label>
                <input type='Password' className='password'/>
                

            </div>
            <div className='Login'>
            <button>LogIn</button>
            </div>
            

        </form>

    </div>
    </>)
}
export default Auth;