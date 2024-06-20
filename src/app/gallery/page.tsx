"use client";
import React, { useState } from 'react';
import { Teeths } from '../components/Teeths1';
import Teeths2 from '../components/Teeths2';


const BeforeAfter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-52 w-full">
        <h1 className="text-5xl font-bold text-center">Before & After</h1>
      </div>

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
