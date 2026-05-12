import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MCEOC Wiki",
  description: "MCEOC Documentation",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'MCEOC Wiki',
    nav: [
      { text: 'Guide', link: '/articles/instructions/engineer-schedule-plans' },
      {
        text: 'Collaborations',
        items: [
          { text: 'Genie', link: '/articles/collaboration/genie' },
          { text: 'SMEIntelligent Bot', link: '/articles/collaboration/smeintelligent-bot' }
        ]
      }
    ],
    sidebar: {
      '/articles/': [
        {
          text: 'Engineer Features',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Schedule Plans', link: '/articles/instructions/engineer-schedule-plans' },
            { text: 'Profile', link: '/articles/instructions/engineer-profile' }
          ]
        },
        {
          text: 'Management Features',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Team Management', link: '/articles/management/team-manage' },
            { text: 'Statistics', link: '/articles/management/management-statistics' }
          ]
        },
        {
          text: 'Notifications',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Email Notification', link: '/articles/notifications/email-notification' },
          ]
        },
        {
          text: 'Cross-Project Collaborations',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Genie', link: '/articles/collaboration/genie' },
            { text: 'SMEIntelligent Bot', link: '/articles/collaboration/smeintelligent-bot' }
          ]
        }
      ]
    }
  }
})
