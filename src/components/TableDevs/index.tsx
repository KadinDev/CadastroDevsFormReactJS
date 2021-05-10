import { Container } from './style'

import {  useDevelopers } from '../../hooks/useDevelopers'

export function TableDevs(){

    const { developers } = useDevelopers()

    return (
        <Container>

            <h1>DEVELOPERS</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Idade</th>
                        <th>Atuação</th>
                        <th>Cadastrado</th>
                    </tr>
                </thead>

                <tbody>
                    { developers.map(developer => (
                        
                        <tr key={developer.id}>
                            <td> {developer.name} </td>
                            <td> {developer.city} </td>
                            <td> {developer.age} Anos</td>
                            <td className={developer.backgroundButtonAreaAtuacao}> {developer.backgroundButtonAreaAtuacao} </td>
                            <td> 
                                {
                                    new Intl.DateTimeFormat('pt-Br').format(
                                        new Date(developer.createdAt)
                                    )
                                } 
                            </td>                        
                        </tr>

                    ) ) }
                </tbody>
            </table>

        </Container>
    )
}