let url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RK3VP0MpZGL05c4bO8xW3o2fQdG5GcYW'


insertTitle = document.getElementById('title_div');

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

  data.results.forEach(article => {
    console.log(article.title);




  let div = document.createElement('div');
  div.className += "seperateDiv";
  

  let a = document.createElement('a');
  a.setAttribute('href', article.url);
  a.innerHTML = article.title;
  a.className += "a_title";


  let p = document.createElement('p');
  p.innerHTML = article.abstract;


  let readMore = document.createElement('p');
  readMore.innerHTML = article.section;
  readMore.className += "section";

  let checkItOut = document.createElement('a');
  checkItOut.setAttribute('href', article.short_url);
  checkItOut.innerText = 'Learn more';
  checkItOut.className += "learnMore";



let img = document.createElement('img');
img.setAttribute('src', article.multimedia[0].url);

  insertTitle.appendChild(div);
  div.appendChild(readMore);
  div.appendChild(a);
  div.appendChild(p);
  div.appendChild(checkItOut);
  div.appendChild(img);
  

  })

    
  })
  //RK3VP0MpZGL05c4bO8xW3o2fQdG5GcYW

  //https://api.nytimes.com/svc/topstories/v2/world.//json?api-key=yourkey