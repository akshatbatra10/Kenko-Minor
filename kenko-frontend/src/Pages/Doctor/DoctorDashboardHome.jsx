import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

import Button from "../../components/Button";
import LineChart from "../../components/Charts/LineChart";
import SparkLine from "../../components/Charts/SparkLine";
import {
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  SparklineAreaData,
} from "../../data/dummy2";
import heart from "../../data/heart.jpg";
import docpost from "../../data/doc-post.jpg";

const Dashboard = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap justify-center'>
        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  '>
            <div className='flex justify-between drop-shadow-xl rounded-lg p-2'>
              <p className='font-semibold text-4xl'>
                Dr. Chaitanya Vishnu Bhatt
              </p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2  hover:drop-shadow-xl'>
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>MBBS, MD - Pulmonary</span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-5 flex-wrap justify-center'>
              <div className=' border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>cvb@xyz.com</span>
                  </p>
                  <p className='text-gray-500 mt-1'>email</p>
                </div>
                <div className='mt-8'>
                  <p className='text-3xl font-semibold'>+91-999999999</p>
                  <p className='text-gray-500 mt-1'>mobile</p>
                </div>
                <div className='mt-8'>
                  <p className='text-3xl font-semibold'>Mr. Adam Smith</p>
                  <p className='text-gray-500 mt-1'>Last Patient Name</p>
                </div>
                <div className='mt-8'>
                  <p className='text-3xl font-semibold'>P-1010</p>
                  <p className='text-gray-500 mt-1'>Last Patient Id</p>
                </div>
                <div className='mt-8'>
                  <p className='text-3xl font-semibold'>Lab Test S0E01</p>
                  <p className='text-gray-500 mt-1'>Awaiting Approval</p>
                </div>
                <div className='mt-10'>
                  <Button
                    color='white'
                    text='Go to Report'
                    borderRadius='10px'
                  />
                </div>
              </div>
              <div className='drop-shadow-md rounded-lg'>
                <img
                  src={docpost}
                  className='drop-shadow-md rounded-lg'
                  style={{ height: "550px", width: "350px" }}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div>
            <div className=' rounded-2xl md:w-400 p-4 m-3 bg-hero-pattern2 bg-fixed h-full align-middle'>
              <div className='justify-between items-center align-middle'>
                <p className='font-extrabold text-white text-5xl drop-shadow-[0_6.0px_6.0px_rgba(0,0,0,0.8)] mt-10'>
                  Welcome to the new Kenko Dashboard
                </p>
                <p className='font-semibold text-white text-3xl drop-shadow-[0_6.0px_6.0px_rgba(0,0,0,0.8)] mt-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sit amet tristique libero.{" "}
                </p>
              </div>
            </div>

            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10'>
              <div>
                <p className='text-2xl font-semibold '>$43,246</p>
                <p className='text-gray-400'>Yearly sales</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Weekly Stats</p>
            <button
              type='button'
              className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>

          <div className='mt-10 '>
            {weeklyStats.map((item) => (
              <div
                key={item.title}
                className='flex justify-between mt-4 w-full'>
                <div className='flex gap-4'>
                  <button
                    type='button'
                    style={{ background: item.iconBg }}
                    className='text-2xl hover:drop-shadow-xl text-white rounded-full p-3'>
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor} font-semibold`}>
                  {item.amount}
                </p>
              </div>
            ))}
            <div className='mt-4 drop-shadow-md rounded-md'>
              <SparkLine
                //currentColor={}
                id='area-sparkLine'
                height='220px'
                type='Area'
                data={SparklineAreaData}
                width='320'
                color='rgb(242, 252, 253)'
                className='drop-shadow-md rounded-md'
              />
            </div>
          </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Daily Meeting</p>
            <button
              type='button'
              className='text-xl font-semibold text-gray-400'>
              <IoIosMore />
            </button>
          </div>
          <p className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10'>
            26 DEC, 2022
          </p>

          <div className='flex gap-4 border-b-1 border-color mt-6'>
            {medicalproBranding.data.map((item) => (
              <div
                key={item.title}
                className='border-r-1 border-color pr-4 pb-2'>
                <p className='text-xs text-gray-400'>{item.title}</p>
                <p className='text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'>Teams</p>

            <div className='flex gap-4'>
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className='cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs'>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'>Leaders</p>
            <div className='flex gap-4'>
              {medicalproBranding.leaders.map((item, index) => (
                <img
                  key={index}
                  className='rounded-full w-8 h-8'
                  src={item.image}
                  alt=''
                />
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button
                color='white'
                //bgColor={currentColor}
                text='Add'
                borderRadius='10px'
              />
            </div>

            <p className='text-gray-400 text-sm'>36 Recent Memos</p>
          </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Daily Journal</p>
            <button
              type='button'
              className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='mt-10'>
            <img
              className='md:w-96 h-50 drop-shadow-lg rounded-md'
              src={heart}
              alt=''
            />
            <div className='mt-8'>
              <p className='font-semibold text-lg'>
                Research found new details about heart transplant..
              </p>
              <p className='text-gray-400 '>By Atul Chauhan</p>
              <p className='mt-2 text-sm text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sit amet tristique libero.
              </p>
              <div className='mt-3'>
                <Button
                  color='white'
                  //bgColor={currentColor}
                  text='Read More'
                  borderRadius='10px'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-xl font-semibold'>Recent Activity</p>
            {/* {<DropDown currentMode={currentMode} />} */}
          </div>
          <div className='mt-10 w-72 md:w-400'>
            {recentTransactions.map((item) => (
              <div key={item.id} className='flex justify-between mt-4'>
                <div className='flex gap-4'>
                  <button
                    type='button'
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'>
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <p className='text-gray-400 text-sm'>36 recent changes</p>
          </div>
        </div>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760'>
          <div className='flex justify-between items-center gap-2 mb-10'>
            <p className='text-xl font-semibold'>
              Treatment Overview - Mr.Adam Scott
            </p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className='md:w-full overflow-auto'>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
