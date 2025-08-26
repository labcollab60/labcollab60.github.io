// Custom Instagram Feed for Lab Collab
// This creates a simple, free Instagram-style display

class InstagramFeed {
    constructor() {
        this.posts = [
            {
                id: 1,
                caption: "Welcome back to school! 🎒📚",
                date: "2024-08-27",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDAxYTU3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TY2hvb2wgRXZlbnQ8L3RleHQ+PC9zdmc+",
                url: "https://www.instagram.com/labcollab60/"
            },
            {
                id: 2,
                caption: "Lab Collab meeting tonight at 6 PM! 🤝",
                date: "2024-11-05",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA1YzQ3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NZWV0aW5nPC90ZXh0Pjwvc3ZnPg==",
                url: "https://www.instagram.com/labcollab60/"
            },
            {
                id: 3,
                caption: "Thank you to all our volunteers! 🙏",
                date: "2024-10-23",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjQ3NDA2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Wb2x1bnRlZXJzPC90ZXh0Pjwvc3ZnPg==",
                url: "https://www.instagram.com/labcollab60/"
            },
            {
                id: 4,
                caption: "Carnival was a huge success! 🎪🎉",
                date: "2024-10-24",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2MzYWVkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DYXJuaXZhbDwvdGV4dD48L3N2Zz4=",
                url: "https://www.instagram.com/labcollab60/"
            }
        ];
        this.init();
    }

    init() {
        this.loadFeed();
    }

    loadFeed() {
        const grid = document.getElementById('instagram-grid');
        if (!grid) return;

        // Clear existing content
        grid.innerHTML = '';

        // Create post elements
        this.posts.forEach(post => {
            const postElement = this.createPostElement(post);
            grid.appendChild(postElement);
        });

        // Add "View More" button
        const viewMoreButton = this.createViewMoreButton();
        grid.appendChild(viewMoreButton);
    }

    createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'instagram-post';
        postDiv.onclick = () => window.open(post.url, '_blank');

        postDiv.innerHTML = `
            <img src="${post.image}" alt="${post.caption}" loading="lazy">
            <div class="instagram-post-overlay">
                <div>${post.caption}</div>
            </div>
        `;

        return postDiv;
    }

    createViewMoreButton() {
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'instagram-post view-more-button';
        buttonDiv.onclick = () => window.open('https://www.instagram.com/labcollab60/', '_blank');
        
        buttonDiv.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #001a57; color: white; font-weight: 600;">
                <span style="font-size: 2rem; margin-bottom: 8px;">📷</span>
                <span>View More</span>
                <span style="font-size: 0.9rem;">@labcollab60</span>
            </div>
        `;

        return buttonDiv;
    }

    // Method to update posts dynamically (can be called when new content is available)
    updatePosts(newPosts) {
        this.posts = newPosts;
        this.loadFeed();
    }
}

// Initialize the feed when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new InstagramFeed();
});

// Export for potential use elsewhere
window.InstagramFeed = InstagramFeed;