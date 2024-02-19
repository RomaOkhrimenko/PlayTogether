import { ReactNode } from 'react';
import FieldNumber from '@/modules/authorization/setting-profile/FourthStep/components/FieldNumber';
import { Container } from './StyledComponents';

type Props = {
  children: ReactNode;
  fieldNumber: string;
  fieldState: 'text' | 'success' | 'number' | 'loading';
};
const SettingProfileElementLayout = ({
  children,
  fieldNumber,
  fieldState,
}: Props) => {
  return (
    <Container>
      <div>
        <FieldNumber state={fieldState} text={fieldNumber} />
      </div>

      <>{children}</>
    </Container>
  );
};

export default SettingProfileElementLayout;
