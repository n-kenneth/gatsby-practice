import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title={"About"} />
            <h1>About</h1>
            <p>Want to hire <Link to="/contact">me</Link> ? </p>
        </Layout>
    )
}

export default AboutPage;