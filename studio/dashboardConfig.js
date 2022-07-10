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
                  buildHookId: '62cb675227fb411764fb7d02',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oeq8umri',
                  apiId: '30551964-c3f2-4b81-9e75-0af2ebcfc9f6'
                },
                {
                  buildHookId: '62cb67522db904226ba85401',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i8efvk2z',
                  apiId: 'c913eb47-ef8a-4143-b6a0-4545a892c31e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/b-ry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i8efvk2z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
