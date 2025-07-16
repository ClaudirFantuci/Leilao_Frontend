import './Register.css';
import { FaArrowLeft } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='container-register'>
            <form>
                <a href="/" className='back-arrow'><FaArrowLeft /></a>

                <h1>Let’s get started!</h1>
                <div className='input-field'>
                    <input type="text" placeholder='Name' />
                </div>
                <div className='input-field'>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='password' />
                    <p>At least 6 characters, with uppercase, lowercase, number, and special character.</p>
                </div>
                <button className='button-register'>Create your account</button>
            </form>
        </div>
    );
}

export default Register;
