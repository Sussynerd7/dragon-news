import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import Latestnews from './components/Latestnews';
import Navbar from './components/Navbar';
import Leftaside from './Homelayout/leftaside';
import Rightaside from './Homelayout/Rightaside';

const Homelayout = () => {
    return (
        <div>

            <Header>

            </Header>
            <section className='w-11/12 mx-auto'>


            <Latestnews>
             </Latestnews>
                
                </section>
                <nav>
                    <Navbar>

                    </Navbar>
                </nav>
            <main className=' mx-auto my-3  grid grid-cols-12 '>
            <aside className='col-span-3 sticky top-0 h-fit'>
                <Leftaside></Leftaside>
            </aside>
                <section className="main col-span-6">

                    <Outlet></Outlet>

                </section>
                <aside className='ml-3 col-span-3 sticky top-0 h-fit'>
                <Rightaside></Rightaside>
            </aside>
                
            </main>
        </div>
    );
};

export default Homelayout;