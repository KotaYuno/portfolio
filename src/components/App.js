import '../App.css';

import Guid from './Guid';
import Context from './Context';
import Title from './Title';
import Title2 from './Title2';
import Title3 from './Title3';
import UrlButton from './UrlButton';

import Chuo_ico from "./pic/chuo.png"
import Cs50_ico from "./pic/CS50x.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Takeuchi Kota's <br></br>Personal Portfolio</h1>
        <ul id="guid_hover">
          <Guid title={'Education'}/>
          <Guid title={'Project'}/>
          <Guid title={'Qualifications'}/>
          <Guid title={'Contact Address'}/>
        </ul>
      </header>
      <body className='App-body'>
        <div className='chap'>
        <Title title={'Education'}/>
          <div className='div-flat'>
            <Context context={'中央大学 経済学部 公共環境経済学科 在学中'}/>
            <img src={Chuo_ico} alt='chuo'/>
          </div>
          <div className='divflat'>
            <Context context={'米ハーバード大学 CS50 Introduction to Computer Science 履修認定'}/>
            <a href='https://www.edx.org/course/introduction-computer-science-harvardx-cs50x'>
              <img src={Cs50_ico} alt='cs50' />
            </a>
          </div>
        </div>
        
        <div className='chap'>
          <Title title={'Project'}/>
          <div className='project-pa'>
            <div className='proEl'>
              <Title2 title={'Online Illust Chainer'}/>
              <Title3 title={'概要'}/>
              <Context context={`オンライン上で絵しりとりが簡単にできるアプリケーションです。`}/>
              <Context context={`大学生等のzoomでのオンライン飲み会時の利用を想定して作ったため、websocketを利用した同時通信や簡単にゲームを開始できるようwebブラウザでできる点にこだわりました。`}/>
              <Title3 title={'使用技術'}/>
              <ul>
                <li className='li_flat skils'>Python</li>
                <li className='li_flat skils'>Flask</li>
                <li className='li_flat skils'>websocket</li>
                <li className='li_flat skils'>HTML,CSS</li>
              </ul>
              <UrlButton 
                context={'code'}
                url={'https://github.com/KotaYuno/online-illust-chainer'}
              />
            </div>
            <div className='proEl'>
              <Title2 title={'Eqitter'}/>
              <Title3 title={'概要'}/>
              <Context context={'プログラミング初学者や未経験者が実際の開発現場でのニュアンスを知ることができるユーザー辞書をchromeの拡張機能として実装しました。'}/>
              <Context context={'こちらは先日参加したハッカソンでチーム開発したものとなります。自分の担当はバックエンドでフロントとのデータのやり取り、ユーザー辞書の登録の機能を担当しました。'}/>
              <Title3 title={'使用技術'}/>
              <ul>
                <li className='li_flat skils'>Python</li>
                <li className='li_flat skils'>Flask</li>
                <li className='li_flat skils'>React</li>
                <li className='li_flat skils'>Heroku</li>
              </ul>
              <UrlButton 
                url={'https://eqitter.herokuapp.com/'}
                context={'View'}
              />
              <UrlButton
                context={'code'}
                url={'https://github.com/KotaYuno/eqitter'}
              />
            </div>
          </div>
        </div>
        
        <div className='chap'>
          <Title title={'Qualifications'}/>
          <ul>
            <li>2019年6月日商簿記検定試験２級 合格</li>
            <li>2020年8月普通自動車第一種免許 取得</li>
          </ul>
        </div>

        <div className='chap'>
          <Title title={'Contact Address'}/>
          
          <div className='div-flat'>
            <Title3 title={'EMAIL'}/>
            <UrlButton 
              context={'kouta.yuno.code@gmail.com'}
              url={'maito:kouta.yuno.code@gmail.com'}
            />
          </div>
          <div className='div-flat'>
            <Title3 title={'GitHub'}/>
            <UrlButton 
              context={'@KotaYuno'}
              url={'https://github.com/KotaYuno'}
            />
          </div>
        </div>
        
        
      </body>
    </div>
  );
}

export default App;
