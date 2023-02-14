import React from 'react'

const Home = () => {
    return (
        <div className='max-w-1200 mx-auto'>
            <div className='flex flex-col justify-center items-center c'>
                <h1 className='mt-16 bg-500% leading-loose text-5xl font-bold tracking-widest bg-bgi-slide-color text-transparent bg-clip-text animate-flowtext'>Binance Gaming NFT</h1>
                <h3 className="mt-2 text-[22px] text-cl-white-light">The Largest Gaming NFT Trading Platform</h3>
            </div>
            <div className='w-full mt-10 rounded-md py-11 px-10 bg-cl-light-005 border-slate-400 border'>
                <ul className="grid grid-cols-4 gap-4">
                    <li className="flex items-center">
                        <div className="w-[68px] h-[68px] rounded-sm bg-cl-light-006 flex items-center justify-center mr-4">
                            <i className='bx bxs-dollar-circle text-white text-4xl' ></i>
                        </div>
                        <div className="h-[68px] flex flex-col justify-between">
                            <span className="text-white text-2xl font-bold">$ 1,056,444,530</span>
                            <span className="text-cl-gray-light text-lg">Total Volume</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-[68px] h-[68px] rounded-sm bg-cl-light-006 flex items-center justify-center mr-4">
                            <i className='bx bxs-leaf text-white text-4xl'></i>
                        </div>
                        <div className="h-[68px] flex flex-col justify-between">
                            <span className="text-white text-2xl font-bold">20</span>
                            <span className="text-cl-gray-light text-lg">IGO Project</span>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-[68px] h-[68px] rounded-sm bg-cl-light-006 flex items-center justify-center mr-4">
                            <i className='bx bxl-bitcoin text-white text-4xl'></i>
                        </div>
                        <div className="h-[68px] flex flex-col justify-between">
                            <span className="text-white text-2xl font-bold">$ 57,103,105</span>
                            <span className="text-cl-gray-light text-lg">Total Amount Staked</span>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <div className="w-[68px] h-[68px] rounded-sm bg-cl-light-006 flex items-center justify-center mr-4">
                            <i className='bx bxs-group text-white text-4xl'></i>
                        </div>
                        <div className="h-[68px] flex flex-col justify-between">
                            <span className="text-white text-2xl font-bold">304,894</span>
                            <span className="text-cl-gray-light text-lg">Total Participants</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home