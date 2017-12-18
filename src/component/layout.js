import React, { Component } from 'react';
import styled from 'styled-components';
import { Phone, Tablet, Laptop, Desktop } from '../style/responsive';
import { LightGrey, LemonGreen, LightLemonGreen, LemonOrange } from '../style/color';
import { CloseButton, MaximizeButton, MinimizeButton } from './button/window-buttons';

const topBarHeight = '2.5em';

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

const Topbar = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    height: ${topBarHeight};
    background-color: ${ LemonOrange };
`;

const TopbarButtonContainer = styled.div`
    float: right;
`;

const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: ${topBarHeight};
    bottom: 0;

    width: 15em;

    background-color: ${ LemonGreen };
    color: ${ LightLemonGreen };
`;

export default () => class Layout extends Component {
    render() {
        return (
            <Container>
                <Topbar>
                    Extiles
                    <TopbarButtonContainer>
                        <MinimizeButton />
                        <MaximizeButton />
                        <CloseButton />
                    </TopbarButtonContainer>
                </Topbar>
                <Sidebar />
            </Container>
        );
    }
}
