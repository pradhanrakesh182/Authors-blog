fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    let i = 0;

    data.forEach(post => {
      i++;
      if (i < 10) {
       
        const postContainer = document.createElement('div');
        const title = document.createElement('h2');
        const body = document.createElement('p');

        title.innerHTML = post.title;
        body.innerHTML = post.body;

        postContainer.appendChild(title);
        postContainer.appendChild(body);
        
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
          .then(response => response.json())
          .then(comments => {
            comments = comments.slice(0,3);

            comments.forEach(comment => {
             
              const commentContainer = document.createElement('div');
              const commentName = document.createElement('h4');
              const commentEmail = document.createElement('h5');
              const commentBody = document.createElement('p');

              
              commentName.innerHTML = comment.name;
              commentEmail.innerHTML = comment.email;
              commentBody.innerHTML = comment.body;

              commentContainer.appendChild(commentName);
              commentContainer.appendChild(commentEmail);
              commentContainer.appendChild(commentBody); 
              
              postContainer.appendChild(commentContainer); 
            });
          });
        document.getElementById('posts').appendChild(postContainer);

      };
  });
  });