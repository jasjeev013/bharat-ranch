import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useRecoilState,  useRecoilValueLoadable } from 'recoil';
import { categoriesState } from '../state/atoms/atoms';
import { fetchCategories } from '../state/selectors/selectors';

const Categories = () => {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const categoriesLoadable = useRecoilValueLoadable(fetchCategories);

    useEffect(() => {
        if (categoriesLoadable.state === 'hasValue') {
    
            setCategories(categoriesLoadable.contents);
        }
        
    }, [categoriesLoadable, setCategories]);

    if (categoriesLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (categoriesLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }


    return (
        <div className="container mt-5">
            
            <header className="text-center mb-5">
                <h1 className="display-4">Categories</h1>
            </header>
            <div className="row">
                {categories.length !== 0 && categories.map((category, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card  h-100 ">
                            <img
                                src={category.image}
                                className="card-img-top"
                                alt={category.name}
                                style={{ height: '200px', objectFit: 'cover', padding: '0.2rem', borderRadius: '' }}
                            />
                            <div className="card-body text-center">
                                <div className='d-flex justify-content-between'>

                                    <h5 className="card-title">{category.category}</h5>
                                    <p className="card-text">Count: {category.count}</p>
                                </div>
                                <br />
                                <br />
                                <div className="d-flex justify-content-end">

                                    <Link to={`/category/${category.category}`}  className="btn btn-primary ">
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
