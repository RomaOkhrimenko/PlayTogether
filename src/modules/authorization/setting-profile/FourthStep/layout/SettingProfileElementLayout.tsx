import { ReactNode } from 'react';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import { Container, FieldWrapper } from './StyledComponents';

type Props = {
  children: ReactNode;
  fieldNumber: string;
  fieldState: 'text' | 'success' | 'number' | 'loading';
  fieldName: string;
};
const SettingProfileElementLayout = ({
  children,
  fieldNumber,
  fieldState,
  fieldName,
}: Props) => {
  return (
    <Container>
      <div>
        <FieldNumber state={fieldState} text={fieldNumber} />
      </div>

      <FieldWrapper>
        <h4>{fieldName}</h4>

        {children}
      </FieldWrapper>
    </Container>
  );
};

export default SettingProfileElementLayout;
