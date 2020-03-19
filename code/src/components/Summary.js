import React from 'react'


export const Summary = ({ name, wouldYouRather, riding, animal }) => {

  return (
    <section className="summary">
      <h1>Hi {name}!</h1>
      <h1>You would like to {wouldYouRather === 'spaghetti' ? 'have spaghetti for hair' : 'sweat Syrup'}</h1>
      <h1> and ride around on a {riding}!
        <h1>A {animal} the size of a horse!</h1>
        <h1 className="crazy">You crazy 😱</h1>

      </h1>
    </section>
  )
}

