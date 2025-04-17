import React from 'react';

const AgeCalculator = () => {
    const birthDate = new Date(2002, 0, 2);

    const calculateAge = () => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    return <>{calculateAge()}</>;
};

export default AgeCalculator;