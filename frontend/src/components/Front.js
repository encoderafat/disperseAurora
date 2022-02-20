import React from 'react';
import { Container, Button} from 'semantic-ui-react';

const Front = ({onButtonClick}) => {
    return (
        <Container textAlign="center">
            <Button basic color='blue' onClick={onButtonClick}>
                Connect To MetaMask
            </Button>
        </Container>
        )
}

export default Front;