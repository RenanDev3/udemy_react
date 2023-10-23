import React, {useState} from 'react'

import Button from '../components/Button'
import Modal from '../components/Modal'

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  function handleClick(){
    setShowModal( currentIsOpen => !currentIsOpen)
  }

  function handleClose(){
    setShowModal(false)
  }

  const actionBar = <Button danger onClick={handleClose}>Dismiss</Button>

  return (
    <div>
      <Button primary onClick={handleClick}>Modal</Button>
      { 
      showModal && 
      <Modal onClose={handleClose} actionBar={actionBar}>
      Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
      </Modal>
        }
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id quam gravida, sodales purus et, luctus felis. Sed eleifend turpis enim, quis semper ligula viverra id. Vivamus non felis at mauris tempor sollicitudin vitae vel sapien. Fusce gravida finibus tempor. Nullam condimentum viverra metus, in vulputate tortor facilisis a. Vivamus id interdum urna. Nulla facilisi. Quisque euismod enim vel mauris pharetra tincidunt. Vestibulum at neque sit amet velit vulputate pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis efficitur commodo. In augue mi, mollis sit amet dolor sit amet, aliquet aliquet dolor.</p>
      

    </div>
  )
}
