import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css'

export default function Contact ({ data: { id, name, number }, onDelete }) {
  return (
      <div className={css.container}>
          <div className={css.containerItem}>
            <div className={css.item}>
            <IoPersonSharp className={css.icon}/>
      <p>{name}</p> 
          </div>
          <div className={css.item}>
          <BsFillTelephoneFill className={css.icon}/>
      <p>{number}</p>    
      </div>  
          </div>
          
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
