import LoginForm from '../components/forms/LoginForm';



export const metadata = {
   title: "Login",
};



function LoginPage() {
   return (
      <div className='justify-center items-center flex'>
         <LoginForm />
      </div>
   )
}

export default LoginPage