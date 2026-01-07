import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Wireweave',
  description: 'AI-powered wireframe generation with a simple DSL',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/grammar' },
      { text: 'Playground', link: 'https://playground.wireweave.dev' },
      { text: 'Dashboard', link: 'https://dashboard.wireweave.dev' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Wireweave?', link: '/guide/what-is-wireweave' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Pages', link: '/guide/pages' },
            { text: 'Components', link: '/guide/components' },
            { text: 'Layouts', link: '/guide/layouts' },
            { text: 'Styling', link: '/guide/styling' },
          ],
        },
        {
          text: 'Integrations',
          items: [
            { text: 'MCP Server', link: '/guide/mcp-server' },
            { text: 'VS Code Extension', link: '/guide/vscode-extension' },
            { text: 'Markdown Plugin', link: '/guide/markdown-plugin' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Grammar', link: '/reference/grammar' },
            { text: 'Components', link: '/reference/components' },
            { text: 'API', link: '/reference/api' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wireweave' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024 Wireweave',
    },

    search: {
      provider: 'local',
    },
  },
});
