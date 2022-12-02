import React from 'react';
import data from '../data/popular';

import { IPopular } from './../types/IPopular';

export interface IShowContextData {
    shows: IPopular[];
}

export const showDefaultData: IShowContextData = {
    shows: data,
}

const ShowContext = React.createContext<IShowContextData>(showDefaultData);

export default ShowContext;

