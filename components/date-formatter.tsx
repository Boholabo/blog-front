import { parseISO, format } from 'date-fns';
import { FC } from 'react';

type Props = {
  dateString: string;
};

const DateFormatter: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
