document.addEventListener('DOMContentLoaded', function() {
    const actionElement = document.getElementById('action');
    if (actionElement.innerText === 'Sell') {
        actionElement.style.color = 'red';
    } else if (actionElement.innerText === 'Buy') {
        actionElement.style.color = 'green';
    }
});