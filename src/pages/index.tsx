import { useState } from 'react';
import styles from './index.module.css';
import { EduIotApiClient } from 'iniad-api-client';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [icCardId, setIcCardId] = useState('');
  const [comment, setComment] = useState('');

  const lockerOpen = async () => {
    const iotClient = new EduIotApiClient(userName, passWord, 'https://edu-iot.iniad.org');

    try {
      const res = await iotClient.openLocker();
      console.log(res);
    } catch {
      console.error('error');
    }
  };

  const handleLockerOpen = () => {
    lockerOpen().catch(console.error);
  };

  const registerIcCard = async () => {
    const iotClient = new EduIotApiClient(userName, passWord, 'https://edu-iot.iniad.org');

    try {
      const res = await iotClient.registerICCard(icCardId, comment);
      console.log(res);
    } catch {
      console.error('error');
    }
  };

  const handleRegisterIcCard = () => {
    registerIcCard().catch(console.error);
  };

  return (
    <div className={styles.container}>
      <section>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUserName(event.currentTarget.value);
          }}
          value={userName}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassWord(event.currentTarget.value);
          }}
          value={passWord}
        />
        <button onClick={handleLockerOpen}>ロッカーを開ける</button>
      </section>

      <section>
        <input
          type="text"
          placeholder="icCardId"
          onChange={(event) => {
            setIcCardId(event.currentTarget.value);
          }}
          value={icCardId}
        />
        <input
          type="text"
          placeholder="comment"
          onChange={(event) => {
            setComment(event.currentTarget.value);
          }}
          value={comment}
        />
        <button onClick={handleRegisterIcCard}>ICカードを登録</button>
      </section>
    </div>
  );
};

export default Home;
