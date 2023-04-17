import { DateTime } from 'luxon';

export interface Item {
  readonly name: string;
  details?: string;
  readonly startTime:DateTime;
  readonly endTime: DateTime;
  readonly hideDateRangeInHeader?: boolean;
  dates?: DateTime[];
  class?: string;
  onClick?: () => void;
}
