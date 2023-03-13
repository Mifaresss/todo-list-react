import React from 'react';
import s from './Modal.module.css';

export function Modal(props) {
   return (
      <div className={props.visibleModal ? [s.modal, s.visible].join(' ') : s.modal} onClick={() => props.setVisibleModal(false)}>
         <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            <p className={s.modalTitle}>{props.text}</p>
            <div className={s.answerWrapper}>
               <button className={s.modalButton} onClick={() => props.deleteTodo(props.id)}>Confirm</button>
               <button className={s.modalButton} onClick={() => props.setVisibleModal(false)}>
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
}
