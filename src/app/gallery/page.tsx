"use client";
import React, { useState } from 'react';
import { Teeths } from '../components/Teeths1';
import Teeths2 from '../components/Teeths2';
import HeaderPage from '../components/HeaderPage';


const BeforeAfter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}

      <HeaderPage title='Before & After'/>
      

      {/* Smile Gallery Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-[95rem] mx-auto p-8 text-center">
          <Teeths />
        </div>
      </div>
      <Teeths2/>
    </div>
  );
};

export default BeforeAfter;
