interface PageSeoOptions {
  title: string
  description: string
  imageAlt: string
  type?: 'website' | 'article'
}

export function usePageSeo(options: PageSeoOptions) {
  const route = useRoute()
  const site = useSiteConfig()
  const image = '/og-image.jpg'
  const canonicalUrl = new URL(route.path, site.url).toString()

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: canonicalUrl,
    ogType: options.type ?? 'website',
    ogImage: image,
    ogImageAlt: options.imageAlt,
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  })

  useSchemaOrg([
    defineWebPage({
      name: options.title,
      description: options.description,
      url: canonicalUrl,
      isPartOf: {
        '@id': `${site.url}/#website`,
      },
    }),
  ])
}
