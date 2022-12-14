const query = `*[_type == 'portfolio'][0]{
  personalInfo,
  history,
  experiences[] {
    'company': company->company,
    role,
    start,
    end,
    'href': company->href,
    'backgroundImage': company->backgroundImage.asset->url
  },
  projects[] {
    title,
    description,
    bulletPoints,
    links[] {
      label,
      href
    },
    'company': company->company,
    'images': [company->backgroundImage.asset->url]
  },
  'skills': skillCategories[] {
    title,
    skill
  },
  contacts[] {
    href,
    'icon': icon.asset->url
  }
}`

export default query;