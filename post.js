const Post = [{ title: "Post One", body: "This is Post One" }];
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const LastUserActivityTime = new Date().getTime();
      resolve(LastUserActivityTime);
    }, 1000);
  });
}
function createPost(post) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      Post.push(post);
      const error = false;
      if (!error) {
        reslove();
      } else {
        reject("ERROR");
      }
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Post.length > 0) {
        const popEle = Post.pop();
        resolve(popEle);
      } else {
        reject("Array is empty");
      }
    }, 1000);
  });
}

Promise.all([
  createPost({ title: "Post two", body: "This is Post two" }),
  updateLastUserActivityTime(),
])
  .then(([post, time]) => {
    console.log(Post);
    console.log("LastUserActivityTime :" + time);
  })
  .then(() => {
    deletePost()
      .then((ele) => {
        console.log(ele);
      })
      .catch((ele) => {
        console.log(ele);
      });
  });
