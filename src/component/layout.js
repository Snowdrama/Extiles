import React, { Component } from 'react';
import styled from 'styled-components';
import { Phone, Tablet, Laptop, Desktop } from '../style/responsive';
import { LightGrey, LemonGreen, LightLemonGreen } from '../style/color';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;

    background-color: ${ LightGrey };
`;

const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    width: 15em;

    background-color: ${ LemonGreen };
    color: ${ LightLemonGreen };
`;

const DropArea = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 10em;
    height: 10em;
    margin: 1em;
    padding: .5em;

    border: .5em dashed ${ LightLemonGreen };
    border-radius: .5em;
`;

export default () => class Layout extends Component {
    render() {
        return (
            <Container>
                <Sidebar>
                    <DropArea>
                        Drop your sprite file here.
                    </DropArea>
                </Sidebar>
            </Container>
        );
    }
}
