import React, { Component } from 'react';
import styled from 'styled-components';
import { Phone, Tablet, Laptop, Desktop } from '../style/responsive';
import { Colors } from '../style/color';
import { FontSizes } from '../style/size';
import { CloseButton, MaximizeButton, MinimizeButton } from './button/window-buttons';
import { Sidebar } from './sidebar/sidebar';
import { DownloadButton } from './sidebar/sidebar-components/download-button';
import { ExtrudeWidth, TileSize } from './sidebar/sidebar-components/sliders';

const topBarHeight = '2.5em';

const WindowTitle = styled.div`
    float:left;
    font-size:${ FontSizes.XLargeFont };
    padding:2px 10px;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;

    background-color: ${ Colors.LightGrey };
    font-family: 'Concert One', cursive;
`;

const Topbar = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    height: ${ topBarHeight };
    background-color: ${ Colors.LemonOrange };
`;

const TopbarButtonContainer = styled.div`
    float: right;
`;
const Panel = styled.div`
    background-color: ${ Colors.DarkLemonGreen };
    padding:5px;
    margin 5px 0px;
    border-radius:3px;
`;


export default () => class Layout extends Component {
    render() {
        return (
            <Container>
                <link href="https://fonts.googleapis.com/css?family=Concert+One|Varela+Round" rel="stylesheet"/>
                <Topbar>
                    <WindowTitle>Extiles</WindowTitle>
                    <TopbarButtonContainer>
                        <MinimizeButton />
                        <MaximizeButton />
                        <CloseButton />
                    </TopbarButtonContainer>
                </Topbar>
                <Sidebar>
                    <Panel>
                        Tile Size<br/>
                        <TileSize />
                    </Panel>

                    <Panel>
                        Extude Width<br/>
                        <ExtrudeWidth />
                    </Panel>

                    <Panel>
                        Preview<br/>
                        Image Preview will go here
                    </Panel>
                    
                    <DownloadButton>
                        Download
                    </DownloadButton>
                </Sidebar>
            </Container>
        );
    }
}
