export type Member = {
  id: number;
  name: string;
  designation: string;
};

export type IMemberData = {
  chairperson: Member;
  member_secretary: Member[];
  member: Member[];
};

interface IAuthorityInfo {
  personal_info: {
    name: string;
    title: string;
    profile_image: string;
  };
  education: string[];
  contact: {
    email: string;
    phone: string;
  };
  short_biography: string;
}
