import { StyledSearhInputWrapper, StyledLabel, StyledInput } from "../styles/SearchInput.style"
import React, { FC, ChangeEventHandler } from 'react';

interface SearchInputProps {
	onChange: ChangeEventHandler,
}

const SearchInput:FC <SearchInputProps> = ({onChange}) => {
	return (
		<StyledSearhInputWrapper>
			<StyledLabel htmlFor="search">Search here</StyledLabel>
			<StyledInput
				type="text"
				placeholder="Search here…"
				id="search"
				name="search"
				onChange={onChange}
			/>
		</StyledSearhInputWrapper>
	)
}

export default SearchInput;