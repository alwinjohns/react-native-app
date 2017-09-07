const actorLinks = {
  'Barack Obama': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
    },
  'Franklin Roosevelt': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Franklin_D._Roosevelt',
    },
  'Donald Trump': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Donald_Trump',
    },

  'Vladimir Putin': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Vladimir_Putin',
    },

  'Jackson': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Andrew_Jackson',
    },

  'Hillary Clinton': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Hillary_Clinton',
    },

  'Anthony Scaramucci': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Anthony_Scaramucci',
    },

  'Justin Trudeau': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Justin_Trudeau',
    },

  'Bernie Sanders': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Bernie_Sanders',
    },

  'Thomas Jefferson': {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Thomas_Jefferson',
    },
}

export const getActorLinks = (actor) => {
  return actorLinks[actor] || {}
}
