import React from 'react';
import Banner from '../common/Banner';
import Footer from '../common/Footer';
const Process = () => {
  return (
    <div className='process'>
      <Banner
        image='https://images.unsplash.com/photo-1611007724986-ddc029dd74d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRleHRpbGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        text='Process We Follow'
      />
      <div class='timeline'>
        <div class='timeline-container left'>
          <div class='content'>
            <h2>Dyeing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe
              omnis. Ipsum, eveniet consequuntur. Nam labore vitae velit et?
              Sapiente explicabo dolore soluta quibusdam id similique ut sequi
              obcaecati placeat.
            </p>
          </div>
        </div>
        <div class='timeline-container right'>
          <div class='content'>
            <h2>Printing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dignissimos recusandae dolor quae minima ducimus
              quaerat maxime autem debitis quod? Quam debitis voluptatem
              assumenda accusantium, eligendi non nulla eaque voluptatum?
            </p>
          </div>
        </div>
        <div class='timeline-container left'>
          <div class='content'>
            <h2>Knits </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe
              omnis. Ipsum, eveniet consequuntur. Nam labore vitae velit et?
              Sapiente explicabo dolore soluta quibusdam id similique ut sequi
              obcaecati placeat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Process;
