"use client";
import StickyPage from '@/components/sticky-page';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Success = ({searchParams}) => {
  const [session, setSession] = useState({});
  const {session_id} = searchParams

  useEffect(() => {
    async function fetchSession() {
        const {data} = await axios.get('/api/checkout-session?session_id=' + session_id)
        
            console.log(data)
            setSession(data)
    }
    
    fetchSession();
  }, [session_id]);

  return (
    <StickyPage>
        <main>
            <div className='inner-centered'>
                <h1>O seu pagamento foi bem processado</h1>
                <div className="sr-callout">
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                </div>
            </div>
        </main>  
          </StickyPage>
  );
};

export default Success;
