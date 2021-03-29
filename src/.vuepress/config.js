const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'GetIn',

    /**
     * compile files to docs
     */
    dest:"docs/",

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     */
    themeConfig: {
        repo: 'GetIn-io',
        repoLabel: 'GitHub',
        editLinkText: 'Help us improve this page!',
        editLinks: true,
        docsDir: '',
        lastUpdated: 'Last Updated',
        search: false,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        displayAllHeaders: true,
        contributors:false,

        nav: [
            {
              text: 'GitHub',
              link: 'https://github.com/GetIn-io/docs/',
                target:'_blank'
            }
        ],
        sidebar: [
            // SidebarItem
            {
                isGroup: true,
                text: 'General',
                link: '/general/faq.html',
                children: [
                    // SidebarItem
                    {
                        text: 'FAQ',
                        link: '/general/faq.html',
                        children: [],
                    }
                ],
            },
            {
                isGroup: true,
                text: 'Sending Campaigns',
                link: '/sending_campaigns/adding_email.html',
                children: [
                    // SidebarItem
                    {
                        text: 'Adding Email',
                        link: '/sending_campaigns/adding_email.html',
                        children: [],
                    },
                    {
                        text: 'Create Email Template',
                        link: '/sending_campaigns/create_email_template.html',
                        children: [],
                    },
                    {
                        text: 'Sending Schedule Template',
                        link: '/sending_campaigns/schedule_template.html',
                        children: [],
                    },
                    {
                        text: 'Send Out Campaign',
                        link: '/sending_campaigns/send_out_campaign.html',
                        children: [],
                    },
                    {
                        text: 'Campaign reports',
                        link: '/sending_campaigns/reports.html',
                        children: [],
                    },
                ],
            },
            // SidebarGroup
            // {
            //     isGroup: true,
            //     text: 'Group',
            //     children: ['/group/foo.md', '/group/bar.md'],
            // },
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}