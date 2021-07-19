import React from "react";
import './App.css'
import Cards from './Cards'
import Form from './Form'
import { useParams,
  Link, 
  Switch, 
  Route } 
  from 'react-router-dom'





const App = () => {


  return (
    <div className='container'>
      <nav>
      <h1>Lambda Eats</h1>
      <div className='navMenu'>
        <Route>
      <Link to='/'>Home</Link>
      <Link to='/help'>Help</Link>
      </Route>
      </div>
      </nav>
      <div className='mainImage'>
        <h2>Your favorite food, delivered while coding</h2>
        <Link to='order/'>Order Now!</Link>
      </div>

      <div className='toggle'>
      <Switch>
      <Route exact path='/'>
        <Link to='/'>Home</Link>
        </Route>
        <Route path='/order'>
        <Form />
        </Route>
      </Switch>
      </div>

      <h3 className='deliveryTitle'>Food Delivery in St. George</h3>

      <div className='bottomSection1'>
          <Cards 
        img={'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/story/mcd.jpg?itok=ZEHCgPo7'} 
        title={'McDonalds'} 
        price={'$'} 
        category={'American - Fast Food - Burgers and Fries'} 
        deliveryTime={'20-30 mins'} 
        deliveryPrice={'$3.99'} 
        />
      <Cards 
        img={'https://stories.starbucks.com/uploads/2019/03/SBX031919-Starbucks-New-Lids-5-e1553017232877-1440x700.jpg'} 
        title={'Starbucks'} 
        price={'$'} 
        category={'Cafe - Coffee'} 
        deliveryTime={'20-30 mins'} 
        deliveryPrice={'$5.99'} 
        />
      <Cards 
        img={'https://i0.wp.com/bloggingandliving.com/wp-content/uploads/2021/03/tropical-smoothie-cafe.jpg?resize=720%2C540&ssl=1'} 
        title={'Tropical Smoothie'} 
        price={'$$'} 
        category={'Cafe - Smoothie and Juice - Wraps and Salads'} 
        deliveryTime={'20-30 mins'} 
        deliveryPrice={'$4.99'} 
        />
      </div>

      <div className='bottomSection2'>
        <Cards 
        img={'https://media-cdn.tripadvisor.com/media/photo-s/1c/e5/00/14/cafe-rio-family-feast.jpg'} 
        title={'Cafe Rio'} 
        price={'$$'} 
        category={'Authentic Mexican - Burritos and Tacos'} 
        deliveryTime={'25-35 mins'} 
        deliveryPrice={'$5.99'} 
        />
        <Cards 
        img={'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2019/12/most%20ordered/nuggetsmealheader.jpg?h=960&w=1440&la=en'} 
        title={'Chick fil A'} 
        price={'$'} 
        category={'American - Chicken - Fast Food'} 
        deliveryTime={'20-30 mins'} 
        deliveryPrice={'$3.99'} 
        />
        <Cards 
        img={'https://img.texasmonthly.com/2021/05/bbq-low-abv-beers-1.jpg?auto=compress&crop=faces&fit=fit&fm=webp&h=0&ixlib=php-1.2.1&q=45&w=1300'} 
        title={'Liquor Store'} 
        price={'$$'} 
        category={'Spirits - Liquors - Beer'} 
        deliveryTime={'30-40 mins'} 
        deliveryPrice={'$1.99'} 
        />
      </div>
    </div>
  );
};
export default App;

const toggler = document.querySelectorAll('.toggle')

const clickOfTheButton = document.querySelectorAll('.mainImage');

clickOfTheButton.addEventListener('click', (event) => {
  toggler.removeClass('toggle');
})
