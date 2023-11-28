import { API } from 'src/api';
import { СandidateCardData } from 'src/types';
import { getObjectDeepCopy } from 'src/utils';
import { create } from 'zustand';
interface Store {
  data: СandidateCardData[];
  isLoading: boolean;
}
interface Actions {
  changeEmployerStatus: (candidateId: number, newStatus: number) => void;
  getDataFromServer: () => void;
}

export const useCandidatesStore = create<Store & Actions>((set, get) => ({
  data: [],
  isLoading: false,

  changeEmployerStatus(candidateId: number, newStatus: number) {
    const state = get();

    const newDataState = state.data.map((candidate) =>
      candidate.candidate.id === candidateId
        ? {
            ...getObjectDeepCopy(candidate),
            employerStatusId: String(newStatus),
          }
        : candidate,
    );

    set(() => ({
      data: newDataState,
    }));
  },

  async getDataFromServer() {
    set(() => ({ isLoading: true }));

    const { data: response, error } = await API.get(
      'https://650d558fa8b42265ec2c07b8.mockapi.io/kek/submissions',
    );

    if (!error) {
      set(() => ({ data: response, isLoading: false }));
    }
  },
}));
