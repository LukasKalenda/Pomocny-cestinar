// export default {
//     async paths() {
//       const posts = await (await fetch('https://my-cms.com/blog-posts')).json()
  
//       return posts.map((post) => {
//         return {
//           params: { id: post.id },
//           content: post.content // raw Markdown or HTML
//         }
//       })
//     }
//   }