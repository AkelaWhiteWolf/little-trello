export interface СandidateCardData {
  id: number;
  viewed: number;
  favorite: number;
  employerStatusId: string;
  channelId: string;
  createdAt: string;
  adChannel: string;
  candidate: {
    id: number;
    firstName: string;
    lastName: string;
    color: string;
  };
}
