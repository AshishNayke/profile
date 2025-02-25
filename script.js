// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Add hover effect to the card
    const card = document.querySelector('.card');
    const cardGradient = document.querySelector('.card-gradient');
    const cardBlur = document.querySelector('.card-blur');

    card.addEventListener('mouseenter', () => {
        cardGradient.style.opacity = '1';
        cardBlur.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        cardGradient.style.opacity = '0';
        cardBlur.style.opacity = '0';
    });

    // Add hover effects to project card
    const projectCard = document.querySelector('.project-card');
    const projectDescription = document.querySelector('.project-description');

    projectCard.addEventListener('mouseenter', () => {
        projectDescription.style.color = 'hsl(var(--foreground))';
    });

    projectCard.addEventListener('mouseleave', () => {
        projectDescription.style.color = 'hsl(var(--muted-foreground))';
    });
});
