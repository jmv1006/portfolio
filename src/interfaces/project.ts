interface IProject {
  name: string;
  description: string;
  tech: Array<string>;
  image: string | null;
  repoLink: string;
  siteLink: string | null;
}

export default IProject;
