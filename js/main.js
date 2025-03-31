// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', '/components/header.html');
    loadComponent('footer-placeholder', '/components/footer.html');
});

// Tool search functionality
const toolSearch = document.getElementById('toolSearch');
if (toolSearch) {
    toolSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Ad loading functionality
function loadAds() {
    // Example Google AdSense code (replace with your actual ad code)
    const adCode = `
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="your-client-id"
             data-ad-slot="your-ad-slot"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
    `;
    
    // Add ad containers to appropriate locations
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        container.innerHTML = adCode;
    });
}

// Initialize ads when the page is fully loaded
window.addEventListener('load', loadAds);

// Utility function for tool pages
function initializeTool(toolName) {
    // Add tool-specific initialization code here
    console.log(`Initializing ${toolName} tool`);
}

// Export functions for use in tool pages
window.initializeTool = initializeTool; 