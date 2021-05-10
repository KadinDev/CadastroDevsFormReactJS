import { type } from 'os'
import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext
} from 'react'

import { api } from '../services/api'

interface Developer {
    id: number;
    name: string;
    age: number;
    city: string;
    about: string;
    backgroundButtonAreaAtuacao: string;
    createdAt: string;
}

type DeveloperInput = Omit<Developer, 'id'| 'createdAt' >

interface DevelopersProviderProps {
    children: ReactNode;
}

interface DevelopersContextData {
    developers: Developer[];
    createDeveloper: ( developer: DeveloperInput ) => Promise<void>;
}

const DevelopersContext = createContext<DevelopersContextData>(
    {} as DevelopersContextData
);

export function DevelopersProvider( {children}: DevelopersProviderProps ){
    const [developers, setDevelopers] = useState<Developer[]> ([])

    useEffect( () => {
        api.get('developers')
        .then( response => setDevelopers(response.data.developers) )
    }, [] );


    async function createDeveloper(developerInput: DeveloperInput){
        const response = await api.post('/developers', {
            ... developerInput,
            createdAt: new Date(),
        })

        const { developer } = response.data

        setDevelopers([
            ... developers,
            developer
        ])
    }

    return (
        <DevelopersContext.Provider value={ {developers, createDeveloper} }>
            {children}
        </DevelopersContext.Provider>
    )
}

export function useDevelopers() {
    const context = useContext(DevelopersContext)

    return context
}