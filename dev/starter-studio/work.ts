export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true }
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    {
      name: 'content',
      title: 'Case Study Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}
