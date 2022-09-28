import { ReactNode } from 'react'
import '../assets/style/modal.css'

interface MyProps{
  children: ReactNode
  isOpen: boolean | (() => void)
  closeModal: boolean | (() => void)
}

const Modal = ({children, isOpen, closeModal}:MyProps) => {
  const handleModalContainerClick = (e: { stopPropagation: () => void }) => e.stopPropagation();

  return (
    <>
      <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close" onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </>
  )
}

export default Modal