import React from 'react';
import { Container, Icon, Text, Date } from './style';
import { DeliveryCar } from '../Icons/DeliveryCar'
import dayjs from 'dayjs';


export const getShipmentDate = () => {
    const date = dayjs();
    const day = date.day();
    let shipmentDate;
    switch (day) {
        case 5:
            shipmentDate = date.add(3 * 24, 'hour');
            break;
        case 6:
            shipmentDate = date.add(2 * 24, 'hour');
            break;
        default:
            shipmentDate = date.add(1 * 24, 'hour');
    }
    return shipmentDate;
};

export const ShipmentDate = (props) => {
const shipmentDate = getShipmentDate();

    return (
        <Container>
            <Icon>
                <DeliveryCar />
            </Icon>
            <Text>
                Buy now and get it by <Date>{shipmentDate.format('MM/DD/YY')}</Date>
            </Text>
        </Container>

    );
}