const query = `*[_type == 'portfolio'][0]{
  personalInfo,
  history[] {
    text,
    'image': image.asset->url
  },
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
    'images': coalesce(
      [company->backgroundImage.asset->url] + images[].asset->url,
      [company->backgroundImage.asset->url]
     )
  },
  'skills': skillCategories[] {
    title,
    skill
  },
  contacts[] {
    label,
    href,
    'icon': icon.asset->url
  }
}`

export default query;