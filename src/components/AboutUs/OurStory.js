import React from 'react';
import image1 from '../../assets/images/storytrial2.jpg';

const OurStory = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className=""> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    <div className='px-6'>
                    <h2 className="h2 capitalize text-black py-2 ">Our Story</h2>
                        <p>
                            Opulenza Verve's journey began with a vision - to create a dining experience that
                            blends the best of North Indian, South Indian, and Italian cuisines.
                        </p> <br />
                        <p>
                            Our story unfolds on the vibrant streets of Noida, where we embarked on a gastronomic
                            adventure to curate a menu that celebrates diversity and exquisite tastes.
                        </p>
                    </div>
                    <div>
                        <img
                            className="max-w-full h-auto md:h-80 mr-4 rounded-lg shadow-lg"
                            src={image1}
                            alt='restaurant'
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
