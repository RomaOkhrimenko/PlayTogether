import React, { useState } from 'react';
import SettingProfileElementLayout from '@/modules/authorization/setting-profile/FourthStep/layout/SettingProfileElementLayout';
import { FieldNumberState } from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber/types';
import { DatePicker } from '@/components/shadcn/DatePicker';

type Props = {
  register: any;
  inputType: string;
  fieldName: string;
  number: string;
  value: Date;
  onValidateField?: (arg1: Date) => FieldNumberState;
};

const DatePickerField = ({ number, fieldName }: Props) => {
  const [state, setState] = useState<FieldNumberState>('text');

  return (
    <SettingProfileElementLayout
      fieldNumber={number}
      fieldState={state}
      fieldName={fieldName}
    >
      <DatePicker mode={'single'} />
    </SettingProfileElementLayout>
  );
};

export default DatePickerField;
