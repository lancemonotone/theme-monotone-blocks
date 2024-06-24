// Listen for the DOMContentLoaded event which fires when the initial HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
    // Select all job type cards except the last one
    const containers = document.querySelectorAll('.cards');

    // Function to check the visibility of each card
    function checkVisibility (cards) {
        // Loop through each card
        cards.forEach((card) => {
            // Calculate the top value of the card, subtracting 16
            const topValue = parseFloat(getComputedStyle(card).top) - 1
            // Get the bounding rectangle of the card (its position and size in the viewport)
            const cardRect = card.getBoundingClientRect()
            // Check if the card is hidden either because it's above the top value or it's overlapped by another card
            const isHidden = cardRect.top < topValue || isOverlapped(card)
            // Determine the reason for the card being hidden
            const reason = isHidden ? (cardRect.top < topValue ? 'top' : (isOverlapped(card) ? 'overlapped' : 'both')) : ''

            // Set the opacity of the card based on its visibility
            card.style.opacity = isHidden ? '0' : '1'

            // Set a data attribute on the card with the reason for its visibility status
            card.setAttribute('data-reason', reason)
            // Set a data attribute on the card with the top position
            card.setAttribute('data-pos-y', Math.floor(cardRect.top))
            // Set a data attribute on the card with the top value
            card.setAttribute('data-top-value', Math.ceil(topValue))
        })
    }

    // Function to check if a card is overlapped by another card
    function isOverlapped (card) {
        // Find the class that starts with 'overlap-' in the card's class list
        const overlapClass = Array.from(card.classList).find(cls => cls.startsWith('overlap-'))
        // Get the overlap percentage value from the class name, or default to 90
        const overlapPercentageValue = overlapClass ? parseFloat(overlapClass.split('-')[1] * 10) : 90

        // Get the next card in the DOM
        const nextCard = card.nextElementSibling
        // If there is no next card, return false
        if (!nextCard) {
            return false
        }

        // Get the bounding rectangle of the next card
        const nextCardRect = nextCard.getBoundingClientRect()
        // Calculate the height of the overlap between the current card and the next card
        const overlapHeight = Math.max(0, card.getBoundingClientRect().bottom - nextCardRect.top)
        // Calculate the percentage of the current card that is overlapped
        const overlapPercentage = (overlapHeight / card.getBoundingClientRect().height) * 100

        // Set a data attribute on the card with the overlap percentage
        card.setAttribute('data-overlap', overlapPercentage.toFixed(2) + '%')
        // Set a data attribute on the card indicating whether it is hidden due to overlap
        card.setAttribute('data-hidden', overlapPercentage >= overlapPercentageValue ? 'true' : 'false')

        // Update the opacity of the card based on the overlap
        card.style.opacity = overlapPercentage >= overlapPercentageValue ? '0' : '1'

        // Return whether the overlap percentage is greater than or equal to the overlap percentage value
        return overlapPercentage >= overlapPercentageValue
    }

    // For each container, select all direct children except the last one
    containers.forEach(container => {
        const cards = container.querySelectorAll(':scope > *:not(:last-child)');

        // Check the visibility of the cards initially
        checkVisibility(cards)
        // Check the visibility of the cards whenever the user scrolls
        window.addEventListener('scroll', () => {
            checkVisibility(cards)
        })
    })


})
