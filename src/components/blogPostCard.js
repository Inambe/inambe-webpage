import React from "react"
import Image from "gatsby-image"
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
		<article
			data-sal="fade"
			data-sal-duration="500"
			data-sal-delay="150"
			className="shadow rounded bg-white"
		>
			<div className="relative rounded rounded-b-none overflow-hidden">
				<div className="absolute top-2 left-2 z-10 space-x-2">
					{node.tags.map((t, i) => (
						<Tag key={i}>{t}</Tag>
					))}
				</div>
				<PostLink slug={node.slug}>
					<Image
						fluid={node.heroImage.fluid}
						className="transition-transform transform hover:scale-110"
					/>
				</PostLink>
			</div>
			<div className="p-4 space-y-4">
				<PostLink slug={node.slug}>
					<h2 className="leading-snug text-xl font-bold">
						{node.title}
					</h2>
				</PostLink>
				<p>{node.description.description}</p>
				<div className="text-xs font-bold">
					<time dateTime={node.publishDate}>
						{node.publishDateText}
					</time>
				</div>
			</div>
		</article>
	)
}

export default BlogPostCard
