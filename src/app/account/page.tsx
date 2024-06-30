
import Modal from "../components/Modal"
import AddForm from "../components/forms/AddForm"
import EditForm from "../components/forms/EditForm"


function AccountPage() {



   return (
      <div className='py-12 px-12 '>
         <div>
            <Modal>
               <AddForm />
            </Modal>
         </div>
      </div>
   )
}

export default AccountPage