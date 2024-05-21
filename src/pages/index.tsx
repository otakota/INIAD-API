import { useState } from 'react';
import styles from './index.module.css';
import { EduIotApiClient } from 'iniad-api-client';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const lockerOpen = async () => {
    const iotClient = new EduIotApiClient(userName, passWord, 'https://edu-iot.iniad.org');
    try {
      const res = await iotClient.openLocker();
      console.log(res);
    } catch {
      console.error('error');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="otako"
        onChange={(event) => {
          setUserName(event.currentTarget.value);
        }}
        value={userName}
      />
      <input
        type="password"
        placeholder="ta"
        onChange={(event) => {
          setPassWord(event.currentTarget.value);
        }}
        value={passWord}
      />
      <button onClick={lockerOpen}>open</button>
    </div>
  );
};

export default Home;
