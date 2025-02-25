//Music Data
const musicData = [
  // Stereotypical delightful classical music
  { title: "Battalia a 10 in D Major", composer: "Biber", mood: "delightful", tags: ["baroque", "orchestral"] },
  { title: "Brandenburg Concerto No. 5", composer: "Bach", mood: "delightful", tags: ["baroque", "concerto"] },
  { title: "Brandenburg Concerto No. 3", composer: "Bach", mood: "delightful", tags: ["baroque", "concerto"] },
  { title: "Symphony No. 45 “Farewell”", composer: "Haydn", mood: "delightful", tags: ["classical", "symphony"] },

  // Need to chill
  { title: "Rondo alla Turca", composer: "Mozart", mood: "chill", tags: ["piano", "upbeat"] },
  { title: "Für Elise", composer: "Beethoven", mood: "chill", tags: ["piano", "calm"] },
  { title: "Anitra’s Dance", composer: "Grieg", mood: "chill", tags: ["orchestral", "ballet"] },
  { title: "In the Steppes of Central Asia", composer: "Borodin", mood: "chill", tags: ["orchestral", "ambient"] },

  // Need to sleep
  { title: "Moonlight Sonata", composer: "Beethoven", mood: "sleep", tags: ["piano", "nocturne"] },
  { title: "Swan Lake", composer: "Tchaikovsky", mood: "sleep", tags: ["ballet", "soft"] },
  { title: "Coral Nocturne", composer: "Field", mood: "sleep", tags: ["piano", "dreamy"] },

  // Need to wake up
  { title: "Morning Mood", composer: "Grieg", mood: "wakeup", tags: ["orchestral", "sunrise"] },
  { title: "Summer", composer: "Vivaldi", mood: "wakeup", tags: ["violin", "energetic"] },
  { title: "Buckaroo Holiday", composer: "Copland", mood: "wakeup", tags: ["orchestral", "chaotic"] },

  // Feeling proud
  { title: "Pomp and Circumstance", composer: "Elgar", mood: "proud", tags: ["orchestral", "ceremonial"] },
  { title: "Symphony No. 9", composer: "Beethoven", mood: "proud", tags: ["choral", "ode-to-joy"] },
  { title: "1812 Overture", composer: "Tchaikovsky", mood: "proud", tags: ["orchestral", "cannons"] },
  { title: "Symphony No. 5, Finale", composer: "Tchaikovsky", mood: "proud", tags: ["orchestral", "triumphant"] },
  { title: "American", composer: "Dvořák", mood: "proud", tags: ["symphony", "folk"] },

  // Excited
  { title: "Hoedown", composer: "Copland", mood: "excited", tags: ["orchestral", "hoedown"] },
  { title: "Bacchanale", composer: "Saint-Saëns", mood: "excited", tags: ["opera", "wild"] },
  { title: "Spring", composer: "Vivaldi", mood: "excited", tags: ["violin", "lively"] },
  { title: "La Gazza Ladra", composer: "Rossini", mood: "excited", tags: ["opera", "dramatic"] },
  { title: "Death and the Maiden", composer: "Schubert", mood: "excited", tags: ["string quartet", "intense"] },

  // Angry
  { title: "Dance of the Knights", composer: "Prokofiev", mood: "angry", tags: ["orchestral", "menacing"] },
  { title: "Winter, Mvt. 1", composer: "Vivaldi", mood: "angry", tags: ["violin", "stormy"] },
  { title: "Symphony No. 10 Mvt. 2", composer: "Shostakovich", mood: "angry", tags: ["orchestral", "tense"] },
  { title: "Symphony No. 5", composer: "Beethoven", mood: "angry", tags: ["fate", "dramatic"] },
  { title: "Totentanz", composer: "Liszt", mood: "angry", tags: ["piano", "macabre"] },
  { title: "Quartet No. 8, Mvt. 2", composer: "Shostakovich", mood: "angry", tags: ["string quartet", "haunting"] },
  { title: "Young Person’s Guide to the Orchestra, Fugue", composer: "Britten", mood: "angry", tags: ["orchestral", "complex"] },

  // Want to cry
  { title: "Fantasia Based on Russian Themes", composer: "Rimsky-Korsakov", mood: "cry", tags: ["orchestral", "melancholy"] },
  { title: "Adagio for Strings", composer: "Barber", mood: "cry", tags: ["strings", "mournful"] },
  { title: "Violin Concerto in E Minor", composer: "Mendelssohn", mood: "cry", tags: ["violin", "emotional"] },
  { title: "Aase’s Death", composer: "Grieg", mood: "cry", tags: ["orchestral", "funereal"] },
  { title: "Andante Festivo", composer: "Sibelius", mood: "cry", tags: ["strings", "solemn"] },

  // Adventure
  { title: "An American in Paris", composer: "Gershwin", mood: "adventure", tags: ["jazz", "orchestral"] },

  // Want chills
  { title: "Danse Macabre", composer: "Saint-Saëns", mood: "chills", tags: ["orchestral", "spooky"] },
  { title: "Russian Easter Overture", composer: "Rimsky-Korsakov", mood: "chills", tags: ["orchestral", "festive"] },

  // Study
  { title: "Eine kleine Nachtmusik", composer: "Mozart", mood: "study", tags: ["strings", "upbeat"] },
  { title: "Bolero", composer: "Ravel", mood: "study", tags: ["repetitive", "hypnotic"] },
  { title: "Serenade for Strings", composer: "Elgar", mood: "study", tags: ["strings", "calm"] },
  { title: "Scheherazade", composer: "Rimsky-Korsakov", mood: "study", tags: ["orchestral", "storytelling"] },
  { title: "Pines of Rome, Mvt. 4", composer: "Respighi", mood: "study", tags: ["orchestral", "majestic"] },

  // Dance
  { title: "Capriccio Espagnol", composer: "Rimsky-Korsakov", mood: "dance", tags: ["orchestral", "spanish"] },
  { title: "Blue Danube", composer: "Strauss II", mood: "dance", tags: ["waltz", "elegant"] },
  { title: "Le Cid", composer: "Massenet", mood: "dance", tags: ["ballet", "dramatic"] },
  { title: "Radetzky March", composer: "Strauss I", mood: "dance", tags: ["march", "festive"] },

  // Bounce in chair
  { title: "Hopak", composer: "Mussorgsky", mood: "bounce", tags: ["folk", "energetic"] },
  { title: "Les Toreadors", composer: "Bizet", mood: "bounce", tags: ["opera", "lively"] },

  // Need energy
  { title: "Hungarian Dance No. 1", composer: "Brahms", mood: "energy", tags: ["dance", "vigorous"] },
  { title: "Hungarian Dance No. 5", composer: "Brahms", mood: "energy", tags: ["dance", "fiery"] },

  // Suspense
  { title: "Firebird", composer: "Stravinsky", mood: "suspense", tags: ["ballet", "magical"] },
  { title: "In the Hall of the Mountain King", composer: "Grieg", mood: "suspense", tags: ["orchestral", "creepy"] },
  { title: "Ride of the Valkyries", composer: "Wagner", mood: "suspense", tags: ["opera", "epic"] },
  { title: "Night on Bald Mountain", composer: "Mussorgsky", mood: "suspense", tags: ["orchestral", "dark"] },

  // Jazzy/classical
  { title: "Rhapsody in Blue", composer: "Gershwin", mood: "jazzy", tags: ["piano", "jazz"] },

  // Emotional
  { title: "Introduction and Rondo Capriccioso", composer: "Saint-Saëns", mood: "emotional", tags: ["violin", "passionate"] },
  { title: "Unfinished Symphony", composer: "Schubert", mood: "emotional", tags: ["symphony", "mysterious"] },
  { title: "Symphony No. 7, Allegretto", composer: "Beethoven", mood: "emotional", tags: ["symphony", "haunting"] },
  { title: "Canon in D", composer: "Pachelbel", mood: "emotional", tags: ["strings", "repetitive"] },

  // Relax with tea
  { title: "St. Paul’s Suite", composer: "Holst", mood: "relax", tags: ["strings", "peaceful"] },
  { title: "Concerto for Two Violins", composer: "Vivaldi", mood: "relax", tags: ["violin", "baroque"] },
  { title: "L’Arlésienne Suite", composer: "Bizet", mood: "relax", tags: ["orchestral", "gentle"] },

  // Miscellaneous
  { title: "Symphony No. 40", composer: "Mozart", mood: "misc", tags: ["symphony", "classical"] },
  { title: "Cello Suite No. 1", composer: "Bach", mood: "misc", tags: ["cello", "baroque"] },
  { title: "Polovtsian Dances", composer: "Borodin", mood: "misc", tags: ["orchestral", "folk"] },
  { title: "Enigma Variations", composer: "Elgar", mood: "misc", tags: ["orchestral", "puzzles"] },
  { title: "Perpetuum Mobile", composer: "Paganini", mood: "misc", tags: ["violin", "fast"] },

  // Cool pieces
  { title: "Scherzo Tarantelle", composer: "Wieniawski", mood: "cool", tags: ["violin", "virtuosic"] },
  { title: "Dance of the Goblins", composer: "Bazzini", mood: "cool", tags: ["violin", "playful"] },
  { title: "Caprice No. 24", composer: "Paganini", mood: "cool", tags: ["violin", "difficult"] },
  { title: "New World Symphony, Allegro con Fuoco", composer: "Dvořák", mood: "cool", tags: ["symphony", "dramatic"] },

  // Concertos
  { title: "Concerto for Two Violins", composer: "Bach", mood: "concertos", tags: ["violin", "baroque"] },
  { title: "Violin Concerto in A Minor", composer: "Vivaldi", mood: "concertos", tags: ["violin", "fast"] },
  { title: "Violin Concerto", composer: "Tchaikovsky", mood: "concertos", tags: ["violin", "romantic"] },
  { title: "Cello Concerto in C", composer: "Haydn", mood: "concertos", tags: ["cello", "classical"] },

  // Hate classical
  { title: "4'33\"", composer: "Cage", mood: "hate", tags: ["silence", "avant-garde"] }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Load moods
  const moods = [
    "delightful", "chill", "sleep", "wakeup", "proud", "excited", 
    "angry", "cry", "adventure", "chills", "study", "dance", 
    "bounce", "energy", "suspense", "jazzy", "emotional", 
    "relax", "misc", "cool", "concertos", "hate"
  ];

  const moodContainer = document.getElementById('moods');
  moods.forEach(mood => {
    const button = document.createElement('button');
    button.textContent = mood;
    button.onclick = () => showRecommendations(mood);
    moodContainer.appendChild(button);
  });

  // Load custom collection from localStorage
  loadCustomCollection();
});

