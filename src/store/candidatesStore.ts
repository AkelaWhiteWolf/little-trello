import { makeAutoObservable, runInAction } from 'mobx';
import { СandidateCardData } from 'src/types';

class CandidatesStore {
  data: СandidateCardData[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeEmployerStatus = (candidateId: number, newStatus: number) => {
    const candidate = this.data.find(
      (data) => data.candidate.id === candidateId,
    );

    if (candidate) {
      candidate.employerStatusId = String(newStatus);
    } else {
      console.error('No candidate in store founded');
    }
  };

  getDataFromServer = async () => {
    this.isLoading = true;
    const response = await fetch(
      'https://650d558fa8b42265ec2c07b8.mockapi.io/kek/submissions',
    );
    const responseJson = await response.json();
    runInAction(() => {
      this.data = responseJson;
      this.isLoading = false;
    });
  };
}

const candidatesStore = new CandidatesStore();

export { candidatesStore };
