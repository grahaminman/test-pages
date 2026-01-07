document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    const contentArea = document.getElementById('main-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    contentArea.innerHTML = html;
                })
                .catch(error => {
                    contentArea.innerHTML = '<h3>Error</h3><p>Failed to load content: ' + error.message + '</p>';
                });
        });
    });
});