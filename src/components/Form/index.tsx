import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { useDevelopers } from '../../hooks/useDevelopers'

import { Container, AreaDev } from "./styles";

interface formProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function Form( {isOpen, onRequestClose} : formProps ){

    const { createDeveloper } = useDevelopers();

    const [backgroundButtonAreaAtuacao, setBackgroundButtonAreaAtuacao] = useState('');

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [about, setAbout] = useState('');


    async function handleCreateNewDev(event: FormEvent){
        event.preventDefault();
        
        await createDeveloper({
            name,
            age,
            city,
            about,
            backgroundButtonAreaAtuacao
        })
        
        
        setName('');
        setAge(0);
        setCity('');
        setAbout('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className="react-modal-content"
        >   

            

            <Container onSubmit={handleCreateNewDev}>

                <button
                    type="button"
                    onClick={onRequestClose}
                    className="closeModal"
                >
                    <p>X</p>
                </button>

                <h2>Cadastrar Dev</h2>

                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={ event => setName(event.target.value )}
                />

                <input
                    type="number"
                    placeholder="Idade"
                    value={age}
                    onChange={ event => setAge(Number(event.target.value ))}
                />

                <input
                    placeholder="Cidade"
                    value={city}
                    onChange={ event => setCity(event.target.value )}
                />

                 <p>Selecione sua area de atuação</p>
                 <div>
                    <AreaDev
                        type="button"
                        onClick={()=>{setBackgroundButtonAreaAtuacao('front')}}
                        isActive={backgroundButtonAreaAtuacao === 'front'}
                        activeColor='red'
                    >
                        <span>Front-End</span>
                    </AreaDev>

                    <AreaDev
                        type="button"
                        onClick={()=>{setBackgroundButtonAreaAtuacao('back')}}
                        isActive={backgroundButtonAreaAtuacao === 'back'}
                        activeColor='blue'
                    >
                        <span>Back-End</span>
                    </AreaDev>

                    <AreaDev
                        type="button"
                        onClick={()=>{setBackgroundButtonAreaAtuacao('full')}}
                        isActive={backgroundButtonAreaAtuacao === 'full'}
                        activeColor='violet'
                    >
                        <span>Full-Stack</span>
                    </AreaDev>

                </div>

                <textarea name="Sobre" placeholder="Sobre" value={about}
                    onChange={ event => setAbout(event.target.value )}></textarea>

                <button type="submit">Cadastrar</button>



            </Container>

        </Modal>

        
    )
}