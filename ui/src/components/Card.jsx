import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: ${(props) => props.type !== "sm" && "260px"};
	margin-bottom: ${(props) => (props.type === "sm" ? "12px" : "45px")};
	cursor: pointer;
	display: ${(props) => props.type === "sm" && "flex"};
	gap: 10px;
`;

const Image = styled.img`
	width: 100%;
	height: ${(props) => (props.type === "sm" ? "100px" : "150px")};
	background-color: #999;
	flex: 2;
`;

const Details = styled.div`
	display: flex;
	margin-top: ${(props) => props.type !== "sm" && "16px"};
	gap: 12px;
	flex: 1;
`;

const ChannelImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: #999;
	display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
	margin: 9px 0px;
`;

const Info = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
	return (
		<Link to="/video/test" style={{ textDecoration: "none" }}>
			<Container type={type}>
				<Image type={type} src="" />
				<Details type={type}>
					<ChannelImage
						type={type}
						src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
					/>
					<Texts>
						<Title>Test video</Title>
						<ChannelName>Juand</ChannelName>
						<Info>777.000 views • 1 dat ago</Info>
					</Texts>
				</Details>
			</Container>
		</Link>
	);
};

export default Card;