import React from 'react';
import { TEACHER_NAME, SCHOOL_NAME } from '../constants';
import { Code2, School } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-gray mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <School className="w-5 h-5 text-cyber-neonBlue" />
              {SCHOOL_NAME}
            </h3>
            <p className="text-gray-400 text-sm">
              서울특별시 성북구 용문중학교 게임 개발 동아리
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1">
            <p className="text-gray-300 font-mono text-sm flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyber-neonPink" />
              Created by 기술교사 <span className="text-cyber-neonPink font-bold">{TEACHER_NAME}</span>
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} {SCHOOL_NAME} Game Lab. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;