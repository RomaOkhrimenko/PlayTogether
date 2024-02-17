import { Metadata } from 'next';
import SettingProfile from '@/modules/authorization/setting-profile';

export const metadata: Metadata = {
  title: 'Setting Account | PlayTogether UA',
};

function SettingProfilePage() {
  return (
    <>
      <SettingProfile />
    </>
  );
}

export default SettingProfilePage;
