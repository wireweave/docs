import { defineConfig } from 'vitepress';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import type { LanguageRegistration } from 'shiki';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load custom wireframe language definition for Shiki
const wireframeLang: LanguageRegistration = JSON.parse(
  readFileSync(resolve(__dirname, 'wireframe.tmLanguage.json'), 'utf-8')
);

export default defineConfig({
  title: 'Wireweave',
  description: 'AI-powered wireframe generation with a simple DSL',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  markdown: {
    languages: [wireframeLang],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: [
          { text: '가이드', link: '/ko/guide/getting-started' },
          { text: '레퍼런스', link: '/ko/reference/grammar' },
          { text: 'Playground', link: 'https://playground.wireweave.org' },
          { text: 'Dashboard', link: 'https://dashboard.wireweave.org' },
        ],
        sidebar: {
          '/ko/guide/': [
            {
              text: '소개',
              items: [
                { text: 'Wireweave란?', link: '/ko/guide/what-is-wireweave' },
                { text: '시작하기', link: '/ko/guide/getting-started' },
              ],
            },
            {
              text: '핵심 개념',
              items: [
                { text: '페이지', link: '/ko/guide/pages' },
                { text: '컴포넌트', link: '/ko/guide/components' },
                { text: '레이아웃', link: '/ko/guide/layouts' },
                { text: '스타일링', link: '/ko/guide/styling' },
              ],
            },
            {
              text: '연동',
              items: [
                { text: 'MCP 서버', link: '/ko/guide/mcp-server' },
                { text: 'VS Code 확장', link: '/ko/guide/vscode-extension' },
                { text: '마크다운 플러그인', link: '/ko/guide/markdown-plugin' },
              ],
            },
          ],
          '/ko/reference/': [
            {
              text: '레퍼런스',
              items: [
                { text: '문법', link: '/ko/reference/grammar' },
                { text: '컴포넌트', link: '/ko/reference/components' },
                { text: 'API', link: '/ko/reference/api' },
              ],
            },
          ],
        },
        outline: {
          level: [2, 3],
          label: '목차',
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/getting-started' },
          { text: 'リファレンス', link: '/ja/reference/grammar' },
          { text: 'Playground', link: 'https://playground.wireweave.dev' },
          { text: 'Dashboard', link: 'https://dashboard.wireweave.dev' },
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'はじめに',
              items: [
                { text: 'Wireweaveとは？', link: '/ja/guide/what-is-wireweave' },
                { text: 'はじめる', link: '/ja/guide/getting-started' },
              ],
            },
            {
              text: 'コアコンセプト',
              items: [
                { text: 'ページ', link: '/ja/guide/pages' },
                { text: 'コンポーネント', link: '/ja/guide/components' },
                { text: 'レイアウト', link: '/ja/guide/layouts' },
                { text: 'スタイリング', link: '/ja/guide/styling' },
              ],
            },
            {
              text: '連携',
              items: [
                { text: 'MCPサーバー', link: '/ja/guide/mcp-server' },
                { text: 'VS Code拡張', link: '/ja/guide/vscode-extension' },
                { text: 'Markdownプラグイン', link: '/ja/guide/markdown-plugin' },
              ],
            },
          ],
          '/ja/reference/': [
            {
              text: 'リファレンス',
              items: [
                { text: '文法', link: '/ja/reference/grammar' },
                { text: 'コンポーネント', link: '/ja/reference/components' },
                { text: 'API', link: '/ja/reference/api' },
              ],
            },
          ],
        },
        outline: {
          level: [2, 3],
          label: '目次',
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/grammar' },
      { text: 'Playground', link: 'https://playground.wireweave.org' },
      { text: 'Dashboard', link: 'https://dashboard.wireweave.org' },
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
      { icon: 'github', link: 'https://github.com/wireweave/core' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2026 Wireweave',
    },

    search: {
      provider: 'local',
    },
  },
});
