import { Button } from '@/modules/authorization/setting-profile/components/StepButton/StyledComponents';

type Props = {
  name: string;
  disable?: boolean;
  onClick: () => void;
  accent?: boolean;
};
const StepButton = ({ name, disable, onClick, accent }: Props) => {
  return (
    <Button onClick={onClick} disabled={disable} accent={accent}>
      {name}
    </Button>
  );
};

export default StepButton;
