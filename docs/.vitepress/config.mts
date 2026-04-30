import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Project Wiki",
  description: "My Project Documentation",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'My Project Wiki',
    nav: [
      { text: 'Guide', link: '/articles/instructions/get-started' },
      {
        text: 'Ver 1.0.0',
        items: [
          { text: 'Release Notes', link: '/articles/references/release-notes' },
          { text: 'FAQ', link: '/articles/references/faq' }
        ]
      }
    ],
    sidebar: {
      '/articles/': [
        {
          text: 'Instructions',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'What is This Project', link: '/articles/instructions/what-is-this-project' },
            { text: 'Get Started', link: '/articles/instructions/get-started' },
            { text: 'Onboard Process', link: '/articles/instructions/onboard-process' },
            { text: 'Commands and Examples', link: '/articles/instructions/commands' }
          ]
        },
        {
          text: 'Features',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Event Based Features', link: '/articles/features/event-based-features' },
            { text: 'Schedule Based Features', link: '/articles/features/schedule-based-features' }
          ]
        },
        {
          text: 'Management',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Team Management', link: '/articles/management/team-manage-commands' },
            { text: 'Feature Management', link: '/articles/management/feature-manage-commands' }
          ]
        },
        {
          text: 'References',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'FAQ', link: '/articles/references/faq' },
            { text: 'Release Notes', link: '/articles/references/release-notes' }
          ]
        }
      ]
    }
  }
})
