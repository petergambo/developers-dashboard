interface Props {
  profileImage: string;
}

const ProfileImageSection: React.FC<Props> = ({ profileImage }) => {
  return (
    <div className="flex justify-end pb-4">
      <img src={profileImage} alt="User Picture" />
    </div>
  );
};

export default ProfileImageSection;
