document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function() {
        // Remove the 'selected' class from all emojis
        document.querySelectorAll('.emoji').forEach(item => item.classList.remove('selected'));
        
        // Add the 'selected' class to the clicked emoji
        emoji.classList.add('selected');
    });
});