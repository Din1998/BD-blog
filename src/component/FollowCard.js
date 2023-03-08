import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function FollowCard() {

  return(
    <div className="follow__card">
      <h3>Follow us</h3>
      <div className='follow__icons'>
        <FontAwesomeIcon className="follow_icon" icon={faTwitter} />
        <FontAwesomeIcon className="follow_icon" icon={faFacebook} />
        <FontAwesomeIcon className="follow_icon" icon={faInstagram} />
        <FontAwesomeIcon className="follow_icon" icon={faYoutube} />
      </div>
    </div>
  )
}

