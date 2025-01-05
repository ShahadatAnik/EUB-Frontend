import React from 'react';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <div className='space-y-1'>
          <h4 className='text-primary text-2xl font-semibold'>Vision</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi
            quaerat ad commodi velit perferendis maiores amet magnam quibusdam
            ea facilis quo nostrum, pariatur excepturi rerum dolore accusamus
            odio distinctio earum corporis sed eius a doloribus similique?
            Nesciunt sit perspiciatis qui sint sequi excepturi, tenetur
            reprehenderit aliquam maiores asperiores fuga temporibus illo
            aliquid numquam ea earum! Cupiditate quibusdam numquam soluta quasi
            magnam aperiam voluptas necessitatibus iusto delectus et quis itaque
            iste vero ea sapiente, tempora temporibus ipsam blanditiis ipsum
            labore dolores accusantium. Ut illo recusandae necessitatibus
            repellat est quis, vitae autem voluptatibus sapiente sed voluptas
            nisi corporis suscipit tempora quae.
          </p>
        </div>
        <div className='space-y-1'>
          <h4 className='text-primary text-2xl font-semibold'>Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi
            quaerat ad commodi velit perferendis maiores amet magnam quibusdam
            ea facilis quo nostrum, pariatur excepturi rerum dolore accusamus
            odio distinctio earum corporis sed eius a doloribus similique?
            Nesciunt sit perspiciatis qui sint sequi excepturi, tenetur
            reprehenderit aliquam maiores asperiores fuga temporibus illo
            aliquid numquam ea earum! Cupiditate quibusdam numquam soluta quasi
            magnam aperiam voluptas necessitatibus iusto delectus et quis itaque
            iste vero ea sapiente, tempora temporibus ipsam blanditiis ipsum
            labore dolores accusantium. Ut illo recusandae necessitatibus
            repellat est quis, vitae autem voluptatibus sapiente sed voluptas
            nisi corporis suscipit tempora quae.
          </p>
        </div>
        <div className='space-y-1'>
          <h4 className='text-primary text-2xl font-semibold'>
            Our students will be:
          </h4>
          <ul className='list-decimal list-inside space-y-0.5'>
            <li>Life-long learners with good leadership skills</li>
            <li>
              More proficient in oral, written and electronic communication
            </li>
            <li>Critical thinkers with well-developed analytical skills</li>
            <li>Ethical and socially responsible</li>
            <li>Champions of diversity and tolerance</li>
            <li>
              Globally aware with commitment to social justice and
              sustainability
            </li>
          </ul>
        </div>

        <div className='space-y-1'>
          <h4 className='text-primary text-2xl font-semibold'>
            The university aims at:
          </h4>
          <ul className='list-decimal list-inside space-y-0.5'>
            <li>
              Offering socially relevant academic programs consisting of a
              substantial general education component in all undergraduate
              programs
            </li>
            <li>
              Recruiting and retaining good students, well-trained faculty with
              graduate degrees from overseas and qualified staff
            </li>
            <li>Promoting effective teaching, quality research, and service</li>
            <li>
              Providing appropriate physical facilities including classroom,
              labs and library with state of the art educational technology;
            </li>
            <li>Supporting co-curricular and extra-curricular activities</li>
            <li>
              Practicing good governance and administration that encourage
              academic freedom and faculty-staff participation and
            </li>
            <li>Purposeful engagement of our alumni and community leaders.</li>
          </ul>
        </div>

        <div>
          <small>
            {' '}
            - Approved by the Board of Trustees on{' '}
            <span className='font-semibold'>September 30, 2014</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Content;
