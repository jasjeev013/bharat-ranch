import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil';
import { categoryCommoditiesState, categoryState} from '../state/atoms/atoms';
import { fetchCategory } from '../state/selectors/selectors';
import { useParams } from 'react-router-dom';
import Commodity from './Commodity';

const Category = () => {
    const params = useParams();
    const category = useRecoilValue(categoryState);
    
    const [categoryCommodities, setCategoryCommodities] = useRecoilState(categoryCommoditiesState);
    const [commoditiesLoadable, setCommoditiesLoadable] = useRecoilStateLoadable(fetchCategory);
    






    useEffect(() => {
        setCommoditiesLoadable(params.category);
        if (commoditiesLoadable.state === 'hasValue') {
            setCategoryCommodities(commoditiesLoadable.contents);
        }
        // eslint-disable-next-line
    }, [commoditiesLoadable]);

    if (commoditiesLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (commoditiesLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }



    

    return (
        <div className="container mt-4">

            <h2>Category: {category}</h2>
            <div className="list-group">
                {categoryCommodities.length !== 0 && categoryCommodities.map((commodity, index) => (
                    <Commodity commodity={commodity} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Category;
