import { useState } from 'react'
import Modal from './components/common/modal'

function App() {
  const [visible, setVisible] = useState(false)
  const onModalClose = () => {
    console.log('modal close');
    setVisible(false);
  }
  const onModalConfirm = () => {
    console.log('modal confirm');
    setVisible(false);
  }

  return (
    <div className="App">
      <Modal 
        visible={visible}
        title="登录"
        onClose={onModalClose}
        onConfirm={onModalConfirm}
      >
        <div>
          <h3>这里是自定义内容区域</h3>
          <p>!!!!!!!</p>
        </div>
      </Modal>
      <button onClick={() => setVisible(true)}>click here</button>
    </div>
  )
}

export default App
