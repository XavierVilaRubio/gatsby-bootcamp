import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function IndexPage() {
	return (
		<Layout>
			<Head title="Home"/>
			<h1>Hello.</h1>
			<h2>I'm Xavi, a future UX designer living in Igualada, Barcelona.</h2>
		</Layout>
	)
}