import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Form } from './components/Form'
import { DevelopersProvider } from './hooks/useDevelopers'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {

  const [openModal, setOpenModal] = useState(false)

  function handleOpenNewDevModal(){
    setOpenModal(true)
  }

  function handleCloseNewDevModal(){
    setOpenModal(false)
  }

  return (
    <DevelopersProvider>
      <Header onOpenNewDev={handleOpenNewDevModal} />

      <Main />

      <Form 
        isOpen={openModal}
        onRequestClose={handleCloseNewDevModal}
      />

      <GlobalStyle />
    </DevelopersProvider>
  );
}

