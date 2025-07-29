import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: true
  },
  staticImage: true,
  contentDirBasePath: '/docs',
})

export default withNextra({
  output: 'export',
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  //env: {
  //  NEXTRA_DEFAULT_LOCALE: 'en'
  //},
  // experimental: {
  //   webpackBuildWorker: true,
  // },
  // Add metadataBase to fix metadata warnings
  images: {
    unoptimized: true
  }
}) 