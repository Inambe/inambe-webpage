import React from "react"
import { Link } from "gatsby"
import { FaCalendarAlt } from "react-icons/fa"
import Tag from "./tag"
import CardHeading from "./blog/cardHeading"
import { getBlogURL } from "../api"
import Card from "./card"

const PostLink = ({ children, slug }) => {
	return (
		<Link to={getBlogURL(slug)} className="no-underline">
			{children}
		</Link>
	)
}

function BlogPostCard({ node }) {
	return (
		<Card Component="article" className="w-full space-y-4">
			<PostLink slug={node.slug}>
				<CardHeading>{node.title}</CardHeading>
			</PostLink>
			<div
				className="content description"
				dangerouslySetInnerHTML={{
					__html: node.description.childMarkdownRemark.html,
				}}
			></div>
			<div className="flex justify-center md:justify-between items-center flex-col md:flex-row space-y-2 md:space-y-0 text-xs">
				<div>
					{node.tags.map((t, i) => (
						<Tag key={i}>{t}</Tag>
					))}
				</div>
				<div className="flex items-center">
					<FaCalendarAlt className="mr-1" />
					<time dateTime={node.publishDate}>
						{node.publishDateText}
					</time>
				</div>
			</div>
		</Card>
	)
}

export default BlogPostCard
