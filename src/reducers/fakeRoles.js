const actorRoles = {
  'Barack Obama': [
    {
      key: 'President',
      link: 'https://barackobama.com/about/',
      start: '01/05/2008',
      end: '12/02/2016',
    },
    {
      key: 'Obama',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '11/25/1991',
      end: '12/06/2017',
    },
  ],
  'Franklin Roosevelt': [
    {
      key: 'Roosevelt',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Franklin',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1937',
      end: '01/06/1956',
    },
  ],
  'Donald Trump': [
    {
      key: 'Trump',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Donald',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Vladimir Putin': [
    {
      key: 'Vladimir',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Putin',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Jackson': [
    {
      key: 'Jackson',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Hillary Clinton': [
    {
      key: 'Hillary',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Clinton',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Anthony Scaramucci': [
    {
      key: 'Anthony',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Scaramucci',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Justin Trudeau': [
    {
      key: 'Justin',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Trudeau',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Bernie Sanders': [
    {
      key: 'Bernie',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
    {
      key: 'Sanders',
      link: 'https://en.wikipedia.org/wiki/Barack_Obama',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
  'Thomas Jefferson': [
    {
      key: 'Thomas',
      link: 'https://barackobama.com/about/',
      start: '01/06/1967',
      end: '12/06/2000',
    },
  ],
}

export const getActorRoles = (actor) => {
  fetch('http://104.198.76.143:8080/dictionary/actorRoles', {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
      console.log('roles: ', responseData[actor]);
      return responseData[actor]
  })
  .done()
}
