import PropTypes from 'prop-types'
import {
  StyledMovieForm, RightPart, LeftPart, BotPart
} from './MovieForm.styles'
import { FormItem, FormItemType } from '../FormItem/FormItem'

const LABELS = {
  title: 'TITLE',
  date: 'DATE',
  url: 'MOVIE URL',
  rating: 'RATING',
  runtime: 'RUNTIME',
  overview: 'OVERVIEW',
  genre: 'GENRE'
}

const OPTIONS = ['Crime', 'Horror', 'Comedy']

const PLACEHOLDERS = {
  genre: 'Select Genre',
  date: 'Select Date'
}

const MovieForm = ({ title, url, genre, date, rating, runtime, overview }) => (
  <StyledMovieForm>
    <LeftPart>
      <FormItem
        type={FormItemType.default}
        label={LABELS.title}
        value={title}
      />
      <FormItem
        type={FormItemType.url}
        label={LABELS.url}
        value={url}
      />
      <FormItem
        type={FormItemType.select}
        label={LABELS.genre}
        placeholder={PLACEHOLDERS.date}
        options={OPTIONS}
        value={genre}
      />
    </LeftPart>
    <RightPart>
      <FormItem
        type={FormItemType.date}
        label={LABELS.date}
        placeholder={PLACEHOLDERS.genre}
        value={date}
      />
      <FormItem
        type={FormItemType.number}
        label={LABELS.rating}
        value={rating}
      />
      <FormItem
        type={FormItemType.default}
        label={LABELS.runtime}
        value={runtime}
      />
    </RightPart>
    <BotPart>
      <FormItem
        type={FormItemType.textArea}
        label={LABELS.overview}
        value={overview}
      />
    </BotPart>
  </StyledMovieForm>
)

MovieForm.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.string,
  rating: PropTypes.number,
  runtime: PropTypes.string,
  overview: PropTypes.string
}

export { MovieForm }
