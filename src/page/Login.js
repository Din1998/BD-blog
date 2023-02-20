import btnImg from '../image/google.png'


export default function Login() {

  const google = () => {
    window.open("https://server-1998.vercel.app/auth/google", "_self");
  }

  return (
    <div className="login__card">
      <div className='login__cardWraper'>
          <h1 className="login__title">login</h1>
        <div className='login__btn' onClick={google}>
          <img className='btn__img' src={btnImg} alt="" />
        </div>
      </div>
    </div>
  )
}