'use client';

import * as React from 'react';
import { useState } from 'react';
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

type DatePickerProps = DayPickerSingleProps;

export function DatePicker({ mode = 'single' }: DatePickerProps) {
  const [date, setDate] = useState<Date>();

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
      <PopoverContent className="w-auto p-0">
        <Calendar mode={mode} selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
