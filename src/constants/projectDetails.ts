interface projectDetailsProps {
  id: number;
  title: string;
  subtitle: string;
  frontPageDescription: string;
}

export const projectDetails: projectDetailsProps[] = [
  {
    id: 1,
    title: "ChemStack",
    subtitle: "Chemical Inventory Management System",
    frontPageDescription:
      "Addressing the common challenges in managing a chemical laboratory",
  },
  {
    id: 2,
    title: "Space Chat",
    subtitle: "Full Stack Chat Application",
    frontPageDescription:
      "Effective communication with real-time messaging that takes you to the outer space",
  },
  {
    id: 3,
    title: "Turista.PH",
    subtitle: "Tourist Accomodation Website",
    frontPageDescription:
      "Discover and book along with the beautiful sceneries of the Philippines",
  },

  {
    id: 4,
    title: "BioBytes PairSync",
    subtitle: "GUI Application in Molecular Biology",
    frontPageDescription:
      "Obtaining fast insights from biological data by providing input sequences (DNA, RNA, or Protein)",
  },
];
