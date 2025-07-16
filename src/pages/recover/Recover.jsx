import "./Recover.css";
import { FaArrowLeft } from 'react-icons/fa';


const Recover = () => {

    return (
        <div className="container-recover">
            <form >
                <a href="/" className='back-arrow'><FaArrowLeft /></a>
                <h1>Reset your password</h1>
                <p>Enter your user account's verified email address and<br /> we will send you a password reset link.</p>
                <div className='input-field'>
                    <input type="email" placeholder='Email' />
                </div>
                <button className='button-recover'>Send</button>

            </form>
        </div>
    );
};

export default Recover;