const moduleExclude = (match: any) => {
  const m = (id: string | any[]) => id.indexOf(match) > -1
  return {
    name: `exclude-${match}`,
    resolveId(id: any) {
      if (m(id)) return id
    },
    load(id: any) {
      if (m(id)) return `export default {}`
    },
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  router: {
    options: {
      hashMode: true,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        'gun',
        'gun/gun',
        'gun/sea',
        'gun/sea.js',
        'gun/lib/then',
        'gun/lib/webrtc',
        'gun/lib/radix',
        'gun/lib/radisk',
        'gun/lib/store',
        'gun/lib/rindexed',
      ]
    },
    plugins: [
      moduleExclude('text-encoding'),
    ]
  }
});