import React from 'react';
import { 
    getODSColor,
    getODSTitle,
    getODSBgColor,
    getODSDescription 
} from '@common/handleODS';

interface ODSCardProps {
  ods: number;
}

const ODSCard: React.FC<ODSCardProps> = ({ ods }) => {
  return (
    <div className={`flex ${getODSBgColor(ods)} items-center space-x-2 rounded`}>
        <div className="h-full w-full rounded-lg overflow-hidden flex justify-center items-center m-2">
            <div className={`w-12 h-12 ${getODSColor(ods)} rounded shadow-lg flex items-center justify-center text-white font-bold text-xl m-2`}>
                {ods}
            </div>
            <div className="flex-1 p-2 mx-0">
                <h3 className={`font-semibold text-md ${getODSBgColor(ods)} rounded-md`}>
                {getODSTitle(ods)}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                {getODSDescription(ods)}
                </p>
            </div>
        </div>
    </div>
  );
};

export default ODSCard;