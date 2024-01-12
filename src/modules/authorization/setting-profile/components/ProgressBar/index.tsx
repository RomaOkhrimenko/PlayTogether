import { useEffect, useState } from 'react';
import {
  Bar,
  Container,
  Step,
  StepFill,
} from '@/modules/authorization/setting-profile/components/ProgressBar/StyledComponents';

type Props = {
  step: number;
  stepCounts: number;
};

const ProgressBar = ({ step, stepCounts }: Props) => {
  const [progressBarPercent, setProgressBarPercent] = useState(0);

  useEffect(() => {
    const percent = (100 / stepCounts) * step;

    setProgressBarPercent(percent);
  });

  return (
    <Container>
      <Bar>
        <StepFill
          initial={{ width: 0 }}
          animate={{ width: progressBarPercent + '%' }}
          transition={{ duration: 0.5 }}
        />
      </Bar>

      <Step>
        <span>
          Крок {step} з {stepCounts}
        </span>
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5H19M19 5L15 1M19 5L15 9" stroke="#00F580" />
        </svg>
      </Step>
    </Container>
  );
};

export default ProgressBar;
