export type Locale = 'en' | 'fr' | 'es'

export type StrapiTextNode = {
  readonly type: 'text'
  readonly text: string
  readonly bold?: boolean
  readonly italic?: boolean
  readonly underline?: boolean
}

export type StrapiBlock =
  | { readonly type: 'paragraph'; readonly children: readonly StrapiTextNode[] }
  | { readonly type: 'heading'; readonly level: 1 | 2 | 3 | 4 | 5 | 6; readonly children: readonly StrapiTextNode[] }

export type StrapiBlocks = readonly StrapiBlock[]

export type StrapiMedia = {
  url: string
  alternativeText?: string | null
  width?: number
  height?: number
}

export type Partner = {
  readonly id: number
  readonly PartnerTitle: string
  readonly PartnerLogo: StrapiMedia | null
}

export type YellowDayContent = {
  HeroTitle: StrapiBlocks
  HeroLogo: StrapiMedia | null
  HeroCover: StrapiMedia | null
  IntroTitle: string
  IntroSubtitle: string
  IntroContent: string
  VideoURL: string
  VideoCover: StrapiMedia | null
  ParticipationTitle: StrapiBlocks
  ParticipationIntro: StrapiBlocks
  ParticipationDetails: StrapiBlocks
  DonationDetails: StrapiBlocks
  Partners: readonly Partner[]
  ResourcesTitle: StrapiBlocks
  ResourcesDetails: StrapiBlocks
  ResourcesBackground: StrapiMedia | null
  CTATitle: string
  CTAIntro: StrapiBlocks
  CTADetails: StrapiBlocks
}
