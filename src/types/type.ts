export type NavLink = {
  name: string;
  path: string;
};

export type Language = {
  code: string;
  label: string;
  flag: string;
};
export type Developer = {
    name: string;
    link?: string;
    image?: string;
}
export type TeamGroup = {
  role: string;
  members: Team[];

}

export type Team = {
  name: string;
  image?: string;
  link: string;
  title?:string;
};
