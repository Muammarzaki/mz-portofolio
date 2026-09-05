// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    features: {
        inlineStyles: true
    },
    experimental: {
        payloadExtraction: true
    },
    modules: [['@nuxtjs/google-fonts', {
        display: 'swap',
        preload: true,
        prefetch: false,
        families: {
            'Montserrat': [400, 500, 600, 700]
        }
    }], '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/icon', '@nuxt/image', '@nuxtjs/seo'],
    image: {
        quality: 70,
        format: ['avif', 'webp'],
        densities: [1, 2],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },
        presets: {
            logo: {
                modifiers: {format: 'webp', quality: 80, width: 144, height: 144, fit: 'inside'}
            },
            certificate: {
                modifiers: {format: 'webp', quality: 68, width: 1400, fit: 'inside'}
            },
            texture: {
                modifiers: {format: 'webp', quality: 55, width: 800, fit: 'inside'}
            }
        }
    },
    site: {
        name: 'Muammar Zaki',
        description:
            'Software engineer building reliable backend systems and modern Android applications, with a focus on clean architecture and scalable solutions.',
        defaultLocale: 'en'
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'theme-color',
                    content: '#030303'
                }
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: ''
                }
            ]
        }
    }
})