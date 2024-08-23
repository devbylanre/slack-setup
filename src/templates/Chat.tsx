import React from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          overflow: 'hidden',
        }}
      >
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ opacity: { delay: 1, duration: 0.5 } }}
          style={{
            marginTop: '0.8rem',
            flex: '1 1 0%',
            fontSize: '1.2rem',
            fontWeight: 500,
          }}
        >
          #ModuleInc
        </motion.h6>

        <motion.div
          animate={{ scaleX: [0.9, 1], opacity: [0, 1] }}
          transition={{
            scaleX: {
              delay: 1.2,
              duration: 0.4,
            },
            opacity: {
              delay: 1.2,
              duration: 0.4,
            },
          }}
          style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}
        >
          <img
            alt='message sender'
            src='/assets/images/userOne.png'
            style={{ width: '24px', height: '24px', borderRadius: '999rem' }}
          />
          <h6 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Matt @meta</h6>
          <p style={{ fontSize: '1.2rem' }}>10: 43 AM</p>
        </motion.div>

        <motion.div
          animate={{ scaleX: [0.9, 1], opacity: [0, 1] }}
          transition={{
            scaleX: {
              delay: 1.4,
              duration: 0.4,
            },
            opacity: {
              delay: 1.4,
              duration: 0.4,
            },
          }}
          style={{
            padding: '0.8rem',
            borderRadius: '0.8rem',
            backgroundColor: 'var(--gray-light)',
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: '1.2rem',
              lineHeight: '1.6rem',
              color: 'var(--gray-normal)',
            }}
          >
            Hey Elisa, we are sending you the updates here!
          </p>
        </motion.div>

        <motion.div
          animate={{ scaleX: [0.9, 1], opacity: [0, 1] }}
          transition={{
            scaleX: {
              delay: 1.6,
              duration: 0.4,
            },
            opacity: {
              delay: 1.6,
              duration: 0.4,
            },
          }}
          style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}
        >
          <img
            alt='message receiver'
            src='/assets/images/userTwo.png'
            style={{ width: '24px', height: '24px', borderRadius: '999rem' }}
          />
          <h6 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Elisa Wood</h6>
          <p style={{ fontSize: '1.2rem' }}>11: 23 AM</p>
        </motion.div>

        <motion.div
          animate={{ scaleX: [0.9, 1], opacity: [0, 0.6] }}
          transition={{
            scaleX: {
              delay: 2,
              duration: 0.4,
            },
            opacity: {
              delay: 2,
              duration: 0.4,
            },
          }}
          style={{
            padding: '0.8rem',
            borderRadius: '0.8rem',
            backgroundColor: 'var(--gray-light)',
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: '1.2rem',
              lineHeight: '1.6rem',
              color: 'var(--gray-normal)',
            }}
          >
            Awesome. Looking forward to it.
          </p>
        </motion.div>
      </div>
    </Card>
  );
};

export default Chat;
