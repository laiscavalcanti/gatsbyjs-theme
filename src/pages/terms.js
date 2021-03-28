import React from "react"
import Layout from "../components/Layout"
import TermsUse from "../components/TermsUse"
import SEO from "../components/seo"

const TermsPage = () => (
  <Layout>
    <SEO title="Termos de Uso" />
    <TermsUse />
  </Layout>
)

export default TermsPage