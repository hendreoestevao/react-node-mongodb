import React, {useState}from 'react'
import './styles.css'


import { AiOutlineExclamationCircle, AiTwotoneDelete } from 'react-icons/ai';
import api from '../../services/api';

function Notes({ data, handleDelete }){
  const [ changedNote, setChangedNote] = useState('');

  async function handleSave(e, notes){
    if(changedNote && changedNote !== notes){
      await  api.post(`/contents/${data._id}`,{
        notes:changedNote,
      })
    }
  }
    return(
       <>
       <li className="notepad-infos">
            <div>
              <strong>{data.title}</strong>
              <div>
                <AiTwotoneDelete 
                onClick={()=> handleDelete(data._id)}
                />
              </div>
            </div>
            <textarea defaultValue={data.notes} 
            onChange={e => setChangedNote(e.target.value)}
            onBlur={e => handleSave(e.target, data.notes)}
            />
            <span>
              < AiOutlineExclamationCircle />
            </span>
          </li>
          
          </>
    )
}


export default Notes;