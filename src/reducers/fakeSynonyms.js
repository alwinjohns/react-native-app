const actorSynonyms = {
  'Barack Obama': [
    'Barack',
    'Obama',
    'Obi',
  ],
  'Roosevelt': [
    'Roosevelt',
    'FDR',
    'Franklin',
    'John',
  ],
  'Donald Trump': [
    'Trump',
    'Donald',
    'John',
    'Donald J Trump',
  ],
  'Vladimir Putin': [
    'Putin',
    'Russia',
    'Vladimirowich'
  ],
  'Jackson': [
    'Mississippi',
    'MJ'
  ],
  'Hillary Clinton': [
    'Hillary',
    'Clinton',
  ],
  'Anthony Scaramucci': [
    'Anthony',
    'Scaramucci',
  ],
  'Justin Trudeau': [
    'Justin',
    'Trudeau',
  ],
  'Bernie Sanders': [
    'Bernie',
    'Sanders',
  ],
  'Thomas Jefferson': [
    'Thomas',
    'Jefferson',
  ],
}

export const getActorSynonyms = (actor) => {
  fetch('http://104.198.76.143:8080/dictionary/synonyms', {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
      console.log('syno: ', responseData[actor]);
      return responseData[actor]
  })
  .done()
}
