// import { useState } from 'react'; 
// import { IoPersonSharp } from 'react-icons/io5';
// import { BsFillTelephoneFill } from 'react-icons/bs';
// import { MdDelete } from "react-icons/md"; 
// import { FaUserEdit } from "react-icons/fa";
// import css from './Contact.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContacts, changeContact } from '../../redux/contacts/operations'; 



// const Contact = ({ contact }) => {
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false); 
//   const [updatedContact, setUpdatedContact] = useState(contact ? {
//   id: contact.id,
//   name: contact.name,
//   number: contact.number
// } : { id: '', name: '', number: '' });


//   const handleSave = () => {
//   if (
//     updatedContact.name.trim() !== contact.name.trim() ||
//     updatedContact.number.trim() !== contact.number.trim()
//   ) {
//     dispatch(changeContact({ contactId: updatedContact.id, data: updatedContact }))
//       .then((result) => {
//         console.log('Contact updated successfully:', result);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error('Failed to update contact:', error);
//       });
//   } else {
//     console.error('No changes made.');
//     setIsEditing(false); 
//   }
// };


//   const handleDelete = () => {
//     dispatch(deleteContacts(contact.id));
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedContact({
//       ...updatedContact,
//       [name]: value,
//     });
//   };

//   return (
//     <li className={css.item} key={contact.id}>
//       <div className={css.container}>
//         <div className={css.containerItem}>
//           <div className={css.item}>
//             <IoPersonSharp className={css.icon} />
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="name"
//                 value={updatedContact.name}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               <p className={css.text}>{contact.name}</p>
//             )}
//           </div>
//           <div className={css.item}>
//             <BsFillTelephoneFill className={css.icon} />
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="number"
//                 value={updatedContact.number}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               <p className={css.text}>{contact.number}</p>
//             )}
//           </div>
//         </div>
//         {isEditing ? (
//           <button className={css.button} onClick={handleSave}>
//             Save
//           </button>
//         ) : (
//           <div className={css.buttonContainer}>
//             <button
//               className={css.button}
//               onClick={() => setIsEditing(true)}
//             >
//               Edit
//               <FaUserEdit className={css.edit} />
//             </button>
//             <button
//               className={css.button}
//               onClick={handleDelete}
//             >
//               Delete
//               <MdDelete className={css.delete} />
//             </button>
//           </div>
//         )}
//       </div>
//     </li>
//   );
// };

// export default Contact;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts, changeContact } from '../../redux/contacts/operations';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { IoPersonSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdDelete } from "react-icons/md"; 
import { FaUserEdit } from "react-icons/fa";
import { Modal, Input, Button } from 'antd';
import css from './Contact.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const handleDeleteContact = contactId => {
    Confirm.show(
      'Delete contact',
      'Are you sure you want to delete this contact?',
      'Yes',
      'No',
      () => {
        dispatch(deleteContacts(contactId));
        Notify.failure(`Contact deleted`);
      },
      () => {
        return;
      },
      {
        titleColor: '#4f46e5',
        okButtonBackground: '#4f46e5',
      }
    );
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(
      changeContact({
        id: contact.id,
        name: newName,
        number: newNumber,
      })
    );
  };
  return (
    <>
      <li className={css.item} key={contact.id}>
        <div className={css.container} >
<div className={css.itemContainer}>
          <div className={css.item}>
            <IoPersonSharp className={css.icon} />
            <p className={css.text}>{contact.name}</p>
          </div>
          <div className={css.item}>
            <BsFillTelephoneFill className={css.icon} />
            <p className={css.text}>{contact.number}</p>
          </div>
        </div>
        {
            <div className={css.buttonContainer}>
            <button
                  className={css.button}
              type="button"
              name="edit"
              onClick={() => setShowModal(true)}
            >
                Edit
                <FaUserEdit className={css.edit} />
            </button>
            <button
              className={css.button}
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(contact.id)}
            >
                Delete
             <MdDelete className={css.delete} />
            </button>
          </div>
        }
        </div>
        
      </li>

      <Modal
  open={showModal}
  onCancel={handleCancel}
  className={css.modal}
  footer={
    <div className={css.buttonBox}>
      <Button
        className={css.button}
        key="cancel"
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        className={css.button}
        key="save"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  }
>
  <div className={css.modalContent}>
    <label className={css.text}>New Name:</label>
    <Input
      type="text"
      value={newName}
      onChange={handleNameChange}
      required
    />
    <label className={css.text}>New Number:</label>
    <Input
      type="text"
      value={newNumber}
      onChange={handleNumberChange}
      required
    />
  </div>
</Modal>
    </>
  );
};

export default ContactItem;