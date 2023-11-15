import { useStores } from 'src/contexts';
import { ChannelsChartData } from 'src/types';

export const useChannelsChartData = () => {
  const { candidates, channels } = useStores();

  function getDataForChart() {
    if (!candidates?.data || !channels?.data) {
      throw new Error('No channels or candidates data on Store!');
    } else {
      const result: ChannelsChartData[] = [];

      channels.data.forEach(({ id, name }) => {
        result.push({ id, name, value: 0 });
      });
      candidates.data.forEach(({ channelId }) => {
        const requiredChannel = result.find(({ id }) => id === channelId);

        if (requiredChannel) {
          requiredChannel.value++;
        } else {
          throw new Error('Candidate id does not match any channel');
        }
      });

      return result;
    }
  }

  const chartData = getDataForChart();

  return { chartData };
};
