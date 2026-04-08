import type { Locale, YellowDayContent } from '@/types/content'

const BASE_URL = import.meta.env.VITE_STRAPI_URL as string
const TOKEN = import.meta.env.VITE_STRAPI_TOKEN as string

export function strapiMediaUrl(url: string): string {
  if (url.startsWith('http')) return url
  return `${BASE_URL}${url}`
}

export async function fetchYellowDay(locale: Locale): Promise<YellowDayContent> {
  const query = [
    'populate[HeroLogo]=true',
    'populate[HeroCover]=true',
    'populate[VideoCover]=true',
    'populate[ResourcesBackground]=true',
    'populate[Partners][populate][PartnerLogo]=true',
    `locale=${locale}`,
  ].join('&')
  const res = await fetch(
    `${BASE_URL}/api/yellow-day?${query}`,
    { headers: { Authorization: `Bearer ${TOKEN}` } }
  )
  if (!res.ok) throw new Error(`Strapi error: ${res.status}`)
  const json = await res.json()
  return json.data as YellowDayContent
}
