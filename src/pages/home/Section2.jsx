import React from 'react';

const Section2= () => {
  return (
    <div id="program_sec" className="overflow-hidden relative max-w-[1160px] m-auto">
      <div className="md:py-16 py-14 md:px-2 px-6">
        {/* Title */}
        <p className="font-semibold text-[28px] text-dark-blue text-center md:font-bold">Our Highly Rated</p>
        {/* Subtitle */}
        <p className="font-semibold text-[28px] text-[#334BEF] text-center mb-[32px] md:font-bold">Outcome-based Programme</p>
        
        {/* First set of cards */}
        <div className="md:mt-8 flex flex-col">
          <div className="flex justify-center m-auto items-center cursor-default px-8 py-2 rounded-[32px] md:w-[400px] h-[44px] bg-[#334bef14]">
            <div className="font-medium text-[#334bef] md:text-[20px] text-[16px]">For Software Development Roles</div>
          </div>

          {/* Cards for Software Development Roles */}
          <div className="flex xl:hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
            {/* Transformer Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(244,132,54,0.30)]">
              <div className="bg-gradient-254 from-[rgba(255,151,79,1)] to-[rgba(221,97,6,1)] w-full py-4 rounded-t-md">
                <p className="text-[#334BEF] text-[28px] px-4 font-semibold">Transformer</p>
                <p className=" text-[#1F2C97] text-sm px-4 font-[500]">For Up to 6 Years of Experience</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Software Designing skills including LLD &amp; HLD</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="transformer.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>

            {/* Evolve Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(45,63,107,0.30)]">
              <div className="bg-gradient-254 from-[rgba(74,72,85,1)] to-[rgba(34,32,47,1)] w-full py-4 rounded-t-md">
                <p className="text-white text-[28px] px-4 font-semibold">Evolve</p>
                <p className="text-white text-sm px-4 font-[500]">For 7+ Years of Experience</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Proficiency in System Design (LLD + HLD)</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Leadership Skills &amp; Industry-Relevant Projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="evolve.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>

            {/* Accelerator Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(29,45,176,0.30)]">
              <div className="bg-gradient-254 from-[rgba(29,45,176,1)] to-[rgba(12,19,74,1)] w-full py-4 rounded-t-md">
                <p className="text-white text-[28px] px-4 font-semibold">Accelerator</p>
                <p className="text-white text-sm px-4 font-[500]">For College Students</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Computer Science Fundamentals</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="accelerator.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        {/* Second set of cards (hidden for XL screens) */}
        <div className="xl:flex xl:flex-row flex-col hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
          {/* Transformer Card (XL) */}
          <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(244,132,54,0.30)]">
            <div className="bg-gradient-254 from-[rgba(255,151,79,1)] to-[rgba(221,97,6,1)] w-full py-4 rounded-t-md">
              <p className="text-white text-[28px] px-4 font-semibold">Transformer</p>
              <p className="text-white text-sm px-4 font-[500]">For Up to 6 Years of Experience</p>
            </div>
            <ul className="mt-6 px-4">
              <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Software Designing skills including LLD &amp; HLD</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="transformer.html">
              <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
            </a>
          </div>

          {/* Evolve Card (XL) */}
          <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(45,63,107,0.30)]">
            <div className="bg-gradient-254 from-[rgba(74,72,85,1)] to-[rgba(34,32,47,1)] w-full py-4 rounded-t-md">
              <p className="text-white text-[28px] px-4 font-semibold">Evolve</p>
              <p className="text-white text-sm px-4 font-[500]">For 7+ Years of Experience</p>
            </div>
            <ul className="mt-6 px-4">
              <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Proficiency in System Design (LLD + HLD)</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Leadership Skills &amp; Industry-Relevant Projects</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="evolve.html">
              <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
            </a>
          </div>

          {/* Accelerator Card (XL) */}
          <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(29,45,176,0.30)]">
            <div className="bg-gradient-254 from-[rgba(29,45,176,1)] to-[rgba(12,19,74,1)] w-full py-4 rounded-t-md">
              <p className="text-white text-[28px] px-4 font-semibold">Accelerator</p>
              <p className="text-white text-sm px-4 font-[500]">For College Students</p>
            </div>
            <ul className="mt-6 px-4">
              <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Computer Science Fundamentals</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="accelerator.html">
              <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
            </a>
          </div>
        </div>

        <div className="md:mt-8 flex flex-col">
          <div className="flex justify-center m-auto items-center cursor-default px-8 py-2 rounded-[32px] md:w-[400px] h-[44px] bg-[#334bef14]">
            <div className="font-medium text-[#334bef] md:text-[20px] text-[16px]">For Software Development Roles</div>
          </div>

          {/* Cards for Software Development Roles */}
          <div className="flex xl:hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
            {/* Transformer Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(244,132,54,0.30)]">
              <div className="bg-gradient-254 from-[rgba(255,151,79,1)] to-[rgba(221,97,6,1)] w-full py-4 rounded-t-md">
                <p className="text-white text-[28px] px-4 font-semibold">Transformer</p>
                <p className="text-white text-sm px-4 font-[500]">For Up to 6 Years of Experience</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Software Designing skills including LLD &amp; HLD</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="transformer.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>

            {/* Evolve Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(45,63,107,0.30)]">
              <div className="bg-gradient-254 from-[rgba(74,72,85,1)] to-[rgba(34,32,47,1)] w-full py-4 rounded-t-md">
                <p className="text-white text-[28px] px-4 font-semibold">Evolve</p>
                <p className="text-white text-sm px-4 font-[500]">For 7+ Years of Experience</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Proficiency in System Design (LLD + HLD)</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Leadership Skills &amp; Industry-Relevant Projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="evolve.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>

            {/* Accelerator Card */}
            <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(29,45,176,0.30)]">
              <div className="bg-gradient-254 from-[rgba(29,45,176,1)] to-[rgba(12,19,74,1)] w-full py-4 rounded-t-md">
                <p className="text-white text-[28px] px-4 font-semibold">Accelerator</p>
                <p className="text-white text-sm px-4 font-[500]">For College Students</p>
              </div>
              <ul className="mt-6 px-4">
                <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Computer Science Fundamentals</li>
                <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer" href="accelerator.html">
                <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
              </a>
            </div>
          </div>
        </div>

        {/* Second set of cards (hidden for XL screens) */}
        <div className="xl:flex xl:flex-row flex-col hidden justify-center md:gap-x-[32px] mt-8 gap-y-[32px]">
          {/* Transformer Card (XL) */}
          <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(244,132,54,0.30)]">
            <div className="bg-gradient-254 from-[rgba(255,151,79,1)] to-[rgba(221,97,6,1)] w-full py-4 rounded-t-md">
              <p className="text-white text-[28px] px-4 font-semibold">Transformer</p>
              <p className="text-white text-sm px-4 font-[500]">For Up to 6 Years of Experience</p>
            </div>
            <ul className="mt-6 px-4">
              <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Software Designing skills including LLD &amp; HLD</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Industry-relevant projects</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="transformer.html">
              <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
            </a>
          </div>

          {/* Evolve Card (XL) */}
          <div className="rounded-md shadow-md hover:shadow-[0px_2px_14px_0px_rgba(45,63,107,0.30)]">
            <div className="bg-gradient-254 from-[rgba(74,72,85,1)] to-[rgba(34,32,47,1)] w-full py-4 rounded-t-md">
              <p className="text-white text-[28px] px-4 font-semibold">Evolve</p>
              <p className="text-white text-sm px-4 font-[500]">For 7+ Years of Experience</p>
            </div>
            <ul className="mt-6 px-4">
              <li className="text-[16px] text-[#1F2C97]">What you will learn?</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Command over Problem-Solving in DS &amp; Algo</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Proficiency in System Design (LLD + HLD)</li>
              <li className="text-sm text-gray-700 mt-4"><img alt="" loading="lazy" width="6" height="8" decoding="async" className="mr-2" style={{ color: 'transparent' }} src="images/media-polygon_2.167a19a6.svg" />Leadership Skills &amp; Industry-Relevant Projects</li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="evolve.html">
              <button className="mt-14 md:mb-6 mb-6 md:px-28 sm:px-20 px-[100px] flex justify-center border-[0.5px] hover:border-[2px] border-solid border-[#202658] text-[#202658] font-normal hover:font-semibold py-3 mx-auto rounded-sm">Learn More</button>
            </a>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Section2;
