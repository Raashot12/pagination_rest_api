import React, { useState, useEffect } from 'react';
import './App.css';
const Posts = () => {
	const [posts, setPosts] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [postNumber] = useState(5)


	const currentPageNumber = (pageNumber * postNumber) - postNumber
	const paginatedPosts = posts.splice(currentPageNumber, postNumber)

	const handlePrev = () => {
		if (pageNumber === 1) return
		setPageNumber(pageNumber - 1)
	}
	const handleNext = () => {
		setPageNumber(pageNumber + 1)
	}

	useEffect(() => {

		fetch('https://jsonplaceholder.typicode.com/posts?_limit=100')
			.then(res => res.json())
			.then(data => {
				setPosts(data)
			})
	})
	return (
		<div className='main'>
			<h2>Posts</h2>
			{paginatedPosts.map(({ id, title, body }) => (
				<div key={id}>
					<h2>{title} </h2>
					<p>{body} </p>
				</div>
			))}
			<div>Page {pageNumber} </div>
			<div>
				<button onClick={handlePrev} >prev</button>
				<button onClick={handleNext}>next</button>
			</div>
		</div>
	);
};
export default Posts;