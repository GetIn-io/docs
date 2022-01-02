import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Documentation of outreach tool"},["/index.html","/README.md"]],
  ["v-47601c7a","/general/faq.html",{"title":"FAQ"},["/general/faq","/general/faq.md"]],
  ["v-7cbb1f71","/sending_campaigns/adding_email.html",{"title":"Adding a mail account"},["/sending_campaigns/adding_email","/sending_campaigns/adding_email.md"]],
  ["v-a52bb63a","/sending_campaigns/create_email_template.html",{"title":"Creating an email template"},["/sending_campaigns/create_email_template","/sending_campaigns/create_email_template.md"]],
  ["v-174d8f64","/sending_campaigns/reports.html",{"title":"Campaign reports"},["/sending_campaigns/reports","/sending_campaigns/reports.md"]],
  ["v-9218f53e","/sending_campaigns/schedule_template.html",{"title":"How to setup a schedule template"},["/sending_campaigns/schedule_template","/sending_campaigns/schedule_template.md"]],
  ["v-31b6b60b","/sending_campaigns/send_out_campaign.html",{"title":"How to send out a campaign"},["/sending_campaigns/send_out_campaign","/sending_campaigns/send_out_campaign.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
