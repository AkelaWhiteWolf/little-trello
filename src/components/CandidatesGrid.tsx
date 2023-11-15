import styles from 'src/styles/CandidatesGrid.module.scss';
import { COLUMNS_DATA } from 'src/data';
import { CandidateStatusColumn } from 'src/components/CandidateStatusColumn';
import { Flex, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from 'src/contexts';
import { useEffect } from 'react';
import { getDataFirstTime } from 'src/utils';

export const CandidatesGrid = observer(() => {
  const {
    candidates: { isLoading, getDataFromServer, data },
  } = useStores();

  useEffect(() => {
    getDataFirstTime({
      data,
      isLoading,
      getDataFunction: getDataFromServer,
    });
  }, []);

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Flex wrap="nowrap" gap="15px" className={styles['candidates-grid']}>
      {COLUMNS_DATA.map(({ order, name, id }) => (
        <CandidateStatusColumn key={id} order={order} name={name} />
      ))}
    </Flex>
  );
});
