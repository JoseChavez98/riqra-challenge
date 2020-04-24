import React from 'react';
import { Container, Icon,Text,Date } from './style';
import {DeliveryCar} from '../Icons/DeliveryCar'


export const ShipmentDate = (props) =>{


    return ( 
        <Container>
            <Icon>
                <DeliveryCar />
            </Icon>
            <Text>
        Buy now and get it by <Date>{"10/10/01"}</Date>
      </Text>
        </Container>

    );
}