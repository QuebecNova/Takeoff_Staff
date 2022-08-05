import React, { ReactNode } from 'react'
import classes from './modal.module.scss'

type Props = {
  visible: boolean,
  setModal: (isOpen: boolean) => void,
  children?: ReactNode
}

export default function Modal({children, visible, setModal} : Props) {

    const rootClasses = [classes.modal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    
  return (
    <div className={rootClasses.join(' ')} onMouseDown={() => setModal(false)}>
        <div className={classes.modalContent} onMouseDown={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}