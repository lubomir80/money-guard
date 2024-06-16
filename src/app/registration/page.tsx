import RegisterForm from '../components/forms/RegisterForm';

export const metadata = {
   title: "Create account",
};

function RegistrationPage() {
   return (
      <div className='justify-center items-center flex'>
         <RegisterForm />
      </div>
   )
}

export default RegistrationPage