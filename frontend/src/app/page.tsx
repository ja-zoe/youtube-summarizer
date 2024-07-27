import HeroSection, { HeroSectionProps } from '@/components/custom/HeroSection'
import FeaturesSection, { featureSectionProps } from '@/components/custom/FeaturesSection'
import { getHomePageData, getGlobalPageData } from '@/data/loaders'
import Header from '@/components/custom/Header'
import Footer from '@/components/custom/Footer'

const blockRenderer = (block: featureSectionProps['data'] | HeroSectionProps['data']) => {
  switch(block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block as HeroSectionProps['data']}/>
    case "layout.features-section":
      return <FeaturesSection key={block.id} data={block as featureSectionProps['data']}/>
    default:
      return null
  }
}

export default async function Home() {
  const homePageData = await getHomePageData()
  const globalPageData = await getGlobalPageData()

  const { blocks } = homePageData
  if (!blocks) return <div> No block found! </div>

  const { header, footer } = globalPageData

  return (
    <main>
      <Header data={header}/>
      {blocks.map((block: any) => blockRenderer(block))}
      <Footer data={footer}/>
    </main>
  )
}
