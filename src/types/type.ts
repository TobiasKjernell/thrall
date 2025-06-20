export type NavLink = {
  name: string;
  path: string;
};

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
export type Developer = {
    name: string;
    link?: string;
    image?: string;
}
