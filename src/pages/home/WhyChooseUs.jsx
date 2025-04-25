import React from 'react';
import { Search, Star, Users } from 'lucide-react';
import ChooseBoy from '../../assets/boy.png';

export default function WhySaharaTours() {
  
  return (
    <div className="container mx-auto pt-10 pb-10">
      <div>
 
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why <span className="text-yellow-500">Sahara</span> Tours?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm md:text-base px-4">
            Lorem ipsum is simply dummy text of typesetting chat wondrous industry. Didn't catch that new flat screen? Elevated but truly deep with the feels, which in truth won't give time back in quality of spirit.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center">
            <div className='left_side relative mb-8 md:mb-0'>
                <img src={ChooseBoy} alt="Male Image" className='max-w-72'/>
                <div className='absolute hidden xl:block top-8 right-24 border-2 border-green-400 p-4 rounded-full'>
                    <h4 className='text-md text-secondary text-center'>
                      Why <br></br> Choose Us?
                    </h4>
                </div>
            </div>
            <div className='right_side px-4 xl:px-0'>
                <div className="flex flex-wrap gap-2 xl:gap-6 mb-4 xl:mb-8">
                    <div className="flex items-center gap-2 shadow-sm border rounded-xl border-primary py-2 px-4 xl:px-8">
                        <div className='text-center'>
                            <p className="font-bold text-xl xl:text-2xl">480k+</p>
                            <p className="text-gray-500 text-sm">Happy Users</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shadow-sm border rounded-xl border-primary py-2 px-4 xl:px-8">
                        <div>
                            <p className="font-bold text-xl xl:text-2xl">2k+</p>
                            <p className="text-gray-500 text-sm">Reviews</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 shadow-sm border rounded-xl border-primary py-2 px-4 xl:px-8">
                        <div className="p-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div>
                            <p className="font-bold text-xl xl:text-2xl">4.7</p>
                            <p className="text-gray-500 text-sm">Star Rating</p>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tellus non lacus pellentesque mi, sed volutpat sem felis ac nibh. Nam lacus tellus, placerat suscipit diam vitae, blandit ullamcorper velit. Suspendisse vitae sem leo when an ultricies orare varia greffix of liver dret considered to lo make in bus spontera book it nus purusth on only has noffendia fon and the wax into heractium suspendere ehmitring desmecable allongitrud it was condiment to the dilibe will. The respect of wonders from afratress to montain is spellbound bravissima and nustic to recombine attributes like Atlas magnificate including sensora ultama quanti.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}