import React from 'react'

const EventRare = () => {
    return (
        <div className="max-w-1200 mx-auto mt-20">
            <h2 className="text-2.5xl text-cl-white-light font-bold">
                The EVEN Rarer HomeLand NFTs
            </h2>
            <div className='flex justify-between items-center'>
                <div className='w-[384px] h-[384px] relative'>
                    <div className="w-full h-full absolute bg-cl-circle-yellow rounded-[50%] blur-[50px]" ></div>
                    <img className='w-full h-full absolute' src='../../src/assets/image-1.png' alt="event-rare"></img>
                </div>
                <div className='w-[735px] text-white'>
                    <h3 className='text-2xl font-bold text-cl-white-light mb-3'>The EVEN Rarer HomeLand NFTs</h3>
                    <p className="text-slate-500 text-base mb-3">
                        In StarSharks: HomeLand, this NFT series on Binance NFT launchpad will have a
                        greater chance of getting a higher rarity HomeLand NFT. Rarity is divided into four levels,
                        each of which has a buff bonus that increases as rarity increases. Holders will benefit from the potential value growth of this collection, as well as a strong start at StarSharks: Homeland
                    </p>
                    <div className='flex w-full mt-8'>
                        <div className="basis-1/4">
                            <div className='w-full bg-[#4B77FC] relative h-1 mb-4'>
                                <div className="absolute rounded-[50%] w-6 h-6 text-white bg-[#4B77FC] -translate-y-1/2 top-1/2 flex items-center justify-center">
                                    1
                                </div>
                            </div>
                            <div className='text-[15px] text-cl-white-light font-semibold'>Preparation</div>
                            <div className="text-sm text-gray-300">2022-06-27<br />
                                00:00(UTC+0)</div>
                        </div>
                        <div className="basis-1/4">
                            <div className='w-full bg-[#8A5FED] relative h-1 mb-4'>
                                <div className="absolute rounded-[50%] w-6 h-6 text-white bg-[#8A5FED] -translate-y-1/2 top-1/2 flex items-center justify-center">
                                    2
                                </div>
                            </div>
                            <div className='text-[15px] text-cl-white-light font-semibold'>Subscription</div>
                            <div className="text-sm text-gray-300">2022-06-29<br />
                                06:00(UTC+0)</div>
                        </div>
                        <div className="basis-1/4">
                            <div className='w-full bg-[#AF5FD1] relative h-1 mb-4'>
                                <div className="absolute rounded-[50%] w-6 h-6 text-white bg-[#AF5FD1] -translate-y-1/2 top-1/2 flex items-center justify-center">
                                    3
                                </div>
                            </div>
                            <div className='text-[15px] text-cl-white-light font-semibold'>Caculation</div>
                            <div className="text-sm text-gray-300">2022-06-30<br />
                                09:00(UTC+0)</div>
                        </div>
                        <div className="basis-1/4">
                            <div className='w-full relative h-1 mb-4'>
                                <div className='bg-[#FCD535] shadow-[0px_0px_10px_rgb(252,213,53)] className="absolute rounded-[50%] w-6 h-6 text-white -translate-y-1/2 top-1/2 flex items-center justify-center text-center"'>
                                    <img src='../../src/assets/rocket.png' alt="rocket" className='rotate-[45deg] w-[60%] h-[60%]' ></img>
                                </div>
                            </div>
                            <div className='text-[15px] text-cl-white-light font-semibold'>Distribution</div>
                            <div className="text-sm text-gray-300">2022-06-30<br />
                                12:00(UTC+0)</div>
                        </div>
                    </div>
                    <div className="w-[613px] mt-8 py-4 px-8 bg-[url('../../src/assets/data-bg.png')] bg-no-repeat bg-center bg-100%">
                        <div className="flex w-full h-full items-center justify-between">
                            <div>
                                <div className="text-gray-300">Total Units Issued</div>
                                <div className="font-bold mt-1">
                                    9,000
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-300">Unit Sale Price</div>
                                <div className="font-bold mt-1">
                                    30 BUSD
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-300">Purchase Limit Per User</div>
                                <div className="font-bold mt-1">
                                    1 Ticket(s)
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='hover:bg-[length:200%_100%] hover:bg-bgi-linear-button-hover animate-flowbutton mt-8 rounded-3xl h-12 w-[200px] flex items-center justify-center font-bold text-[16px] bg-bgi-linear-button'>
                        More Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventRare