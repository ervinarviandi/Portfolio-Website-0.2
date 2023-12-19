import React from 'react'
// import Safe from "react-safe"



function Comments() {
  return (
    <>
      <div>
      <div id="disqus_thread">
      </div> 
      {/* <Safe.script>
        {
        (function () {
          var d = document , s = d.createElement('script')
          s.src = 'https://ervinarviandi.disqus.com/embed.js'
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s)
        })()
        };
      </Safe.script> */}
        </div>
        </>
  )
}

export default Comments
