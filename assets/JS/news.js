const API_KEY = 'pub_70944d3b1a5e9c6fef211436feab853c688b7';
const Topic = prompt("What's the topic?");
const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${Topic}`;

async function getNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsContainer = document.getElementById('news-container');

        if (data.articles) {
            data.articles.slice(0, 5).forEach(article => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${article.title}</strong>: ${article.description} 
                               <a href="${article.url}" target="_blank">Read more</a>`;
                newsContainer.appendChild(p);
            });
        } else {
            newsContainer.innerHTML = '<p>No news found.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call the function when the page loads
getNews();
