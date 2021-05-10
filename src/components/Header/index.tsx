import { 
    Container, 
    BoxHeader,
} from './styles'

interface HeaderProps {
    onOpenNewDev: () => void;
}

export function Header( {onOpenNewDev} : HeaderProps ) {
    return (
        <Container>
            <BoxHeader>
                <h1>Developers</h1>
                <button
                    type="button"
                    onClick={onOpenNewDev}
                >
                    CADASTRAR
                </button>
            </BoxHeader>
        </Container>
    )
}