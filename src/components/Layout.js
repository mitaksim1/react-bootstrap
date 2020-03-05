import React from 'react';
// Composant container pour nos routes (App.js)
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container>
        {/* children = jsx qu'on a crée en codant nos routes*/}
        {props.children}
    </Container>
);