document.getElementById('showAnimation').addEventListener('click', function() {
    // Show animation and flowers
    document.getElementById('animationContainer').classList.remove('hidden');
    
    // Delay showing the congratulatory message by 2 seconds
    setTimeout(function() {
        document.getElementById('congratulationMessage').classList.remove('hidden');
    }, 2000); // Message appears after 2 seconds
});