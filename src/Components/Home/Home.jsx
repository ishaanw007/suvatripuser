import React , {useEffect}from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from '../Fotter/Footer'
import Hotel from './Hotel'
import Newsletter from './Newsletter'
import PopularArea from './PopularArea'
import {MY_SECRET} from "../../config";
import axios from "axios";
import { useAppContext } from '../../context/store'

function Home() {
  

      const { actions} = useAppContext()



    useEffect(() => {
        const fetchSpecialData = async () => {
          try {
            const token = localStorage.getItem("token");
            console.log(token , "token inside home");
    
            const headers = {
              Authorization: token ? `Bearer ${token}}` : undefined,
              My_Secret: MY_SECRET,
            };
    
            const response = await axios.get(
              "http://localhost:8000/hotel/get-all-hotels",
              {
                headers,
              }
            );

            console.log(response.data.data , "response.data.data inside home");
    
            if (response.data.isHotelAccess) {
              // while user were not logged in
              actions.setHotel(response.data.data);
              actions.isLoading(false);
            } else {
                // when we have user logged in
                actions.setHotel(response.data.data);
                actions.isLoading(false);;
            }
          } catch (error) {
            console.error("Error fetching special data:", error);
            // Handle error as needed
          }
        };
    
        fetchSpecialData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <div className='w-full h-screen'>
            <div>
                <Navbar />
                <Header />
                <Section />
                <PopularArea />
                <Hotel />
                <Newsletter />
                <Footer />
            </div>



        </div>
    )
}

export default Home
