import remark from 'remark'
import html from 'remark-html'

// TODO: 型付け
const markdownToHtml: any = async (markdown: string) => {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export default markdownToHtml
