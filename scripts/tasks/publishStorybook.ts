import ghp from 'gh-pages'

ghp.publish(
  'storybook-static',
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/lorica/uc-design-system.git`,
    silent: true,
  },
  () => {
    console.log('Published storybook to GitHub pages!')
  }
)
