import Navbar from '../../Components/Navbar'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './Classlist.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Classlist() {
    return (
        <div className='classlist-container'>
            <Navbar />
            <div className='classlist-content'>
                <h2>Danh sách sinh viên</h2>
                <hr />
                <ul>
                    <li>
                        Ai đó
                        <div>
                            <FontAwesomeIcon icon={faPenToSquare} className='edit-icon' border />
                        </div>
                    </li>
                    <li>Ai đó</li>
                    <li>Ai đó</li>
                    <li>Ai đó</li>
                    <li>Ai đó</li>
                    <li>Ai đó</li>
                    <li>Ai đó</li>
                </ul>
            </div>
        </div>
    )
}

export default Classlist