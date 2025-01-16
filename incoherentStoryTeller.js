// READ THE README
function incoherentStoryTeller() {
    const verbs = {
        action: ['runn', 'jump', 'swim', 'dance', 'fly', 'sing', 'climb', 'fight', 'hunt']
    };
    
    const preposition = { 
        location: ['on', 'under', 'over', 'between', 'near', 'inside', 'outside', 'beside', 'behind', 'ahead of', 'above', 'below'] 
    };

    const things = {
        monster: ['dragon', 'goblin', 'troll', 'vampire', 'werewolf', 'zombie', 'demon', 'ghost', 'kraken', 'minotaur'],
        class: ['warrior', 'mage', 'thief', 'ranger', 'cleric', 'bard', 'paladin', 'druid', 'sorcerer', 'monk'],
        race: ['elf', 'dwarf', 'human', 'orc', 'halfling', 'gnome', 'tiefling', 'dragonborn', 'goblin', 'fairy'],
        item: ['sword', 'shield', 'potion', 'amulet', 'ring', 'staff', 'bow', 'armor', 'boots', 'dagger'],
        places: ['castle', 'forest', 'dungeon', 'village', 'mountain', 'desert', 'cave', 'ocean', 'tower', 'ruins']
    };

    const adjectives = {
        adjective: ['fearsome', 'frightening', 'dreadful', 'ominous', 'appalling', 'petrifying', 'formidable', 'spooky']
    };
    
    const stories = [];

    function determineArticle(word) {
        return /^[aeiou]/i.test(word) ? 'an' : 'a';
    }
    
    function toGerund(verb) {
        const irregularVerbs = {
            "make": "making",
            "do": "doing",
            "go": "going",
            "have": "having",
            "be": "being",
            "swim": "swimming"
        };

        if (irregularVerbs[verb]) {
            return irregularVerbs[verb];
        } else if (verb.endsWith('e')) {
            return verb.slice(0, -1) + 'ing';
        } else {
            return verb + 'ing';
        }
    }

    function pickRandom(array) {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

       {  
        const characterClass = pickRandom(things.class);
        const characterRace = pickRandom(things.race);
        const monster = pickRandom(things.monster);
        const actionVerb = pickRandom(verbs.action);
        const location = pickRandom(things.places);
        const item = pickRandom(things.item);
        const prep = pickRandom(preposition.location);
        const fearLevel = pickRandom(adjectives.adjective);
        const story = `The ${characterRace} ${characterClass} is ${toGerund(actionVerb)} ${prep} the ${location} with ${determineArticle(item)} ${item}, preparing to face the ${fearLevel} ${monster}`;
        stories.push(story);
        return story;
    } 
    
}

incoherentStoryTeller();
