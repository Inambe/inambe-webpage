import React from "react"
import { Link } from "gatsby"
import Tag from "./tag"

const PostLink = ({ children, slug }) => {
	return (
		<Link to={`/blog/${slug}`} className="no-underline">
			{children}
		</Link>
	)
}

function BlogPostCard({ node }) {
	return (
		<article className="shadow rounded bg-white hover:shadow-md">
			<div className="p-4 space-y-2">
				<PostLink slug={node.slug}>
					<h2 className="leading-snug text-3xl font-extrabold">
						{node.title}
					</h2>
				</PostLink>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: node.description.childMarkdownRemark.html,
					}}
				></div>
				<div className="flex justify-between items-center text-xs font-bold">
					<div>
						{node.tags.map((t, i) => (
							<Tag key={i}>{t}</Tag>
						))}
					</div>
					<time dateTime={node.publishDate}>
						{node.publishDateText}
					</time>
				</div>
			</div>
		</article>
	)
}

export default BlogPostCard
