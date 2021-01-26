import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

export default function Footer() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
				buildTime(formatString: "YYYY")
			}
		}
	`)

	return (
		<footer className={footerStyles.footer}>
			<p>Created by {data.site.siteMetadata.author}, © {data.site.buildTime}</p>
		</footer>
	)
}