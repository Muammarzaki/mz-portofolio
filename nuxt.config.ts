// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: false},
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    experimental: {
        payloadExtraction: true
    },
    modules: [
        ['@nuxtjs/google-fonts', {
            display: 'swap',
            preload: true,
            prefetch: false,
            families: {
                'Montserrat': [400, 500, 600, 700]
            }
        }],
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxt/icon',
        '@nuxt/image'
    ],
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
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'theme-color', content: '#030303'}
            ],
            link: [
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
                {rel: 'manifest', href: '/site.webmanifest'}
            ]
        }
    },
})
