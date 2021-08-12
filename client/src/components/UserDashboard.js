/* import React from 'react';
import Header from "../components/Client/Header/Header" */


import React, {useEffect} from 'react';
//components
/* import AdminHeader from './AdminHeader'; */
import UserBody from './UserBody';
//redux
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';
import Contact from './Client/Contact/Contact'
import Progress from './Client/Progress/Progress'
import CourseContentFooter from './Client/CourseContentFooter/CourseContentFooter'
/* import CourseContent from './Client/CourseContent/CourseContent' */

const UserDashboard = () => {

                const dispatch = useDispatch();
                useEffect(() => {
                        dispatch(getCategories());
                }, [dispatch]);
                useEffect(() => {
                        dispatch(getProducts());
                }, [dispatch]);
        return(
        <section>
                <Progress />
                {/* <AdminHeader /> */}
                <UserBody />
                {/* <CourseContent /> */}
                {/* <CourseContentFooter /> */}
                <Contact />
            </section>
            );           
};

export default UserDashboard;
/* const UserDashboard = () => {

return (
    <Header />
)
}

export default UserDashboard; */