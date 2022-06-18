import { modalState } from 'atoms/modalAtom'
import { FreeButton, Loader, PageDivider, Section } from 'components'
import { Categories } from 'components/blog'
import BlogHeader from 'components/layout/BlogHeader'
import VideoHero from 'components/VideoHero'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { getTeamDetails } from 'services/queries'
import { useTeamState } from '../atoms/teamAtom'

const TeamPage = () => {
  const [open, setOpen] = useRecoilState(modalState)
  const [teamValue, setTeamValue] = useTeamState()
  const router = useRouter()
  const teamRef = useRef(null)

  const { data, isSuccess, isLoading } = useQuery(
    ['teamDetails', teamValue],
    () => {
      return teamValue && getTeamDetails(teamValue)
    }
  )

  const handleClick = (slug) => {
    teamRef.current.scrollIntoView({ behavior: 'smooth' })
    setTeamValue(slug)
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>Blugenix Team Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Hero */}
      <VideoHero />
      <main>
        {/* Page Header w/Team Members */}
        <BlogHeader
          title="Team"
          team={true}
          ref={teamRef}
          handleClick={handleClick}
        />

        {/* Team Member Profile Card */}
        {isLoading ? (
          <div className="my-80">
            <Loader />
          </div>
        ) : (
          <Section
            style_section="md:flex-row-reverse pt-4 pb-12 px-10 items-center flex flex-col-reverse max-w-6xl mx-auto md:gap-12"
            heading={data?.name}
            subheading={data?.position}
            para_1={data?.text}
            para_2={data?.text2}
            para_3={data?.text3}
            component={
              <FreeButton
                tw="text-center md:text-left text-white dark:text-gray-200 mt-8"
                text={data?.buttonText}
                onClick={() =>
                  data?.modal === true
                    ? setOpen(true)
                    : router.push('/therapies')
                }
              />
            }
          >
            <img
              className="rounded-3xl shadow-lg"
              src={data?.profileImage.url}
              alt={data?.slug}
            />
          </Section>
        )}
        <PageDivider />
        <div className="mx-auto grid max-w-6xl px-10 pt-12">
          <Categories handleClick={handleClick} team={true} />
        </div>
      </main>
    </div>
  )
}

export default TeamPage
