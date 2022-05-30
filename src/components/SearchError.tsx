import React, { FC } from 'react';
import { StyledSearchErrorWrapper } from '../styles/SearchError.style';
import errorSearch from '../images/ErrorSearch.png';

const SearchError:FC = () => {
	return (
		<StyledSearchErrorWrapper>
			<h2>No results found.</h2>
			<h3>Try searching for something else…</h3>
			<img alt="Error" src={errorSearch}/>
		</StyledSearchErrorWrapper>
	)
};

export default SearchError;