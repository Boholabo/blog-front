import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

type Items = {
  [key: string]: string
}

// TODO: 型付け
export const getPostSlugs = (): any => {
    return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []): Items => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

// TODO: 型付け
export const getAllPosts = (fields: string[] = []): any => {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug: string) => getPostBySlug(slug, fields))
        .sort((post1: { date: number }, post2: { date: number }) => (post1.date > post2.date ? -1 : 1))
    return posts
}
