import React from "react"
import { FaCode, FaLink } from "react-icons/fa"
import Image from "gatsby-image"

import A from "./a"
import Tag from "./tag"
import Card from "./card"

const CardLink = props => {
	return <A eLink newTab className="p-4 no-underline" {...props} />
}

function WorkPostCard({ workPost }) {
	return (
		<Card Component="article" noShadow noPadding border>
			<div>
				<Image
					className="rounded-t"
					fluid={workPost.heroImage.fluid}
					alt={workPost.heroImage.title}
				/>
			</div>
			<div className="text-center p-4 border-b space-y-2">
				<h3 className="text-2xl font-extrabold">{workPost.title}</h3>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: workPost.description.childMarkdownRemark.html,
					}}
				/>
				<div className="text-xs">
					{workPost.tags.map((u, i) => (
						<Tag key={i}>{u}</Tag>
					))}
				</div>
			</div>
			<div className="flex items-center justify-around">
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
		</Card>
	)
}

export default WorkPostCard
