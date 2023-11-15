import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { BarChart, Bar, XAxis } from 'recharts';
import { useStores } from 'src/contexts';
import { useCandidates, useChannels } from 'src/hooks';
import styles from 'src/styles/ChannelsChart.module.scss';

export const ChannelsChart = observer(() => {
  const { candidates, channels } = useStores();
  const { getChannelsFromServerFirstTime } = useChannels();
  const { getCandidatesFromServerFirstTime } = useCandidates();

  useEffect(() => {
    getChannelsFromServerFirstTime();
    getCandidatesFromServerFirstTime();
  }, []);

  if (candidates.isLoading || channels.isLoading) {
    return <Spin size="large" />;
  }

  return (
    <div className={styles['chart-container']}>
      <BarChart width={250} height={500} data={channels.getDataForChart()}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
      </BarChart>
    </div>
  );
});
