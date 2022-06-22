import { useState } from 'react'
import { StyledGenreSelection, Genre } from './GenreSelection.styles'

const GENRES = {
  all: 'ALL',
  documentary: 'DOCUMENTARY',
  comedy: 'COMEDY',
  horror: 'HORROR',
  crime: 'CRIME'
}

const GenreSelection = () => {
  const [active, setActive] = useState(GENRES.all)

  return (
    <StyledGenreSelection>
      {Object.values(GENRES).map((genre) => (
        <Genre onClick={() => setActive(genre)} active={active} genre={genre} key={genre}>
          {genre}
        </Genre>
      ))}
    </StyledGenreSelection>
  )
}

export { GenreSelection }
