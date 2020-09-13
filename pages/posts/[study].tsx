import React from 'react'
import { NextPage } from 'next'
import { getAllPosts, getAPost } from '../../lib/api'
import Header from '../../components/Header/Header'
// import CaseStudyImagesCarousel from '../../components/CaseStudyPage/CaseStudyImagesCarousel'
// import CaseStudySubNav from '../../components/CaseStudyPage/CaseStudySubNav'
import PageContainer from '../../components/PageContainer/PageContainer'
import { CaseStudyProps } from '../../types/case-study'

interface Props {
  study: CaseStudyProps
}

const CaseStudy: NextPage<Props> = ({ study }) => {
  if (!study) {
    return <div> loading</div>
  }

  return (
    <PageContainer>
      <Header />
      <main>
        {/* <CaseStudyImagesCarousel images={images} />
        <CaseStudySubNav
          numberBedrooms={numberBedrooms}
          address={address}
          price={price}
          description={description}
          features={features}
        /> */}
        {study.test}
      </main>
      <footer></footer>
    </PageContainer>
  )
}

export default CaseStudy

export function getStaticProps({ params }) {
  let study = getAPost(params.study)

  if (study) {
    study = study[0]
  }

  return {
    props: {
      study,
    },
  }
}

export function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          study: post.slug,
        },
      }
    }),
    fallback: false,
  }
}