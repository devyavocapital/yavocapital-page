import React from "react";
import { useLocation } from "react-router-dom";
import { posts } from "../../utils/posts";

const Post = () => {
	const navigation = useLocation();
	const location = navigation.pathname.split("/")[2];

	return (
		<div className="grid mb-10">
			{posts.map(
				({ url, id, content }) =>
					url === location && (
						// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						<div key={id} dangerouslySetInnerHTML={{ __html: content }} />
					),
			)}

			<style>{`
				div > h1 {
					color: #F9A400;
					font-size: 22px;
					text-align: center;
					font-weight: bold;
					padding: 10px 0 7.5px 0;
				}
				.subtitle {
					font-size: 12px;
					font-style: italic;					
					color: #737373;
					text-align: center;
				}
				p {
					width: 80%;
					margin: 0 auto;
					padding: 5px 0 5px 0;
				}
				.list {
					width: 60%;
					margin: 0 auto;
					padding: 5px 0 5px 0;
				}
				.list > span {
					color: #F9A400;
				}
				div > h2 {
					color: #F9A400;
					font-size: 20px;
					text-align: center;
					font-weight: bold;
					padding: 5px 0 5px 0;
				}
				div > .user {
					width: 80%;
					display: grid;
					margin: 0 auto;
					> p {
						font-size: 10px;
						margin: auto;
					}
					> :nth-child(2) {
						color: #F9A400;
						font-weight: bold;
					}
					> :nth-child(4) > span {
						color: #F9A400;
						font-weight: bold;
					}
				}
				div > .avatar {
					background: #e1e1e1;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					margin: 0 10px;
				}
				div > .user {
					display: flex;
				}
				.link {
					color: #F9A400;
					border-bottom: 2px solid #F9A400;
				}

				@media (min-width: 768px) {
					div > .imgPost, video {
						width: 80%;
						height: auto;
						border-radius: 5px;
						margin: 10px auto;
						box-shadow: 8px 5px 18px -3px rgba(0,0,0,0.75);
						-webkit-box-shadow: 8px 5px 18px -3px rgba(0,0,0,0.75);
						-moz-box-shadow: 8px 5px 18px -3px rgba(0,0,0,0.75);
					}
					div > .user {
						> p, ul {
							font-size: 12px;
						}
					}
				}
				@media (min-width: 1024px) {
					p {
						width: 60%;
					}
					.list {
						width: 50%;
					}
					div > .user > p {
						font-size: 15px;
					}
					div > .avatar {
						width: 60px;
						height: 60px;
					}
					div > h1 {
						font-size: 28px;
					}
					div > h2 {
						font-size: 24px;
					}
					div > .imgPost, video {
						width: 60%;
						height: auto;
						border-radius: 5px;
						margin: 10px auto;
					}
				}
			`}</style>
		</div>
	);
};

export default Post;
