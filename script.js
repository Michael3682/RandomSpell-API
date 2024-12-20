if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('service-worker.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}
function generateRandomSpell() {
    fetch('https://hp-api.onrender.com/api/spells')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const spell = data[randomIndex];
  
        const spellName = document.getElementById('spell-name');
        const spellIncantation = document.getElementById('spell-incantation');
        const spellDescription = document.getElementById('spell-description');
        
        spellName.textContent = spell.name;
        spellDescription.textContent = `Description: ${spell.description || "No description available"}`;
      })
      .catch(error => {
        console.error('Error fetching Harry Potter spell data:', error);
      });
  }
  
  document.getElementById('generate-button').addEventListener('click', generateRandomSpell);
  
  generateRandomSpell();
