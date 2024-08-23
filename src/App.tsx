import React from 'react';
import Styles from './styles.module.css';
import TrelloCard from './components/trello/Card';

function App() {
  return (
    <main>
      <div className={Styles.container}>
        <div className={Styles.box}>
          <div className={Styles.cards}>
            {/* first inner box */}
            <div className={Styles.card}>
              <TrelloCard />
            </div>
            {/* second inner box */}
            <div className={Styles.card}></div>
          </div>
          <div className={Styles.content}>
            {/* title and badge */}
            <div className={Styles.header}>
              <h1 className={Styles.title}>Setup</h1>
              <div className={Styles.badge}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -1 1v3l.007 .117a1 1 0 0 0 .993 .883h2l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z'></path>
                  <path d='M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z'></path>
                  <path d='M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z'></path>
                </svg>
                8 min
              </div>
            </div>
            <p className={Styles.lead}>
              We set you up with your own private Slack channel and a Trello
              project management board where you can make requests, ask for
              changes, or just hang with us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
