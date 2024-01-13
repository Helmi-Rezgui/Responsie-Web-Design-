let currentImageIndex = 0;
        const images = document.querySelectorAll('.image-switcher-section img');
        const container = document.querySelector('.image-switcher-container');

        function nextImage() {
            console.log('Next button clicked');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateContainer();
        }

        function previousImage() {
            console.log('Previous button clicked');
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateContainer();
        }

        function updateContainer() {
            const newPosition = -currentImageIndex * 50 + '%';
            container.style.transform = 'translateX(' + newPosition + ')';
            console.log('New position:', newPosition);
        }
        function toggleNavMenu() {
            var links = document.getElementById("navbar-links");
            links.style.display = (links.style.display === "flex") ? "none" : "flex";
        }