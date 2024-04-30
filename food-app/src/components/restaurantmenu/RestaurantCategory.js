

import CategoryListItems from './CategoryListItems'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  return (
    <div>
      {/* accordian header */}
      <div className='bg-gray-100 rounded-lg mx-auto my-4 w-6/12 px-2 py-4 cursor-pointer shadow-md' onClick={() => { setShowIndex() }} >
        <div className='flex justify-between ' >
          <h3 className='font-bold '>{data.title}({data.itemCards.length})</h3>
          <p className='mr-2'>⬇️</p>
        </div>
        {/* accordian body */}
        <div className='mt-2'>
          {showItems && <CategoryListItems listItems={data.itemCards} />
          }

        </div>
      </div>

    </div>
  )
}

export default RestaurantCategory
