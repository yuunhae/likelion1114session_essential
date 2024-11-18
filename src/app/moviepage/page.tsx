'use client'

import StyledFont from "./components/StyledFont";
import StyledColumn from "./components/StyledColumn";
import StyledGrid from "./components/StyledGrid";
import { useEffect, useState } from "react";
import { fetchNowPlayingMovies } from "@/lib/apiClient";
import styled from "styled-components";

export default function MoviePage() {
	const [movies, setMovies] = useState<any[]>([]); //영화 데이터를 저장할 상태 변수 
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w500' //이미지 URL 기본 경로

	const MovieContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		width: 100%;
	`
	const MovieTitle = styled.div`
		color: #fff;
		font-weight: bold;
		margin-top: 10px;
		font-size: 20px;
	`

	useEffect(() => {
		async function loadMovies() {
			try {
				const moviewData = await fetchNowPlayingMovies();
				setMovies(moviewData);
				console.log(moviewData);
			} catch (error) {
				console.error(error)
			}}
		loadMovies();
	}, [])

	return (
		<StyledColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<StyledFont $color="white" $font='1.5rem'>
				상영중인 영화
			</StyledFont>
			{/* 여기에 /movie/now_playing API의 result를 그리드 형태로 반복출력! */}
			<StyledGrid $columns="1fr 1fr 1fr" $gap="10px">
				{movies.map((movie) => (
					<MovieContainer key={movie.id}>
						<img src={`${imageBaseUrl}/${movie.poster_path}`} width='50%'/>
						<MovieTitle>
							{movie.original_title}
						</MovieTitle>
					</MovieContainer>
				))}
			</StyledGrid>
		</StyledColumn>
	);
}