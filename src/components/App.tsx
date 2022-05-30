import React, {FC} from 'react';
import { StyledApp, StyledWrapperFilters } from '../styles/App.style';
import { useCallback, useEffect, useState } from 'react';
import DataGrid from './DataGrid';
import Pagination from './Pagination';
import SearchError from './SearchError';
import SearchInput from './SearchInput';
import jsonData from '../data/data.json';

const ITEMS_PAGE = 10;

const App:FC = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	const handleChange = event => {
		const value = event.target.value;
		const array = data.filter(item =>
			item.title.includes(value) || item.description.includes(value)
		)

		setFilteredData(array.slice(0, ITEMS_PAGE));
		setCurrentPage(0);
	};

	const handlePagination = event => {
		const pageNumber = parseInt(event.target.dataset.pageNumber);
		const nextPageNumber = pageNumber + 1;

		setCurrentPage(pageNumber);
		setFilteredData(data.slice(pageNumber * ITEMS_PAGE, nextPageNumber * ITEMS_PAGE));
	}

	const getNumberPages = useCallback(() => Math.ceil(data.length / ITEMS_PAGE), [data]);

	useEffect(()=> {
		setData(jsonData);
	}, [])

	useEffect(() => {
		setFilteredData(data.slice(0, ITEMS_PAGE));
	}, [data]);

	if(!data.length) {
		return;
	}

	return (
		<StyledApp>
			<h1>Grid View Project</h1>
			<StyledWrapperFilters>
				<SearchInput onChange={handleChange}/>
				<Pagination
					currentPage={currentPage}
					onClick={handlePagination}
					numberOfPages={getNumberPages()}
				/>
			</StyledWrapperFilters>
			{
				!!filteredData.length
					? <DataGrid data={filteredData}/>
					: <SearchError/>
			}
		</StyledApp>
	);
}

export default App;