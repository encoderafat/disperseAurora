import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Divider, Card } from 'semantic-ui-react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../web3/connectors';
import { Balance} from '../components/WalletConnector';
import Front from '../components/Front';

const Home = () => {
    const { chainId, account, activate, active } = useWeb3React();

    const onButtonClick = () => {
        activate(injectedConnector);
    }
    
    const ellipsify = (str) => {
      if (str.length > 7) {
        return (str.substring(0, 7) + "...");
      }
      else {
          return str;
      }
    }

    const Wallet = () => {
        return (
          <div>
            <Card>
              <Card.Header>
              </Card.Header>
              {active ? (
                <Card.Content>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                    ChainId
                    </Button>
                    <Button basic color='green'>
                    {chainId}
                    </Button>
                  </div>
                  <div className='ui two buttons'>
                    <Button basic color='green'>
                    Account
                    </Button>
                    <Button basic color='green'>
                    {ellipsify(account)}
                    </Button>
                  </div>
                </Card.Content>
              
            ) : (
              <Button basic color='green' onClick={onButtonClick}>
                Connect To MetaMask
              </Button>
            )}
            
            {active && 
            <>
              <Balance />
            </>
            }
            </Card>
          </div>
        )
      }

      if (active) {
          return (
                <Grid centered>
                    <Grid.Row>
                        <Wallet />
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column textAlign="center">
                        <Grid.Row>
                          <h4>Disperse Native Currency</h4>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                          <Button basic color='green' as={Link} to='/Native'>Disperse Currency</Button>
                        </Grid.Row>
                      </Grid.Column>
                      <Grid.Column textAlign="center">
                        <Grid.Row>
                          <h4>Disperse ERC20 Tokens</h4>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                          <Button basic color='green' as={Link} to='/Tokens'>Disperse Tokens</Button>
                        </Grid.Row>
                      </Grid.Column>
                    </Grid.Row>
                </Grid>
          )
      }

      return (
        <div>
          <Front onButtonClick={onButtonClick} />
        </div>
      )

}

export default Home;