import React, { Suspense } from 'react';
import Catogries from '../Catogries';

const Leftaside = () => {
    return (
        <div className='ml-20'>
                      <Suspense fallback= {<span className="loading loading-dots loading-xl"></span>}>
<Catogries></Catogries>

           </Suspense>
        </div>
    );
};

export default Leftaside;