import React, { useState } from 'react';
import './App.scss';
import logo from './icons/logo.png'
import transparent from './icons/transparent.png'
import GT from './icons/GT.jpg'
import Jtp from './icons/Jtp.png'
import Background from './images/Background.png'

const Rooms = [
  {
    id: '31977451',
    passwd: '52a42294-e820-11ed-8daa-07c8f282b09d',
    logo: Jtp,
    name: 'Njtech',
    messages: [
      { name: 'user1', time: '2023/5/11 14:16:11', message: '你好' },
      { name: 'user2', time: '2023/5/12 14:50:11', message: '今天天气怎么样' },
      { name: 'user3', time: '2023/5/13 14:02:11', message: '今天是晴天' }
    ]
  },
  {
    id: '77429299',
    passwd: '7f3efedc-e820-11ed-a740-d3235d24936f',
    logo: GT,
    name: 'GT'
  }
]

// d.toLocaleString('zh-CN')

const App: React.FC = () => {

  const [status, setStatus] = useState({
    Rooms: Rooms,
    Room: Rooms[0],
    Input: ''
  })

  const addRoom = () => {

  }

  const loadRoom = (index: any) => {
    setStatus({
      ...status,
      Room: Rooms[index]
    })
  }

  const submit = () => {
    console.log(status.Input)
    setStatus({ ...status, Input: '' })
  }

  return (
    <div className='dfC' style={{ width: '100vw', height: '100vh' }} >

      <div id='Header' className='dfR' style={{ flex: '0 0 6vh' }}>
        <img src={logo} style={{ flex: '0 0 6vh' }} />
        <div id='userName' contentEditable style={{flex:'0 0 100%'}} >123</div>
      </div>

      <div id='Layout' className='dfR' style={{ flex: '0 0 94vh' }}>
        <div id='Sider' style={{ flex: '0 0 20vw' }}>
          {Rooms.map((item, index) => (
            <div className='b2' onClick={() => loadRoom(index)}>
              <div className='df'>
                <img src={item.logo ? item.logo : transparent} style={{ flex: '0 0 auto' }} />
                <span style={{ flex: '1 1 auto' }}>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div id='Content' className='dfC' style={{ backgroundImage: `url(${Background})`, flex: '0 0 80vw' }}>
          <div className='messages' style={{ flex: '1 1 auto' }}>
            {status.Room.messages?.map((item, index) => (
              <div className='dfC item'>
                <div className='dfR'>
                  <span className='name' style={{ flex: '0 0 auto' }} >{item.name}</span>
                  <span className='time' style={{ flex: '0 0 auto' }}>{item.time}</span>
                </div>
                <span className='message' style={{ flex: '0 0 auto' }}>{item.message}</span>
              </div>
            ))}
          </div>
          <div className='input dfR' style={{ flex: '0 0 auto' }}>
            <input id='input' value={status.Input} onChange={(e) => setStatus({ ...status, Input: e.target.value })}
              onKeyUp={(e) => { if (e.code == 'Enter') submit() }}></input>
            <button id='submit' onClick={() => submit()}>Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
