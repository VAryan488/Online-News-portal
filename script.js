function filterNews(category) {
    const articles = document.querySelectorAll('.news');
    articles.forEach(article => {
        if (category === 'all' || article.classList.contains(category)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