// Showing recommendations
function showRecommendations(mood) {
  const container = document.getElementById('recommendations');
  container.innerHTML = '<h3>Suggested Pieces:</h3>';
  
  // Combine predefined and custom music
  const allMusic = [...musicData, ...getCustomCollection()];
  
  allMusic.filter(piece => piece.mood === mood).forEach(piece => {
      const div = document.createElement('div');
      div.className = 'music-item';
      div.innerHTML = `
          <strong>${piece.title}</strong> - ${piece.composer}
          <div class="rating">${createRatingStars(piece)}</div>
          <div>Tags: ${piece.tags.join(', ')}</dv>
      `;
      container.appendChild(div);
  });
}

// Rating system
function createRatingStars(piece) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
      stars += `<span onclick="ratePiece('${piece.title}', ${i})">${i <= (piece.rating || 0) ? '★' : '☆'}</span>`;
  }
  return stars;
}

function ratePiece(title, rating) {
  const ratedPieces = JSON.parse(localStorage.getItem('ratings') || '{}');
  ratedPieces[title] = rating;
  localStorage.setItem('ratings', JSON.stringify(ratedPieces));
  showRecommendations(currentMood);
}

// Custom collection
document.getElementById('customForm').onsubmit = function(e) {
  e.preventDefault();
  const newPiece = {
      title: document.getElementById('title').value,
      composer: document.getElementById('composer').value,
      mood: prompt('Enter mood for this piece:'),
      tags: document.getElementById('tags').value.split(',').map(t => t.trim())
  };
  
  const customCollection = getCustomCollection();
  customCollection.push(newPiece);
  localStorage.setItem('customCollection', JSON.stringify(customCollection));
  
  loadCustomCollection();
  this.reset();
};

function getCustomCollection() {
  return JSON.parse(localStorage.getItem('customCollection') || '[]');
}

function loadCustomCollection() {
  const container = document.getElementById('customCollection');
  container.innerHTML = '<h3>Your Collection:</h3>';
  
  getCustomCollection().forEach(piece => {
      const div = document.createElement('div');
      div.className = 'music-item';
      div.textContent = `${piece.title} - ${piece.composer} (${piece.mood})`;
      container.appendChild(div);
  });
}