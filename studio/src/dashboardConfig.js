export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebef88758e87852044bb163',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-31ktm35g',
                  apiId: '07deff84-b69c-42c2-86aa-99e288ec940f'
                },
                {
                  buildHookId: '5ebef88758e878ff1d4bb960',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8rtb7nrh',
                  apiId: 'e372dfcd-6ff4-44d6-9c7b-f0b277f62c82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tetraib/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8rtb7nrh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
