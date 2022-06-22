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

const MovieForm = () => (
  <StyledMovieForm>
    <LeftPart>
      <FormItem type={FormItemType.default} label={LABELS.title} />
      <FormItem type={FormItemType.url} label={LABELS.url} />
      <FormItem
        type={FormItemType.select}
        label={LABELS.genre}
        placeholder={PLACEHOLDERS.date}
        options={OPTIONS}
      />
    </LeftPart>
    <RightPart>
      <FormItem type={FormItemType.date} label={LABELS.date} placeholder={PLACEHOLDERS.genre} />
      <FormItem type={FormItemType.number} label={LABELS.rating} />
      <FormItem type={FormItemType.number} label={LABELS.runtime} />
    </RightPart>
    <BotPart>
      <FormItem type={FormItemType.textArea} label={LABELS.overview} />
    </BotPart>
  </StyledMovieForm>
)

export { MovieForm }
