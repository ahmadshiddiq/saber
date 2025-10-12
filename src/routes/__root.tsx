import {createRootRoute, HeadContent, Scripts} from '@tanstack/react-router'
import {TanStackRouterDevtoolsPanel} from '@tanstack/react-router-devtools'
import {TanStackDevtools} from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {AppHeader} from "@/components/app-header.tsx";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Saber Squad',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <HeadContent/>
    </head>
    <body>
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <AppHeader/>
        {children}
      </SidebarInset>
    </SidebarProvider>

    <TanStackDevtools
      config={{
        position: 'bottom-right',
      }}
      plugins={[
        {
          name: 'Tanstack Router',
          render: <TanStackRouterDevtoolsPanel/>,
        },
      ]}
    />
    <Scripts/>
    </body>
    </html>
  )
}
