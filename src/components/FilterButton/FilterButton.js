import React from 'react';

import { Link } from 'react-router-dom';
import { ADS_TAGS } from '../../constants';

export default function FilterButton({ filter, children }){
    return (
        <Link
            to={filter === ADS_TAGS.all ? '/ads' : `/ads/${filter}`}
        >
            {children}
        </Link>
    );
}