'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/shadcn/Button';
import { Calendar } from '@/components/shadcn/Calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/Popover';
import { DayPickerSingleProps } from 'react-day-picker';

type Props = {
  date: Date | undefined;
  onChangeDate: (arg1: Date | undefined) => void;
};

type DatePickerProps = DayPickerSingleProps & Props;

export function DatePicker({
  mode = 'single',
  captionLayout = 'buttons',
  date,
  onChangeDate,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-accent">
        <Calendar
          mode={mode}
          fromYear={1900}
          toYear={2020}
          selected={date}
          onSelect={onChangeDate}
          captionLayout={captionLayout}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
