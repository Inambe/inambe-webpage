import React from "react"
import { FaCode, FaLink } from "react-icons/fa"
import { Link } from "gatsby"
import Image from "gatsby-image"

import A from "./a"
import Tag from "./tag"
import Card from "./card"
import PostHeading from "./postHeading"
import { getWorkURL } from "../api"

const PostLink = ({ children, slug }) => {
	return (
		<Link to={getWorkURL(slug)} className="no-underline">
			{children}
		</Link>
	)
}

const CardLink = props => {
	return <A eLink newTab className="no-underline" {...props} />
}

function WorkPostCard({ workPost }) {
	return (
		<Card Component="article" noShadow noPadding border>
			<Image
				className="rounded-t"
				fluid={workPost.heroImage.fluid}
				alt={workPost.heroImage.title}
			/>
			<div className="text-center p-4 space-y-4">
				<PostLink slug={workPost.slug}>
					<PostHeading>{workPost.title}</PostHeading>
				</PostLink>
				<div className="text-xs">
					{workPost.tags.map((u, i) => (
						<Tag key={i}>{u}</Tag>
					))}
				</div>
				<div className="text-sm flex items-center justify-around">
					{workPost.liveLink && (
						<CardLink href={workPost.liveLink}>
							Live&nbsp;
							<FaLink />
						</CardLink>
					)}
					{workPost.sourceLink && (
						<CardLink href={workPost.sourceLink}>
							Source&nbsp;
							<FaCode />
						</CardLink>
					)}
				</div>
			</div>
		</Card>
	)
}

export default WorkPostCard
