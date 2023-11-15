import { observer } from 'mobx-react-lite';
import { BarChart, Bar, XAxis } from 'recharts';
import { useStores } from 'src/contexts';
import styles from 'src/styles/ChannelsChart.module.scss';

export const ChannelsChart = observer(() => {
  const { channels } = useStores();

  return (
    <div className={styles['chart-container']}>
      <BarChart width={250} height={500} data={channels.getDataForChart()}>
        <Bar dataKey="value" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
      </BarChart>
    </div>
  );
});
