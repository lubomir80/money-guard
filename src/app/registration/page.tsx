import RegistrationForm from '../components/forms/RegistrationForm';

export const metadata = {
   title: "Create account",
};

function RegistrationPage() {
   return (
      <div className='justify-center items-center flex'>
         <RegistrationForm />
      </div>
   )
}

export default RegistrationPage