const actorSynonyms = {
  'Roosevelt': [
    'Roosevelt',
    'Jackson',
    'James',
    'Joel',
    'John',
  ],
}

export const getActorSynonyms = (actor) => {
  console.log('aaaa', actor)
  return actorSynonyms[actor]
}
