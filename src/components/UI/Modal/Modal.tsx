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
    <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
        <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}