import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import HeaderImage from '@/assets/images/png/authorization/fill-profle-info.png';
import SettingProfileHeader from '@/modules/authorization/setting-profile/components/Header';
import TextField from '@/modules/authorization/setting-profile/FourthStep/components/TextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { fields } from '@/modules/authorization/setting-profile/FourthStep/constants';
import GenderSelect from '@/modules/authorization/setting-profile/FourthStep/components/GenderSelect';
import FileField from '@/modules/authorization/setting-profile/FourthStep/components/FileField';
import TextAreaField from '@/modules/authorization/setting-profile/FourthStep/components/TextAreaField';
import StepButton from '@/modules/authorization/setting-profile/components/StepButton';

type Props = {
 onSubmitSettingProfile: SubmitHandler<any>;
 backStep: () => void;
};
const FourthStep = ({ onSubmitSettingProfile, backStep }: Props) => {
 const {
  register,
  handleSubmit,
  formState: { errors },
  setValue,
  watch
 } = useForm();

 const nameValue = watch(fields.name, false);
 const nicknameValue = watch(fields.nickname, false);
 const genderValue = watch(fields.gender, false);
 const profilePictureValue = watch(fields.profilePictures, false);
 const bioValue = watch(fields.bio, false);
 const onValidateName = () => {
  if (nameValue.length > 0) {
   return 'success';
  } else {
   return 'text';
  }
 };

 const onValidateProfilePicture = () => {
  if (profilePictureValue && profilePictureValue.length > 0) {
   return 'success';
  } else {
   return 'text';
  }
 };

 const onValidateNickname = () => {
  if (nicknameValue.length > 0) {
   return 'success';
  } else {
   return 'text';
  }
 };

 const onValidateGender = (id: number | null) => {
  setValue(fields.gender, id);

  if (id) {
   return 'success';
  } else {
   return 'text';
  }
 };

 const onValidateTextAreaField = () => {
  if (bioValue.length > 0) {
   return 'success';
  } else {
   return 'text';
  }
 };

 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: 20 }}
   transition={{ duration: 1 }}
   className={styles.fourthStep}
  >
   <SettingProfileHeader image={HeaderImage} title={'Заповнення профілю'} />
   <div className={styles.fourthStep_formContainer}>
    <TextField
     register={register}
     fieldName={'Ім\'я'}
     error={errors?.[fields.name]?.message}
     inputType={fields.name}
     requiredText={'Необхідно вести ваше ім\'я'}
     placeholder={'Ярік'}
     number={'1'}
     value={nameValue}
     onValidateField={onValidateName}
    />

    <GenderSelect
     register={register}
     fieldName={'Оберіть стать'}
     error={errors?.[fields.gender]?.message}
     inputType={fields.gender}
     number={'2'}
     value={genderValue}
     onValidateField={onValidateGender}
    />

    <TextField
     register={register}
     fieldName={'Нікнейм'}
     error={errors?.[fields.nickname]?.message}
     inputType={fields.nickname}
     requiredText={'Необхідно вести ваш нікнейм'}
     placeholder={'Нагібатор'}
     number={'3'}
     value={nicknameValue}
     onValidateField={onValidateNickname}
    />

    <FileField
     register={register}
     fieldName={'Завантажте фотографію профілю'}
     error={errors?.[fields.profilePictures]?.message}
     inputType={fields.profilePictures}
     number={'4'}
     value={profilePictureValue}
     onValidateField={onValidateProfilePicture}
     setValue={setValue}
    />

    <TextAreaField
     register={register}
     inputType={fields.bio}
     fieldName={'Біографія'}
     placeholder={'Писати...'}
     number={'5'}
     value={bioValue}
     onValidateField={onValidateTextAreaField}
    />
   </div>

   <div className={styles.fourthStep__buttons}>
    <StepButton onClick={backStep} name={'Назад'} />
    <StepButton
     onClick={handleSubmit(onSubmitSettingProfile)}
     name={'Далі'}
     accent
     disable={false}
    />
   </div>
  </motion.div>
 );
};

export default FourthStep;
