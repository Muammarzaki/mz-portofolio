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
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Montserrat': [400, 500, 600, 700]
            }
        }],
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxt/icon'
    ],
    app: {
        head: {
            link: [{rel: 'manifest', href: '/site.webmanifest'}]
        }
    },
})
