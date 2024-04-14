import React from "react"
import Giscus from "@giscus/react"

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="ervinarviandi/Portfolio-Website-0.2"
      repoId="R_kgDOKwir5A"
      category="Q&A"
      categoryId="DIC_kwDOKwir5M4CbbNA"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_protanopia"
      lang="en"
      loading="lazy"
    />
  )
}
