import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactDetails, ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}

// import { type Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'

// import { ContactSection } from '@/components/ContactSection'
// import { Container } from '@/components/Container'
// import { FadeIn, FadeInStagger } from '@/components/FadeIn'
// import { List, ListItem } from '@/components/List'
// import { SectionIntro } from '@/components/SectionIntro'
// import { StylizedImage } from '@/components/StylizedImage'
// import { Testimonial } from '@/components/Testimonial'
// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
// import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
// import imageLaptop from '@/images/laptop.jpg'
// import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

// const clients = [
//   ['Phobia', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

// function CaseStudies({
//   caseStudies,
// }: {
//   caseStudies: Array<MDXEntry<CaseStudy>>
// }) {
//   return (
//     <>
//       <SectionIntro
//         title="Empowering progress through innovative technology"
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           We firmly believe in the transformative power of technology to address
//           humanity's most pressing issues, recognizing its dual role as both a
//           solution and a challenge.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="h-16 w-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
//                   <time
//                     dateTime={caseStudy.date.split('-')[0]}
//                     className="font-semibold"
//                   >
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//     </>
//   )
// }

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="Embark on a journey with us as we empower you to discover, explore, and embrace new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           Rest assured, we excel in revitalizing past projects for mutual
//           prosperity. With our innovative approach, the possibilities are
//           limitless, ensuring a fruitful collaboration.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Web Development Expertise">
//               At The Teutonic Tech Titans, we excel in the art of crafting
//               visually stunning and high-quality marketing pages. While the
//               remaining parts of the website may utilize lorem ipsum placeholder
//               text, our dedicated focus ensures that your marketing pages stand
//               out as a beacon of excellence.
//             </ListItem>
//             <ListItem title="Application Development Expertise">
//               With a team of seasoned developers proficient in cutting-edge app
//               frameworks such as Angular 1 and Google Web Toolkit, The Teutonic
//               Tech Titans deliver unparalleled excellence in application
//               development.
//             </ListItem>
//             <ListItem title="E-commerce Mastery">
//               Pioneering modern e-commerce development, The Teutonic Tech Titans
//               specialize in elevating your brand through tailored solutions.
//               While our approach may involve integrating your logo into the
//               trusted Shopify store template we've perfected over six years,
//               rest assured, our commitment to innovation ensures a seamless and
//               distinguished online presence for your business.
//             </ListItem>
//             <ListItem title="Custom Content Management Expertise">
//               At The Teutonic Tech Titans, we recognize the critical role of a
//               robust and tailored content management system (CMS). That's why we
//               leverage a single, expansive Joomla instance to power all client
//               projects, ensuring unparalleled customization and efficiency in
//               managing your content.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

// export const metadata: Metadata = {
//   description:
//     'We are a development studio working at the intersection of design and technology.',
// }

// export default async function Home() {
//   let caseStudies = (await loadCaseStudies()).slice(0, 3)

//   return (
//     <>
//       <Container className="mt-24 sm:mt-32 md:mt-56">
//         <FadeIn className="max-w-3xl">
//           <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
//             The Teutonic Tech Titans: A leading development studio rooted in
//             Germany.
//           </h1>
//           <p className="mt-6 text-xl text-neutral-600">
//             The Teutonic Tech Titans, the eminent development studio, skillfully
//             unifying the realms of design and technology, all from its esteemed
//             base in Germany.
//           </p>
//         </FadeIn>
//       </Container>

//       <Clients />

//       <CaseStudies caseStudies={caseStudies} />

//       <Testimonial
//         className="mt-24 sm:mt-32 lg:mt-40"
//         client={{ name: 'Phobia', logo: logoPhobiaDark }}
//       >
//         The ingenious team at The Teutonic Tech Titans surpassed expectations
//         during our onboarding process, ingeniously enabling access to the user's
//         microphone without invoking the usual pesky permission dialogs.
//       </Testimonial>

//       <Services />

//       <ContactSection />
//     </>
//   )
// }
