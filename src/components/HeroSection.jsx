import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center pb-20 bg-black">
      <div className="flex overflow-hidden relative flex-col px-10 pt-7 pb-20 w-full min-h-[906px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f4ffe05698ae6184f8b2594cc3c8611883f004e772fc0fb2990084fc1a9cb11?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between w-full text-base max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center my-auto text-white whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d253aa8896e336b8e106f0c18931591032a50c69d8cfdc7b1305a30d48760?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
              className="shrink-0 self-stretch max-w-full aspect-[3.7] w-[136px]"
            />
            <a href="#" className="self-stretch my-auto font-medium">
              Products
            </a>
            <a href="#" className="self-stretch my-auto">
              Features
            </a>
            <a href="#" className="self-stretch my-auto">
              Pricing
            </a>
            <a href="#" className="self-stretch my-auto">
              Support
            </a>
          </div>
          <div
            href="#"
            className="justify-center px-4 py-3 text-right text-white border border-cyan-300 border-solid leading-[162.5%] rounded-[60px] max-md:px-5"
          >
            Start free trial
          </div>
        </div>
        <div className="relative mt-24 mb-4 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow mt-8 max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Concerning Customers with their Price{" "}
                </div>
                <div className="mt-12 text-lg leading-7 text-zinc-400 max-md:mt-10 max-md:max-w-full">
                  The platform provides the facility to the user to Negotiate
                  the price of a product with their choice and comfort.{" "}
                </div>
                <div className="flex gap-3.5 py-2 pr-2 pl-4 mt-20 w-full text-sm leading-5 border border-cyan-300 border-solid rounded-[60px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb6e799352432f84d7353f02c5fa9435ed382ede459b4eee634f0781b32b841a?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
                    className="shrink-0  aspect-square w-[18px]"
                  />
                  <textarea>
                    type="text" className="flex flex-auto bg-[black]
                    border-[black] text-zinc-500" placeholder="Try your better
                    offer and service"
                  </textarea>
                  {/* </div> */}
                  <div className="justify-center p-4 font-semibold text-right uppercase bg-white rounded-[60px] text-zinc-900">
                    Open to give offer
                  </div>
                </div>
                <div className="mt-16 text-lg leading-8 text-white max-md:mt-10 max-md:max-w-full">
                  Trusted by 50+ users
                </div>
                <div className="flex gap-2 self-start mt-5 text-base leading-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5591de2b65313b1413b1c180d304a9ef5046d9d327342260a3daa1af9a55c3e?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
                    className="shrink-0 max-w-full aspect-[5] w-[118px]"
                  />
                  <div className="text-white">4.1/5</div>
                  <div className="flex-auto text-zinc-500">(14 Reviews)</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="relative max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col items-start pt-2.5 pr-20 pb-20 pl-5 aspect-[0.78] max-md:pr-5 max-md:mt-2.5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ddeea090878e0b93b9fcd2672b07906a452c22fbe2439767cfc95e73a4e9bc0?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="relative text-lg leading-8 text-white">
                        Guy Hawkins
                      </div>
                      <div className="relative mt-3.5 text-sm leading-5 text-zinc-400">
                        Regular Customer
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col grow items-center mt-72 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e8b1472a3701715f48f14e88653429a0cfbed1adb3de83447e0f0b074e1b60?apiKey=62b2285ae91949d9b043934f2d3db0e1&"
                        className="self-stretch w-full aspect-[1.08]"
                      />
                      <div className="mt-6 text-lg leading-8 text-white">
                        Leslie{" "}
                      </div>
                      <div className="mt-5 text-sm leading-5 text-zinc-400">
                        The Negotiation Bot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection