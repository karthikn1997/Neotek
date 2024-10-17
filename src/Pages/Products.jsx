import React, { useEffect } from 'react'
import ProductBg from "../assets/products.jpg"
import SX2 from "../assets/sx-2.png"
import SX3 from "../assets/sx-3.png"
import SX4 from "../assets/sx-4.png"
import SX5 from "../assets/sx-5.png"
import SX6 from "../assets/sx-6.png"
import SX7 from "../assets/sx-7.png"
import SX8 from "../assets/sx-8.png"
import SX10 from "../assets/sx-10.png"
import SX12 from "../assets/sx-12.png"


const Products = () => {

  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      image: SX2,
      Model: "SX 2",
      ChuteNo: "128",
      ProductOutput: "1.0 - 2.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "510",
      MinimumIdentification: "0.03",
      Power: "1.5",
      PowerSupply: "Ac 220/50",
      Dimension: "1403*1829*1887"
    },
    {
      image: SX3,
      Model: "SX 3",
      ChuteNo: "192",
      ProductOutput: "2.0 - 3.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "690",
      MinimumIdentification: "0.03",
      Power: "2.2",
      PowerSupply: "Ac 220/50",
      Dimension: "1718*1829*1887"
    },
    {
      image: SX4,
      Model: "SX 4",
      ChuteNo: "256",
      ProductOutput: "3.0 - 4.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "870",
      MinimumIdentification: "0.03",
      Power: "2.9",
      PowerSupply: "Ac 220/50",
      Dimension: "2033*1829*1887"
    },
    {
      image: SX5,
      Model: "SX 5",
      ChuteNo: "320",
      ProductOutput: "3.0 - 5.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "1050",
      MinimumIdentification: "0.03",
      Power: "3.7",
      PowerSupply: "Ac 220/50",
      Dimension: "2348*1829*1887"
    },
    {
      image: SX6,
      Model: "SX 6",
      ChuteNo: "384",
      ProductOutput: "3.5 - 6.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "1230",
      MinimumIdentification: "0.03",
      Power: "4.4",
      PowerSupply: "Ac 220/50",
      Dimension: "2663*1829*1887"
    },
    {
      image: SX7,
      Model: "SX 7",
      ChuteNo: "448",
      ProductOutput: "4.0 - 7.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "1410",
      MinimumIdentification: "0.03",
      Power: "5.2",
      PowerSupply: "Ac 220/50",
      Dimension: "2978*1829*1887"
    },
    {
      image: SX8,
      Model: "SX 8",
      ChuteNo: "512",
      ProductOutput: "4.5 - 8.0",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "1590",
      MinimumIdentification: "0.03",
      Power: "5.9",
      PowerSupply: "Ac 220/50",
      Dimension: "3293*1829*1887"
    },
    {
      image: SX10,
      Model: "SX 10",
      ChuteNo: "640",
      ProductOutput: "5 - 10",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "1950",
      MinimumIdentification: "0.03",
      Power: "7.3",
      PowerSupply: "Ac 220/50",
      Dimension: "3933*1829*1887"
    },
    {
      image: SX12,
      Model: "SX 12",
      ChuteNo: "768",
      ProductOutput: "6 - 12",
      SortingAccuracy: "≥99.99%",
      OptimizedCarryover: "≥50:1",
      Weight: "2310",
      MinimumIdentification: "0.03",
      Power: "8.8",
      PowerSupply: "Ac 220/50",
      Dimension: "4563*1829*1887"
    },
  ]

  return (
    <div className='bg-white'>
      {/* Header section */}
      <div className='relative w-full h-[20vh] md:h-[45vh]'>
        <img src={ProductBg} className='w-full h-[20vh] md:h-[45vh] object-cover' alt="Products Background" />
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 border-b-4 border-blue-500'></div>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center p-2 sm:p-4'>
          <div className='w-full h-full flex justify-center items-center border-2 border-blue-600 border-opacity-80 p-4 box-border gap-2 sm:gap-4'>
            <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest pb-1 sm:pb-3' style={{ textShadow: "2px 2px 0px black" }}>
              Products
            </h1>
          </div>
        </div>
      </div>


      {/* Products section */}
      <div className='w-full sm:w-[90%] mx-auto py-8 px-4 '>
        <div className='w-full text-center font-bold text-2xl md:text-4xl mb-4 py-4 sm:py-10 tracking-wider '>
          <h1 className='text-border-bottom pb-2 sm:pb-3 text-blue-500' style={{ textShadow: "1px 1px 1px black" }}>Explore Our Products</h1>
        </div>
        {/* Grid to display two products per row */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {products.map((product, index) => (
            <div key={index} className='bg-white shadow-lg rounded-md overflow-hidden'>
              {/* Product title as a card header */}
              <div className='bg-gradient-to-r from-blue-800 via-black to-blue-800 text-orange-400 text-center py-2 border-b-2 border-orange-400'>
                <h2 className='text-2xl font-semibold' style={{ textShadow: "1px 1px 0px gray" }}>{product.Model}</h2>
              </div>

              {/* Product content */}
              <div className='p-0 flex flex-col items-center'>
                {/* Product image with dark background and full width */}
                <div className='bg-gradient-to-t from-gray-900 via-[#005AB3] to-white w-full flex justify-center p-6 mb-6 border-2 border-orange-400'>
                  <img
                    src={product.image}
                    alt={product.Model}
                    className='w-80 h-80 object-contain transition-transform duration-300 ease-in-out hover:scale-105' // Increased image size
                  />
                </div>

                {/* Product features */}
                <div className='px-2 sm:px-4 pb-6 w-full'>
                  <table className='table-auto w-full text-left border-collapse text-sm sm:text-[15px] '>
                    <tbody>
                      {[
                        { label: 'Channels:', value: product.ChuteNo },
                        { label: 'Product Output:', value: `${product.ProductOutput} tons/h` },
                        { label: 'Sorting Accuracy:', value: product.SortingAccuracy },
                        { label: 'Optimized Carryover:', value: product.OptimizedCarryover },
                        { label: 'Weight:', value: `${product.Weight} kg` },
                        { label: 'Minimum Identification:', value: `${product.MinimumIdentification} mm` },
                        { label: 'Power:', value: `${product.Power} kW` },
                        { label: 'Power Supply:', value: product.PowerSupply },
                        { label: 'Dimension:', value: `${product.Dimension} mm` },
                      ].map((feature, i) => (
                        <tr key={i} className={`${i % 2 === 0 ? 'bg-slate-200' : 'bg-white'}`}>
                          <th className='font-semibold pr-4 py-2 px-3'>{feature.label}</th> {/* Adjusted padding for space */}
                          <td className='py-2 px-3'>{feature.value}</td> {/* Adjusted padding for space */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Products