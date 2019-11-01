export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dbc6f6948c063019d0c235a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-irijdwf6',
                  apiId: '7b59512a-600e-4b75-8380-740b008ca67d'
                },
                {
                  buildHookId: '5dbc6f69778c73019d06ff01',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zmropp6t',
                  apiId: '780d5909-c4d7-4196-80ef-deca767863a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shylanott/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zmropp6t.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
