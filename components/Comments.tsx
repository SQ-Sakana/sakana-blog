import { Giscus } from '@giscus/react'

const Comments = () => {
  return (
    <div id="comments-section" className="border rounded border-gray-400/30 mt-4 p-4 md:-mx-4">
      <Giscus
        repo="SQ-Sakana/sakana-blog"
        repoId="R_kgDOHVK3Fg"
        category="General"
        categoryId="DIC_kwDOHVK3Fs4CPFpx"
        mapping="pathname"
        reactionsEnabled="1"
        theme="preferred_color_scheme"
      />
    </div>
  )
}

export default Comments
