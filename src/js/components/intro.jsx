import React from 'react';
import styled from 'styled-components';
import CardList from 'js/containers/card-list';

const Title = styled.h2`
	font-size: 30px;
	text-align: center;
	margin: 60px 0;
`;

export default () => (
	<div>
		<Title>Welcome to Garousian Studio React/Redux Starter Kit! :)</Title>		
		<CardList />
	</div>
);