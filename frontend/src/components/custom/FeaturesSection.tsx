import { FC } from "react"

const getIcon = (name: string) => {
    const className = "jsaldfj"
    switch(name) {
        case "CLOCK_ICON":
            return <ClockIcon className="w-12"/>
        case "CHECK_ICON":
            return <CheckIcon className="text-black"/>
        case 'CLOUD_ICON':
            return <CloudIcon className="text-black"/>
        default:
            return null
    }
}

interface featureProps {
    id: number,
    heading: string,
    subheading: string,
    icon: string
}

export interface featureSectionProps {
    data: {
        id: number,
        __component: string,
        title: string,
        description: string,
        feature: Array<featureProps>
    }
}

const FeaturesSection: FC<featureSectionProps> = ({ data }) => {
    const features = data.feature

    return (
        <div className="container">
            <section className="py-6 mx-auto md:px-6 lg:py-24">
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map(feature => (
                        <div className="flex flex-col items-center text-center">
                            {getIcon(feature.icon)}
                            <h2 className="text-black text-2xl font-bold">{feature.heading}</h2>
                            <p className="text-black">{feature.subheading}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default FeaturesSection

function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  
  function ClockIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  
  function CloudIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }
  