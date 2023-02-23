fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.slice(0,10).forEach(author => {
      const authorContainer = document.createElement('div');
      authorContainer.innerHTML = `<h2>Author: ${author.name}</h2>`;

      const postContainer = document.createElement('div');

      fetch(`https://jsonplaceholder.typicode.com/users/${author.id}/posts`)
        .then(response => response.json())
        .then(posts => {
          posts.forEach(post => {
            const postEl = document.createElement('p');
            postEl.innerHTML = post.title;
            postContainer.appendChild(postEl);
          });

          authorContainer.appendChild(postContainer);
          document.getElementById('authors').appendChild(authorContainer);
        });
    });
  });