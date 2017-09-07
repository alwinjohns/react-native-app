const actorSynonyms = {
  'Barack Obama': [
    'Barack',
    'Obama',
    'Obi',
  ],
  'Franklin Roosevelt': [
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
  return actorSynonyms[actor] || []
}
