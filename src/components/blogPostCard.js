import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import clsx from "clsx"
import Tag from "./tag"
import Card from "./card"

const PostLink = ({ children, slug }) => {
	return (
		<Link to={`/blog/${slug}`} className="no-underline">
			{children}
		</Link>
	)
}

function BlogPostCard({ node }) {
	const withHero = !!node.heroImage
	return (
		<Card
			Component="article"
			noShadow
			noPadding
			border
			className="flex flex-wrap"
		>
			{withHero && (
				<Image
					className="rounded-t md:rounded-t-none md:rounded-l w-full md:w-1/3"
					fluid={node.heroImage.fluid}
					alt={node.heroImage.title}
				/>
			)}
			<div
				className={clsx("w-full p-4 space-y-2", withHero && "md:w-2/3")}
			>
				<PostLink slug={node.slug}>
					<h2 className="leading-none text-2xl font-extrabold">
						{node.title}
					</h2>
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
					<time dateTime={node.publishDate}>
						{node.publishDateText}
					</time>
				</div>
			</div>
		</Card>
	)
}

export default BlogPostCard
