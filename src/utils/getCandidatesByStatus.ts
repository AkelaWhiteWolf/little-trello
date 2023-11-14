import { candidatesStore } from 'src/store';
import { getObjectDeepCopy } from 'src/utils';

export function getCandidatesByStatus(status: number) {
  const { data } = candidatesStore;
  const dataCopy = getObjectDeepCopy(data);

  return dataCopy.filter((candidate) => {
    const result = candidate.employerStatusId === String(status);
    return result;
  });
}
