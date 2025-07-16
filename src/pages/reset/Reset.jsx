import "./Reset.css"
import { FaArrowLeft } from 'react-icons/fa';
const Reset = () => {
    return (
        <div className='container-reset'>
            <form>
                <a href="/" className='back-arrow'><FaArrowLeft /></a>

                <h1>Reset your password</h1>

                <div className='input-field'>
                    <input type="email" placeholder='Email' />
                </div>

                <div className='input-field'>
                    <input type="text" placeholder='Verification Code' />
                </div>

                <div className='input-field'>
                    <input type="password" placeholder='New Password' />
                </div>

                <div className='input-field'>
                    <input type="password" placeholder='Confirm New Password' />
                </div>

                <button className='button-reset'>Change Password</button>
            </form>
        </div>
    );
}

export default Reset;
