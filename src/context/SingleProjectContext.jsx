import { useState, createContext, useContext } from 'react';
import { singleProjectData as singleProjectDataList } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
    const [singleProjectData, setSingleProjectData] = useState(singleProjectDataList);

    const findProjectById = (id) => {
        return singleProjectData.find(project => project.id === id);
    };

    return (
        <SingleProjectContext.Provider
            value={{ singleProjectData, setSingleProjectData, findProjectById }}
        >
            {children}
        </SingleProjectContext.Provider>
    );
};

export const useSingleProjectContext = () => useContext(SingleProjectContext);

export default SingleProjectContext;
